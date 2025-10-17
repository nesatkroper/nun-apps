"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle, Shield, Zap, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"

export default function NunCheckPage() {
  const windowsLink = null;
  const disabled = !windowsLink;

  return (
    <div className="min-h-screen bg-background">
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
              <Link href="#download">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <MobileNav currentPath="/nun-picker" />
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-32 h-32 rounded-3xl flex items-center justify-center">
                <Image
                  src='/assets/images/color-picker.png'
                  alt="ip-check"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">Nun Check</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The ultimate verification and validation tool for your mobile device. Ensure data accuracy, verify
                authenticity, and maintain reliability with powerful checking capabilities at your fingertips.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild className="rounded-full">
                  <Link href="#download">
                    <Download className="mr-2 h-5 w-5" />
                    Download Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full bg-transparent">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border/50">
                <Image
                  src="/assets/nun-picker/clear.png"
                  alt="Nun Check App Screenshot"
                  fill
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to verify, validate, and ensure accuracy in your daily tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-4 border-border/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold">Quick Verification</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Instantly verify data accuracy with our advanced checking algorithms. Get results in seconds.
              </p>
            </Card>

            <Card className="p-6 space-y-4 border-border/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-lg font-semibold">Secure Validation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your data is protected with enterprise-grade security. All checks are performed locally on your device.
              </p>
            </Card>

            <Card className="p-6 space-y-4 border-border/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Optimized performance ensures rapid checking without compromising accuracy or battery life.
              </p>
            </Card>

            <Card className="p-6 space-y-4 border-border/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-lg font-semibold">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Share verification results with your team and collaborate on data validation projects seamlessly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">See It In Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the intuitive interface and powerful features that make Nun Check the best verification tool.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border/50">
              <Image
                src="/assets/nun-picker/pic1.png"
                alt="Dashboard View"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border/50">
              <Image
                src="/assets/nun-picker/pic2.png"
                alt="Verification Process"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border/50">
              <Image
                src="/assets/nun-picker/pic3.png"
                alt="Results Screen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Ready to Start Verifying?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Download Nun Check today and experience the most reliable verification tool on mobile. Available for iOS and
            Android.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" asChild className="rounded-full">
              <Link href="/assets/deb/nun-picker_1.0.deb">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-ubuntu" viewBox="0 0 16 16">
                  <path fill="#E95420" d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546M7.4 13.108a5.54 5.54 0 0 1-3.775-2.88 3.27 3.27 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.25 3.25 0 0 1-.666-1.9 6 6 0 0 1-.557-.091m3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546m3.163-3.108a7.44 7.44 0 0 0 .373-8.726 3.3 3.3 0 0 1-1.278 1.498 5.57 5.57 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693M2.098 3.998a3.3 3.3 0 0 1 1.897.486 5.54 5.54 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.47 7.47 0 0 0-7.051 3.745" />
                </svg>
                Download for Ubuntu
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full bg-transparent">
              <Link href="#" onClick={(e) => e.preventDefault()}
                className="pointer-events-none opacity-95 cursor-not-allowed flex items-center space-x-2 text-gray-400"
                aria-disabled="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-windows" viewBox="0 0 16 16">
                  <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z" />
                </svg>
                Download for Windows
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            Free to download. No subscription required. Premium features available.
          </p>
        </div>
      </section>

      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-xl font-bold mb-4">Nun Apps</div>
            <p className="text-sm text-muted-foreground mb-6">
              Building innovative mobile solutions for everyday challenges.
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                All Apps
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Support
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
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

