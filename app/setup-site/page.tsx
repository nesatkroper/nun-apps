"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download, Terminal, Shield, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"

export default function SetupSitePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Apps</span>
          </Link>
          <div className="text-2xl font-bold tracking-tight">Nun Apps</div>
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button asChild>
              <a href="/assets/bash/setup-site.sh" download>
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>
          </div>
          <div className="md:hidden">
            <MobileNav currentPath="/setup-site" />
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-32 h-32 rounded-3xl flex items-center justify-center">
                <Image
                  src='/assets/images/settings.png'
                  alt="ip-check"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">Setup Site</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Automate your Apache + Certbot VirtualHost configuration with a single command. Deploy secure websites
                with SSL certificates in seconds, not hours.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild className="rounded-full">
                  <a href="/assets/bash/setup-site.sh" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Script
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full bg-transparent">
                  <Link href="#installation">Quick Start</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-border/50">
                <Image
                  src="/assets/bash/image.png"
                  alt="Server Setup Terminal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="installation" className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Quick Installation</h2>
            <p className="text-muted-foreground">Run this single command to install and use the script</p>
          </div>

          <Card className="p-6 md:p-8 border-border/50 bg-card">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-green-500" />
                  One-Line Installation
                </h3>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-border/50">
                  <code className="text-foreground">
                    sudo curl -fsSL https://app.konkmeng.site/assets/bash/setup-site.sh -o /usr/local/bin/setup-site
                    sudo chmod +x /usr/local/bin/setup-site
                  </code>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  This command downloads and executes the setup script directly. Make sure you have sudo privileges.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="text-lg font-semibold mb-3">Or Download and Run Manually</h3>
                <div className="space-y-3">
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-border/50">
                    <code className="text-foreground">
                      wget https://app.konkmeng.site/assets/bash/setup-site.sh
                      <br />
                      chmod +x setup-site.sh
                      <br />
                      sudo mv setup-site.sh /usr/local/bin/setup-site
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Usage Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How to Use</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple command-line interface for setting up Apache VirtualHosts with automatic SSL certificates
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6 md:p-8 border-border/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Basic Usage
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Setup a single domain:</p>
                  <div className="bg-muted/50 rounded-lg p-3 font-mono text-sm overflow-x-auto border border-border/50">
                    <code className="text-foreground">sudo setup-site konkmeng.site /var/www/html/konkmeng/public</code>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This command creates an Apache VirtualHost for your domain, configures the document root, and
                  automatically obtains an SSL certificate from Let's Encrypt using Certbot.
                </p>
              </div>
            </Card>

            <Card className="p-6 md:p-8 border-border/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Advanced Usage
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Setup with www and admin subdomains:</p>
                  <div className="bg-muted/50 rounded-lg p-3 font-mono text-sm overflow-x-auto border border-border/50">
                    <code className="text-foreground">
                      sudo setup-site konkmeng.site /var/www/html/konkmeng/public -a
                    </code>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The <code className="bg-muted px-1 py-0.5 rounded text-xs">-a</code> or{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-xs">--admin</code> flag automatically configures
                  www.domain.com and admin.domain.com with SSL certificates.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-6 md:p-8 border-border/50 mt-8">
            <h3 className="text-xl font-semibold mb-4">Command Syntax</h3>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-border/50 mb-4">
              <code className="text-foreground">sudo setup-site &lt;domain.com&gt; &lt;project/path&gt; [options]</code>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="font-mono text-sm bg-muted px-2 py-1 rounded h-fit">domain.com</div>
                <p className="text-sm text-muted-foreground">Your domain name (e.g., example.com)</p>
              </div>
              <div className="flex gap-3">
                <div className="font-mono text-sm bg-muted px-2 py-1 rounded h-fit">project/path</div>
                <p className="text-sm text-muted-foreground">Absolute path to your website's public directory</p>
              </div>
              <div className="flex gap-3">
                <div className="font-mono text-sm bg-muted px-2 py-1 rounded h-fit">-a, --admin</div>
                <p className="text-sm text-muted-foreground">
                  Optional: Also setup www.domain.com and admin.domain.com
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to deploy production-ready websites quickly and securely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-4 border-border/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deploy your website in seconds with automated configuration. No manual Apache config editing required.
              </p>
            </Card>

            <Card className="p-6 space-y-4 border-border/50">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-lg font-semibold">Auto SSL</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Automatic SSL certificate generation and installation using Let's Encrypt and Certbot.
              </p>
            </Card>

            <Card className="p-6 space-y-4 border-border/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Terminal className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold">Simple CLI</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Intuitive command-line interface with clear options. No complex configuration files to manage.
              </p>
            </Card>

            <Card className="p-6 space-y-4 border-border/50">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-lg font-semibold">Multi-Domain</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Support for multiple domains and subdomains with a single command using the --admin flag.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 border-border/50">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Linux Server</p>
                  <p className="text-sm text-muted-foreground">Ubuntu, Debian, or similar distributions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Apache Web Server</p>
                  <p className="text-sm text-muted-foreground">Apache2 must be installed and running</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Certbot</p>
                  <p className="text-sm text-muted-foreground">
                    For automatic SSL certificate generation (python3-certbot-apache)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Root Access</p>
                  <p className="text-sm text-muted-foreground">Sudo privileges required for system configuration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Domain DNS</p>
                  <p className="text-sm text-muted-foreground">Domain must be pointed to your server's IP address</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Download CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Ready to Automate Your Server Setup?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Download the setup-site script and start deploying secure websites in seconds. Free and open source.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" asChild className="rounded-full">
              <a href="/assets/bash/setup-site.sh" download>
                <Download className="mr-2 h-5 w-5" />
                Download Script
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full bg-transparent">
              <Link href="/contact">
                <Terminal className="mr-2 h-5 w-5" />
                Get Support
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">Free to use. Open source. No registration required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-xl font-bold mb-4">Nun Apps</div>
            <p className="text-sm text-muted-foreground mb-6">
              Building innovative solutions for developers and system administrators.
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                All Apps
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-border/40 text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Nun Apps. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
