#!/bin/bash
# =======================================================
# Auto Apache + Certbot VirtualHost Setup Script
#
# Usage:
#   sudo setup-site.sh <domain.com> <project/path> [options]
#
# Example (Single Domain):
#   sudo setup-site.sh konkmeng.site /var/www/html/konkmeng/public
#
# Example (Domain + Admin Subdomain):
#   sudo setup-site.sh konkmeng.site /var/www/html/konkmeng/public -a
#
# Options:
#   -a, --admin : Also setup 'www.domain.com' and 'admin.domain.com'
# =======================================================

# === Configuration Variables ===
# Initialize variables to allow for optional argument parsing later
DOMAIN=""
PROJECT_PATH=""
ADMIN_FLAG=0

# === Color Codes ===
GREEN="\e[32m"
RED="\e[31m"
YELLOW="\e[33m"
BLUE="\e[34m"
RESET="\e[0m"

# === Helper Function ===
function info() { echo -e "${BLUE}[INFO]${RESET} $1"; }
function success() { echo -e "${GREEN}[SUCCESS]${RESET} $1"; }
function warn() { echo -e "${YELLOW}[WARNING]${RESET} $1"; }
function error() { echo -e "${RED}[ERROR]${RESET} $1"; }

# === Argument Parsing ===
# Parse positional arguments
if [ -n "$1" ]; then
    DOMAIN=$1
fi
if [ -n "$2" ]; then
    PROJECT_PATH=$2
fi

# Parse optional arguments
for arg in "$@"; do
    case $arg in
        -a|--admin)
            ADMIN_FLAG=1
            shift # Remove argument from list
            ;;
    esac
done

# === Derived Variables ===
# These must be set AFTER argument parsing
if [ -z "$DOMAIN" ] || [ -z "$PROJECT_PATH" ]; then
    error "Usage: sudo $0 <yourdomain.com> <project/path> [-a|--admin]"
    exit 1
fi

ADMIN_DOMAIN="admin.$DOMAIN"
WWW_DOMAIN="www.$DOMAIN"
CONF_FILE="/etc/apache2/sites-available/$DOMAIN.conf"
EMAIL="webmaster@$DOMAIN"

# Build ServerAlias list and Certbot domain list based on flag
SERVER_ALIASES=""
CERTBOT_DOMAINS="-d $DOMAIN"

if [ "$ADMIN_FLAG" -eq 1 ]; then
    SERVER_ALIASES="$WWW_DOMAIN $ADMIN_DOMAIN"
    CERTBOT_DOMAINS="$CERTBOT_DOMAINS -d $WWW_DOMAIN -d $ADMIN_DOMAIN"
fi

# === Get VPS IP ===
VPS_IP=$(curl -s ifconfig.me)

# =======================================================
# === START SETUP LOGIC ===
# =======================================================

# === Check Dependencies ===
info "Checking Apache & Certbot installation..."
if ! command -v apache2 &> /dev/null; then
    warn "Apache not found. Installing..."
    apt install apache2 -y
    a2enmod rewrite ssl
fi

if ! command -v certbot &> /dev/null; then
    warn "Certbot not found. Installing..."
    apt install certbot python3-certbot-apache -y
fi

# -------------------------------------------------------

# === Create Project Directory ===
if [ ! -d "$PROJECT_PATH" ]; then
    info "Creating project directory at $PROJECT_PATH"
    mkdir -p "$PROJECT_PATH"
fi

chown -R www-data:www-data "$PROJECT_PATH"
chmod -R 755 "$PROJECT_PATH"

# -------------------------------------------------------

# === DNS Check ===
info "Checking DNS records for $DOMAIN ..."
DOMAIN_IP=$(dig +short A $DOMAIN)

if [ "$DOMAIN_IP" != "$VPS_IP" ] || [ -z "$DOMAIN_IP" ]; then
    warn "The A record for $DOMAIN does not point to this server ($VPS_IP)."
    warn "Current A record: ${DOMAIN_IP:-Not Found}"
fi

if [ "$ADMIN_FLAG" -eq 1 ]; then
    ADMIN_IP=$(dig +short A $ADMIN_DOMAIN)
    if [ "$ADMIN_IP" != "$VPS_IP" ] || [ -z "$ADMIN_IP" ]; then
        warn "The A record for $ADMIN_DOMAIN does not point to this server ($VPS_IP)."
        warn "Current A record: ${ADMIN_IP:-Not Found}"
    fi
fi

# -------------------------------------------------------

# === Create Apache VirtualHost ===
info "Creating Apache configuration for $DOMAIN. Aliases: $SERVER_ALIASES"
cat > "$CONF_FILE" <<EOF
<VirtualHost *:80>
    ServerAdmin $EMAIL
    ServerName $DOMAIN
    ServerAlias $SERVER_ALIASES

    DocumentRoot $PROJECT_PATH

    <Directory $PROJECT_PATH>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog \${APACHE_LOG_DIR}/${DOMAIN}_error.log
    CustomLog \${APACHE_LOG_DIR}/${DOMAIN}_access.log combined
</VirtualHost>
EOF

# -------------------------------------------------------

# === Enable Site & Reload Apache ===
a2ensite "$DOMAIN.conf"
systemctl reload apache2

# -------------------------------------------------------

# === Run Certbot ===
info "Requesting SSL certificate for domain(s): $CERTBOT_DOMAINS"
# Run Certbot using the dynamically built domain list
certbot --apache $CERTBOT_DOMAINS \
--non-interactive --agree-tos -m "$EMAIL" --redirect || {
    error "Certbot failed. Check DNS or Apache config."
    exit 1
}

# -------------------------------------------------------

# === Reload Apache ===
systemctl reload apache2

# -------------------------------------------------------

# === Done ===
success "Setup complete!"
echo -e "\n${GREEN}Your site(s) are live:${RESET}"
echo -e "  🌐 https://$DOMAIN"
if [ "$ADMIN_FLAG" -eq 1 ]; then
    echo -e "  🔐 https://$ADMIN_DOMAIN"
fi
echo -e "\nProject root: ${YELLOW}$PROJECT_PATH${RESET}"
echo -e "Apache config: ${YELLOW}$CONF_FILE${RESET}\n"