"use client"

import { useEffect } from "react"
import { useLanguage } from "@/components/language-provider"

export function StructuredData() {
  const { language } = useLanguage()

  useEffect(() => {
    // Remove any existing structured data
    const existingScript = document.getElementById("structured-data")
    if (existingScript) {
      existingScript.remove()
    }

    // Define the structured data directly instead of fetching it
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Datika",
      url: "https://datika.com",
      logo: "https://datika.com/logo.png",
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

    // Create and add the structured data script
    const script = document.createElement("script")
    script.id = "structured-data"
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      // Clean up when component unmounts
      const script = document.getElementById("structured-data")
      if (script) {
        script.remove()
      }
    }
  }, [language])

  return null
}

