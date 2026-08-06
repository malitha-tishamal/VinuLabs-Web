import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://vinulabs.com'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/industries',
    '/talent-grooming',
    '/blog',
    '/contact',
    '/documentation',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${basePath}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}

