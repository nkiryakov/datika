import type { Metadata } from "next"

/**
 * Generates Open Graph metadata for a specific page
 * @param path The path of the page (e.g., "/about")
 * @param title The page title
 * @param description The page description
 * @returns Metadata object with Open Graph properties
 */
export function generateOpenGraphMetadata(path: string, title: string, description: string): Metadata {
  const baseUrl = "https://datika.ca"
  const url = `${baseUrl}${path}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Datika",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Datika - Data Analytics & Digital Advertising",
        },
      ],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: ["/twitter-image.png"],
    },
  }
}
