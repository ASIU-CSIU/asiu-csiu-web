"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    // { href: "/events", label: "Events" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-gray-900 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center relative">
            <Link href="/" className="flex items-center space-x-2" aria-label="Advocates for Science @ IU Homepage">
              <div className="absolute -top-8 w-20 h-24 bg-white flex flex-col items-center justify-start pt-1">
                <div className="w-18 h-22 bg-white flex flex-col items-center justify-start pt-2 border border-gray-300">
                  <Image
                    src="/logo.svg"
                    alt="ASIU Logo"
                    width={48}
                    height={48}
                    priority
                  />
                  <h1 className="font-heading text-xl font-bold text-gray-900">ASIU</h1>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-red transition-colors duration-200 font-medium"
                aria-label={`Navigate to ${item.label} page`}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="bg-science-blue text-white ml-4" asChild>
              <Link href="/get-involved" aria-label="Get involved with Advocates for Science @ IU">Get Involved</Link>
            </Button>
            <Button size="sm" className="bg-science-red text-white" asChild>
              <a
                href="https://www.gofundme.com/f/support-advocates-for-science-iu/donate?source=btn_donate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate to Advocates for Science @ IU (opens in new tab)"
              >
                Donate Now
              </a>
            </Button>
          </nav>

          {/* Mobile buttons and menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Button size="sm" className="bg-science-blue text-white text-xs px-2 py-1" asChild>
              <Link href="/get-involved" aria-label="Get involved">Get Involved</Link>
            </Button>
            <Button size="sm" className="bg-science-red text-white text-xs px-2 py-1" asChild>
              <a
                href="https://www.gofundme.com/f/support-advocates-for-science-iu/donate?source=btn_donate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate (opens in new tab)"
              >
                Donate Now
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-science-blue ml-2"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className="md:hidden border-t bg-white"
            role="navigation"
            aria-label="Mobile navigation"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-science-blue hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                  aria-label={`Navigate to ${item.label} page`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
