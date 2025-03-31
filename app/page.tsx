"use client"

import Link from "next/link"
import { ArrowRight, BarChart2, LineChart, PieChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ParallaxBackground } from "@/components/parallax-background"
import { CalendlyButton } from "@/components/calendly-button"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()

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
      <main className="flex-1 relative overflow-hidden">
        <ParallaxBackground />
        <section className="relative w-full py-16 md:py-24 lg:py-32 xl:py-40 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent_40%)]"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/grid-pattern.svg')",
              backgroundSize: "50px 50px",
            }}
          ></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="flex flex-col justify-center space-y-10">
                <div className="space-y-6 relative">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/tight bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-[1.2] pb-1 animate-fade-in-up">
                    {safeT("hero.title", "Transform Your Data into Actionable Insights")}
                  </h1>
                  <p
                    className="max-w-[600px] text-zinc-400 md:text-xl pt-4 animate-fade-in-up"
                    style={{ animationDelay: "300ms" }}
                  >
                    {safeT(
                      "hero.subtitle",
                      "Datika helps businesses harness the power of data analytics and digital advertising to drive growth and make informed decisions.",
                    )}
                  </p>
                </div>
                <div
                  className="flex flex-col gap-2 min-[400px]:flex-row justify-center animate-fade-in-up"
                  style={{ animationDelay: "600ms" }}
                >
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                      {safeT("cta.getStarted", "Get Started")}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-white hover:bg-zinc-800 transition-all duration-300 hover:scale-105"
                    >
                      {safeT("cta.exploreServices", "Explore Services")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 relative">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "url('/dots-pattern.svg')",
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                  {safeT("footer.services", "Services")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  {safeT("services.title", "Data-Driven Solutions")}
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {safeT(
                    "services.subtitle",
                    "We offer comprehensive analytics and advertising services to help your business thrive in the digital landscape.",
                  )}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader>
                    <BarChart2 className="h-10 w-10 text-purple-500" />
                    <CardTitle className="text-xl">{safeT("service.dataAnalytics.title", "Data Analytics")}</CardTitle>
                    <CardDescription className="text-zinc-400">
                      {safeT("service.dataAnalytics.subtitle", "Turn your raw data into meaningful insights")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {safeT(
                        "service.dataAnalytics.description",
                        "Our advanced analytics solutions help you understand customer behavior, market trends, and business performance to make data-driven decisions.",
                      )}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/services#analytics">
                      <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0">
                        {safeT("cta.learnMore", "Learn more")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader>
                    <LineChart className="h-10 w-10 text-blue-500" />
                    <CardTitle className="text-xl">
                      {safeT("service.marketing.title", "Performance Marketing")}
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                      {safeT("service.marketing.subtitle", "Maximize your ROI with data-driven campaigns")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {safeT(
                        "service.marketing.description",
                        "Our performance marketing strategies are designed to optimize your ad spend and deliver measurable results across all digital channels.",
                      )}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/services#marketing">
                      <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                        {safeT("cta.learnMore", "Learn more")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="grid gap-6">
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader>
                    <PieChart className="h-10 w-10 text-cyan-500" />
                    <CardTitle className="text-xl">{safeT("service.bi.title", "Business Intelligence")}</CardTitle>
                    <CardDescription className="text-zinc-400">
                      {safeT("service.bi.subtitle", "Visualize your data for better decision making")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {safeT(
                        "service.bi.description",
                        "Our BI solutions provide interactive dashboards and reports that make complex data accessible and actionable for your entire organization.",
                      )}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/services#intelligence">
                      <Button variant="link" className="text-cyan-400 hover:text-cyan-300 p-0">
                        {safeT("cta.learnMore", "Learn more")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader>
                    <TrendingUp className="h-10 w-10 text-green-500" />
                    <CardTitle className="text-xl">{safeT("service.growth.title", "Growth Strategy")}</CardTitle>
                    <CardDescription className="text-zinc-400">
                      {safeT("service.growth.subtitle", "Scale your business with data-backed strategies")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {safeT(
                        "service.growth.description",
                        "We help you identify growth opportunities and develop strategies that leverage your data assets to achieve sustainable business growth.",
                      )}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/services#growth">
                      <Button variant="link" className="text-green-400 hover:text-green-300 p-0">
                        {safeT("cta.learnMore", "Learn more")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  {safeT("cta.ready", "Ready to Start Your Data Journey?")}
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {safeT(
                    "cta.readySubtitle",
                    "Schedule a free consultation to discuss how our data analytics services can help your business grow.",
                  )}
                </p>
              </div>
              <CalendlyButton text={safeT("cta.schedule", "Schedule a Consultation")} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

