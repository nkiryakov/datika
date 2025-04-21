import type { Metadata } from "next"
import AboutPage from "@/components/pages/about-page"
import { generateOpenGraphMetadata } from "@/lib/meta-utils"

export const metadata: Metadata = generateOpenGraphMetadata(
  "/about",
  "About Our Data Analytics Agency",
  "Meet the team behind Datika - data scientists, analysts, and digital marketers passionate about turning complex data into growth opportunities for businesses of all sizes.",
)

export default function Page() {
  return <AboutPage />
}
