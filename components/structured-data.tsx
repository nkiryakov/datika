"use client"

import Head from "next/head"
import { useLanguage } from "@/components/language-provider"

export function StructuredData() {
  const { language } = useLanguage()

  // Define the structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Datika",
    url: "https://datika.com",
    logo: {
      "@type": "ImageObject",
      url: "https://datika.com/favicon.svg",
      width: "32",
      height: "32",
    },
    description:
      language === "fr"
        ? "Datika aide les entreprises à exploiter la puissance de l'analyse de données et de la publicité numérique pour stimuler leur croissance et prendre des décisions éclairées."
        : "Datika helps businesses harness the power of data analytics and digital advertising to drive growth and make informed decisions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montreal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-514-746-1558",
      contactType: "customer service",
      email: "nikola.kiryakov@gmail.com",
    },
    sameAs: ["https://www.linkedin.com/company/datika", "https://twitter.com/datika"],
  }

  return (
    <Head>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}

