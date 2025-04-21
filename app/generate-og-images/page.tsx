import type { Metadata } from "next"
import { OgImageGenerator } from "@/components/og-image-generator"

export const metadata: Metadata = {
  title: "OG Image Generator Tool",
  description: "Internal tool for generating OpenGraph images for Datika website.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
}

export default function GenerateOgImagesPage() {
  return <OgImageGenerator />
}
