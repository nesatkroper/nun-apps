import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AppCard } from "@/components/app-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image";

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
