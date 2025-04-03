"use client"

import Head from "next/head"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"

export function LanguageAlternateLinks() {
  const pathname = usePathname()
  const { language } = useLanguage()

  // Base URL for the site
  const baseUrl = "https://datika.com"

  // Calculate URLs for alternate language versions
  const enUrl = language === "en" ? `${baseUrl}${pathname}` : `${baseUrl}${pathname.replace(/^\/fr/, "")}`

  const frUrl = language === "fr" ? `${baseUrl}${pathname}` : `${baseUrl}/fr${pathname}`

  const xDefaultUrl = `${baseUrl}${pathname.replace(/^\/fr/, "")}`

  return (
    <Head>
      <link key="alternate-en" rel="alternate" hrefLang="en" href={enUrl} />
      <link key="alternate-fr" rel="alternate" hrefLang="fr" href={frUrl} />
      <link key="alternate-default" rel="alternate" hrefLang="x-default" href={xDefaultUrl} />
    </Head>
  )
}

