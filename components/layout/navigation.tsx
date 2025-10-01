"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/primitives/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/get-involved?tab=events-calendar",
      label: "Events",
      children: [
        { href: "/get-involved?tab=events-calendar", label: "Events Calendar" },
        { href: "/get-involved?tab=past-events", label: "Past Events" }
      ]
    },
    {
      href: "/news",
      label: "News",
      children: [
        { href: "/news?tab=bulletins", label: "News Bulletins" },
        { href: "/news?tab=articles", label: "Articles" },
        { href: "/news?tab=social-media", label: "Social Media" }
      ]
    },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-gray-900 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Dual Logo */}
          {/* <div className="flex items-center relative">
            <Link href="/" className="flex items-center space-x-2" aria-label="Advocates for Science @ IU Homepage">
              <div className="absolute -top-8 w-66 h-23.5 bg-white pt-1">
                <div className="flex flex-row items-center gap-2 justify-center border border-gray-300 mx-1">
                  <div className="h-22 flex items-center justify-start pt-2 -mt-1">
                    <Image
                      src="/icons/csiu/logo.svg"
                      alt="CSIU Logo"
                      width={34.5}
                      height={34.5}
                      priority
                      fetchPriority="high"
                    />
                    <h1 className="ml-1 text-left font-heading text-xs font-bold text-gray-900 leading-none">
                      Concerned<br />Scientists<br />@IU
                    </h1>
                  </div>
                  <div className="h-22 flex items-center justify-start pt-2 -mt-1">
                    <Image
                      src="/icons/asiu/logo.svg"
                      alt="ASIU Logo"
                      width={48}
                      height={48}
                      priority
                      fetchPriority="high"
                    />
                    <h1 className="ml-1 text-left font-heading text-xs font-bold text-gray-900 leading-none">
                      Advocates<br />for Science<br />@IU
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          </div> */}

          {/* Dual Logo */}
          <div id="dual-logo" className="flex items-center relative">
            <Link href="/" className="flex items-center space-x-2" aria-label="Advocates for Science @ IU Homepage">
              <div className="absolute -top-8 w-38 h-23.5 bg-white pt-1 rounded-b-xl border border-gray-300">
                <div className="flex flex-row items-center justify-center rounded-b-lg border border-gray-300 mx-1">
                  <div className="flex flex-row items-center gap-2 h-20.5">
                    <Image
                      src="/icons/csiu/logo-blue.svg"
                      alt="CSIU Logo"
                      width={46}
                      height={46}
                      priority
                      fetchPriority="high"
                    />
                    <Image
                      src="/icons/asiu/logo.svg"
                      alt="ASIU Logo"
                      width={64}
                      height={64}
                      priority
                      fetchPriority="high"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <div className="flex items-center space-x-1 text-white hover:text-red transition-colors duration-200 font-medium cursor-pointer">
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-red transition-colors duration-200 font-medium"
                    aria-label={`Navigate to ${item.label} page`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <>
                    {/* Invisible bridge to prevent gap */}
                    <div className="absolute top-full left-0 w-full h-1 bg-transparent" />
                    <div className="absolute top-full left-0 mt-1 w-48 bg-gray-900 rounded-md shadow-lg py-1 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-white transition-colors duration-200"
                          aria-label={`Navigate to ${child.label}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            <Button size="sm" className="bg-science-blue text-white ml-4" asChild>
              <Link href="/get-involved" aria-label="Get involved with Advocates for Science @ IU and Concerned Scientists @ IU">Get Involved</Link>
            </Button>
            <Button size="sm" className="bg-science-red text-white hide-below-440" asChild>
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
          <div className="lg:hidden flex items-center">
            <Button size="sm" className="bg-science-blue text-white text-xs px-2 py-1" asChild>
              <Link href="/get-involved" aria-label="Get involved">Get Involved</Link>
            </Button>
            <Button size="sm" className="bg-science-red text-white text-xs px-2 mx-2 py-1 hide-below-440" asChild>
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
              className="text-white ml-2 relative"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-3 h-5">
                <Menu
                  className={`-left-0.5 top-0.5 absolute inset-0 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 rotate-90 scale-150' : 'opacity-100 rotate-0 scale-175'
                    }`}
                />
                <X
                  className={`-left-0.5 top-0.5 absolute inset-0 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 rotate-0 scale-150' : 'opacity-0 -rotate-90 scale-175'
                    }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden fixed inset-0 bg-gray-900 transition-all duration-500 ease-in-out ${isOpen
            ? 'opacity-100 visible z-[60]'
            : 'opacity-0 invisible pointer-events-none z-[60]'
            }`}
          role="navigation"
          aria-label="Mobile navigation"
          id="mobile-menu"
        >
          <div className="flex flex-col h-full">
            {/* Close button */}
            <div className={`flex justify-end p-4 transition-all duration-500 ease-out ${isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-8'
              }`}
              style={{
                transitionDelay: isOpen ? '100ms' : '0ms'
              }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white"
                aria-label="Close navigation menu"
              >
                <X className="scale-150" />
              </Button>
            </div>

            {/* Navigation items */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-4">
              {navItems.map((item, index) => (
                <div key={item.href} className="text-center">
                  <Link
                    href={item.href}
                    className={`text-white text-2xl hover:text-gray-500 font-medium hover:text-science-blue transition-all duration-200 ease-out ${isOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                      }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                    }}
                    onClick={() => setIsOpen(false)}
                    aria-label={`Navigate to ${item.label} page`}
                  >
                    {item.label}
                  </Link>

                  {/* Mobile dropdown children */}
                  {item.children && (
                    <div className={`mt-4 space-y-0 ${isOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                      }`}
                      style={{
                        transitionDelay: isOpen ? `${index * 100 + 100}ms` : '0ms'
                      }}
                    >
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-white text-lg hover:text-science-blue transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                          aria-label={`Navigate to ${child.label}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile action buttons */}
              <div className={`flex flex-col space-y-4 mt-8 transition-all duration-500 ease-out ${isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isOpen ? `${navItems.length * 100 + 200}ms` : '0ms'
                }}
              >
                <Button size="lg" className="bg-science-blue text-white" asChild>
                  <Link href="/get-involved" aria-label="Get involved with Advocates for Science @ IU">Get Involved</Link>
                </Button>
                <Button size="lg" className="bg-science-red text-white" asChild>
                  <a
                    href="https://www.gofundme.com/f/support-advocates-for-science-iu/donate?source=btn_donate"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Donate to Advocates for Science @ IU (opens in new tab)"
                  >
                    Donate Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
