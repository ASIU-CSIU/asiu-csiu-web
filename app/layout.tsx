import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { ToastProvider } from "@/components/ui/feedback/toast"
import { getBaseMetadata, getStructuredData, getOrgConfigForDomain } from "@/lib/metadata"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { headers } from 'next/headers'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap", // Optimize font loading
  preload: true,
})

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const domain = host.replace(/^www\./, '') // Remove www prefix for domain matching

  return getBaseMetadata(domain)
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const domain = host.replace(/^www\./, '') // Remove www prefix for domain matching
  const config = getOrgConfigForDomain(domain)
  const structuredData = getStructuredData("organization", domain)

  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        {/* Dynamic Favicon based on domain */}
        <link rel="icon" type="image/x-icon" href={`${config.logoPath.replace('.svg', '.ico')}`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/icons/${config.shortName.toLowerCase()}/favicon-16x16.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`/icons/${config.shortName.toLowerCase()}/favicon-32x32.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`/icons/${config.shortName.toLowerCase()}/favicon-apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="192x192" href={`/icons/${config.shortName.toLowerCase()}/favicon-android-chrome-192x192.png`} />
        <link rel="icon" type="image/png" sizes="512x512" href={`/icons/${config.shortName.toLowerCase()}/favicon-android-chrome-512x512.png`} />
        <link rel="icon" type="image/svg+xml" href={config.logoPath} />
        <link rel="shortcut icon" href={`${config.logoPath.replace('.svg', '.ico')}`} />

        {/* Preload critical resources */}
        <link rel="preload" href={config.logoPath} as="image" type="image/svg+xml" />

        {/* Preload overlay images for all pages */}
        <link rel="preload" href="/images/overlays/overlay-home.JPG" as="image" />
        <link rel="preload" href="/images/overlays/overlay-about.JPG" as="image" />
        <link rel="preload" href="/images/overlays/overlay-get-involved.JPG" as="image" />
        <link rel="preload" href="/images/overlays/overlay-news.JPG" as="image" />
        <link rel="preload" href="/images/overlays/overlay-contact.JPG" as="image" />

        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//vercel-insights.com" />
        <link rel="dns-prefetch" href="//vitals.vercel-insights.com" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2e6399" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={config.shortName} />

        {/* Dynamic RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title={`${config.name} RSS Feed`} href="/rss.xml" />

        {/* Enhanced Language Support */}
        <link rel="alternate" hrefLang="en-US" href={`https://${config.primaryDomain}/`} />
        <link rel="alternate" hrefLang="en" href={`https://${config.primaryDomain}/`} />
        <link rel="alternate" hrefLang="x-default" href={`https://${config.primaryDomain}/`} />

        {/* Dynamic SEO Meta Tags */}
        <meta name="application-name" content={config.name} />
        <meta name="msapplication-TileColor" content="#2e6399" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />

        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Monitor Core Web Vitals
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                      console.log('LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'interaction') {
                      console.log('INP:', entry.processingStart - entry.startTime);
                    }
                  }
                });
                observer.observe({ entryTypes: ['largest-contentful-paint', 'interaction'] });
              }
            `
          }}
        />
      </body>
    </html>
  )
}
