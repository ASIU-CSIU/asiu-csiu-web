# Domain Management System

This document explains how to manage multiple domains for the ASIU/CSIU merger website.

## Overview

The website supports multiple domains for each organization while maintaining a single canonical domain for SEO purposes.

## Configuration

### Canonical Domain

The canonical domain is configured via environment variable:

```bash
# In your .env file or Vercel environment variables
CANONICAL_DOMAIN=www.advocatesforscienceatiu.org
```

**Default**: `www.advocatesforscienceatiu.org`

### Domain Mappings

#### ASIU Domains
- `www.advocatesforscienceatiu.org`
- `advocatesforscienceatiu.org`
- `asiu.indiana.edu`
- `advocates-science-iu.vercel.app` (placeholder)
- `asiu-staging.vercel.app` (staging)

#### CSIU Domains
- `www.advocatesforscienceatiu.org`
- `csiub.org`
- `concernedscientists.iu.edu`
- `csiu.indiana.edu`
- `concerned-scientists-iu.vercel.app` (placeholder)
- `csiu-staging.vercel.app` (staging)

## How It Works

### SEO and Canonical URLs
- **All domains** serve the same content
- **Canonical domain** (`www.advocatesforscienceatiu.org`) is used for all SEO purposes
- **Search engines** will index the canonical domain
- **Other domains** are treated as duplicates (no SEO penalty)

### Dynamic Metadata
- **Organization detection** based on current domain
- **ASIU domains** → ASIU branding, descriptions, keywords
- **CSIU domains** → CSIU branding, descriptions, keywords
- **Metadata** adapts automatically based on domain

### Content Delivery
- **Same content** served on all domains
- **Organization-specific** metadata and branding
- **Unified user experience** across all domains

## Adding New Domains

### 1. Update Domain Mappings

Edit `lib/metadata.ts`:

```typescript
export const domainMappings = {
  asiu: [
    "www.advocatesforscienceatiu.org",
    "your-new-asiu-domain.com", // Add here
    // ... other domains
  ],
  csiu: [
    "www.advocatesforscienceatiu.org",
    "your-new-csiu-domain.com", // Add here
    // ... other domains
  ]
}
```

### 2. Configure in Vercel

1. Go to your Vercel project settings
2. Add the new domain in "Domains" section
3. Configure DNS records as needed

### 3. Test Domain Detection

Use the utility functions to test:

```typescript
import { getOrgConfigForDomain, isASIUDomain, isCSIUDomain } from '@/lib/metadata'

// Test domain detection
console.log(getOrgConfigForDomain('your-new-domain.com'))
console.log(isASIUDomain('your-new-domain.com'))
console.log(isCSIUDomain('your-new-domain.com'))
```

## Utility Functions

### Domain Detection
```typescript
import { getOrgConfigForDomain, getCurrentOrgConfig } from '@/lib/metadata'

// Get organization config for a specific domain
const config = getOrgConfigForDomain('www.advocatesforscienceatiu.org')

// Get current organization config (client-side)
const currentConfig = getCurrentOrgConfig()
```

### Domain Management
```typescript
import {
  getASIUDomains,
  getCSIUDomains,
  getAllDomains,
  isDomainConfigured
} from '@/lib/domain-utils'

// Get all domains for each organization
const asiuDomains = getASIUDomains()
const csiuDomains = getCSIUDomains()
const allDomains = getAllDomains()

// Check if domain is configured
const isConfigured = isDomainConfigured('example.com')
```

### URL Generation
```typescript
import { getCanonicalUrl, getCurrentDomainUrl } from '@/lib/metadata'

// Get canonical URL (always uses CANONICAL_DOMAIN)
const canonicalUrl = getCanonicalUrl('/about')

// Get current domain URL (uses organization's primary domain)
const currentUrl = getCurrentDomainUrl('/about', 'www.advocatesforscienceatiu.org')
```

## Environment Variables

### Required
- `CANONICAL_DOMAIN` - The canonical domain for SEO (default: `www.advocatesforscienceatiu.org`)

### Optional
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID

## Best Practices

1. **Always use canonical URLs** for internal links and sitemaps
2. **Test domain detection** when adding new domains
3. **Keep domain lists updated** in the metadata configuration
4. **Use environment variables** for domain configuration
5. **Monitor SEO performance** across all domains

## Troubleshooting

### Domain Not Detected
- Check if domain is added to `domainMappings`
- Verify domain spelling and format
- Test with utility functions

### Wrong Organization Branding
- Verify domain is in correct organization array
- Check `getOrgConfigForDomain()` function
- Ensure domain mapping is correct

### SEO Issues
- Verify canonical domain is set correctly
- Check that all domains point to same content
- Ensure canonical URLs are used consistently

