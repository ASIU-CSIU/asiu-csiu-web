import type { Organization, OrganizationConfig, MetadataConfig } from '@asiu/shared-types'

// Organization configurations
export const organizationConfigs: Record<Organization, OrganizationConfig> = {
  asiu: {
    name: 'Advocates for Science @ IU',
    shortName: 'ASIU',
    url: 'https://www.advocatesforscienceatiu.org',
    description: 'Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society.',
    brandColor: '#002F5F', // IU Blue
    logo: '/images/asiu-logo.png'
  },
  csiu: {
    name: 'Concerned Scientists @ IU',
    shortName: 'CSIU',
    url: 'https://www.csiub.org',
    description: 'Faculty organization dedicated to promoting scientific integrity and evidence-based policy at Indiana University.',
    brandColor: '#A03C30', // IU Red
    logo: '/images/csiu-logo.png'
  }
}

// Generate organization-specific metadata
export function generateOrganizationMetadata(org: Organization, pageConfig?: Partial<MetadataConfig>) {
  const orgConfig = organizationConfigs[org]
  
  const baseConfig: MetadataConfig = {
    title: pageConfig?.title ? `${pageConfig.title} | ${orgConfig.name}` : `${orgConfig.name} | Science Policy Advocacy`,
    description: pageConfig?.description || orgConfig.description,
    url: pageConfig?.url || orgConfig.url,
    image: pageConfig?.image || `${orgConfig.url}/images/og-image.jpg`,
    keywords: [
      'science policy',
      'advocacy',
      'Indiana University',
      'scientific integrity',
      'evidence-based policy',
      'science communication',
      'policy research',
      'climate policy',
      'environmental advocacy',
      'healthcare policy',
      'democracy',
      orgConfig.shortName,
      ...(pageConfig?.keywords || [])
    ]
  }

  return {
    title: {
      default: baseConfig.title,
      template: `%s | ${orgConfig.name}`
    },
    description: baseConfig.description,
    keywords: baseConfig.keywords,
    authors: [{ name: orgConfig.name }],
    creator: orgConfig.name,
    publisher: orgConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(orgConfig.url),
    alternates: {
      canonical: pageConfig?.url || "/",
      languages: {
        'en-US': pageConfig?.url || '/',
        'en': pageConfig?.url || '/'
      },
      types: {
        'application/rss+xml': [
          { url: '/rss.xml', title: `${orgConfig.name} RSS Feed` },
        ],
      }
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseConfig.url,
      siteName: orgConfig.name,
      title: baseConfig.title,
      description: baseConfig.description,
      images: [
        {
          url: baseConfig.image,
          width: 1200,
          height: 630,
          alt: `${orgConfig.name} - Science Policy Advocacy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: baseConfig.title,
      description: baseConfig.description,
      images: [baseConfig.image],
      creator: `@${orgConfig.shortName}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'mask-icon', url: '/icons/safari-pinned-tab.svg', color: orgConfig.brandColor },
      ],
    },
    manifest: '/manifest.json',
  }
}

// Generate structured data for organizations
export function getOrganizationStructuredData(org: Organization) {
  const orgConfig = organizationConfigs[org]
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: orgConfig.name,
    alternateName: orgConfig.shortName,
    url: orgConfig.url,
    logo: `${orgConfig.url}${orgConfig.logo}`,
    description: orgConfig.description,
    sameAs: [
      // Add social media URLs here when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: `contact@${new URL(orgConfig.url).hostname}`,
      contactType: 'General Inquiry'
    }
  }
}

// Event schema generation
export function generateEventSchema(eventData: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    ...eventData
  }
}

// SEO helper functions
export function generatePageTitle(pageTitle: string, org: Organization): string {
  const orgConfig = organizationConfigs[org]
  return `${pageTitle} | ${orgConfig.name}`
}

export function generateCanonicalUrl(path: string, org: Organization): string {
  const orgConfig = organizationConfigs[org]
  return `${orgConfig.url}${path}`
}