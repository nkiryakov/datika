"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, User, BarChart2, Database, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { blogPosts } from "@/lib/blog"

export default function BlogPostPage({ id }: { id: string }) {
  const postId = Number.parseInt(id)
  const post = blogPosts.find((post) => post.id === postId)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">Blog post not found</h1>
            <Link href="/blog">
              <Button className="mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Link href="/blog" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <div className="flex items-center justify-center h-32 w-32">
                  {post.id === 1 ? (
                    <BarChart2 className="h-24 w-24 text-purple-500" />
                  ) : (
                    <Database className="h-24 w-24 text-blue-500" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300 mb-2">
                    {post.category}
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    {post.title}
                  </h1>
                  <div className="flex items-center justify-center gap-4 text-sm text-zinc-400 mt-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="w-full py-12 md:py-16 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl prose prose-invert prose-zinc">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Ready to Transform Your Data Strategy?
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how our data analytics services can help your business grow.
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
