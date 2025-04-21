import type { Metadata } from "next"
import PrivacyPage from "@/components/pages/privacy-page"
import { generateOpenGraphMetadata } from "@/lib/meta-utils"

export const metadata: Metadata = generateOpenGraphMetadata(
  "/privacy",
  "Privacy Policy - Datika",
  "Learn how Datika collects, uses, and protects your personal information. Our privacy policy explains our data practices and your rights.",
)

export default function Page() {
  return <PrivacyPage />
}
