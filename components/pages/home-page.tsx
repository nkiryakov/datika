"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, BarChart2, LineChart, PieChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CalendlyButton } from "@/components/calendly-button"
import { useLanguage } from "@/components/language-provider"

export default function HomePage() {
  const { t, language } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const animationFrameRef = useRef<number>()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Handle mouse movement for grid animation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  // Canvas animation for grid deformation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      if (heroRef.current && canvas) {
        const rect = heroRef.current.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw grid with deformation
    const drawGrid = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid properties - more subtle
      const gridSize = 20
      const lineWidth = 0.8
      const lineColor = "rgba(255, 255, 255, 0.15)"

      // Deformation properties - more evenly distributed
      const bulgeRadius = isHovering ? 350 : 0
      const bulgeStrength = isHovering ? 20 : 0
      const { x: mouseX, y: mouseY } = mousePosition

      // Draw vertical lines with deformation
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.strokeStyle = lineColor
        ctx.lineWidth = lineWidth

        for (let y = 0; y <= canvas.height; y += 2) {
          // Calculate distance from mouse
          const dx = x - mouseX
          const dy = y - mouseY
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Apply bulge effect with more even distribution
          let bulgeX = x
          if (distance < bulgeRadius) {
            // More linear falloff with a minimum effect near the center
            const falloff = Math.max(0.2, distance / bulgeRadius)
            const deformation = (1 - falloff) * bulgeStrength

            // Ensure we don't divide by zero
            const distanceFactor = distance < 10 ? 10 : distance
            bulgeX = x + (dx / distanceFactor) * deformation
          }

          if (y === 0) {
            ctx.moveTo(bulgeX, y)
          } else {
            ctx.lineTo(bulgeX, y)
          }
        }

        ctx.stroke()
      }

      // Draw horizontal lines with deformation
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.strokeStyle = lineColor
        ctx.lineWidth = lineWidth

        for (let x = 0; x <= canvas.width; x += 2) {
          // Calculate distance from mouse
          const dx = x - mouseX
          const dy = y - mouseY
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Apply bulge effect with more even distribution
          let bulgeY = y
          if (distance < bulgeRadius) {
            // More linear falloff with a minimum effect near the center
            const falloff = Math.max(0.2, distance / bulgeRadius)
            const deformation = (1 - falloff) * bulgeStrength

            // Ensure we don't divide by zero
            const distanceFactor = distance < 10 ? 10 : distance
            bulgeY = y + (dy / distanceFactor) * deformation
          }

          if (x === 0) {
            ctx.moveTo(x, bulgeY)
          } else {
            ctx.lineTo(x, bulgeY)
          }
        }

        ctx.stroke()
      }

      animationFrameRef.current = requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePosition, isHovering])

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
        <section
          ref={heroRef}
          className="relative w-full py-16 md:py-24 lg:py-32 xl:py-40 bg-black overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent_40%)]"></div>

          {/* Canvas for grid with deformation */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-25" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="flex flex-col justify-center space-y-10">
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
                    {safeT("hero.title", "Transform Your Data into Actionable Insights")}
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl pt-4">
                    {safeT(
                      "hero.subtitle",
                      "Datika helps businesses harness the power of data analytics and digital advertising to drive growth and make informed decisions.",
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      {safeT("cta.getStarted", "Get Started")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                      {safeT("cta.exploreServices", "Explore Services")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 relative">
          {/* Extended grid pattern from hero section - subtle extension */}
          <div
            className="absolute top-0 left-0 right-0 h-32 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              maskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          ></div>

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
