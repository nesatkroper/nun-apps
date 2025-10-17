"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

interface MobileNavProps {
  currentPath?: string
}

export function MobileNav({ currentPath = "/" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-[73px] right-0 h-[calc(100vh-73px)] w-64 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="flex flex-col gap-1 p-4">
          <Link
            href="/"
            onClick={closeMenu}
            className={`px-4 py-3 rounded-lg text-sm transition-colors ${currentPath === "/" ? "bg-muted font-medium" : "hover:bg-muted/50"
              }`}
          >
            Home
          </Link>
          <Link
            href="/#apps"
            onClick={closeMenu}
            className="px-4 py-3 rounded-lg text-sm hover:bg-muted/50 transition-colors"
          >
            Apps
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className={`px-4 py-3 rounded-lg text-sm transition-colors ${currentPath === "/about" ? "bg-muted font-medium" : "hover:bg-muted/50"
              }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className={`px-4 py-3 rounded-lg text-sm transition-colors ${currentPath === "/contact" ? "bg-muted font-medium" : "hover:bg-muted/50"
              }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  )
}
