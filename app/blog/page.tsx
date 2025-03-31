"use client"

import Link from "next/link"
import { ArrowRight, Calendar, User, BarChart2, Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/components/language-provider"

export default function BlogPage() {
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

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Predictive Analytics in Business Decision Making",
      excerpt:
        "Explore how predictive analytics is transforming business strategy and enabling more accurate forecasting across industries.",
      date: "February 12, 2025",
      author: "Nikola Kiryakov",
      category: "Predictive Analytics",
      icon: <BarChart2 className="h-24 w-24 text-purple-500" />,
    },
    {
      id: 2,
      title: "Building a Data-Driven Culture: Strategies for Modern Organizations",
      excerpt:
        "Learn practical approaches to fostering a data-driven mindset throughout your organization for better decision making at all levels.",
      date: "February 25, 2025",
      author: "Nikola Kiryakov",
      category: "Data Culture",
      icon: <Database className="h-24 w-24 text-blue-500" />,
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
                    {t("blog.title")}
                  </span>
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">{t("blog.subtitle")}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
              {blogPosts.map((post) => (
                <Card key={post.id} className="bg-zinc-800 border-zinc-700 text-white overflow-hidden">
                  <div className="flex items-center justify-center h-48 w-full bg-zinc-700/50">{post.icon}</div>
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
                        <span>
                          {t("blog.date")}: {post.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>
                          {t("blog.author")}: {post.author}
                        </span>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0">
                        {t("blog.readMore")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

