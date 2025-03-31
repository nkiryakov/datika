import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-black py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Datika</h3>
            <p className="text-sm text-zinc-400">
              Transforming data into actionable insights for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#analytics" className="text-zinc-400 hover:text-white">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="text-zinc-400 hover:text-white">
                  Digital Advertising
                </Link>
              </li>
              <li>
                <Link href="/services#intelligence" className="text-zinc-400 hover:text-white">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services#growth" className="text-zinc-400 hover:text-white">
                  Growth Strategy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-zinc-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-zinc-400 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Datika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

