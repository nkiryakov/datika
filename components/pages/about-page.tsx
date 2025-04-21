"use client"

import { useEffect } from "react"
import { Award, BarChart2, Clock, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
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
                  {safeT("about.title", "About")}{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Datika
                  </span>
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl mx-auto">
                  {safeT(
                    "about.subtitle",
                    "We're a team of data scientists, analysts, and digital marketers passionate about turning data into growth opportunities.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  {safeT("about.story.title", "Our Story")}
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {safeT(
                    "about.story.description",
                    "Founded in 2025, Datika was born from a simple idea: data should be accessible, understandable, and actionable for businesses of all sizes.",
                  )}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:gap-12">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{safeT("about.mission.title", "Our Mission")}</h3>
                  <p className="text-zinc-400">
                    {safeT(
                      "about.mission.description",
                      "To empower businesses with data-driven insights that drive growth, innovation, and competitive advantage in an increasingly digital world.",
                    )}
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{safeT("about.vision.title", "Our Vision")}</h3>
                  <p className="text-zinc-400">
                    {safeT(
                      "about.vision.description",
                      "To be the leading provider of integrated data analytics and digital advertising solutions, known for our expertise, innovation, and measurable results.",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  {safeT("about.values.title", "Our Values")}
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {safeT("about.values.subtitle", "The principles that guide our work and relationships with clients.")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <BarChart2 className="h-10 w-10 text-purple-500" />
                  <CardTitle className="text-xl">{safeT("about.value.integrity.title", "Data Integrity")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    {safeT(
                      "about.value.integrity.description",
                      "We believe in the accuracy, consistency, and reliability of data as the foundation of all our work.",
                    )}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-500" />
                  <CardTitle className="text-xl">
                    {safeT("about.value.partnership.title", "Client Partnership")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    {safeT(
                      "about.value.partnership.description",
                      "We work as an extension of your team, aligning our expertise with your business goals.",
                    )}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <Award className="h-10 w-10 text-cyan-500" />
                  <CardTitle className="text-xl">{safeT("about.value.excellence.title", "Excellence")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    {safeT(
                      "about.value.excellence.description",
                      "We strive for excellence in everything we do, from analysis to implementation to client service.",
                    )}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <Clock className="h-10 w-10 text-green-500" />
                  <CardTitle className="text-xl">{safeT("about.value.innovation.title", "Innovation")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    {safeT(
                      "about.value.innovation.description",
                      "We continuously explore new technologies and methodologies to deliver cutting-edge solutions.",
                    )}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
