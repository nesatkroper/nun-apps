import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AppCard } from "@/components/app-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShieldHalved, faRocket, faDatabase, faLock, faUserCircle } from "@fortawesome/free-solid-svg-icons"

export default function HomePage() {
  const apps = [
    {
      name: "Nun Check",
      description:
        "Verify and validate your data with precision. Nun Check ensures accuracy and reliability in every scan.",
      imageUrl: "/assets/images/ip-check.png",
      downloadUrl: "/assets/deb/nun-info_1.0.deb",
      detailUrl: "/nun-check",
    },
    {
      name: "Nun Picker",
      description:
        "Select and organize with ease. Nun Picker streamlines your choices with an intuitive interface.",
      imageUrl: "/assets/images/color-picker.png",
      downloadUrl: "/assets/deb/nun-picker_1.0.deb",
      detailUrl: "/nun-picker",
    },
    {
      name: "Nun Scanner",
      description:
        "Scan documents and QR codes instantly. Nun Scanner brings powerful scanning capabilities to your fingertips.",
      imageUrl: "/assets/images/scan.png",
      downloadUrl: "/assets/deb/nun-scan_1.0.deb",
      detailUrl: "/nun-scan",
    },
    {
      name: "Nun Speed",
      description:
        "Test and optimize your connection speed. Nun Speed delivers accurate network performance metrics.",
      imageUrl: "/assets/images/speed.png",
      downloadUrl: "/assets/deb/nun-speed_1.0.deb",
      detailUrl: "/nun-speed",
    },
    {
      name: "Nun Scrape",
      description:
        "Extract and collect data efficiently. Nun Scrape automates your data gathering workflows.",
      imageUrl: "/assets/images/crawling.png",
      downloadUrl: "/assets/deb/nun-scrape_1.0.deb",
      detailUrl: "/nun-scrape",
    },
    {
      name: "Nun Remove",
      description:
        "Keep your data synchronized across devices. Nun Sync ensures seamless connectivity and backup.",
      imageUrl: "/assets/images/programming.png",
      downloadUrl: "/assets/deb/nun-remove_1.0.deb",
      detailUrl: "/nun-remove",
    },
    {
      name: "Setup Site",
      description:
        "Automate Apache + Certbot VirtualHost setup on Linux. One command to configure your web server with SSL.",
      imageUrl: "/assets/images/settings.png",
      downloadUrl: "/assets/bash/setup-site.sh",
      detailUrl: "/setup-site",
    },
  ];

  return (
    <div className='min-h-screen bg-background'>
      <header className='border-b border-border/40'>
        <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex gap-2 items-center'>
            <Image
              src='/assets/images/cambodia.png'
              alt='Nun Apps Logo'
              width={40}
              height={40}
            />
            <div className='text-2xl font-bold tracking-tight'>
              <span className='text-blue-500'>Nun</span> Apps
            </div>
          </div>
          <MobileNav currentPath='/' />
          <div className='hidden md:flex items-center gap-6'>
            <Link
              href='/#apps'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
              Apps
            </Link>
            <Link
              href='/about'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
              About
            </Link>
            <Link
              href='/contact'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section className='container mx-auto px-4 py-20 md:py-32'>
        <div className='max-w-4xl mx-auto text-center space-y-6'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance'>
            Your Suite of Nun Apps
          </h1>
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance'>
            Enhance your digital life with our collection of powerful, intuitive
            mobile applications designed for modern productivity.
          </p>
          <div className='pt-4'>
            <Button size='lg' asChild className='rounded-full'>
              <Link href='#apps'>Explore Apps</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id='apps' className='container mx-auto px-4 py-16 md:py-24'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>
              Our Applications
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Discover our suite of carefully crafted apps, each designed to
              solve specific challenges and enhance your workflow.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {apps.map((app) => (
              <AppCard key={app.name} {...app} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <div className="mt-16 p-8">
        <h2 className="text-center text-3xl font-bold text-foreground">Other Products</h2>
        <p className="text-center mt-2 mb-10 text-muted-foreground">
          Explore more tools and apps I’ve built.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <a
            href="https://app.konkmeng.site"
            target="_blank"
            className="hidden rounded-lg border border-border bg-card p-6 transition hover:shadow-md hover:-translate-y-[2px]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <FontAwesomeIcon icon={faShieldHalved} className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">Nun App</h3>
            <p className="mt-2 text-muted-foreground">
              A complete management app for your workflow.
            </p>
            <div className="mt-4 text-primary font-medium">app.konkmeng.site →</div>
          </a>

          <a
            href="https://ai.konkmeng.site"
            target="_blank"
            className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md hover:-translate-y-[2px]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <FontAwesomeIcon icon={faRocket} className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">NunAI</h3>
            <p className="mt-2 text-muted-foreground">
              Smart AI assistant for content creation and automation.
            </p>
            <div className="mt-4 text-primary font-medium">ai.konkmeng.site →</div>
          </a>

          {/* Nun Tools */}
          <a
            href="https://tool.konkmeng.site"
            target="_blank"
            className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md hover:-translate-y-[2px]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <FontAwesomeIcon icon={faDatabase} className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">Nun Tools</h3>
            <p className="mt-2 text-muted-foreground">
              A collection of utility tools for daily tasks.
            </p>
            <div className="mt-4 text-primary font-medium">tool.konkmeng.site →</div>
          </a>

          {/* Portfolio */}
          <a
            href="https://nun.konkmeng.site"
            target="_blank"
            className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md hover:-translate-y-[2px]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">Portfolio</h3>
            <p className="mt-2 text-muted-foreground">
              Personal portfolio showcasing my projects and achievements.
            </p>
            <div className="mt-4 text-primary font-medium">nun.konkmeng.site →</div>
          </a>

          {/* Portfolio */}
          <a
            href="https://konkmeng.site"
            target="_blank"
            className="rounded-lg border border-border bg-card p-6 transition hover:shadow-md hover:-translate-y-[2px]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <FontAwesomeIcon icon={faShieldHalved} className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">Nun Account</h3>
            <p className="mt-2 text-muted-foreground">
              Manage All Your Accounts in One Place.
            </p>
            <div className="mt-4 text-primary font-medium">konkmeng.site →</div>
          </a>

        </div>
      </div>

      <footer className='border-t border-border/40 mt-20'>
        <div className='container mx-auto px-4 py-12'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <div className='text-xl font-bold mb-4'>Nun Apps</div>
              <p className='text-sm text-muted-foreground'>
                Building innovative mobile solutions for everyday challenges.
              </p>
            </div>

            <div>
              <h3 className='font-semibold mb-4'>Quick Links</h3>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li>
                  <Link
                    href='#apps'
                    className='hover:text-foreground transition-colors'>
                    All Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='hover:text-foreground transition-colors'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='hover:text-foreground transition-colors'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold mb-4'>Connect</h3>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li>
                  <Link
                    href='/contact'
                    className='hover:text-foreground transition-colors'>
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='hover:text-foreground transition-colors'>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='hover:text-foreground transition-colors'>
                    Phone
                  </Link>
                </li>
              </ul>
            </div>
          </div>



          <div className='max-w-6xl mx-auto mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground'>
            <p>
              &copy; {new Date().getFullYear()} Nun Apps. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
