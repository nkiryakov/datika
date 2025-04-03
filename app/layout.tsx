import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { LanguageAlternateLinks } from "@/components/language-alternate-links"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

// Update the metadata with more SEO-friendly properties
export const metadata: Metadata = {
  title: "Datika - Data Analytics & Digital Advertising Agency",
  description:
    "Transform your data into actionable insights with Datika's comprehensive analytics and digital advertising solutions.",
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/favicon.svg" },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://datika.com",
    languages: {
      en: "https://datika.com",
      fr: "https://datika.com/fr",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://datika.com",
    title: "Datika - Data Analytics & Digital Advertising Agency",
    description:
      "Transform your data into actionable insights with Datika's comprehensive analytics and digital advertising solutions.",
    siteName: "Datika",
    images: [
      {
        url: "https://datika.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Datika - Data Analytics & Digital Advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datika - Data Analytics & Digital Advertising Agency",
    description:
      "Transform your data into actionable insights with Datika's comprehensive analytics and digital advertising solutions.",
    images: ["https://datika.com/twitter-image.svg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NX5ZX2JF');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NX5ZX2JF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <LanguageAlternateLinks />
            <StructuredData />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'