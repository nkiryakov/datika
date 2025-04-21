import type { Metadata } from "next"
import ContactPage from "@/components/pages/contact-page"

export const metadata: Metadata = {
  title: "Contact Our Data Analytics Team",
  description:
    "Get in touch with Datika's data analytics and digital advertising experts today. Schedule a consultation to discuss how we can help your business leverage data for growth and success.",
  openGraph: {
    title: "Contact Our Data Analytics Team - Datika",
    description:
      "Get in touch with Datika's data analytics and digital advertising experts today. Schedule a consultation to discuss how we can help your business leverage data for growth and success.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Datika - Data Analytics & Digital Advertising Agency",
      },
    ],
  },
  twitter: {
    title: "Contact Our Data Analytics Team - Datika",
    description:
      "Get in touch with Datika's data analytics and digital advertising experts today. Schedule a consultation to discuss how we can help your business leverage data for growth and success.",
    images: ["/twitter-image.png"],
  },
}

export default function Page() {
  return <ContactPage />
}
