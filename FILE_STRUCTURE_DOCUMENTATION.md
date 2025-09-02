# Advocates for Science @ IU - Comprehensive File Structure Documentation

## 🏗️ Complete Repository Structure

This document provides an extremely detailed breakdown of the entire repository structure, file purposes, import patterns, and development guidelines. All file paths and imports have been verified and are working correctly.

```
advocates-for-science-at-iu/
│
├── 📂 app/                                    # Next.js 15 App Router Directory
│   │
│   ├── 📂 (api)/                              # API Route Group
│   │   └── 📂 newsletter-subscribe/           # Newsletter subscription endpoint
│   │       └── route.ts                       # POST handler for email subscriptions
│   │
│   ├── 📂 (routes)/                           # Main Content Pages Route Group  
│   │   ├── 📂 about/                          
│   │   │   └── page.tsx                       # About page with team overview
│   │   ├── 📂 contact/                        
│   │   │   └── page.tsx                       # Contact form and information
│   │   ├── 📂 get-involved/                   
│   │   │   └── page.tsx                       # Volunteer opportunities and events
│   │   ├── 📂 news/                           
│   │   │   ├── page.tsx                       # News listing and social media
│   │   │   └── 📂 bulletin/                   
│   │   │       └── 📂 [slug]/                 # Dynamic bulletin pages
│   │   │           └── page.tsx               # Individual bulletin content
│   │   ├── 📂 newsletter-signups/             
│   │   │   └── page.tsx                       # Newsletter subscriber management
│   │   └── 📂 team/                           
│   │       └── page.tsx                       # Team member profiles
│   │
│   ├── 📂 (utility)/                          # Utility Pages and XML Routes
│   │   ├── 📂 accessibility/                  
│   │   │   └── page.tsx                       # Accessibility statement (WCAG compliance)
│   │   ├── 📂 privacy/                        
│   │   │   └── page.tsx                       # Privacy policy
│   │   ├── 📂 rss.xml/                        
│   │   │   └── route.ts                       # RSS feed generator
│   │   ├── 📂 sitemap-events.xml/             
│   │   │   └── route.ts                       # Events-specific sitemap
│   │   └── 📂 sitemap-news.xml/               
│   │       └── route.ts                       # News-specific sitemap
│   │
│   ├── globals.css                            # Global styles and Tailwind CSS config
│   ├── layout.tsx                             # Root layout with providers and SEO
│   ├── not-found.tsx                          # 404 error page
│   ├── page.tsx                               # Homepage with hero and content sections
│   └── sitemap.ts                             # Main sitemap generator
│
├── 📂 components/                             # Reusable React Components
│   │
│   ├── 📂 layout/                             # Layout and Navigation Components
│   │   ├── footer.tsx                         # Site footer with links and social media
│   │   ├── layout-wrapper.tsx                 # Main content wrapper with transitions
│   │   ├── navigation.tsx                     # Main navigation with mobile menu
│   │   ├── page-transition.tsx                # Page transition animations (8 variants)
│   │   └── theme-provider.tsx                 # Theme context provider (light/dark mode)
│   │
│   ├── 📂 sections/                           # Page Section Components
│   │   ├── 📂 hero/                           
│   │   │   ├── hero-background.tsx            # Animated background component
│   │   │   └── hero-section.tsx               # Main hero section with CTA buttons
│   │   └── scroll-indicator.tsx               # Scroll progress indicator
│   │
│   ├── 📂 cards/                              # Card Components for Content Display
│   │   ├── clamped-text.tsx                   # Text truncation utility component
│   │   ├── committee-chair-card.tsx           # Leadership team member cards
│   │   ├── event-card.tsx                     # Upcoming event display cards
│   │   ├── latest-news-card.tsx               # Past events/news cards
│   │   ├── news-activity-card.tsx             # News activity display
│   │   ├── news-bulletin-card.tsx             # News bulletin display cards
│   │   └── person-card.tsx                    # General person profile cards
│   │
│   ├── 📂 forms/                              # Form Components
│   │   └── newsletter-signup.tsx              # Newsletter subscription form
│   │
│   ├── 📂 navigation/                         # Navigation-specific Components
│   │   └── tab-navigation.tsx                 # Tabbed navigation component
│   │
│   ├── 📂 features/                           # Feature-specific Components
│   │   └── page-outcrop.tsx                   # Page overlay graphic component
│   │
│   ├── 📂 hooks/                              # Custom React Hooks
│   │   ├── use-mobile.tsx                     # Mobile device detection hook
│   │   └── use-toast.ts                       # Toast notification management
│   │
│   └── 📂 ui/                                 # Reusable UI Component Library
│       │
│       ├── 📂 primitives/                     # Basic UI Building Blocks
│       │   ├── badge.tsx                      # Status/category badges
│       │   ├── button.tsx                     # Button component with variants
│       │   ├── input.tsx                      # Form input fields
│       │   └── label.tsx                      # Form labels
│       │
│       ├── 📂 composite/                      # Complex UI Components
│       │   ├── card.tsx                       # Card container components
│       │   ├── dialog.tsx                     # Modal dialog components
│       │   └── tabs.tsx                       # Tabbed interface components
│       │
│       ├── 📂 feedback/                       # User Feedback Components
│       │   ├── alert.tsx                      # Alert notification component
│       │   ├── toast.tsx                      # Toast notification system
│       │   └── toaster.tsx                    # Toast container component
│       │
│       ├── 📂 navigation/                     # Navigation UI Components
│       │   ├── breadcrumbs.tsx                # Breadcrumb navigation
│       │   └── pagination.tsx                 # Page navigation component
│       │
│       └── 📂 seo/                            # SEO-Optimized Components
│           ├── seo-image.tsx                  # SEO-optimized image component
│           └── structured-data.tsx            # JSON-LD structured data
│
├── 📂 lib/                                    # Utility Libraries and Configuration
│   ├── metadata.ts                            # SEO metadata generation and page configs
│   ├── sanity.ts                              # Sanity CMS client and query functions
│   ├── seo-audit.ts                           # SEO audit and optimization tools
│   ├── seo-helpers.ts                         # SEO utility functions
│   ├── schema-generators.ts                   # JSON-LD schema generation
│   ├── types.ts                               # TypeScript type definitions
│   └── utils.ts                               # General utility functions
│
├── 📂 asiu-cms/                               # Sanity CMS Configuration
│   │
│   ├── 📂 schemaTypes/                        # Content Schema Definitions
│   │   ├── committee.ts                       # Committee structure schema
│   │   ├── committeeChair.ts                  # Leadership member schema
│   │   ├── event.ts                           # Event content schema
│   │   ├── externalLink.ts                    # External link schema
│   │   ├── facultyAdvisor.ts                  # Faculty advisor schema
│   │   ├── newsArticle.ts                     # News article schema
│   │   ├── newsBulletin.ts                    # Newsletter bulletin schema
│   │   └── testimonial.ts                     # Testimonial content schema
│   │
│   ├── sanity.cli.ts                          # Sanity CLI configuration
│   ├── sanity.config.ts                       # Sanity Studio configuration
│   └── package.json                           # CMS-specific dependencies
│
├── 📂 public/                                 # Static Assets
│   │
│   ├── 📂 icons/                              # Icon and Favicon Assets
│   │   ├── favicon.ico                        # Main favicon
│   │   ├── favicon-16x16.png                  # 16x16 favicon
│   │   ├── favicon-32x32.png                  # 32x32 favicon
│   │   ├── favicon-apple-touch-icon.png       # Apple touch icon
│   │   ├── favicon-android-chrome-192x192.png # Android icon (192x192)
│   │   ├── favicon-android-chrome-512x512.png # Android icon (512x512)
│   │   ├── logo.svg                           # Main logo SVG
│   │   └── placeholder-logo.png               # Fallback logo
│   │
│   ├── 📂 images/                             # Image Assets
│   │   ├── 📂 events/                         # Event-related images
│   │   ├── 📂 overlays/                       # Page background overlays
│   │   │   ├── overlay-home.JPG               # Homepage background
│   │   │   ├── overlay-about.JPG              # About page background
│   │   │   ├── overlay-get-involved.JPG       # Get Involved background
│   │   │   ├── overlay-news.JPG               # News page background
│   │   │   └── overlay-contact.JPG            # Contact page background
│   │   ├── 📂 partners/                       # Partner organization logos
│   │   │   ├── partner-logosArtboard-1.png    # Partner logo 1
│   │   │   ├── partner-logosArtboard-2.png    # Partner logo 2
│   │   │   └── ... (through 10)               # Additional partner logos
│   │   └── 📂 placeholders/                   # Placeholder images
│   │       ├── placeholder-user.jpg           # Default user avatar
│   │       ├── placeholder.jpg                # General placeholder
│   │       └── placeholder.svg                # SVG placeholder
│   │
│   ├── browserconfig.xml                      # IE/Edge browser configuration
│   ├── manifest.json                          # PWA manifest file
│   └── robots.txt                             # Search engine crawler instructions
│
├── 📂 styles/                                 # Additional Stylesheets
│
├── 📄 Configuration Files                     # Project Configuration
├── .env.local                                 # Environment variables (local)
├── .gitignore                                 # Git ignore patterns
├── components.json                            # shadcn/ui component configuration
├── next.config.mjs                            # Next.js configuration
├── package.json                               # Project dependencies and scripts
├── postcss.config.mjs                         # PostCSS configuration
├── tailwind.config.ts                         # Tailwind CSS configuration
├── tsconfig.json                              # TypeScript configuration
│
└── 📄 Documentation Files                     # Project Documentation
    ├── README.md                              # Main project documentation
    ├── IMPLEMENTATION_CHECKLIST.md           # Implementation progress tracking
    ├── SEO_OPTIMIZATION_REPORT.md            # SEO implementation details
    ├── SEO_QUICK_START_GUIDE.md              # SEO maintenance guide
    └── FILE_STRUCTURE_DOCUMENTATION.md       # This file
```

## 🔧 Import Patterns and Path Aliases

### TypeScript Path Configuration
All imports use the `@/` alias configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Common Import Patterns

#### Component Imports
```typescript
// Layout components
import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

// UI components
import { Button } from "@/components/ui/primitives/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"

// Feature components
import { HeroSection } from "@/components/sections/hero/hero-section"
import { EventCard } from "@/components/cards/event-card"
```

#### Library and Utility Imports
```typescript
// Metadata and SEO
import { getPageMetadata, getStructuredData } from "@/lib/metadata"
import { generateSEO } from "@/lib/seo-helpers"

// Data fetching
import { getEvents, getCommitteeChairs } from "@/lib/sanity"

// Types
import type { Event, CommitteeChair } from "@/lib/types"

// Utilities
import { cn, formatDate } from "@/lib/utils"
```

#### Asset References
```typescript
// Images (relative to public/)
<Image src="/icons/logo.svg" alt="Logo" />
<Image src="/images/overlays/overlay-home.JPG" alt="Background" />

// Static assets in CSS
background-image: url('/images/overlays/overlay-about.JPG');
```

## 🎯 Route Structure and Navigation

### App Router Organization
The project uses Next.js 15 App Router with route groups for organization:

#### Route Groups
- `(api)` - API endpoints that don't affect URL structure
- `(routes)` - Main content pages
- `(utility)` - Utility pages like sitemaps and policies

#### URL Mapping
| URL Path | File Location | Description |
|----------|---------------|-------------|
| `/` | `app/page.tsx` | Homepage |
| `/about` | `app/(routes)/about/page.tsx` | About page |
| `/contact` | `app/(routes)/contact/page.tsx` | Contact page |
| `/get-involved` | `app/(routes)/get-involved/page.tsx` | Get involved page |
| `/news` | `app/(routes)/news/page.tsx` | News listing |
| `/news/bulletin/[slug]` | `app/(routes)/news/bulletin/[slug]/page.tsx` | Dynamic bulletin pages |
| `/team` | `app/(routes)/team/page.tsx` | Team page |
| `/privacy` | `app/(utility)/privacy/page.tsx` | Privacy policy |
| `/accessibility` | `app/(utility)/accessibility/page.tsx` | Accessibility statement |
| `/newsletter-signups` | `app/(routes)/newsletter-signups/page.tsx` | Newsletter management |

#### API Routes
| Endpoint | File Location | Method | Description |
|----------|---------------|--------|-------------|
| `/api/newsletter-subscribe` | `app/(api)/newsletter-subscribe/route.ts` | POST | Newsletter subscription |

#### XML Routes
| URL | File Location | Description |
|-----|---------------|-------------|
| `/sitemap.xml` | `app/sitemap.ts` | Main sitemap |
| `/sitemap-events.xml` | `app/(utility)/sitemap-events.xml/route.ts` | Events sitemap |
| `/sitemap-news.xml` | `app/(utility)/sitemap-news.xml/route.ts` | News sitemap |
| `/rss.xml` | `app/(utility)/rss.xml/route.ts` | RSS feed |

## 🎨 Styling and Design System

### Tailwind CSS Configuration
Custom design system defined in `app/globals.css`:

```css
/* Brand Colors */
--color-red: #993333;      /* science-red */
--color-blue: #2e6399;     /* science-blue */
--color-green: #257d70;    /* science-green */
--color-black: #2a2a2a;    /* science-black */

/* Secondary Colors */
--color-yellow: #998a2e;   /* science-yellow */
--color-orange: #99612e;   /* science-orange */
--color-purple: #5f2e99;   /* science-purple */
--color-teal: #2e9999;     /* science-teal */
--color-pink: #992e61;     /* science-pink */

/* Spacing System */
--spacing-sm: 0.5rem;      /* 8px */
--spacing-md: 1rem;        /* 16px */
--spacing-lg: 2rem;        /* 32px */
--spacing-xl: 3rem;        /* 48px */
```

### Component Variants
UI components use class-variance-authority for consistent styling:

```typescript
// Button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

## 🔍 SEO Implementation

### Metadata Configuration
Comprehensive SEO implementation in `lib/metadata.ts`:

#### Base Metadata
```typescript
export const baseMetadata: Metadata = {
  title: "Advocates for Science @ IU | Science Policy Advocacy",
  description: "Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society.",
  keywords: [
    "science policy",
    "advocacy",
    "Indiana University",
    "student organization",
    // ... more keywords
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.advocatesforscienceatiu.org",
    siteName: "Advocates for Science @ IU",
    // ... OpenGraph configuration
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocates for Science @ IU | Science Policy Advocacy",
    // ... Twitter Card configuration
  },
  robots: {
    index: true,
    follow: true,
    // ... robots configuration
  },
}
```

#### Page-Specific Metadata
```typescript
export const pageMetadata = {
  home: {
    title: "Advocates for Science @ IU | Science Policy Advocacy",
    description: "Student affiliate of Concerned Scientists @ IU...",
    keywords: ["science policy", "advocacy", "student organization"],
    // ... page-specific configuration
  },
  about: {
    title: "About Us",
    description: "Learn about our mission, vision, and team...",
    // ... about page configuration
  },
  // ... other pages
}
```

### Structured Data
JSON-LD structured data for search engines:

```typescript
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Advocates for Science @ IU",
    "url": "https://www.advocatesforscienceatiu.org",
    "logo": "https://www.advocatesforscienceatiu.org/icons/logo.svg",
    // ... organization schema
  },
  // ... other schemas
}
```

### SEO Components
- **SEOImage**: Optimized image component with schema markup
- **Breadcrumbs**: Navigation breadcrumbs with JSON-LD
- **StructuredData**: JSON-LD injection component

## 📦 Content Management (Sanity CMS)

### Schema Organization
Content types defined in `asiu-cms/schemaTypes/`:

#### Event Schema
```typescript
export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    // ... other fields
  ],
})
```

### Query Functions
Data fetching functions in `lib/sanity.ts`:

```typescript
export const getEvents = async () => {
  const query = `*[_type == "event"] {
    _id,
    title,
    subtitle,
    description,
    date,
    startTime,
    endTime,
    location,
    "imageUrl": image.asset->url
  } | order(date asc)`

  return await safeQuery(query)
}
```

### Error Handling
All queries use `safeQuery` wrapper for graceful network failure handling:

```typescript
async function safeQuery(query: string, defaultValue: any[] = []) {
  try {
    return await client.fetch(query)
  } catch (error) {
    console.warn('Sanity query failed, using fallback data:', error)
    return defaultValue
  }
}
```

## 🔧 Development Guidelines

### TypeScript Standards
- **Strict Mode**: Enabled for type safety
- **Interface Definitions**: All props and data structures typed
- **Path Aliases**: Use `@/` for all internal imports
- **Type Exports**: Export types separately from implementations

### Component Standards
```typescript
// Component file structure
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface MyComponentProps {
  title: string
  description?: string
  className?: string
}

export function MyComponent({ 
  title, 
  description, 
  className,
  ...props 
}: MyComponentProps) {
  return (
    <div className={cn("default-classes", className)} {...props}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  )
}
```

### Performance Standards
- **Image Optimization**: Use Next.js Image component
- **Lazy Loading**: Implement for below-the-fold content
- **Code Splitting**: Dynamic imports for heavy components
- **SEO**: Comprehensive metadata and structured data

### Error Handling Standards
```typescript
// API routes
export async function POST(request: Request) {
  try {
    const data = await request.json()
    // ... process data
    return Response.json({ success: true })
  } catch (error) {
    console.error('API Error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Component error boundaries
try {
  const data = await fetchData()
  return <Component data={data} />
} catch (error) {
  return <ErrorFallback error={error} />
}
```

## 🚀 Build and Deployment

### Build Process
1. **Type Checking**: TypeScript compilation
2. **Linting**: ESLint validation (configured to ignore during builds)
3. **Asset Optimization**: Image and CSS optimization
4. **Static Generation**: Pre-rendering of static pages
5. **Bundle Analysis**: Code splitting and optimization

### Environment Variables
Required environment variables in `.env.local`:

```env
# Gmail SMTP Configuration for Newsletter Subscription
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Vercel Blob (for newsletter storage)
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token
```

### Production Optimizations
- **Image Formats**: WebP and AVIF for modern browsers
- **Compression**: Gzip/Brotli compression enabled
- **Caching**: Aggressive caching for static assets
- **CDN**: Asset delivery optimization
- **Security Headers**: XSS and content type protection

## 🔍 Troubleshooting Guide

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check TypeScript errors
npx tsc --noEmit --skipLibCheck
```

#### Import Resolution Issues
1. Verify `tsconfig.json` path configuration
2. Check file extensions (.tsx vs .ts)
3. Ensure proper export statements
4. Verify case sensitivity in file names

#### Network Dependencies
- **Google Fonts**: Handled with fallback fonts
- **Sanity CMS**: Graceful fallback with empty arrays
- **External APIs**: Error boundaries and retry logic

#### Performance Issues
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Check image optimization
# Ensure all images use Next.js Image component
# Verify proper sizes and formats
```

### Development Tools
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

## 📈 Future Enhancements

### Planned Improvements
1. **Progressive Web App**: Enhanced manifest and service worker
2. **Internationalization**: Multi-language support
3. **Advanced Analytics**: Enhanced user tracking
4. **Content Delivery**: CDN optimization
5. **Accessibility**: WCAG 2.1 AAA compliance

### Scalability Considerations
- **Database**: Consider migration to more robust CMS
- **Caching**: Implement Redis or similar for dynamic content
- **Authentication**: User authentication for admin features
- **API Rate Limiting**: Implement for newsletter and contact forms

---

## 📞 Support and Maintenance

### Regular Maintenance Tasks
1. **Dependencies**: Monthly security updates
2. **Content**: Regular content audits and updates
3. **Performance**: Quarterly performance reviews
4. **SEO**: Monthly SEO audits and optimizations
5. **Accessibility**: Quarterly accessibility testing

### Getting Help
- **Documentation**: Refer to this file and README.md
- **Issues**: Check existing GitHub issues
- **Development**: Follow the development guidelines above
- **SEO**: Use SEO_QUICK_START_GUIDE.md for SEO maintenance

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Maintained By**: Advocates for Science @ IU Development Team