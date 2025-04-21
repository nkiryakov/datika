import type { Metadata } from "next"
import { getBlogPostMetadata } from "@/lib/blog"
import BlogPostPage from "@/components/pages/blog-post-page"

// Generate metadata dynamically based on the blog post ID
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return getBlogPostMetadata(params.id)
}

export default function Page({ params }: { params: { id: string } }) {
  return <BlogPostPage id={params.id} />
}
