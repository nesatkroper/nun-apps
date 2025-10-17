"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { Users, Target, Lightbulb, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className='flex gap-2 items-center'>
            <Image
              src='/assets/images/cambodia.png'
              alt='Nun Apps Logo'
              width={40}
              height={40}
            />
            <div className='text-2xl font-bold tracking-tight'>
              <span className='text-blue-500'>Nun</span> Apps
            </div>
          </Link>
          <MobileNav currentPath="/about" />
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/#apps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Apps
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">About Nun Apps</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            We're a passionate team dedicated to creating innovative mobile applications that simplify everyday tasks
            and enhance productivity.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/team-collaboration-workspace.png"
              alt="Our team workspace"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Nun Apps, we believe technology should empower people, not complicate their lives. Our mission is to
              develop intuitive, powerful mobile applications that solve real-world problems and make digital
              experiences more accessible to everyone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since our founding in 2020, we've been committed to excellence in design, performance, and user
              experience. Every app we create is built with attention to detail and a deep understanding of user needs.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">User-Centric</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We put users first in every decision, ensuring our apps meet real needs and exceed expectations.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We maintain the highest standards in code quality, design, and performance across all our apps.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Simplicity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe in elegant, straightforward solutions that anyone can use without confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're a diverse team of designers, developers, and product experts from around the world, united by our
            passion for creating exceptional mobile experiences. With backgrounds spanning technology, design, and
            business, we bring unique perspectives to every project.
          </p>
          <div className="pt-6">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">Nun Apps</div>
              <p className="text-sm text-muted-foreground">
                Building innovative mobile solutions for everyday challenges.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/#apps" className="hover:text-foreground transition-colors">
                    All Apps
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Phone
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Nun Apps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

