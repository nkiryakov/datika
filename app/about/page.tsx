import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BarChart2, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
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
                    About{" "}
                    <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      Datika
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    We're a team of data scientists, analysts, and digital marketers passionate about turning data into
                    growth opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Datika Team"
                    fill
                    className="object-cover rounded-xl"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Story</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 2018, Datika was born from a simple idea: data should be accessible, understandable, and
                  actionable for businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:gap-12">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                  <p className="text-zinc-400">
                    To empower businesses with data-driven insights that drive growth, innovation, and competitive
                    advantage in an increasingly digital world.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                  <p className="text-zinc-400">
                    To be the leading provider of integrated data analytics and digital advertising solutions, known for
                    our expertise, innovation, and measurable results.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Values</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide our work and relationships with clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <BarChart2 className="h-10 w-10 text-purple-500" />
                  <CardTitle className="text-xl">Data Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    We believe in the accuracy, consistency, and reliability of data as the foundation of all our work.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-500" />
                  <CardTitle className="text-xl">Client Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    We work as an extension of your team, aligning our expertise with your business goals.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <Award className="h-10 w-10 text-cyan-500" />
                  <CardTitle className="text-xl">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    We strive for excellence in everything we do, from analysis to implementation to client service.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700 text-white">
                <CardHeader>
                  <Clock className="h-10 w-10 text-green-500" />
                  <CardTitle className="text-xl">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    We continuously explore new technologies and methodologies to deliver cutting-edge solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Team</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the experts behind Datika's success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3 lg:gap-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col items-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={`/placeholder.svg?height=160&width=160&text=Team Member ${i}`}
                      alt={`Team Member ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold text-white">Team Member {i}</h3>
                    <p className="text-sm text-zinc-400">Position</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Work With Us?
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's transform your data into your most valuable business asset.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Contact Us
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

