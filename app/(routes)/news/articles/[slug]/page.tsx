import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { getNewsArticleBySlug, getNewsArticles } from "@/lib/sanity"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { NewsArticle } from "@/lib/types"
import { getStructuredData } from "@/lib/metadata"
import { headers } from 'next/headers'
import { LinkifiedText } from '@/components/util/linkified-text';

export const revalidate = 3600

interface ArticlePageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const articles = await getNewsArticles()
    return articles.map((article: NewsArticle) => ({
        slug: article.slug,
    }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
    const article = await getNewsArticleBySlug(params.slug)

    if (!article) {
        return {
            title: 'Article Not Found',
        }
    }

    return {
        title: article.title,
        description: article.content.substring(0, 160),
        openGraph: {
            title: article.title,
            description: article.content.substring(0, 160),
            type: 'article',
            publishedTime: article.publishedAt,
            authors: article.authors.map((author: any) => author.name),
            tags: article.tags,
        },
    }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const headersList = await headers()
    const host = headersList.get('host') || ''
    const domain = host.replace(/^www\./, '')

    const article = await getNewsArticleBySlug(params.slug)

    if (!article) {
        notFound()
    }

    const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": article.title,
                        "author": article.authors.map((author: any) => ({
                            "@type": "Person",
                            "name": author.name,
                            "description": author.bio
                        })),
                        "datePublished": article.publishedAt,
                        "description": article.content.substring(0, 160),
                        "publisher": {
                            "@type": "Organization",
                            "name": "Advocates for Science at IU"
                        }
                    })
                }}
            />
            <LayoutWrapper>
                {/* Hero Section */}
                <HeroSection
                    title={article.title}
                    subtitle={`By ${article.authors.map((author: any) => author.name).join(', ')} • ${formattedDate}`}
                    showLogo={false}
                    showNewsletter={false}
                    primaryButtonText=""
                    secondaryButtonText=""
                    className="py-16"
                    overlayImage="/images/overlays/overlay-news.JPG"
                    showPageOutcrop={true}
                    breadcrumbItems={[
                        { label: "News", href: "/news" },
                        { label: "Articles", href: "/news?tab=articles" },
                        { label: article.title }
                    ]}
                />

                {/* Article Content */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Back Button */}
                        <div className="mb-8">
                            <Link href="/news?tab=articles">
                                <Button variant="outline" className="flex items-center space-x-2">
                                    <ArrowLeft className="h-4 w-4" />
                                    <span>Back to Articles</span>
                                </Button>
                            </Link>
                        </div>

                        {/* Article Meta */}
                        <div className="mb-8">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                <div className="flex items-center space-x-2">
                                    <User className="h-4 w-4" />
                                    <span>{article.authors.map((author: any) => author.name).join(', ')}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{formattedDate}</span>
                                </div>
                            </div>

                            {article.tags && article.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.map((tag: any, index: any) => (
                                        <Badge key={index} className="bg-science-blue text-white">
                                            <Tag className="h-3 w-3 mr-1" />
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Article Content */}
                        <Card>
                            <CardContent className="-mt-2">
                                <div className="prose prose-xl max-w-none">
                                {article.content.split('\n').map((paragraph: any, index: number) => {
                                    if (paragraph.trim() === '') return null

                                    if (paragraph.startsWith('#')) {
                                        const level = paragraph.match(/^#+/)?.[0].length || 1
                                        const text = paragraph.replace(/^#+\s*/, '')

                                        const isFirst = index === 0

                                        if (level === 1) {
                                        return <h1 key={index} className={`text-4xl font-bold mb-6 ${isFirst ? 'mt-0' : 'mt-10'} text-gray-900`}>{text}</h1>
                                        } else if (level === 2) {
                                        return <h2 key={index} className={`text-3xl font-bold mb-4 ${isFirst ? 'mt-0' : 'mt-8'} text-gray-900`}>{text}</h2>
                                        } else if (level === 3) {
                                        return <h3 key={index} className={`text-2xl font-bold mb-3 ${isFirst ? 'mt-0' : 'mt-6'} text-gray-900`}>{text}</h3>
                                        } else {
                                        return <h4 key={index} className={`text-xl font-bold mb-3 ${isFirst ? 'mt-0' : 'mt-5'} text-gray-900`}>{text}</h4>
                                        }
                                    }

                                    return <LinkifiedText key={index} text={paragraph} className="mb-6 leading-8 text-lg text-gray-700" />
                                })}
                                </div>
                            </CardContent>
                        </Card>

                                                {article.authors && article.authors.map((author: any, index: any) => (
                            <Card key={index} className="mb-6 mt-8">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center space-x-2">
                                        <User className="h-5 w-5" />
                                        <span>About {author.name}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-start space-x-4">
                                        {author.imageUrl && (
                                            <img
                                                src={author.imageUrl}
                                                alt={author.name}
                                                className="w-16 h-16 rounded-full object-cover"
                                            />
                                        )}
                                        <p className="text-gray-600">{author.bio}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Back to Articles */}
                        <div className="mt-8 text-center">
                            <Link href="/news?tab=articles">
                                <Button className="bg-science-blue">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back to All Articles
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </LayoutWrapper>
        </>
    )
}
