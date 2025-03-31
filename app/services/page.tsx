import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Our{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Services
                  </span>
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Comprehensive data analytics and digital advertising solutions tailored to your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="analytics" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                    Data Analytics
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Turn Raw Data into Actionable Insights
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    Our data analytics services help you understand your business performance, customer behavior, and
                    market trends to make informed decisions.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">Custom dashboard development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">Predictive analytics and forecasting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">Data integration and ETL processes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-zinc-300">Machine learning model development</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Data Analytics Dashboard"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="marketing" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
              <div className="flex items-center justify-center order-last lg:order-first">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Digital Advertising"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                    Digital Advertising
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Data-Driven Campaigns That Convert
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    Our digital advertising services leverage data analytics to create targeted campaigns that maximize
                    ROI and drive conversions.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">Paid search (PPC) management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">Social media advertising</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">Programmatic display advertising</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-zinc-300">Conversion rate optimization</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      Get Started
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
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                    Business Intelligence
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Visualize Your Data for Better Decisions
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    Our BI solutions provide interactive dashboards and reports that make complex data accessible and
                    actionable for your entire organization.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">Interactive dashboard development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">Real-time data visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">Custom reporting solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-cyan-500" />
                    <span className="text-zinc-300">Data storytelling and presentation</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Business Intelligence Dashboard"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="growth" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
              <div className="flex items-center justify-center order-last lg:order-first">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Growth Strategy"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                    Growth Strategy
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Scale Your Business with Data-Backed Strategies
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    We help you identify growth opportunities and develop strategies that leverage your data assets to
                    achieve sustainable business growth.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">Market opportunity analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">Customer segmentation and targeting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">Competitive intelligence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span className="text-zinc-300">Growth roadmap development</span>
                  </li>
                </ul>
                <div>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      Get Started
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
                  Ready to Transform Your Data?
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how our services can help your business grow.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Contact Us
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

