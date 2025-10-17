import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })



export const metadata: Metadata = {
  title: {
    default: "Nun Apps — Smart Tools for Modern Productivity",
    template: "%s | Nun Apps",
  },
  description:
    "Nun Apps offers a suite of intelligent and beautifully designed tools to boost your digital productivity. Explore powerful, intuitive, and fast web applications — built for everyone, everywhere.",
  applicationName: "Nun Apps",
  authors: [{ name: "Kon Kmeng", url: "https://app.konkmeng.site" }],
  generator: "v0.app",
  keywords: [
    "Nun Apps",
    "Kon Kmeng",
    "productivity tools",
    "web applications",
    "modern apps",
    "Cambodia tech",
    "Nun Speed",
    "Nun Scrape",
    "Nun Picker",
    "Nun Scan",
  ],
  metadataBase: new URL("https://app.konkmeng.site"),
  openGraph: {
    title: "Nun Apps — Smart Tools for Modern Productivity",
    description:
      "Explore Nun Apps — a collection of modern, fast, and intuitive web applications designed to simplify your digital workflow.",
    url: "https://app.konkmeng.site",
    siteName: "Nun Apps",
    images: [
      {
        url: "/assets/images/cambodia.png",
        width: 1200,
        height: 630,
        alt: "Nun Apps Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nun Apps — Smart Tools for Modern Productivity",
    description:
      "Enhance your workflow with Nun Apps — modern tools designed for speed, simplicity, and productivity.",
    images: ["/assets/images/cambodia.png"],
    creator: "@konkmeng",
  },
  icons: {
    icon: "/assets/images/cambodia.png",
    shortcut: "/assets/images/cambodia.png",
    apple: "/assets/images/cambodia.png",
  },
  manifest: "/manifest.json",
  themeColor: "#007bff",
  category: "Productivity",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
