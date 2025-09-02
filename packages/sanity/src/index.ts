import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Types for the Sanity package
export type Organization = 'asiu' | 'csiu'

// Create configurable Sanity client
export function createSanityClient(config?: {
  projectId?: string
  dataset?: string
  useCdn?: boolean
  apiVersion?: string
}) {
  return createClient({
    projectId: config?.projectId || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e1212ave',
    dataset: config?.dataset || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    useCdn: config?.useCdn ?? true,
    apiVersion: config?.apiVersion || '2024-01-01',
  })
}

// Default client instance
const client = createSanityClient()

// Image URL builder
const builder = imageUrlBuilder(client)
export const urlFor = (source: SanityImageSource) => builder.image(source)

// Organization-specific queries
export const getOrganizationEvents = async (org: Organization) => {
  const query = `*[_type == "event" && (organization == "${org}" || organization == "shared")] {
    _id,
    title,
    subtitle,
    description,
    "imageUrl": image.asset->url,
    date,
    startTime,
    endTime,
    location,
    locationUrl,
    audience,
    participantCount,
    tags,
    btnText,
    btnUrl,
    organization
  } | order(date asc)`

  return await client.fetch(query)
}

export const getOrganizationNews = async (org: Organization) => {
  const query = `*[_type == "newsArticle" && (organization == "${org}" || organization == "shared")] {
    _id,
    title,
    content,
    publishDate,
    author,
    tags,
    featured,
    organization
  } | order(publishDate desc)`

  return await client.fetch(query)
}

export const getOrganizationCommitteeChairs = async (org: Organization) => {
  const query = `*[_type == "committeeChair" && (organization == "${org}" || organization == "shared")] {
    _id,
    name,
    role,
    bio,
    email,
    tags,
    socialLinks,
    "imageUrl": image.asset->url,
    organization
  } | order(name asc)`

  return await client.fetch(query)
}

export const getOrganizationFacultyAdvisors = async (org: Organization) => {
  const query = `*[_type == "facultyAdvisor" && (organization == "${org}" || organization == "shared")] {
    _id,
    name,
    role,
    bio,
    email,
    tags,
    socialLinks,
    "imageUrl": image.asset->url,
    organization
  } | order(name asc)`

  return await client.fetch(query)
}

// Legacy queries (for backward compatibility)
export const getCommitteeChairs = async () => {
  const query = `*[_type == "committeeChair"] {
    _id,
    name,
    role,
    bio,
    email,
    tags,
    socialLinks,
    "imageUrl": image.asset->url
  } | order(name asc)`

  return await client.fetch(query)
}

export const getFacultyAdvisors = async () => {
  const query = `*[_type == "facultyAdvisor"] {
    _id,
    name,
    role,
    bio,
    email,
    tags,
    socialLinks,
    "imageUrl": image.asset->url
  } | order(name asc)`

  return await client.fetch(query)
}

export const getNewsBulletins = async () => {
  const query = `*[_type == "newsBulletin"] {
    _id,
    publication,
    content
  } | order(publication desc)`

  return await client.fetch(query)
}

export const getTestimonials = async () => {
  const query = `*[_type == "testimonial"] {
    _id,
    quote,
    author,
    role
  } | order(_createdAt desc)`

  return await client.fetch(query)
}

export const getExternalLinks = async () => {
  const query = `*[_type == "externalLink"] {
    _id,
    title,
    url,
    description
  } | order(title asc)`

  return await client.fetch(query)
}

export const getCommittees = async () => {
  const query = `*[_type == "committee"] {
    _id,
    name,
    description
  } | order(name asc)`

  return await client.fetch(query)
}

export const getNewsArticles = async () => {
  const query = `*[_type == "newsArticle"] {
    _id,
    title,
    content,
    publishedAt
  } | order(publishedAt desc)`

  return await client.fetch(query)
}

export const getEvents = async () => {
  const query = `*[_type == "event"] {
    _id,
    title,
    subtitle,
    description,
    "imageUrl": image.asset->url,
    date,
    startTime,
    endTime,
    location,
    locationUrl,
    audience,
    participantCount,
    tags,
    btnText,
    btnUrl
  } | order(date asc)`

  return await client.fetch(query)
}

export const getPastEvents = async (org?: Organization) => {
  const today = new Date().toISOString().split('T')[0]
  const orgFilter = org ? ` && (organization == "${org}" || organization == "shared")` : ''
  const query = `*[_type == "event" && date < "${today}"${orgFilter}] {
    _id,
    title,
    subtitle,
    description,
    "imageUrl": image.asset->url,
    date,
    startTime,
    endTime,
    location,
    locationUrl,
    audience,
    participantCount,
    tags,
    btnText,
    btnUrl,
    organization
  } | order(date desc)`

  return await client.fetch(query)
}

export const getUpcomingEvents = async (org?: Organization) => {
  const today = new Date().toISOString().split('T')[0]
  const orgFilter = org ? ` && (organization == "${org}" || organization == "shared")` : ''
  const query = `*[_type == "event" && date >= "${today}"${orgFilter}] {
    _id,
    title,
    subtitle,
    description,
    "imageUrl": image.asset->url,
    date,
    startTime,
    endTime,
    location,
    locationUrl,
    audience,
    participantCount,
    tags,
    btnText,
    btnUrl,
    organization
  } | order(date asc)`

  return await client.fetch(query)
}