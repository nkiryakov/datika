"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"

export function LanguageAlternateLinks() {
  const pathname = usePathname()
  const { language } = useLanguage()

  // Base URL for the site
  const baseUrl = "https://datika.ca"

  // Calculate URLs for alternate language versions
  const enUrl = language === "en" ? `${baseUrl}${pathname}` : `${baseUrl}${pathname.replace(/^\/fr/, "")}`
  const frUrl = language === "fr" ? `${baseUrl}${pathname}` : `${baseUrl}/fr${pathname}`
  const xDefaultUrl = `${baseUrl}${pathname.replace(/^\/fr/, "")}`

  const linkTags = `
    <link rel="alternate" hrefLang="en" href="${enUrl}" />
    <link rel="alternate" hrefLang="fr" href="${frUrl}" />
    <link rel="alternate" hrefLang="x-default" href="${xDefaultUrl}" />
  `

  return <Script id="language-alternate-links" dangerouslySetInnerHTML={{ __html: linkTags }} />
}
