"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/composite/tabs"
import {
    Clock,
    MapPin,
    Users,
    ExternalLink,
    Instagram,
    Facebook,
    FileText,
    Download,
    Megaphone,
    BookOpen,
    Award,
    Gavel,
    Globe,
    Lightbulb,
    Archive,
} from "lucide-react"

import { NewsBulletinCard } from "@/components/cards/news-bulletin-card"
import { InstagramFeed } from "@/components/sections/instagram-feed"
import type { NewsBulletin, NewsArticle } from "@/lib/types"
import Link from "next/link"

interface NewsClientProps {
    newsBulletins: NewsBulletin[]
    newsArticles: NewsArticle[]
}

export function NewsClient({ newsBulletins, newsArticles }: NewsClientProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState("bulletins")

    // Set initial tab from URL parameter
    useEffect(() => {
        const tabParam = searchParams.get('tab')
        if (tabParam && ['bulletins', 'articles', 'social', 'educational', 'external'].includes(tabParam)) {
            setActiveTab(tabParam)
        }
    }, [searchParams])

    // Handle tab change and update URL
    const handleTabChange = (newTab: string) => {
        setActiveTab(newTab)
        const params = new URLSearchParams(searchParams.toString())
        if (newTab === "bulletins") {
            // Remove tab parameter for default tab
            params.delete('tab')
        } else {
            params.set('tab', newTab)
        }
        const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
        router.push(newUrl, { scroll: false })
    }

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                    <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-12">
                        <TabsTrigger value="bulletins">
                            <span className="hidden lg:inline">News Bulletins</span>
                            <span className="lg:hidden">Bulletins</span>
                        </TabsTrigger>
                        <TabsTrigger value="articles">Articles</TabsTrigger>
                        <TabsTrigger value="social">
                            <span className="hidden lg:inline">Social Media</span>
                            <span className="lg:hidden">Social</span>
                        </TabsTrigger>
                        <TabsTrigger value="educational">
                            <span className="hidden lg:inline">Educational</span>
                            <span className="lg:hidden">Resources</span>
                        </TabsTrigger>
                        <TabsTrigger value="external">
                            <span className="hidden lg:inline">External Links</span>
                            <span className="lg:hidden">Links</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="bulletins" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-3xl font-bold mb-4">News Bulletins</h2>
                            <p className="text-gray-600">Latest news bulletins and organizational updates</p>
                        </div>

                        {newsBulletins && newsBulletins.length > 0 ? (
                            <div className="space-y-6">
                                {newsBulletins.map((bulletin: NewsBulletin) => (
                                    <NewsBulletinCard key={bulletin._id} bulletin={bulletin} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-500 py-12">
                                <p>No news bulletins available yet.</p>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="articles" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-3xl font-bold mb-4">Articles & Journals</h2>
                            <p className="text-gray-600">Read from ASIU's very own journalists and researchers on the latest news in science policy</p>
                        </div>

                        {newsArticles && newsArticles.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-8">
                                {newsArticles.map((article: NewsArticle) => (
                                    <Card key={article._id} className="hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex flex-wrap gap-2">
                                                    {article.tags && article.tags.map((tag, index) => (
                                                        <Badge key={index} className="bg-science-blue text-white">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <span className="text-sm text-gray-500">
                                                    {new Date(article.publishedAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                                            <CardDescription className="flex items-center space-x-2">
                                                <span>By {article.author}</span>
                                                {article.authorImage && (
                                                    <img
                                                        src={article.authorImage}
                                                        alt={article.author}
                                                        className="w-6 h-6 rounded-full"
                                                    />
                                                )}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {article.content
                                                    .split('\n')
                                                    .filter(line => !line.trim().startsWith('#'))
                                                    .join(' ')
                                                    .substring(0, 150)}...
                                            </p>
                                            <Link href={`/news/articles/${article.slug}`}>
                                                <Button size="sm" className="bg-science-blue">
                                                    Read More
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-500 py-12">
                                <p>No articles available yet.</p>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="social" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-3xl font-bold mb-4">Social Media Highlights</h2>
                            <p className="text-gray-600">
                                Follow us on social media for real-time updates and behind-the-scenes content
                            </p>
                        </div>

                        <InstagramFeed />
                    </TabsContent>

                    <TabsContent value="educational" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-3xl font-bold mb-4">Educational Resources</h2>
                            <p className="text-gray-600">Tools and materials for science advocacy and communication</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-science-blue rounded-lg flex items-center justify-center mb-4">
                                        <BookOpen className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>Advocacy Training Guide</CardTitle>
                                    <CardDescription>Comprehensive guide to science policy advocacy</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Step-by-step guide covering effective communication strategies, policy research methods, and
                                        engagement techniques for working with policymakers.
                                    </p>
                                    <Button size="sm" className="bg-science-blue">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Guide
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-science-green rounded-lg flex items-center justify-center mb-4">
                                        <Users className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>Community Engagement Toolkit</CardTitle>
                                    <CardDescription>Resources for public science communication</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Templates, presentation materials, and best practices for engaging diverse communities in science
                                        policy discussions and advocacy efforts.
                                    </p>
                                    <Button size="sm" className="bg-science-green">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Toolkit
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-science-red rounded-lg flex items-center justify-center mb-4">
                                        <Gavel className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>Policy Research Methods</CardTitle>
                                    <CardDescription>Guide to researching and analyzing policy issues</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Research methodologies, data sources, and analytical frameworks for understanding complex policy
                                        issues and developing evidence-based positions.
                                    </p>
                                    <Button size="sm" className="bg-science-red">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Methods
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                                        <Lightbulb className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>Science Communication Tips</CardTitle>
                                    <CardDescription>Best practices for explaining complex concepts</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Practical tips and techniques for making scientific concepts accessible to non-expert audiences,
                                        including policymakers and the general public.
                                    </p>
                                    <Button size="sm" className="bg-purple-600">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Tips
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                                        <FileText className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>Letter Writing Templates</CardTitle>
                                    <CardDescription>Templates for contacting elected officials</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Ready-to-use templates for writing effective letters to representatives, including formatting
                                        guidelines and sample language for various policy issues.
                                    </p>
                                    <Button size="sm" className="bg-orange-600">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Templates
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                                        <Globe className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>Digital Advocacy Guide</CardTitle>
                                    <CardDescription>Using social media and online tools for advocacy</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Strategies for effective online advocacy, including social media best practices, digital campaign
                                        planning, and online community building.
                                    </p>
                                    <Button size="sm" className="bg-teal-600">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Guide
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="external" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-3xl font-bold mb-4">External Resources</h2>
                            <p className="text-gray-600">Curated links to valuable external resources and partner organizations</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Link className="h-5 w-5 text-science-blue" />
                                        <span>Policy Organizations</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Union of Concerned Scientists</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">American Association for the Advancement of Science</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Science Policy Research Institute</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">National Science Policy Network</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Link className="h-5 w-5 text-science-green" />
                                        <span>Government Resources</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Indiana General Assembly</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Congressional Research Service</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Government Accountability Office</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Office of Science and Technology Policy</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Link className="h-5 w-5 text-science-red" />
                                        <span>Research & Data</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">National Science Foundation</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">National Institutes of Health</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Environmental Protection Agency</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Centers for Disease Control</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Link className="h-5 w-5 text-purple-600" />
                                        <span>Training & Education</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Science Communication Training</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Policy Advocacy Workshops</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Congressional Fellowship Programs</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Science Policy Graduate Programs</span>
                                            <Button size="sm" variant="outline">
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
