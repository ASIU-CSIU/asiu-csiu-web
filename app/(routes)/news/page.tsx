import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { getNewsBulletins } from "@/lib/sanity"
import { NewsClient } from "./news-client"
import type { NewsBulletin } from "@/lib/types"
import { Suspense } from "react"
import { getStructuredData } from "@/lib/metadata"
import { headers } from 'next/headers'

export const revalidate = 3600

export default async function NewsPage() {
    const headersList = await headers()
    const host = headersList.get('host') || ''
    const domain = host.replace(/^www\./, '') // Remove www prefix for domain matching

    const newsBulletins = await getNewsBulletins()

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getStructuredData("news", domain))
                }}
            />
            <LayoutWrapper>
                {/* Hero Section */}
                <HeroSection
                    title="News"
                    subtitle="Stay updated with our latest news bulletins, articles, and educational content."
                    showLogo={false}
                    showNewsletter={false}
                    primaryButtonText=""
                    secondaryButtonText=""
                    className="py-16"
                    overlayImage="/images/overlays/overlay-news.JPG"
                    showPageOutcrop={true}
                    breadcrumbItems={[{ label: "News" }]}
                />

                {/* Content Tabs */}
                <Suspense fallback={<div className="py-8 text-center">Loading...</div>}>
                    <NewsClient newsBulletins={newsBulletins} />
                </Suspense>
            </LayoutWrapper>
        </>
    )
}
