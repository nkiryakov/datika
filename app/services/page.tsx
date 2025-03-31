"use client"

import Link from "next/link"
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Database,
  BarChartIcon as ChartBar,
  BarChart,
  PresentationIcon as PresentationChart,
  Layers,
  Target,
  Lightbulb,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/components/language-provider"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    {t("services.pageTitle")}
                  </span>
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">{t("services.pageSubtitle")}</p>
              </div>
            </div>
          </div>
        </section>
        <section id="analytics" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_350px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                    {t("footer.dataAnalytics")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    {t("services.analytics.title")}
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">{t("services.analytics.description")}</p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">{t("services.analytics.bullet1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">{t("services.analytics.bullet2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">{t("services.analytics.bullet3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">{t("services.analytics.bullet4")}</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      {t("cta.getStarted")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-full h-[200px] md:h-[250px] bg-zinc-800/50 rounded-xl p-6">
                  <Database className="w-16 h-16 text-purple-500 mr-4" />
                  <ChartBar className="w-20 h-20 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="marketing" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-12 xl:grid-cols-[350px_1fr]">
              <div className="flex items-center justify-center order-last lg:order-first">
                <div className="flex items-center justify-center w-full h-[200px] md:h-[250px] bg-zinc-800/50 rounded-xl p-6">
                  <BarChart className="w-16 h-16 text-blue-500 mr-4" />
                  <Target className="w-20 h-20 text-blue-400" />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                    {t("footer.digitalAdvertising")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    {t("services.marketing.title")}
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">{t("services.marketing.description")}</p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">{t("services.marketing.bullet1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">{t("services.marketing.bullet2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">{t("services.marketing.bullet3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">{t("services.marketing.bullet4")}</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      {t("cta.getStarted")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="intelligence" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_350px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                    {t("footer.businessIntelligence")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    {t("services.bi.title")}
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">{t("services.bi.description")}</p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">{t("services.bi.bullet1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">{t("services.bi.bullet2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">{t("services.bi.bullet3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">{t("services.bi.bullet4")}</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      {t("cta.getStarted")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-full h-[200px] md:h-[250px] bg-zinc-800/50 rounded-xl p-6">
                  <PresentationChart className="w-16 h-16 text-cyan-500 mr-4" />
                  <Layers className="w-20 h-20 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="growth" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-12 xl:grid-cols-[350px_1fr]">
              <div className="flex items-center justify-center order-last lg:order-first">
                <div className="flex items-center justify-center w-full h-[200px] md:h-[250px] bg-zinc-800/50 rounded-xl p-6">
                  <TrendingUp className="w-16 h-16 text-green-500 mr-4" />
                  <Lightbulb className="w-20 h-20 text-green-400" />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                    {t("footer.growthStrategy")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    {t("services.growth.title")}
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">{t("services.growth.description")}</p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">{t("services.growth.bullet1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">{t("services.growth.bullet2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">{t("services.growth.bullet3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">{t("services.growth.bullet4")}</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      {t("cta.getStarted")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  {t("services.transform")}
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("services.transformSubtitle")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    {t("nav.contact")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

