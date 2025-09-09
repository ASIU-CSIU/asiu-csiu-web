import { MetadataRoute } from 'next'
import { getCanonicalUrl } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getCanonicalUrl()
  const currentDate = new Date().toISOString()

  // Set realistic last modified dates for different types of content
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
  const lastYear = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString()

  // Static pages with their priorities and change frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified: lastWeek, // Homepage updated weekly with events/news
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: getCanonicalUrl('/about'),
      lastModified: lastMonth, // About page changes less frequently
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: getCanonicalUrl('/news'),
      lastModified: lastWeek, // News section updated regularly
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: getCanonicalUrl('/get-involved'),
      lastModified: lastWeek, // Events page updated weekly
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: getCanonicalUrl('/team'),
      lastModified: lastMonth, // Team page updated when members change
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: getCanonicalUrl('/contact'),
      lastModified: lastMonth, // Contact info changes occasionally
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: getCanonicalUrl('/privacy'),
      lastModified: lastYear, // Legal pages rarely change
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: getCanonicalUrl('/accessibility'),
      lastModified: lastYear, // Accessibility statement rarely changes
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    // Add newsletter signup page if it exists
    {
      url: getCanonicalUrl('/newsletter-signups'),
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  return staticPages
}
