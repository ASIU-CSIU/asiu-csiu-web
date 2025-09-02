# SEO Quick Start Guide
## Advocates for Science @ IU Website

This guide helps you maintain and improve the SEO optimization that has been implemented.

## 🚀 Immediate Setup Tasks

### 1. Google Search Console Setup (5 minutes)
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your website: `https://www.advocatesforscienceatiu.org`
3. Verify ownership using the HTML meta tag method
4. Add this line to `app/layout.tsx` in the `<head>` section:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
5. Submit your sitemaps:
   - `https://www.advocatesforscienceatiu.org/sitemap.xml`
   - `https://www.advocatesforscienceatiu.org/sitemap-news.xml`
   - `https://www.advocatesforscienceatiu.org/sitemap-events.xml`

### 2. Google Analytics Enhancement (10 minutes)
1. In your Google Analytics dashboard, enable Enhanced Ecommerce
2. Set up conversion goals for:
   - Newsletter signups
   - Contact form submissions
   - "Get Involved" button clicks
3. Enable Search Console integration

### 3. SEO Monitoring Setup (2 minutes)
1. Add the SEO Dashboard to your admin pages:
   ```tsx
   import { SEODashboard } from '@/components/ui/seo/seo-dashboard'
   
   // Add to any admin page
   <SEODashboard currentPage="/page-url" showFullReport={true} />
   ```

## 📊 Daily SEO Maintenance (5 minutes/day)

### Quick Checks
- [ ] Run SEO audit on new content before publishing
- [ ] Check that all images have descriptive alt text
- [ ] Verify meta descriptions are 120-160 characters with CTAs
- [ ] Ensure new pages have proper H1 tags

### Using the SEO Audit Tool
```typescript
// In any component, check SEO health
import { auditPageSEO } from '@/lib/seo-audit'

const pageData = {
  title: document.title,
  description: "meta description",
  keywords: ["keyword1", "keyword2"],
  url: window.location.pathname
}

const audit = auditPageSEO(pageData)
console.log(`SEO Score: ${audit.score}/100`)
```

## 📝 Content Creation SEO Checklist

### For Every New Page:
- [ ] **Title**: 50-60 characters, includes target keyword
- [ ] **Meta Description**: 120-160 characters with CTA
- [ ] **H1 Tag**: Only one per page, includes main keyword
- [ ] **Images**: All have descriptive alt text
- [ ] **Internal Links**: Link to at least 2-3 relevant internal pages
- [ ] **Schema Markup**: Add appropriate structured data
- [ ] **Breadcrumbs**: Ensure breadcrumb component is included

### For Event Pages:
```tsx
// Add event schema
import { generateEventSchema } from '@/lib/schema-generators'

const eventSchema = generateEventSchema({
  name: "Event Title",
  description: "Event description",
  startDate: "2024-01-15T18:00:00-05:00",
  location: {
    name: "Venue Name",
    address: {
      addressLocality: "Bloomington",
      addressRegion: "IN",
      addressCountry: "US"
    }
  },
  organizer: {
    name: "Advocates for Science @ IU"
  }
})
```

### For News Articles:
```tsx
// Add article schema
import { generateArticleSchema } from '@/lib/schema-generators'

const articleSchema = generateArticleSchema({
  headline: "Article Title",
  description: "Article summary",
  author: "Author Name",
  datePublished: "2024-01-15",
  url: "/news/article-slug"
})
```

## 🔧 SEO Component Usage

### SEO-Optimized Images
```tsx
import { SEOImage } from '@/components/ui/seo/seo-image'

<SEOImage
  src="/images/event-photo.jpg"
  alt="Custom alt text" // Optional - will auto-generate if not provided
  context="Science Policy Event" // Helps with alt text generation
  generateSchema={true} // Adds image schema markup
  width={400}
  height={300}
/>
```

### SEO-Friendly Links
```tsx
import { SEOLink, SocialLink, EmailLink } from '@/components/ui/seo/seo-link'

{/* Internal link */}
<SEOLink href="/about">About Us</SEOLink>

{/* External link - automatically adds rel="noopener noreferrer" */}
<SEOLink href="https://external-site.com" external>External Site</SEOLink>

{/* Email link with tracking */}
<EmailLink email="contact@example.com" subject="Inquiry">Contact Us</EmailLink>

{/* Social media link with analytics */}
<SocialLink platform="instagram" username="asiu.indiana">Follow Us</SocialLink>
```

### FAQ Sections
```tsx
import { generateFAQSchema } from '@/lib/schema-generators'

const faqs = [
  {
    question: "How can I get involved?",
    answer: "You can attend our meetings, volunteer for events, or join our committees."
  }
]

// Add to page head
<script type="application/ld+json">
  {JSON.stringify(generateFAQSchema(faqs))}
</script>
```

## 📈 Performance Monitoring

### Weekly SEO Health Check (15 minutes)
1. Run PageSpeed Insights on main pages
2. Check Google Search Console for:
   - Crawl errors
   - Index coverage issues
   - Core Web Vitals problems
3. Review SEO Dashboard scores for key pages
4. Check for broken links using browser network tab

### Monthly SEO Review (30 minutes)
1. Review keyword rankings in Search Console
2. Analyze top performing pages
3. Update meta descriptions for low-performing pages
4. Add new content based on search queries
5. Update FAQ sections based on user questions

## 🎯 SEO Optimization Opportunities

### Quick Wins (Can implement immediately):
1. **Add more internal links** between related pages
2. **Optimize image filenames** to be descriptive
3. **Create more FAQ content** with schema markup
4. **Add testimonials** with review schema
5. **Implement breadcrumbs** on all pages

### Content Ideas for SEO:
- "Science Policy 101" educational series
- "How to Contact Your Representative" guides
- Event recaps with photos and quotes
- Faculty and student spotlights
- Policy impact stories
- Research summaries in plain language

### Technical Improvements:
- Add search functionality with schema markup
- Implement pagination for news/events
- Create XML sitemap for images
- Add video schema for YouTube content
- Implement AMP pages for news articles

## 🚨 Common SEO Mistakes to Avoid

1. **Duplicate Title Tags** - Each page needs unique titles
2. **Missing Alt Text** - Every image needs descriptive alt text
3. **Thin Content** - Pages should have substantial, valuable content
4. **Broken Links** - Regularly check for and fix broken links
5. **Missing Schema** - Always add appropriate structured data
6. **Slow Loading** - Monitor Core Web Vitals regularly
7. **Mobile Issues** - Test on mobile devices frequently

## 🔍 SEO Tools and Resources

### Free Tools:
- [Google Search Console](https://search.google.com/search-console) - Essential for monitoring
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing
- [Schema Markup Validator](https://validator.schema.org/) - Test structured data
- [Google Rich Results Test](https://search.google.com/test/rich-results) - Rich snippet testing

### Browser Extensions:
- SEO Minion - Quick SEO checks
- Web Developer - Technical analysis
- Lighthouse - Performance auditing

### Analytics to Monitor:
- Organic search traffic growth
- Keyword ranking improvements
- Click-through rates from search
- Page load speeds
- Core Web Vitals scores
- User engagement metrics

## 📞 Getting Help

### When to Get SEO Assistance:
- Search rankings drop significantly
- Core Web Vitals scores decline
- Major website changes are planned
- Need competitive analysis
- Want advanced schema implementation

### Resources:
- Google Search Central documentation
- Schema.org documentation
- Next.js SEO best practices
- Web.dev performance guides

---

**Remember**: SEO is a long-term strategy. Consistent effort in content creation, technical maintenance, and user experience optimization will yield the best results over time.