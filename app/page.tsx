import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, LineChart, PieChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Testimonials } from "@/components/testimonials"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Transform Your Data into Actionable Insights
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    Datika helps businesses harness the power of data analytics and digital advertising to drive growth
                    and make informed decisions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Data Analytics Dashboard"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Data-Driven Solutions</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer comprehensive analytics and advertising services to help your business thrive in the digital
                  landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader>
                    <BarChart2 className="h-10 w-10 text-purple-500" />
                    <CardTitle className="text-xl">Data Analytics</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Turn your raw data into meaningful insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our advanced analytics solutions help you understand customer behavior, market trends, and
                      business performance to make data-driven decisions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/services#analytics">
                      <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader>
                    <LineChart className="h-10 w-10 text-blue-500" />
                    <CardTitle className="text-xl">Performance Marketing</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Maximize your ROI with data-driven campaigns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our performance marketing strategies are designed to optimize your ad spend and deliver measurable
                      results across all digital channels.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/services#marketing">
                      <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="grid gap-6">
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader>
                    <PieChart className="h-10 w-10 text-cyan-500" />
                    <CardTitle className="text-xl">Business Intelligence</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Visualize your data for better decision making
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our BI solutions provide interactive dashboards and reports that make complex data accessible and
                      actionable for your entire organization.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/services#intelligence">
                      <Button variant="link" className="text-cyan-400 hover:text-cyan-300 p-0">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader>
                    <TrendingUp className="h-10 w-10 text-green-500" />
                    <CardTitle className="text-xl">Growth Strategy</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Scale your business with data-backed strategies
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We help you identify growth opportunities and develop strategies that leverage your data assets to
                      achieve sustainable business growth.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/services#growth">
                      <Button variant="link" className="text-green-400 hover:text-green-300 p-0">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Unlock the Power of Your Data?
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of businesses that trust Datika for their analytics and advertising needs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <Input
                    className="max-w-lg flex-1 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-zinc-500">
                  By subscribing, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

