import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://datika.com"

  // Define all routes in English
  const routes = ["", "/about", "/services", "/blog", "/contact", "/blog/1", "/blog/2"]

  const sitemap: MetadataRoute.Sitemap = []

  // Add English routes
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
    })
  })

  // Add French routes
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}/fr${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
    })
  })

  return sitemap
}

