import type { Metadata } from "next"
import { FaviconGenerator } from "@/components/favicon-generator"

export const metadata: Metadata = {
  title: "Favicon Generator Tool",
  description: "Internal tool for generating favicon files for Datika website.",
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

export default function GenerateFaviconsPage() {
  return <FaviconGenerator />
}
