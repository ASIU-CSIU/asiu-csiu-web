import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { getNewsBulletins } from "@/lib/sanity"
import { NewsClient } from "./news-client"
import type { NewsBulletin } from "@/lib/types"
import { Suspense } from "react"

export const revalidate = 3600

export default async function NewsPage() {
    const newsBulletins = await getNewsBulletins()

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "News - Advocates for Science @ IU",
                        "description": "Stay updated with our latest news bulletins, articles, and educational content.",
                        "url": "https://www.advocatesforscienceatiu.org/news"
                    })
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
