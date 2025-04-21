import type { Metadata } from "next"
import PrivacyPage from "@/components/pages/privacy-page"
import { generateOpenGraphMetadata } from "@/lib/meta-utils"

export const metadata: Metadata = generateOpenGraphMetadata(
  "/fr/privacy",
  "Politique de confidentialité - Datika",
  "Découvrez comment Datika collecte, utilise et protège vos informations personnelles. Notre politique de confidentialité explique nos pratiques en matière de données et vos droits.",
)

export default function Page() {
  return <PrivacyPage />
}
