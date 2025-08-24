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
    Megaphone,
    BookOpen,
    Award,
} from "lucide-react"
import { redirect } from "next/navigation"

interface EventsPageProps {
    params: {
        slug?: string[]
    }
}

export default async function EventsPage({ params }: EventsPageProps) {
    const { slug } = params

    // Determine the active tab from the slug
    const getActiveTab = () => {
        if (!slug || slug.length === 0) return "upcoming"

        const tab = slug[0]
        const validTabs = ["upcoming", "recent"]

        return validTabs.includes(tab) ? tab : "upcoming"
    }

    const activeTab = getActiveTab()

    // If the slug doesn't match the active tab, redirect to the correct URL
    if (slug && slug[0] !== activeTab) {
        redirect(`/events/${activeTab}`)
    }

    return (
        <LayoutWrapper>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">Events</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Stay updated with our latest advocacy efforts, training sessions, public forums, and policy initiatives.
                    </p>
                </div>
            </section>

            {/* Content Tabs */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue={activeTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 max-w-2xl mx-auto mb-12">
                            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                            <TabsTrigger value="recent">Recent Activities</TabsTrigger>
                        </TabsList>

                        <TabsContent value="upcoming" className="space-y-8">
                            <div className="text-center mb-8">
                                <h2 className="font-heading text-3xl font-bold mb-4">Upcoming Events</h2>
                                <p className="text-gray-600">Join us at our next advocacy events and training sessions</p>
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

                        <TabsContent value="recent" className="space-y-8">
                            <div className="text-center mb-8">
                                <h2 className="font-heading text-3xl font-bold mb-4">Recent Activities</h2>
                                <p className="text-gray-600">Highlights from our recent advocacy efforts and events</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-science-blue rounded-lg flex items-center justify-center mb-4">
                                            <Megaphone className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge variant="secondary" className="bg-science-blue/10 text-science-blue">
                                                Advocacy Training
                                            </Badge>
                                            <span className="text-sm text-gray-500">Dec 15, 2024</span>
                                        </div>
                                        <CardTitle>Climate Policy Workshop</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 text-sm mb-4">
                                            30+ students participated in our comprehensive training on climate science communication and
                                            policy advocacy strategies.
                                        </p>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                                            <Users className="h-4 w-4" />
                                            <span>32 participants</span>
                                        </div>
                                        <Button size="sm" variant="outline">
                                            View Photos
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-science-green rounded-lg flex items-center justify-center mb-4">
                                            <BookOpen className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge variant="secondary" className="bg-science-green/10 text-science-green">
                                                Public Forum
                                            </Badge>
                                            <span className="text-sm text-gray-500">Dec 8, 2024</span>
                                        </div>
                                        <CardTitle>Science & Democracy Forum</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Community discussion featuring faculty, students, and local leaders on the role of science in
                                            democratic processes.
                                        </p>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                                            <Users className="h-4 w-4" />
                                            <span>85 attendees</span>
                                        </div>
                                        <Button size="sm" variant="outline">
                                            Read Summary
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-science-red rounded-lg flex items-center justify-center mb-4">
                                            <Award className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge variant="secondary" className="bg-science-red/10 text-science-red">
                                                Recognition
                                            </Badge>
                                            <span className="text-sm text-gray-500">Nov 20, 2024</span>
                                        </div>
                                        <CardTitle>Student Organization Award</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Received the Outstanding Student Advocacy Organization award from the IU Student Government for
                                            our policy work.
                                        </p>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                                            <Award className="h-4 w-4" />
                                            <span>University recognition</span>
                                        </div>
                                        <Button size="sm" variant="outline">
                                            Read More
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
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
