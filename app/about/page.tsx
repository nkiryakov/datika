"use client"
import { Award, BarChart2, Clock, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    {t("about.title") || "About"}{" "}
                    <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      Datika
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    {t("about.subtitle") ||
                      "We're a team of data scientists, analysts, and digital marketers passionate about turning data into growth opportunities."}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <svg viewBox="0 0 600 400" className="w-full h-full">
                    <defs>
                      <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9333ea" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>

                    {/* Background */}
                    <rect x="50" y="50" width="500" height="300" rx="20" fill="#1f2937" opacity="0.3" />

                    {/* Data visualization elements */}
                    <rect x="100" y="100" width="400" height="40" rx="5" fill="url(#aboutGradient)" opacity="0.7" />
                    <rect x="100" y="160" width="300" height="40" rx="5" fill="url(#aboutGradient)" opacity="0.6" />
                    <rect x="100" y="220" width="350" height="40" rx="5" fill="url(#aboutGradient)" opacity="0.8" />
                    <rect x="100" y="280" width="250" height="40" rx="5" fill="url(#aboutGradient)" opacity="0.5" />

                    {/* Data nodes */}
                    <circle cx="150" cy="200" r="50" fill="#9333ea" opacity="0.2" />
                    <circle cx="300" cy="150" r="40" fill="#3b82f6" opacity="0.2" />
                    <circle cx="450" cy="250" r="60" fill="#06b6d4" opacity="0.2" />

                    {/* Connection lines */}
                    <line x1="150" y1="200" x2="300" y2="150" stroke="white" strokeWidth="2" opacity="0.2" />
                    <line x1="300" y1="150" x2="450" y2="250" stroke="white" strokeWidth="2" opacity="0.2" />
                    <line x1="150" y1="200" x2="450" y2="250" stroke="white" strokeWidth="2" opacity="0.2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  {t("about.storyTitle") || "Our Story"}
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("about.storyDescription") ||
                    "Founded in 2018, Datika was born from a simple idea: data should be accessible, understandable, and actionable for businesses of all sizes."}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:gap-12">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{t("about.missionTitle") || "Our Mission"}</h3>
                  <p className="text-zinc-400">
                    {t("about.missionDescription") ||
                      "To empower businesses with data-driven insights that drive growth, innovation, and competitive advantage in an increasingly digital world."}
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{t("about.visionTitle") || "Our Vision"}</h3>
                  <p className="text-zinc-400">
                    {t("about.visionDescription") ||
                      "To be the leading provider of integrated data analytics and digital advertising solutions, known for our expertise, innovation, and measurable results."}
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
                  {t("about.valuesTitle") || "Our Values"}
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("about.valuesDescription") || "The principles that guide our work and relationships with clients."}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <BarChart2 className="h-10 w-10 text-purple-500" />
                  <CardTitle className="text-xl">{t("about.value1Title") || "Data Integrity"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    {t("about.value1Description") ||
                      "We believe in the accuracy, consistency, and reliability of data as the foundation of all our work."}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-500" />
                  <CardTitle className="text-xl">{t("about.value2Title") || "Client Partnership"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    {t("about.value2Description") ||
                      "We work as an extension of your team, aligning our expertise with your business goals."}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <Award className="h-10 w-10 text-cyan-500" />
                  <CardTitle className="text-xl">{t("about.value3Title") || "Excellence"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    {t("about.value3Description") ||
                      "We strive for excellence in everything we do, from analysis to implementation to client service."}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <Clock className="h-10 w-10 text-green-500" />
                  <CardTitle className="text-xl">{t("about.value4Title") || "Innovation"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    {t("about.value4Description") ||
                      "We continuously explore new technologies and methodologies to deliver cutting-edge solutions."}
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

