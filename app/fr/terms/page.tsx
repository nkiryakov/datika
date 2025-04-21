import type { Metadata } from "next"
import TermsPage from "@/components/pages/terms-page"
import { generateOpenGraphMetadata } from "@/lib/meta-utils"

export const metadata: Metadata = generateOpenGraphMetadata(
  "/fr/terms",
  "Conditions d'utilisation - Datika",
  "Conditions générales d'utilisation du site web et des services de Datika. Lisez nos conditions d'utilisation pour comprendre vos droits et responsabilités.",
)

export default function Page() {
  return <TermsPage />
}
