"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"

export function SiteFooter() {
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
    <footer className="w-full border-t border-zinc-800 bg-black py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Datika</h3>
            <p className="text-sm text-zinc-400">
              {safeT("footer.description", "Transforming data into actionable insights for businesses of all sizes.")}
            </p>
            <div className="pt-2">
              <LanguageToggle variant="minimal" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">{safeT("footer.services", "Services")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services#analytics" className="text-zinc-400 hover:text-white">
                    {safeT("footer.dataAnalytics", "Data Analytics")}
                  </Link>
                </li>
                <li>
                  <Link href="/services#marketing" className="text-zinc-400 hover:text-white">
                    {safeT("footer.digitalAdvertising", "Digital Advertising")}
                  </Link>
                </li>
                <li>
                  <Link href="/services#intelligence" className="text-zinc-400 hover:text-white">
                    {safeT("footer.businessIntelligence", "Business Intelligence")}
                  </Link>
                </li>
                <li>
                  <Link href="/services#growth" className="text-zinc-400 hover:text-white">
                    {safeT("footer.growthStrategy", "Growth Strategy")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">{safeT("footer.company", "Company")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-zinc-400 hover:text-white">
                    {safeT("footer.aboutUs", "About Us")}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-zinc-400 hover:text-white">
                    {safeT("footer.blog", "Blog")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-400 hover:text-white">
                    {safeT("footer.contact", "Contact")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Datika. {safeT("footer.copyright", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  )
}

