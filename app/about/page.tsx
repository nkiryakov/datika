import type { Metadata } from "next"
import AboutPage from "@/components/pages/about-page"

export const metadata: Metadata = {
  title: "About Our Data Analytics Agency",
  description:
    "Meet the team behind Datika - data scientists, analysts, and digital marketers passionate about turning complex data into growth opportunities for businesses of all sizes.",
  openGraph: {
    title: "About Our Data Analytics Agency - Datika",
    description:
      "Meet the team behind Datika - data scientists, analysts, and digital marketers passionate about turning complex data into growth opportunities for businesses of all sizes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Datika - Data Analytics & Digital Advertising Agency",
      },
    ],
  },
  twitter: {
    title: "About Our Data Analytics Agency - Datika",
    description:
      "Meet the team behind Datika - data scientists, analysts, and digital marketers passionate about turning complex data into growth opportunities for businesses of all sizes.",
    images: ["/twitter-image.png"],
  },
}

export default function Page() {
  return <AboutPage />
}
