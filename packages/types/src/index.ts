export interface BulletinArticle {
  category: string
  publisher: string
  published: string
  title: string
  link: string
  description: string
}

export interface NewsBulletin {
  _id: string
  publication: string
  content: string
  articles?: BulletinArticle[]
}

export interface Event {
  _id: string
  title: string
  subtitle: string
  description: string
  image?: any
  imageUrl?: string
  date: string
  startTime: string
  endTime: string
  location: string
  locationUrl: string
  audience: string[]
  participantCount?: number
  tags: string[]
  btnText: string
  btnUrl: string
  organization?: 'asiu' | 'csiu' | 'shared'
}

export interface InstagramPost {
  id: string
  imageUrl: string
  caption: string
  likes: number
  comments: number
  timestamp: string
  permalink: string
}

export interface NewsletterSubscription {
  email: string
  timestamp: string
  source: string
  status: string
}

export interface SanityImage {
  asset: {
    _ref: string
    _type: string
  }
  _type: string
}

export interface CommitteeChair {
  _id: string
  name: string
  role: string
  bio: string
  email?: string
  tags?: string[]
  socialLinks?: string[]
  image?: SanityImage
  imageUrl?: string
  organization?: 'asiu' | 'csiu' | 'shared'
}

export interface FacultyAdvisor {
  _id: string
  name: string
  role: string
  bio: string
  email?: string
  tags?: string[]
  socialLinks?: string[]
  image?: SanityImage
  imageUrl?: string
  organization?: 'asiu' | 'csiu' | 'shared'
}

export interface NewsArticle {
  _id: string
  title: string
  content: string
  publishDate: string
  author?: string
  tags?: string[]
  featured?: boolean
  organization?: 'asiu' | 'csiu' | 'shared'
}

// Organization configuration types
export interface OrganizationConfig {
  name: string
  shortName: string
  url: string
  description: string
  brandColor: string
  logo?: string
}

export type Organization = 'asiu' | 'csiu'

// SEO Types
export interface MetadataConfig {
  title: string
  description: string
  url: string
  image?: string
  keywords?: string[]
}

export interface EventSchemaData {
  name: string
  description: string
  startDate: string
  location: {
    name: string
    address: {
      addressLocality: string
      addressRegion: string
      addressCountry: string
      postalCode: string
    }
  }
  organizer: {
    name: string
    url: string
  }
  offers?: {
    price: string
    priceCurrency: string
    availability: string
  }
}