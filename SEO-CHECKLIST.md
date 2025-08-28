# SEO Troubleshooting Checklist for advocatesforscienceatiu.org

## Immediate Actions Required:

### 1. Google Search Console Setup
- [ ] Add your actual Google Search Console verification code to `lib/metadata.ts`
- [ ] Verify domain ownership in Google Search Console
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Request indexing for your homepage

### 2. Domain Verification
- [ ] Confirm the correct domain is: `advocatesforscienceatiu.org` (not advocatsforscienceatiu.org)
- [ ] Check DNS settings are correct
- [ ] Verify SSL certificate is valid

### 3. Google Analytics Setup
- [ ] Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable
- [ ] Verify Google Analytics is tracking properly
- [ ] Check for any tracking code errors

## Technical SEO Issues Found:

### ✅ Fixed Issues:
- [x] Moved robots.txt to correct location (`/public/robots.txt`)
- [x] Updated metadata verification placeholder

### 🔧 Additional Recommendations:

1. **Add Google Search Console Verification Code**
   ```typescript
   // In lib/metadata.ts, replace the commented line with:
   verification: {
     google: "your-actual-verification-code-from-google-search-console",
   },
   ```

2. **Set Environment Variable**
   ```bash
   # Add to your .env.local file:
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Submit Sitemap to Google Search Console**
   - Go to Google Search Console
   - Navigate to Sitemaps section
   - Submit: `https://advocatesforscienceatiu.org/sitemap.xml`

4. **Request Indexing**
   - In Google Search Console, use the URL Inspection tool
   - Enter your homepage URL
   - Click "Request Indexing"

## Common Reasons for Not Appearing in Search Results:

1. **New Domain**: New websites can take 1-4 weeks to appear in search results
2. **Low Domain Authority**: New domains need time to build authority
3. **Competition**: Other sites may rank higher for your keywords
4. **Technical Issues**: Missing verification, incorrect robots.txt, etc.

## Testing Steps:

1. **Check if indexed**: Search `site:advocatesforscienceatiu.org` in Google
2. **Check robots.txt**: Visit `https://advocatesforscienceatiu.org/robots.txt`
3. **Check sitemap**: Visit `https://advocatesforscienceatiu.org/sitemap.xml`
4. **Test page speed**: Use Google PageSpeed Insights
5. **Mobile-friendly test**: Use Google's Mobile-Friendly Test

## Next Steps:

1. Complete the Google Search Console verification
2. Submit sitemap and request indexing
3. Wait 1-2 weeks for Google to process
4. Monitor Google Search Console for any issues
5. Consider creating more content to improve ranking

## Monitoring:

- Set up Google Search Console alerts
- Monitor Core Web Vitals
- Track organic search traffic in Google Analytics
- Check for crawl errors in Search Console
