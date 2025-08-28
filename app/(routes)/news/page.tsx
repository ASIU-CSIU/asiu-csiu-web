import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
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
    Link,
} from "lucide-react"

import { getNewsBulletins } from "@/lib/sanity"
import { NewsBulletinCard } from "@/components/cards/news-bulletin-card"
import type { NewsBulletin } from "@/lib/types"
import { getPageMetadata, getStructuredData } from "@/lib/metadata"

export const revalidate = 3600

export const metadata = getPageMetadata("news")

export default async function NewsPage() {
    const newsBulletins = await getNewsBulletins()

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getStructuredData("news"))
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
                />

                {/* Content Tabs */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Tabs defaultValue="bulletins" className="w-full">
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

                                <div className="grid md:grid-cols-2 gap-8">
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

                                    <Card className="border-l-4 border-l-science-green hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-2">
                                                <Badge className="bg-science-green">Public Forum</Badge>
                                                <span className="text-sm text-gray-500">Jan 22, 2025</span>
                                            </div>
                                            <CardTitle className="text-xl">Climate Action Town Hall</CardTitle>
                                            <CardDescription>Community discussion on local climate policy initiatives</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3 mb-4">
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="h-4 w-4 text-gray-500" />
                                                    <span className="text-sm">7:00 PM - 8:30 PM</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="h-4 w-4 text-gray-500" />
                                                    <span className="text-sm">Monroe County Public Library</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Users className="h-4 w-4 text-gray-500" />
                                                    <span className="text-sm">Open to the public</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4">
                                                Join local experts, policymakers, and community members to discuss evidence-based climate action
                                                strategies for our region.
                                            </p>
                                            <Button size="sm" className="bg-science-green">
                                                Learn More
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-science-red hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-2">
                                                <Badge className="bg-science-red">Weekly Meeting</Badge>
                                                <span className="text-sm text-gray-500">Every Wednesday</span>
                                            </div>
                                            <CardTitle className="text-xl">General Assembly</CardTitle>
                                            <CardDescription>Regular planning and coordination meeting</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3 mb-4">
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="h-4 w-4 text-gray-500" />
                                                    <span className="text-sm">7:00 PM - 8:30 PM</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="h-4 w-4 text-gray-500" />
                                                    <span className="text-sm">Student Union, Room 204</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Users className="h-4 w-4 text-gray-500" />
                                                    <span className="text-sm">All members welcome</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4">
                                                Join us for updates, campaign planning, and coordination between working groups. Perfect for new
                                                members to get involved.
                                            </p>
                                            <Button size="sm" className="bg-science-red">
                                                Join Meeting
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-2">
                                                <Badge className="bg-purple-600">Special Event</Badge>
                                                <span className="text-sm text-gray-500">Feb 5, 2025</span>
                                            </div>
                                            <CardTitle className="text-xl">Science Policy Career Panel</CardTitle>
                                            <CardDescription>Networking event with science policy professionals</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3 mb-4">
                                                <div className="flex items-center space-x-2">
                                                    <Clock className="h-4 w-4 text-gray-500" />
                                                    <span className="text-sm">5:30 PM - 7:30 PM</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="h-4 w-4 text-gray-500" />
                                                    <span className="text-sm">Indiana Memorial Union</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Users className="h-4 w-4 text-gray-500" />
                                                    <span className="text-sm">Students and professionals</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4">
                                                Meet professionals working in science policy, government relations, and advocacy organizations.
                                                Includes networking reception.
                                            </p>
                                            <Button size="sm" className="bg-purple-600">
                                                RSVP Required
                                            </Button>
                                        </CardContent>
                                    </Card>
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

                                    <Card className="hover:shadow-lg transition-shadow">
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

                                    <Card className="hover:shadow-lg transition-shadow">
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

                                    <Card className="hover:shadow-lg transition-shadow">
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

                                    <Card className="hover:shadow-lg transition-shadow">
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

                                    <Card className="hover:shadow-lg transition-shadow">
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
            </LayoutWrapper>
        </>
    )
}
