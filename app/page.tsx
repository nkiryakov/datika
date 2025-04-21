import type { Metadata } from "next"
import HomePage from "@/components/pages/home-page"
import { generateOpenGraphMetadata } from "@/lib/meta-utils"

export const metadata: Metadata = generateOpenGraphMetadata(
  "/",
  "Transform Your Data into Actionable Insights",
  "Datika helps businesses harness the power of data analytics and digital advertising to drive growth and make informed decisions through custom dashboards, predictive analytics, and performance marketing.",
)

export default function Home() {
  return <HomePage />
}
