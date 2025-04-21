"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Zap,
  Database,
  BarChartIcon as ChartBar,
  BarChart,
  PresentationIcon as PresentationChart,
  Layers,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/components/language-provider"

export default function ServicesPage() {
  const { t } = useLanguage()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Safe translation function with fallbacks
  const safeT = (key: string, fallback: string): string => {
    try {
      const translation = t(key)
      return translation === key ? fallback : translation
    } catch (error) {
      console.warn(`Translation error for key: ${key}`, error)
      return fallback
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  {safeT("services.pageTitle", "Our")}{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    {safeT("footer.services", "Services")}
                  </span>
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  {safeT(
                    "services.pageSubtitle",
                    "Comprehensive data analytics and digital advertising solutions tailored to your business needs.",
                  )}
                </p>
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
                    {safeT("footer.dataAnalytics", "Data Analytics")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    {safeT("services.analytics.title", "Turn Raw Data into Actionable Insights")}
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    {safeT(
                      "services.analytics.description",
                      "Our data analytics services help you understand your business performance, customer behavior, and market trends to make informed decisions.",
                    )}
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">
                      {safeT("services.analytics.point1", "Custom dashboard development")}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">
                      {safeT("services.analytics.point2", "Predictive analytics and forecasting")}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">
                      {safeT("services.analytics.point3", "Data integration and ETL processes")}
                    </span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      {safeT("cta.getStarted", "Get Started")}
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
                    {safeT("footer.digitalAdvertising", "Digital Advertising")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    {safeT("services.marketing.title", "Data-Driven Campaigns That Convert")}
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    {safeT(
                      "services.marketing.description",
                      "Our digital advertising services leverage data analytics to create targeted campaigns that maximize ROI and drive conversions.",
                    )}
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">
                      {safeT("services.marketing.point1", "Paid search (PPC) management")}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">
                      {safeT("services.marketing.point2", "Social media advertising")}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">
                      {safeT("services.marketing.point3", "Programmatic display advertising")}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">
                      {safeT("services.marketing.point4", "Conversion rate optimization")}
                    </span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      {safeT("cta.getStarted", "Get Started")}
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
                    {safeT("footer.businessIntelligence", "Business Intelligence")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    {safeT("services.bi.title", "Visualize Your Data for Better Decisions")}
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    {safeT(
                      "services.bi.description",
                      "Our BI solutions provide interactive dashboards and reports that make complex data accessible and actionable for your entire organization.",
                    )}
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">
                      {safeT("services.bi.point1", "Interactive dashboard development")}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">{safeT("services.bi.point2", "Real-time data visualization")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">{safeT("services.bi.point3", "Custom reporting solutions")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">
                      {safeT("services.bi.point4", "Data storytelling and presentation")}
                    </span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      {safeT("cta.getStarted", "Get Started")}
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
                    {safeT("footer.growthStrategy", "Growth Strategy")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    {safeT("services.growth.title", "Scale Your Business with Data-Backed Strategies")}
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    {safeT(
                      "services.growth.description",
                      "We help you identify growth opportunities and develop strategies that leverage your data assets to achieve sustainable business growth.",
                    )}
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">
                      {safeT("services.growth.point1", "Market opportunity analysis")}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">
                      {safeT("services.growth.point2", "Customer segmentation and targeting")}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">{safeT("services.growth.point3", "Competitive intelligence")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">
                      {safeT("services.growth.point4", "Growth roadmap development")}
                    </span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      {safeT("cta.getStarted", "Get Started")}
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
                  {safeT("services.transform", "Ready to Transform Your Data?")}
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {safeT(
                    "services.transformSubtitle",
                    "Contact us today to discuss how our services can help your business grow.",
                  )}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    {safeT("nav.contact", "Contact Us")}
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
