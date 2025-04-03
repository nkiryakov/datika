"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageToggle } from "@/components/language-toggle"

export function SiteHeader() {
  const { t } = useLanguage()

  // Safe translation function with fallbacks
  const safeT = (key: string, fallback: string): string => {
    try {
      const translation = t(key)
      return translation === key ? fallback : translation
    } catch (error) {
      console.warn(`Translation error for key: ${key}`, error)
      return fallback
    }
  }

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
            <Link
              href="/"
              onClick={(e) => {
                // Prevent default navigation
                e.preventDefault()
                // Manually navigate after a short delay
                setTimeout(() => {
                  window.location.href = "/"
                }, 10)
              }}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {safeT("nav.home", "Home")}
            </Link>
            <Link
              href="/about"
              onClick={(e) => {
                // Prevent default navigation
                e.preventDefault()
                // Manually navigate after a short delay
                setTimeout(() => {
                  window.location.href = "/about"
                }, 10)
              }}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {safeT("nav.about", "About")}
            </Link>
            <Link
              href="/services"
              onClick={(e) => {
                // Prevent default navigation
                e.preventDefault()
                // Manually navigate after a short delay
                setTimeout(() => {
                  window.location.href = "/services"
                }, 10)
              }}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {safeT("nav.services", "Services")}
            </Link>
            <Link
              href="/blog"
              onClick={(e) => {
                // Prevent default navigation
                e.preventDefault()
                // Manually navigate after a short delay
                setTimeout(() => {
                  window.location.href = "/blog"
                }, 10)
              }}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {safeT("nav.blog", "Blog")}
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-2">
            <LanguageToggle />
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                {safeT("nav.contact", "Contact Us")}
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
                <Link
                  href="/"
                  onClick={(e) => {
                    // Prevent default navigation
                    e.preventDefault()
                    // Manually navigate after a short delay
                    setTimeout(() => {
                      window.location.href = "/"
                    }, 10)
                  }}
                  className="text-lg font-medium text-white transition-colors hover:text-zinc-400"
                >
                  {safeT("nav.home", "Home")}
                </Link>
                <Link
                  href="/about"
                  onClick={(e) => {
                    // Prevent default navigation
                    e.preventDefault()
                    // Manually navigate after a short delay
                    setTimeout(() => {
                      window.location.href = "/about"
                    }, 10)
                  }}
                  className="text-lg font-medium text-white transition-colors hover:text-zinc-400"
                >
                  {safeT("nav.about", "About")}
                </Link>
                <Link
                  href="/services"
                  onClick={(e) => {
                    // Prevent default navigation
                    e.preventDefault()
                    // Manually navigate after a short delay
                    setTimeout(() => {
                      window.location.href = "/services"
                    }, 10)
                  }}
                  className="text-lg font-medium text-white transition-colors hover:text-zinc-400"
                >
                  {safeT("nav.services", "Services")}
                </Link>
                <Link
                  href="/blog"
                  onClick={(e) => {
                    // Prevent default navigation
                    e.preventDefault()
                    // Manually navigate after a short delay
                    setTimeout(() => {
                      window.location.href = "/blog"
                    }, 10)
                  }}
                  className="text-lg font-medium text-white transition-colors hover:text-zinc-400"
                >
                  {safeT("nav.blog", "Blog")}
                </Link>
                <div className="py-2">
                  <LanguageToggle />
                </div>
                <Link href="/contact">
                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    {safeT("nav.contact", "Contact Us")}
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

