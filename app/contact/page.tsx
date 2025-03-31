import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Get in{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Have a question or ready to start your data journey? We're here to help.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Contact Information
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Reach out to us through any of these channels or fill out the form.
                </p>
              </div>
              <div className="grid gap-6">
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Mail className="h-8 w-8 text-purple-500" />
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-400">For general inquiries:</CardDescription>
                    <p className="font-medium">info@datika.com</p>
                    <CardDescription className="text-zinc-400 mt-2">For support:</CardDescription>
                    <p className="font-medium">support@datika.com</p>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Phone className="h-8 w-8 text-blue-500" />
                    <CardTitle>Phone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-400">Main office:</CardDescription>
                    <p className="font-medium">+1 (555) 123-4567</p>
                    <CardDescription className="text-zinc-400 mt-2">Support line:</CardDescription>
                    <p className="font-medium">+1 (555) 987-6543</p>
                  </CardContent>
                </Card>
                <Card className="bg-zinc-800 border-zinc-700 text-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <MapPin className="h-8 w-8 text-cyan-500" />
                    <CardTitle>Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-400">Headquarters:</CardDescription>
                    <p className="font-medium">123 Data Street, Analytics City, AC 12345</p>
                    <CardDescription className="text-zinc-400 mt-2">Office hours:</CardDescription>
                    <p className="font-medium">Monday - Friday: 9am - 6pm</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Send Us a Message</h2>
                <p className="text-zinc-400">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <form className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="company" className="text-white">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Enter your company name"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Enter the subject"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px] bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
                  />
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

