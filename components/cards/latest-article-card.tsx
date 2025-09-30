import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { NewsArticle } from "@/lib/types"
import { ClampedText } from "./clamped-text"

interface LatestArticleCardProps {
    article: NewsArticle
}

export function LatestArticleCard({ article }: LatestArticleCardProps) {
    // Format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    // Get badge color based on first tag
    const getBadgeColor = (tags?: string[]) => {
        if (!tags || tags.length === 0) return 'bg-science-blue'
        const firstTag = tags[0]?.toLowerCase() || ''
        if (firstTag.includes('climate') || firstTag.includes('environment')) return 'bg-science-blue'
        if (firstTag.includes('healthcare') || firstTag.includes('medical')) return 'bg-science-green'
        if (firstTag.includes('democracy') || firstTag.includes('policy')) return 'bg-science-red'
        if (firstTag.includes('education') || firstTag.includes('training')) return 'bg-science-green'
        return 'bg-science-blue'
    }

    // Get button color based on first tag
    const getButtonColor = (tags?: string[]) => {
        if (!tags || tags.length === 0) return 'text-science-blue border-science-blue hover:bg-science-blue hover:text-white'
        const firstTag = tags[0]?.toLowerCase() || ''
        if (firstTag.includes('climate') || firstTag.includes('environment')) return 'text-science-blue border-science-blue hover:bg-science-blue hover:text-white'
        if (firstTag.includes('healthcare') || firstTag.includes('medical')) return 'text-science-green border-science-green hover:bg-science-green hover:text-white'
        if (firstTag.includes('democracy') || firstTag.includes('policy')) return 'text-science-red border-science-red hover:bg-science-red hover:text-white'
        if (firstTag.includes('education') || firstTag.includes('training')) return 'text-science-green border-science-green hover:bg-science-green hover:text-white'
        return 'text-science-blue border-science-blue hover:bg-science-blue hover:text-white'
    }

    // Clean content preview (remove headers and get first paragraph)
    const getContentPreview = (content: string) => {
        return content
            .split('\n')
            .filter(line => !line.trim().startsWith('#'))
            .join(' ')
            .substring(0, 120)
    }

    const badgeColor = getBadgeColor(article.tags)
    const buttonColor = getButtonColor(article.tags)
    const contentPreview = getContentPreview(article.content)

    return (
        <Card className="w-[360px] flex-shrink-0 overflow-hidden p-0 pb-6 gap-0" role="article" aria-labelledby={`article-title-${article._id}`}>
            <div className="relative h-40 w-full">
                <Image
                    src="/images/placeholders/news-placeholder.png"
                    alt="Newspaper texture background"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <CardHeader className="pb-3 pt-4 px-6">
                <div className="flex items-center justify-between mb-2">
                    <Badge className={badgeColor}>{article.tags?.[0] || 'Article'}</Badge>
                    <span className="text-sm text-gray-500">{formatDate(article.publishedAt)}</span>
                </div>
                <ClampedText
                    text={article.title}
                    className="text-xl line-clamp-3 leading-6.5"
                    asChild
                >
                    <CardTitle id={`article-title-${article._id}`} />
                </ClampedText>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>By {article.author}</span>
                </div>
            </CardHeader>
            <CardContent className="pt-0 px-6">
                <ClampedText
                    text={contentPreview + '...'}
                    className="text-gray-600 text-base mb-4 line-clamp-3"
                />
                <div className="space-y-3">
                    <Button
                        size="sm"
                        variant="outline"
                        className={`${buttonColor} w-full`}
                        asChild
                    >
                        <Link href={`/news/articles/${article.slug}`}>
                            Read Article
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
