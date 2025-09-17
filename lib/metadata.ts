import type { Metadata } from "next"

// Canonical domain configuration
export const CANONICAL_DOMAIN = process.env.CANONICAL_DOMAIN || "www.advocatesforscienceatiu.org"

// Domain mappings for each organization
export const domainMappings = {
  asiu: [
    "www.advocatesforscienceatiu.org",
    "advocatesforscienceatiu.org",
    "asiu.indiana.edu",
    "advocates-science-iu.vercel.app", // Example placeholder domain
    "asiu-staging.vercel.app", // Example staging domain
    "asiu.vercel.app",
  ],
  csiu: [
    "www.advocatesforscienceatiu.org",
    "csiub.org",
    "concernedscientists.iu.edu",
    "csiu.indiana.edu",
    "concerned-scientists-iu.vercel.app", // Example placeholder domain
    "csiu-staging.vercel.app", // Example staging domain
    "csiu.vercel.app",
  ]
}

// Organization configurations for different domains
export const organizationConfigs = {
  asiu: {
    name: "Advocates for Science @ IU",
    shortName: "ASIU",
    description: "Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society. Join our community of science advocates.",
    domains: domainMappings.asiu,
    primaryDomain: "www.advocatesforscienceatiu.org",
    logoPath: "/icons/asiu/logo.svg",
    twitterHandle: "@asiu_indiana",
    email: "asiu@indiana.edu",
    keywords: [
      "science policy",
      "advocacy",
      "Indiana University",
      "student organization",
      "scientific integrity",
      "evidence-based policy",
      "science communication",
      "policy research",
      "climate policy",
      "environmental advocacy",
      "healthcare policy",
      "democracy",
      "ASIU",
      "Concerned Scientists"
    ]
  },
  csiu: {
    name: "Concerned Scientists @ IU",
    shortName: "CSIU",
    description: "Faculty and staff organization at Indiana University dedicated to promoting scientific integrity and evidence-based decision making in policy and society. Working with our student affiliate Advocates for Science @ IU.",
    domains: domainMappings.csiu,
    primaryDomain: "www.advocatesforscienceatiu.org",
    logoPath: "/icons/csiu/logo.svg",
    twitterHandle: "@csiu_indiana",
    email: "csiu@indiana.edu",
    keywords: [
      "science policy",
      "faculty advocacy",
      "Indiana University",
      "scientific integrity",
      "evidence-based policy",
      "science communication",
      "policy research",
      "climate policy",
      "environmental advocacy",
      "healthcare policy",
      "democracy",
      "CSIU",
      "Concerned Scientists"
    ]
  }
}

// Helper function to get organization config for a given domain
export function getOrgConfigForDomain(domain?: string): typeof organizationConfigs.asiu {
  if (!domain) {
    return organizationConfigs.asiu // Default fallback
  }

  // Check if domain belongs to CSIU
  if (domainMappings.csiu.includes(domain)) {
    return organizationConfigs.csiu
  }

  // Check if domain belongs to ASIU
  if (domainMappings.asiu.includes(domain)) {
    return organizationConfigs.asiu
  }

  // Default to ASIU if domain not found
  return organizationConfigs.asiu
}

// Helper function to get current organization config based on domain
export function getCurrentOrgConfig(): typeof organizationConfigs.asiu {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    return getOrgConfigForDomain(hostname)
  }
  return organizationConfigs.asiu
}

// Helper function to get canonical URL (configurable via environment variable)
export function getCanonicalUrl(path: string = ''): string {
  return `https://${CANONICAL_DOMAIN}${path}`
}

// Helper function to get current domain URL (for dynamic content)
export function getCurrentDomainUrl(path: string = '', domain?: string): string {
  const config = getOrgConfigForDomain(domain)
  return `https://${config.primaryDomain}${path}`
}

// Helper function to check if a domain is canonical
export function isCanonicalDomain(domain?: string): boolean {
  if (!domain) return false
  return domain === CANONICAL_DOMAIN
}

// Helper function to get all domains for an organization
export function getOrganizationDomains(orgType: 'asiu' | 'csiu'): string[] {
  return organizationConfigs[orgType].domains
}

// Helper function to get all domains across both organizations
export function getAllDomains(): string[] {
  return [...domainMappings.asiu, ...domainMappings.csiu]
}

// Dynamic base metadata configuration
export function getBaseMetadata(domain?: string): Metadata {
  const config = getOrgConfigForDomain(domain)

  return {
    title: {
      default: `${config.name} | Science Policy Advocacy`,
      template: `%s | ${config.name}`
    },
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: config.name }],
    creator: config.name,
    publisher: config.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(`https://${config.primaryDomain}`),
    alternates: {
      canonical: "/",
      languages: {
        'en-US': '/',
        'en': '/'
      },
      types: {
        'application/rss+xml': [
          { url: '/rss.xml', title: `${config.name} RSS Feed` },
        ],
      }
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://${config.primaryDomain}`,
      siteName: config.name,
      title: `${config.name} | Science Policy Advocacy`,
      description: config.description,
      images: [
        {
          url: `https://${config.primaryDomain}${config.logoPath}`,
          width: 1200,
          height: 630,
          alt: `${config.name} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${config.name} | Science Policy Advocacy`,
      description: config.description,
      images: [`https://${config.primaryDomain}${config.logoPath}`],
      creator: config.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add your actual Google Search Console verification code here
      // google: "your-actual-verification-code",
    },
  }
}

// Legacy export for backward compatibility
export const baseMetadata = getBaseMetadata()

// Dynamic page-specific metadata configurations
export function getPageMetadata(page: string, domain?: string) {
  const config = getOrgConfigForDomain(domain)

  const pageConfigs = {
    home: {
      title: `${config.name} | Science Policy Advocacy`,
      description: `Join ${config.name} in promoting scientific integrity and evidence-based decision making. Discover our latest advocacy efforts, events, and opportunities to get involved. Make a difference in science policy today!`,
      keywords: [
        "science policy advocacy",
        "evidence-based decision making",
        "scientific integrity",
        config.shortName === "ASIU" ? "student advocacy" : "faculty advocacy",
        "policy research",
        "science communication",
        "climate policy",
        "environmental advocacy",
        "healthcare policy",
        "democracy",
        "Indiana University",
        config.shortName
      ],
      openGraph: {
        title: `Science at the Heart of Policy | ${config.name}`,
        description: "Join us in promoting scientific integrity and evidence-based decision making. Get involved today!",
      },
      twitter: {
        title: `Science at the Heart of Policy | ${config.name}`,
        description: "Join us in promoting scientific integrity and evidence-based decision making. Get involved today!",
      },
      alternates: {
        canonical: "/",
      },
      other: {
        link: [
          {
            rel: "preload",
            href: "/images/overlays/overlay-home.JPG",
            as: "image",
            type: "image/jpeg"
          }
        ]
      },
    },
    about: {
      title: "About Our Mission",
      description: `Learn about ${config.name}'s mission to bridge the gap between scientific research and public policy. Discover our values, leadership team, and commitment to evidence-based advocacy. Join our mission today!`,
      keywords: [
        `${config.shortName} mission`,
        "science policy mission",
        "evidence-based advocacy",
        "scientific integrity",
        "policy research",
        config.shortName === "ASIU" ? "student leadership" : "faculty leadership",
        "committee chairs",
        "faculty advisors",
        "science communication",
        "advocacy values",
        "Indiana University",
        "Concerned Scientists"
      ],
      openGraph: {
        title: `About Our Mission | ${config.name}`,
        description: "Learn about our mission to bridge the gap between scientific research and public policy. Join us!",
      },
      twitter: {
        title: `About Our Mission | ${config.name}`,
        description: "Learn about our mission to bridge the gap between scientific research and public policy. Join us!",
      },
      alternates: {
        canonical: "/about",
      },
      other: {
        link: [
          {
            rel: "preload",
            href: "/images/overlays/overlay-about.JPG",
            as: "image",
            type: "image/jpeg"
          }
        ]
      },
    },
    contact: {
      title: "Contact Us",
      description: `Get in touch with ${config.name} today! Connect with our leadership team, join our community, or learn more about our advocacy efforts. We welcome questions and collaboration opportunities. Reach out now!`,
      keywords: [
        `contact ${config.shortName}`,
        "get in touch",
        "leadership team contact",
        `join ${config.shortName}`,
        "collaboration opportunities",
        "science policy contact",
        "advocacy questions",
        "Indiana University contact",
        config.shortName === "ASIU" ? "student organization contact" : "faculty organization contact",
        "policy research contact"
      ],
      openGraph: {
        title: `Contact Us | ${config.name}`,
        description: "Get in touch with our leadership team and learn how to get involved. Contact us today!",
      },
      twitter: {
        title: `Contact Us | ${config.name}`,
        description: "Get in touch with our leadership team and learn how to get involved. Contact us today!",
      },
      alternates: {
        canonical: "/contact",
      },
      other: {
        link: [
          {
            rel: "preload",
            href: "/images/overlays/overlay-contact.JPG",
            as: "image",
            type: "image/jpeg"
          }
        ]
      },
    },
    getInvolved: {
      title: "Get Involved",
      description: `Join ${config.name} and make a real difference in science policy! Discover upcoming events, volunteer opportunities, and ways to contribute to evidence-based advocacy efforts. Start making an impact today!`,
      keywords: [
        `join ${config.shortName}`,
        "get involved",
        "volunteer opportunities",
        "upcoming events",
        "science policy events",
        "advocacy training",
        "community engagement",
        config.shortName === "ASIU" ? "student involvement" : "faculty involvement",
        "policy research opportunities",
        "science communication events",
        "Indiana University events"
      ],
      openGraph: {
        title: `Get Involved | ${config.name}`,
        description: "Join us and make a difference in science policy. Discover events and opportunities today!",
      },
      twitter: {
        title: `Get Involved | ${config.name}`,
        description: "Join us and make a difference in science policy. Discover events and opportunities today!",
      },
      alternates: {
        canonical: "/get-involved",
      },
      other: {
        link: [
          {
            rel: "preload",
            href: "/images/overlays/overlay-get-involved.JPG",
            as: "image",
            type: "image/jpeg"
          }
        ]
      },
    },
    team: {
      title: "Our Team",
      description: `Meet the dedicated ${config.shortName === "ASIU" ? "students and faculty" : "faculty and staff"} who lead ${config.name}'s advocacy efforts. Learn about our leadership team, committee chairs, and faculty advisors driving meaningful change in science policy.`,
      keywords: [
        `${config.shortName} team`,
        "leadership team",
        "committee chairs",
        "faculty advisors",
        "science policy leaders",
        config.shortName === "ASIU" ? "student leadership" : "faculty leadership",
        "advocacy team",
        "policy research team",
        "science communication team",
        "Indiana University leadership"
      ],
      openGraph: {
        title: `Our Team | ${config.name}`,
        description: "Meet our dedicated leadership team driving meaningful change in science policy.",
      },
      twitter: {
        title: `Our Team | ${config.name}`,
        description: "Meet our dedicated leadership team driving meaningful change in science policy.",
      },
      alternates: {
        canonical: "/team",
      },
    },
    news: {
      title: "News",
      description: `Stay updated with ${config.name}'s latest news bulletins, articles, and educational content. Read about our advocacy efforts, events, and science policy initiatives.`,
      keywords: [
        `${config.shortName} news`,
        "science policy news",
        "advocacy updates",
        "news bulletins",
        "science communication",
        "policy research",
        config.shortName === "ASIU" ? "student advocacy news" : "faculty advocacy news",
        "Indiana University",
        "science policy articles"
      ],
      openGraph: {
        title: `News | ${config.name}`,
        description: "Stay updated with our latest news bulletins, articles, and educational content about science policy and advocacy.",
      },
      twitter: {
        title: `News | ${config.name}`,
        description: "Stay updated with our latest news bulletins, articles, and educational content.",
      },
      alternates: {
        canonical: "/news",
      },
      other: {
        link: [
          {
            rel: "preload",
            href: "/images/overlays/overlay-news.JPG",
            as: "image",
            type: "image/jpeg"
          }
        ]
      },
    },
    privacy: {
      title: "Privacy Policy",
      description: `Learn about ${config.name}'s privacy practices and how we protect your personal information. Read our comprehensive privacy policy covering data collection, use, and protection.`,
      keywords: [
        "privacy policy",
        "data protection",
        "personal information",
        "cookies",
        "data security",
        "privacy practices",
        `${config.shortName} privacy`,
        config.shortName === "ASIU" ? "student organization privacy" : "faculty organization privacy"
      ],
      openGraph: {
        title: `Privacy Policy | ${config.name}`,
        description: "Learn about our privacy practices and how we protect your personal information.",
      },
      twitter: {
        title: `Privacy Policy | ${config.name}`,
        description: "Learn about our privacy practices and how we protect your personal information.",
      },
      alternates: {
        canonical: "/privacy",
      },
      other: {
        link: [
          {
            rel: "preload",
            href: "/images/overlays/overlay-privacy.JPG",
            as: "image",
            type: "image/jpeg"
          }
        ]
      },
    },
    accessibility: {
      title: "Accessibility Statement",
      description: `Learn about ${config.name}'s commitment to digital accessibility. Read our accessibility statement covering WCAG compliance, features, and how we ensure an inclusive experience for all users.`,
      keywords: [
        "accessibility statement",
        "WCAG compliance",
        "digital accessibility",
        "screen reader support",
        "keyboard navigation",
        "accessibility features",
        "inclusive design",
        `${config.shortName} accessibility`
      ],
      openGraph: {
        title: `Accessibility Statement | ${config.name}`,
        description: "Learn about our commitment to digital accessibility and inclusive design.",
      },
      twitter: {
        title: `Accessibility Statement | ${config.name}`,
        description: "Learn about our commitment to digital accessibility and inclusive design.",
      },
      alternates: {
        canonical: "/accessibility",
      },
      other: {
        link: [
          {
            rel: "preload",
            href: "/images/overlays/overlay-accessibility.JPG",
            as: "image",
            type: "image/jpeg"
          }
        ]
      },
    },
  }

  return pageConfigs[page as keyof typeof pageConfigs] || pageConfigs.home
}

// Legacy export for backward compatibility
export const pageMetadata = {
  home: getPageMetadata("home"),
  about: getPageMetadata("about"),
  contact: getPageMetadata("contact"),
  getInvolved: getPageMetadata("getInvolved"),
  team: getPageMetadata("team"),
  news: getPageMetadata("news"),
  privacy: getPageMetadata("privacy"),
  accessibility: getPageMetadata("accessibility"),
}

// Dynamic structured data configurations
export function getStructuredData(page: string, domain?: string) {
  const config = getOrgConfigForDomain(domain)

  const structuredDataConfigs = {
    organization: {
      "@context": "https://schema.org",
      "@type": ["Organization", "EducationalOrganization"],
      "name": config.name,
      "alternateName": config.shortName,
      "description": config.description,
      "url": `https://${config.primaryDomain}`,
      "logo": {
        "@type": "ImageObject",
        "url": `https://${config.primaryDomain}${config.logoPath}`,
        "width": 400,
        "height": 400
      },
      "image": {
        "@type": "ImageObject",
        "url": `https://${config.primaryDomain}${config.logoPath}`,
        "width": 1200,
        "height": 630
      },
      "sameAs": config.shortName === "ASIU" ? [
        "https://www.instagram.com/asiu.indiana",
        "https://www.facebook.com/profile.php?id=61573877797290",
        "https://twitter.com/asiu_indiana"
      ] : [
        "https://concernedscientists.iu.edu/",
        "https://twitter.com/csiu_indiana"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bloomington",
        "addressRegion": "IN",
        "addressCountry": "US",
        "postalCode": "47405"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "general",
          "email": config.email,
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "contactType": "public relations",
          "email": config.email,
          "availableLanguage": "English"
        }
      ],
      "foundingDate": "2024",
      "memberOf": config.shortName === "ASIU" ? {
        "@type": "Organization",
        "name": "Concerned Scientists @ IU",
        "url": "https://concernedscientists.iu.edu/"
      } : undefined,
      "parentOrganization": {
        "@type": "EducationalOrganization",
        "name": "Indiana University Bloomington",
        "url": "https://www.indiana.edu/"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Indiana",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "39.1637",
          "longitude": "-86.5264"
        }
      },
      "knowsAbout": [
        "Science Policy",
        "Evidence-based Decision Making",
        "Scientific Integrity",
        "Climate Policy",
        "Environmental Advocacy",
        "Healthcare Policy",
        "Science Communication"
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Science Policy Advocacy Training",
            "description": "Training and workshops on effective science policy advocacy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Science Communication Workshops",
            "description": "Workshops on communicating science to policymakers and the public"
          }
        }
      ]
    },
    home: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `${config.name} - Home`,
      "description": config.description,
      "url": `https://${config.primaryDomain}`,
      "mainEntity": {
        "@type": "Organization",
        "name": config.name,
        "description": config.description
      },
      "potentialAction": [
        {
          "@type": "JoinAction",
          "target": getCanonicalUrl('/get-involved'),
          "description": `Join ${config.name}`
        },
        {
          "@type": "DonateAction",
          "target": "https://www.gofundme.com/f/support-advocates-for-science-iu",
          "description": `Donate to ${config.name}`
        }
      ]
    },
    about: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `About - ${config.name}`,
      "description": "Learn about our mission to bridge the gap between scientific research and public policy",
      "url": `https://${config.primaryDomain}/about`,
      "mainEntity": {
        "@type": "Organization",
        "name": config.name,
        "description": config.description,
        "foundingDate": "2024",
        "mission": "To promote scientific integrity and evidence-based decision making in policy and society"
      }
    },
    contact: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": `Contact - ${config.name}`,
      "description": "Get in touch with our leadership team and learn how to get involved",
      "url": `https://${config.primaryDomain}/contact`,
      "mainEntity": {
        "@type": "Organization",
        "name": config.name,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "general",
          "email": config.email,
          "availableLanguage": "English"
        }
      }
    },
    getInvolved: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `Get Involved - ${config.name}`,
      "description": "Join us and make a difference in science policy",
      "url": `https://${config.primaryDomain}/get-involved`,
      "mainEntity": {
        "@type": "ItemList",
        "name": "Upcoming Events",
        "description": `Events and opportunities to get involved with ${config.name}`,
        "itemListElement": [
          {
            "@type": "Event",
            "name": "Science Communication Workshop",
            "description": "Learn effective strategies for communicating with policymakers",
            "startDate": "2025-01-15T18:00:00-05:00",
            "endDate": "2025-01-15T21:00:00-05:00",
            "location": {
              "@type": "Place",
              "name": "Wells Library, Conference Room A",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bloomington",
                "addressRegion": "IN"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": config.name
            }
          },
          {
            "@type": "Event",
            "name": "Climate Action Town Hall",
            "description": "Community discussion on local climate policy initiatives",
            "startDate": "2025-01-22T19:00:00-05:00",
            "endDate": "2025-01-22T20:30:00-05:00",
            "location": {
              "@type": "Place",
              "name": "Monroe County Public Library",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bloomington",
                "addressRegion": "IN"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": config.name
            }
          }
        ]
      }
    },
    team: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `Our Team - ${config.name}`,
      "description": "Meet our dedicated leadership team driving meaningful change in science policy",
      "url": `https://${config.primaryDomain}/team`,
      "mainEntity": {
        "@type": "Organization",
        "name": config.name,
        "description": config.description,
        "employee": [
          {
            "@type": "Person",
            "name": "Alex Martinez",
            "jobTitle": "Co-President",
            "description": "Graduate student in Environmental Science with a focus on climate policy"
          },
          {
            "@type": "Person",
            "name": "Sarah Patel",
            "jobTitle": "Co-President",
            "description": "Undergraduate in Public Policy and Biology specializing in science communication"
          },
          {
            "@type": "Person",
            "name": "Dr. Rebecca Foster",
            "jobTitle": "Faculty Advisor",
            "description": "Professor of Environmental Policy and Director of the Science Policy Institute at IU"
          }
        ]
      }
    },
    news: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `News - ${config.name}`,
      "description": "Stay updated with our latest news bulletins, articles, and educational content about science policy and advocacy.",
      "url": `https://${config.primaryDomain}/news`,
      "mainEntity": {
        "@type": "ItemList",
        "name": "News Articles",
        "description": `Latest news and articles from ${config.name}`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Article",
              "headline": "Science Policy Updates",
              "description": "Latest developments in science policy and advocacy",
              "author": {
                "@type": "Organization",
                "name": config.name
              },
              "publisher": {
                "@type": "Organization",
                "name": config.name,
                "logo": {
                  "@type": "ImageObject",
                  "url": `https://${config.primaryDomain}${config.logoPath}`
                }
              },
              "datePublished": "2024-12-15",
              "dateModified": "2024-12-15"
            }
          }
        ]
      },
      "potentialAction": {
        "@type": "SubscribeAction",
        "target": `https://${config.primaryDomain}/news`,
        "description": "Subscribe to our news updates"
      }
    },
    privacy: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `Privacy Policy - ${config.name}`,
      "description": "Learn about our privacy practices and how we protect your personal information",
      "url": `https://${config.primaryDomain}/privacy`,
      "mainEntity": {
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description": `Privacy policy for ${config.name}`
      }
    },
    accessibility: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `Accessibility Statement - ${config.name}`,
      "description": "Learn about our commitment to digital accessibility and inclusive design",
      "url": `https://${config.primaryDomain}/accessibility`,
      "mainEntity": {
        "@type": "WebPage",
        "name": "Accessibility Statement",
        "description": `Accessibility statement for ${config.name}`
      }
    }
  }

  return structuredDataConfigs[page as keyof typeof structuredDataConfigs] || structuredDataConfigs.organization
}

// Legacy export for backward compatibility
export const structuredData = {
  organization: getStructuredData("organization"),
  home: getStructuredData("home"),
  about: getStructuredData("about"),
  contact: getStructuredData("contact"),
  getInvolved: getStructuredData("getInvolved"),
  team: getStructuredData("team"),
  news: getStructuredData("news"),
  privacy: getStructuredData("privacy"),
  accessibility: getStructuredData("accessibility"),
}

// Helper function to merge base metadata with page-specific metadata (legacy)
export function getPageMetadataLegacy(page: keyof typeof pageMetadata): Metadata {
  const pageMeta = pageMetadata[page]
  return {
    ...baseMetadata,
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: [...baseMetadata.keywords!, ...pageMeta.keywords],
    openGraph: {
      ...baseMetadata.openGraph,
      title: pageMeta.openGraph.title,
      description: pageMeta.openGraph.description,
      url: getCanonicalUrl(pageMeta.alternates.canonical),
    },
    twitter: {
      ...baseMetadata.twitter,
      title: pageMeta.twitter.title,
      description: pageMeta.twitter.description,
    },
    alternates: pageMeta.alternates,
  }
}

// Helper function to get breadcrumb structured data
export function getBreadcrumbData(path: string, title: string, domain?: string) {
  const config = getOrgConfigForDomain(domain)
  const baseUrl = getCanonicalUrl()
  const pathSegments = path.split('/').filter(Boolean)

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    }
  ]

  let currentPath = ""
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const position = index + 2
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')

    breadcrumbItems.push({
      "@type": "ListItem",
      "position": position,
      "name": name,
      "item": `${baseUrl}${currentPath}`
    })
  })

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  }
}
