"use client"

import { useEffect } from "react"
import { Mail, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CalendlyButton } from "@/components/calendly-button"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useLanguage()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  {t("contact.title")}{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Datika
                  </span>
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">{t("contact.subtitle")}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white text-center">
                  {t("contact.info")}
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl text-center mx-auto">
                  {t("contact.infoSubtitle")}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Mail className="h-8 w-8 text-purple-500" />
                    <CardTitle>{t("contact.email")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a className="font-medium" href="mailto:info@datika.ca?subject=Service%20Request">info@datika.ca</a>

                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Phone className="h-8 w-8 text-blue-500" />
                    <CardTitle>{t("contact.phone")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">514-746-1558</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 flex flex-col items-center justify-center space-y-6 text-center">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">{t("cta.ready")}</h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl mx-auto">{t("cta.readySubtitle")}</p>
                </div>
                <CalendlyButton text={t("cta.schedule")} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

