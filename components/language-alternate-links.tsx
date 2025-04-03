"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"

export function LanguageAlternateLinks() {
  const pathname = usePathname()
  const { language } = useLanguage()

  useEffect(() => {
    // Remove any existing alternate language links
    const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]')
    existingLinks.forEach((link) => link.remove())

    // Create and add the new alternate language links
    const baseUrl = "https://datika.com" // Replace with your actual domain

    // Create link for English
    const enLink = document.createElement("link")
    enLink.rel = "alternate"
    enLink.hreflang = "en"
    enLink.href = language === "en" ? `${baseUrl}${pathname}` : `${baseUrl}${pathname.replace(/^\/fr/, "")}`
    document.head.appendChild(enLink)

    // Create link for French
    const frLink = document.createElement("link")
    frLink.rel = "alternate"
    frLink.hreflang = "fr"
    frLink.href = language === "fr" ? `${baseUrl}${pathname}` : `${baseUrl}/fr${pathname}`
    document.head.appendChild(frLink)

    // Create x-default link (points to English version)
    const xDefaultLink = document.createElement("link")
    xDefaultLink.rel = "alternate"
    xDefaultLink.hreflang = "x-default"
    xDefaultLink.href = `${baseUrl}${pathname.replace(/^\/fr/, "")}`
    document.head.appendChild(xDefaultLink)

    return () => {
      // Clean up when component unmounts
      document.head.removeChild(enLink)
      document.head.removeChild(frLink)
      document.head.removeChild(xDefaultLink)
    }
  }, [pathname, language])

  return null
}

