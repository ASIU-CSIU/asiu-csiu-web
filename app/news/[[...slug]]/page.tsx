import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
    Link,
} from "lucide-react"
import { redirect } from "next/navigation"

import { getNewsBulletins } from "@/lib/sanity"
import { NewsBulletinCard } from "@/components/news-bulletin-card"
import type { NewsBulletin } from "@/lib/types"

interface NewsPageProps {
    params: {
        slug?: string[]
    }
}

export const revalidate = 3600

export default async function NewsPage({ params }: NewsPageProps) {
    const { slug } = params

    // Determine the active tab from the slug
    const getActiveTab = () => {
        if (!slug || slug.length === 0) return "bulletins"

        const tab = slug[0]
        const validTabs = ["bulletins", "articles", "social", "educational", "external"]

        return validTabs.includes(tab) ? tab : "bulletins"
    }

    const activeTab = getActiveTab()

    // If the slug doesn't match the active tab, redirect to the correct URL
    if (slug && slug[0] !== activeTab) {
        redirect(`/news/${activeTab}`)
    }

    let newsBulletins: NewsBulletin[] = []

    try {
        newsBulletins = await getNewsBulletins()
    } catch (error) {
        console.error('Failed to fetch news bulletins:', error)
    }

    return (
        <LayoutWrapper>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">News</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Stay updated with our latest news bulletins, articles, and educational content.
                    </p>
                </div>
            </section>

            {/* Content Tabs */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue={activeTab} className="w-full">
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
                                    {newsBulletins.map((bulletin) => (
                                        <NewsBulletinCard key={bulletin._id} bulletin={bulletin} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center text-gray-500 py-12">
                                    <p>No news bulletins available yet.</p>
                                </div>
                            )}
                        </TabsContent>

                        {/* Rest of the TabsContent components remain the same */}
                        <TabsContent value="articles" className="space-y-8">
                            <div className="text-center mb-8">
                                <h2 className="font-heading text-3xl font-bold mb-4">Articles & Journals</h2>
                                <p className="text-gray-600">Read from ASIU's very own journalists and researchers on the latest news in science policy</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Articles content - same as before */}
                                <Card className="border-l-4 border-l-science-blue hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge className="bg-science-blue">Advocacy Training</Badge>
                                            <span className="text-sm text-gray-500">Jan 15, 2025</span>
                                        </div>
                                        <CardTitle className="text-xl">Science Communication Workshop</CardTitle>
                                        <CardDescription>Learn effective strategies for communicating with policymakers</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3 mb-4">
                                            <div className="flex items-center space-x-2">
                                                <Clock className="h-4 w-4 text-gray-500" />
                                                <span className="text-sm">6:00 PM - 9:00 PM</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <MapPin className="h-4 w-4 text-gray-500" />
                                                <span className="text-sm">Wells Library, Conference Room A</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Users className="h-4 w-4 text-gray-500" />
                                                <span className="text-sm">Open to all members</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Interactive workshop covering effective messaging, policy briefing techniques, and building
                                            relationships with elected officials.
                                        </p>
                                        <Button size="sm" className="bg-science-blue">
                                            Register Now
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Add more article cards as needed */}
                            </div>
                        </TabsContent>

                        <TabsContent value="social" className="space-y-8">
                            <div className="text-center mb-8">
                                <h2 className="font-heading text-3xl font-bold mb-4">Social Media Highlights</h2>
                                <p className="text-gray-600">
                                    Follow us on social media for real-time updates and behind-the-scenes content
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <blockquote
                                    className="instagram-media"
                                    data-instgrm-permalink="https://www.instagram.com/asiu.indiana/?utm_source=ig_embed&amp;utm_campaign=loading"
                                    data-instgrm-version="14"
                                    style={{
                                        background: '#FFF',
                                        border: 0,
                                        borderRadius: '3px',
                                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                        margin: '1px',
                                        maxWidth: '540px',
                                        minWidth: '326px',
                                        padding: 0,
                                        width: 'calc(100% - 2px)'
                                    }}
                                >
                                    {/* Instagram embed content */}
                                    <div style={{ padding: '16px' }}>
                                        <a
                                            href="https://www.instagram.com/asiu.indiana/?utm_source=ig_embed&amp;utm_campaign=loading"
                                            style={{
                                                background: '#FFFFFF',
                                                lineHeight: 0,
                                                padding: '0 0',
                                                textAlign: 'center',
                                                textDecoration: 'none',
                                                width: '100%'
                                            }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                                                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                                                </div>
                                            </div>
                                            <div style={{ padding: '19% 0' }}></div>
                                            <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                                                <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink">
                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                                            <g>
                                                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div style={{ paddingTop: '8px' }}>
                                                <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>View this profile on Instagram</div>
                                            </div>
                                            <div style={{ padding: '12.5% 0' }}></div>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                                                <div>
                                                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }}></div>
                                                    <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px' }}></div>
                                                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }}></div>
                                                </div>
                                                <div style={{ marginLeft: '8px' }}>
                                                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px' }}></div>
                                                    <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div>
                                                </div>
                                                <div style={{ marginLeft: 'auto' }}>
                                                    <div style={{ width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }}></div>
                                                    <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)' }}></div>
                                                    <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }}></div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: '24px' }}>
                                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '224px' }}></div>
                                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px' }}></div>
                                            </div>
                                        </a>
                                        <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            <a href="https://www.instagram.com/asiu.indiana/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px' }} target="_blank" rel="noopener noreferrer">Advocates for Science @ IU</a> (@<a href="https://www.instagram.com/asiu.indiana/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px' }} target="_blank" rel="noopener noreferrer">asiu.indiana</a>) • Instagram photos and videos
                                        </p>
                                    </div>
                                </blockquote>
                            </div>

                            <script async src="//www.instagram.com/embed.js"></script>
                        </TabsContent>

                        <TabsContent value="educational" className="space-y-8">
                            <div className="text-center mb-8">
                                <h2 className="font-heading text-3xl font-bold mb-4">Educational Resources</h2>
                                <p className="text-gray-600">Tools and materials for science advocacy and communication</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Educational resources content - same as before */}
                                <Card className="hover:shadow-lg transition-shadow">
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

                                {/* Add more educational resource cards as needed */}
                            </div>
                        </TabsContent>

                        <TabsContent value="external" className="space-y-8">
                            <div className="text-center mb-8">
                                <h2 className="font-heading text-3xl font-bold mb-4">External Resources</h2>
                                <p className="text-gray-600">Curated links to valuable external resources and partner organizations</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* External resources content - same as before */}
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
                                            {/* Add more external links as needed */}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </LayoutWrapper>
    )
}
