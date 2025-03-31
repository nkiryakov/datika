import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              DATIKA
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Services
            </Link>
            <Link href="/blog" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-2">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                Contact Us
              </Button>
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden border-zinc-700 text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium text-white transition-colors hover:text-zinc-400">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium text-white transition-colors hover:text-zinc-400">
                  About
                </Link>
                <Link href="/services" className="text-lg font-medium text-white transition-colors hover:text-zinc-400">
                  Services
                </Link>
                <Link href="/blog" className="text-lg font-medium text-white transition-colors hover:text-zinc-400">
                  Blog
                </Link>
                <Link href="/contact">
                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Contact Us
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

