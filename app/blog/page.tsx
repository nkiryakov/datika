import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways Data Analytics Can Transform Your Marketing Strategy",
      excerpt: "Learn how data analytics can help you optimize your marketing campaigns and drive better results.",
      date: "March 15, 2023",
      author: "Jane Smith",
      category: "Marketing Analytics",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "The Future of Business Intelligence: Trends to Watch",
      excerpt:
        "Explore the emerging trends in business intelligence that will shape the future of data-driven decision making.",
      date: "February 28, 2023",
      author: "John Doe",
      category: "Business Intelligence",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "How to Build a Data-Driven Culture in Your Organization",
      excerpt:
        "Discover practical steps to foster a data-driven culture that empowers your team to make better decisions.",
      date: "January 20, 2023",
      author: "Sarah Johnson",
      category: "Data Culture",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Predictive Analytics: Turning Historical Data into Future Insights",
      excerpt: "Learn how predictive analytics can help you anticipate customer behavior and market trends.",
      date: "December 12, 2022",
      author: "Michael Brown",
      category: "Predictive Analytics",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "The ROI of Data Analytics: Measuring the Impact on Your Business",
      excerpt: "Discover how to measure and maximize the return on investment from your data analytics initiatives.",
      date: "November 5, 2022",
      author: "Emily Chen",
      category: "ROI",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Data Privacy in the Age of Analytics: Best Practices",
      excerpt: "Learn how to balance data analytics needs with privacy concerns and regulatory compliance.",
      date: "October 18, 2022",
      author: "David Wilson",
      category: "Data Privacy",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Datika{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Blog
                  </span>
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Insights, trends, and best practices in data analytics and digital advertising.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="bg-zinc-800 border-zinc-700 text-white overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                      <span className="inline-block rounded-full bg-zinc-700 px-2 py-1 text-xs">{post.category}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start space-y-4">
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                Load More
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Subscribe to Our Newsletter
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get the latest insights and trends in data analytics and digital advertising delivered to your inbox.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <input
                    className="max-w-lg flex-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder:text-zinc-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  >
                    Subscribe
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

