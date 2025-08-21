import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Mail, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo.svg"
                  alt="ASIU Logo"
                  width={32}
                  height={32}
                  className="w-full h-full relative z-10 brightness-0 invert"
                  priority
                />
              </div>
              <h3 className="font-heading text-xl font-bold">Advocates for Science @ IU</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based
              decision making in policy and society.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/asiu_bloomington"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:advocatesforscience.in@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-gray-300 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for updates on advocacy efforts and events.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button size="sm" className="bg-science-blue hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">© 2024 Advocates for Science @ IU. All rights reserved.</p>
            <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
              Accessibility Statement
            </Link>
            <span className="text-gray-400 text-sm">In partnership with Concerned Scientists @ IU</span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button size="sm" className="bg-science-red hover:bg-red-700">
              Donate Now
            </Button>
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
