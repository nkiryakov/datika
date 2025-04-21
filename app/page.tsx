import type { Metadata } from "next"
import HomePage from "@/components/pages/home-page"

export const metadata: Metadata = {
  title: "Transform Your Data into Actionable Insights",
  description:
    "Datika helps businesses harness the power of data analytics and digital advertising to drive growth and make informed decisions through custom dashboards, predictive analytics, and performance marketing.",
  openGraph: {
    title: "Transform Your Data into Actionable Insights - Datika",
    description:
      "Datika helps businesses harness the power of data analytics and digital advertising to drive growth and make informed decisions through custom dashboards, predictive analytics, and performance marketing.",
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
    title: "Transform Your Data into Actionable Insights - Datika",
    description:
      "Datika helps businesses harness the power of data analytics and digital advertising to drive growth and make informed decisions through custom dashboards, predictive analytics, and performance marketing.",
    images: ["/twitter-image.png"],
  },
}

export default function Home() {
  return <HomePage />
}
