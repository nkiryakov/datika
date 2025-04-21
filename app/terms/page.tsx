import type { Metadata } from "next"
import TermsPage from "@/components/pages/terms-page"
import { generateOpenGraphMetadata } from "@/lib/meta-utils"

export const metadata: Metadata = generateOpenGraphMetadata(
  "/terms",
  "Terms of Service - Datika",
  "Terms and conditions for using Datika's website and services. Read our terms of service to understand your rights and responsibilities.",
)

export default function Page() {
  return <TermsPage />
}
