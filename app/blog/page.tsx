import type { Metadata } from "next"
import BlogPage from "@/components/pages/blog-page"

export const metadata: Metadata = {
  title: "Data Analytics & Digital Marketing Blog",
  description:
    "Stay updated with the latest insights, trends, and best practices in data analytics and digital advertising from Datika's team of experts through our regularly updated blog.",
  openGraph: {
    title: "Data Analytics & Digital Marketing Blog - Datika",
    description:
      "Stay updated with the latest insights, trends, and best practices in data analytics and digital advertising from Datika's team of experts through our regularly updated blog.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Datika Blog - Data Analytics & Digital Marketing Insights",
      },
    ],
  },
  twitter: {
    title: "Data Analytics & Digital Marketing Blog - Datika",
    description:
      "Stay updated with the latest insights, trends, and best practices in data analytics and digital advertising from Datika's team of experts through our regularly updated blog.",
    images: ["/twitter-image.png"],
  },
}

export default function Page() {
  return <BlogPage />
}
