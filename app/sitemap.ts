import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://datika.ca/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://datika.ca/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://datika.ca/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://datika.ca/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://datika.ca/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://datika.ca/blog/1',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: 'https://datika.ca/blog/2',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
  ]
}