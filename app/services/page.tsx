import type { Metadata } from "next"
import ServicesPage from "@/components/pages/services-page"

export const metadata: Metadata = {
  title: "Data Analytics & Digital Advertising Services",
  description:
    "Explore Datika's comprehensive services including data analytics, business intelligence, digital advertising, and growth strategy - all tailored to your specific business needs and goals.",
  openGraph: {
    title: "Data Analytics & Digital Advertising Services - Datika",
    description:
      "Explore Datika's comprehensive services including data analytics, business intelligence, digital advertising, and growth strategy - all tailored to your specific business needs and goals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Datika Services - Data Analytics & Digital Advertising",
      },
    ],
  },
  twitter: {
    title: "Data Analytics & Digital Advertising Services - Datika",
    description:
      "Explore Datika's comprehensive services including data analytics, business intelligence, digital advertising, and growth strategy - all tailored to your specific business needs and goals.",
    images: ["/twitter-image.png"],
  },
}

export default function Page() {
  return <ServicesPage />
}
