# GitHub Copilot Implementation Guide: ASIU/CSIU Monorepo Strategy

## Overview

This document provides a comprehensive implementation guide for restructuring the ASIU repository into a monorepo that supports both ASIU and CSIU organizations with shared infrastructure. The strategy maintains independent frontends while sharing a common CMS backend.

## Architecture Goals

1. **Shared Sanity Studio CMS** - Both sites use the same content management system
2. **Independent Frontends** - Separate Next.js apps to avoid URL conflicts and maintain distinct branding
3. **Shared Utilities** - Common SEO, metadata, and utility functions across packages
4. **Independent Deployment** - Each app can be deployed separately to Vercel
5. **SEO Integrity** - Maintain all SEO-critical files and ensure Google crawlability

## Implementation Steps

### Phase 1: Repository Restructuring

#### 1.1 Create Monorepo Foundation

```bash
# Create root workspace configuration
touch pnpm-workspace.yaml
touch turbo.json
```

**Root package.json updates:**
- Add workspace configuration
- Include Turborepo for build orchestration
- Set up shared dependencies

**pnpm-workspace.yaml:**
```yaml
packages:
  - "apps/*"
  - "packages/*"
```

**turbo.json:**
```json
{
  "extends": ["//"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "dev": {
      "cache": false
    },
    "lint": {},
    "test": {}
  }
}
```

#### 1.2 Move Current ASIU Code

**CRITICAL: Preserve all file paths and imports during migration**

1. Create `apps/asiu/` directory
2. Move all current root-level files to `apps/asiu/`:
   - `app/` → `apps/asiu/app/`
   - `components/` → `apps/asiu/components/`
   - `public/` → `apps/asiu/public/`
   - `next.config.mjs` → `apps/asiu/next.config.mjs`
   - `package.json` → `apps/asiu/package.json`
   - `tsconfig.json` → `apps/asiu/tsconfig.json`
   - All other config files

3. **PRESERVE SEO FILES**: Ensure `robots.txt`, `manifest.json`, and sitemap routes remain in correct locations within `apps/asiu/public/`

#### 1.3 Extract Sanity Studio

1. Create `apps/cms/` directory
2. Move all Sanity-related files:
   - Move sanity configuration files
   - Preserve all schema types
   - Update project references

### Phase 2: Create Shared Packages

#### 2.1 Shared Utilities Package

Create `packages/utils/` with:
- Date formatting utilities
- Validation helpers
- Common helper functions

**packages/utils/package.json:**
```json
{
  "name": "@asiu/shared-utils",
  "version": "0.1.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js"
  }
}
```

#### 2.2 Shared Types Package

Create `packages/types/` with:
- CMS content types
- SEO-related types
- Common interface definitions

#### 2.3 Shared SEO Package

Create `packages/seo/` with:
- Metadata generation utilities
- SEO audit functions
- Schema markup helpers

**CRITICAL**: Ensure SEO package doesn't break existing metadata functionality

#### 2.4 Shared Sanity Package

Create `packages/sanity/` with:
- Sanity client configuration
- Common queries
- Schema generators

### Phase 3: Create CSIU Frontend

#### 3.1 Initialize CSIU App

Create `apps/csiu/` with similar structure to `apps/asiu/`:

```
apps/csiu/
├── app/
│   ├── (routes)/
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── events/page.tsx
│   │   ├── get-involved/page.tsx
│   │   ├── news/page.tsx
│   │   └── team/page.tsx
│   ├── (utility)/
│   │   ├── accessibility/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── rss.xml/route.ts
│   │   ├── sitemap-events.xml/route.ts
│   │   ├── sitemap-news.xml/route.ts
│   │   └── sitemap.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
├── public/
│   ├── icons/
│   ├── images/
│   ├── manifest.json
│   └── robots.txt
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── styles/globals.css
```

#### 3.2 CSIU-Specific Configuration

**Environment Variables:**
```bash
# apps/csiu/.env.local
NEXT_PUBLIC_ORGANIZATION=csiu
NEXT_PUBLIC_SITE_URL=https://www.csiub.org
SANITY_PROJECT_ID=your-shared-project
```

**Package Dependencies:**
- Import shared packages: `@asiu/shared-utils`, `@asiu/shared-seo`, etc.
- Organization-specific dependencies

### Phase 4: Fix File Paths and Imports

#### 4.1 Update Import Statements

**In apps/asiu/ and apps/csiu/:**
Replace relative imports to shared code with workspace imports:

```typescript
// OLD (will break):
import { formatDate } from '../../../lib/utils'

// NEW (correct):
import { formatDate } from '@asiu/shared-utils'
```

#### 4.2 Update Asset References

**Image and icon references:**
- Update paths to point to correct public folders
- Consider moving shared assets to `shared/` directory
- Update all import statements accordingly

#### 4.3 Fix Configuration Files

**next.config.mjs updates:**
- Update paths for shared utilities
- Ensure asset loading works correctly
- Configure proper build outputs

**tsconfig.json updates:**
- Add path mappings for shared packages
- Extend from shared base configuration

### Phase 5: Content Management Strategy

#### 5.1 Sanity Schema Updates

Add organization filtering to schemas:

```typescript
// In schema types
export default {
  name: 'newsArticle',
  fields: [
    {
      name: 'organization',
      type: 'string',
      options: {
        list: [
          {title: 'ASIU', value: 'asiu'},
          {title: 'CSIU', value: 'csiu'},
          {title: 'Shared', value: 'shared'}
        ]
      }
    },
    // ... other fields
  ]
}
```

#### 5.2 Content Queries

Update queries to filter by organization:

```typescript
// packages/sanity/queries.ts
export const getOrganizationNews = (org: string) => `
  *[_type == "newsArticle" && (organization == "${org}" || organization == "shared")]
  | order(publishDate desc)
`
```

### Phase 6: SEO Preservation

#### 6.1 Critical SEO Files

**MUST PRESERVE in each app's public/ folder:**
- `robots.txt` - Must remain in root of each app's public folder
- `manifest.json` - Must remain in root of each app's public folder
- Sitemap routes - Must remain accessible at expected URLs

#### 6.2 Metadata Configuration

**Shared SEO package should provide:**
```typescript
// packages/seo/metadata.ts
export const generateOrganizationMetadata = (org: 'asiu' | 'csiu') => {
  const baseConfig = {
    asiu: {
      title: 'Advocates for Science @ IU',
      description: 'Advocating for science-based policy...',
      url: 'https://www.advocatesforscienceatiu.org'
    },
    csiu: {
      title: 'Concerned Scientists @ IU',
      description: 'Scientists concerned about...',
      url: 'https://www.csiub.org'
    }
  }

  return baseConfig[org]
}
```

#### 6.3 URL Structure Preservation

**For ASIU app:**
- All existing URLs must continue to work
- No breaking changes to route structure
- Preserve all current SEO routes

**For CSIU app:**
- Can start fresh with new URL structure
- Implement similar routes for consistency

### Phase 7: Deployment Configuration

#### 7.1 Separate Vercel Projects

**ASIU Deployment:**
```bash
cd apps/asiu
vercel --prod
# Configure domain: www.advocatesforscienceatiu.org (existing)
```

**CSIU Deployment:**
```bash
cd apps/csiu
vercel --prod
# Configure domain: www.csiub.org (new)
```

#### 7.2 Environment Variables per App

**apps/asiu/.env.local:**
```
NEXT_PUBLIC_ORGANIZATION=asiu
NEXT_PUBLIC_SITE_URL=https://www.advocatesforscienceatiu.org
SANITY_PROJECT_ID=shared-cms-project
SANITY_DATASET=production
```

**apps/csiu/.env.local:**
```
NEXT_PUBLIC_ORGANIZATION=csiu
NEXT_PUBLIC_SITE_URL=https://www.csiub.org
SANITY_PROJECT_ID=shared-cms-project
SANITY_DATASET=production
```

#### 7.3 Build Commands

**Root package.json scripts:**
```json
{
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "build:asiu": "turbo run build --filter=@asiu/asiu-app",
    "build:csiu": "turbo run build --filter=@asiu/csiu-app",
    "build:cms": "turbo run build --filter=@asiu/cms"
  }
}
```

## Critical Implementation Notes

### File Path Error Prevention

1. **Use TypeScript path mapping** in tsconfig.json for shared packages
2. **Test all imports** after restructuring
3. **Update all asset references** to use correct relative paths
4. **Preserve existing working paths** for ASIU during migration

### SEO Integrity Checklist

- [ ] `robots.txt` accessible at `/robots.txt` for each app
- [ ] `manifest.json` accessible at `/manifest.json` for each app
- [ ] All sitemap routes functional
- [ ] Metadata generation working correctly
- [ ] No broken internal links
- [ ] Asset loading working (images, icons, etc.)
- [ ] Schema markup preserved

### Build System Requirements

1. **Turborepo configuration** for efficient builds
2. **Workspace dependencies** properly configured
3. **Shared package building** before app builds
4. **Independent deployment** capability

### Testing Strategy

1. **Build both apps** independently
2. **Test all routes** in both applications
3. **Verify shared functionality** works across apps
4. **SEO audit** both sites after deployment
5. **Performance testing** to ensure no regression

## Final File Structure

```
advocates-for-science-at-iu/
├── apps/
│   ├── asiu/                    # ASIU Frontend
│   │   ├── app/
│   │   ├── components/
│   │   ├── public/
│   │   │   ├── robots.txt       # CRITICAL: SEO file
│   │   │   └── manifest.json    # CRITICAL: SEO file
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── csiu/                    # CSIU Frontend
│   │   ├── app/
│   │   ├── components/
│   │   ├── public/
│   │   │   ├── robots.txt       # CRITICAL: SEO file
│   │   │   └── manifest.json    # CRITICAL: SEO file
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── cms/                     # Shared Sanity Studio
│       ├── schemaTypes/
│       ├── sanity.config.ts
│       └── package.json
├── packages/                    # Shared Utilities
│   ├── seo/
│   ├── metadata/
│   ├── types/
│   ├── utils/
│   ├── sanity/
│   └── ui/
├── shared/                      # Shared Assets & Configs
│   ├── images/
│   ├── icons/
│   ├── configs/
│   └── constants/
├── package.json                 # Root workspace config
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

## Implementation Success Criteria

1. **Both apps build successfully** without errors
2. **All imports resolve correctly**
3. **SEO files accessible** at expected URLs
4. **Shared CMS functionality** works for both apps
5. **Independent deployment** capability verified
6. **No regression** in ASIU functionality
7. **CSIU app** functional with basic pages
8. **Development experience** improved with shared utilities

## Post-Implementation Tasks

1. **Update documentation** with new structure
2. **Configure CI/CD** for monorepo builds
3. **Set up monitoring** for both applications
4. **Test content workflows** in shared CMS
5. **Performance optimization** review
6. **SEO audit** of both sites

## Risk Mitigation

1. **Backup current working state** before starting
2. **Implement incrementally** to catch issues early
3. **Test thoroughly** at each phase
4. **Preserve all working functionality** during migration
5. **Have rollback plan** if critical issues arise

This implementation guide ensures a smooth transition to the monorepo structure while maintaining all existing functionality and SEO integrity.
