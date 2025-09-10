"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/composite/tabs"
import Link from "next/link"
import {
    Clock,
    MapPin,
    Users,
    ExternalLink,
    Instagram,
    Facebook,
    FileText,
    Megaphone,
    BookOpen,
    Award,
    Calendar,
    Slack,
    Settings,
    DollarSign,
    ArrowRight,
    Vote,
    Monitor,
    PenTool,
    CalendarDays,
} from "lucide-react"
import { EventCard } from "@/components/cards/event-card"
import { EventsCalendar } from "@/components/features/events-calendar"
import type { Event } from "@/lib/types"
import { parseLocalDate } from "@/lib/utils"

interface GetInvolvedClientProps {
    events: Event[]
}

export function GetInvolvedClient({ events }: GetInvolvedClientProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState("events-calendar")
    const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
    const [pastEvents, setPastEvents] = useState<Event[]>([])

    // Sort events into upcoming and past
    useEffect(() => {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

        const upcoming: Event[] = []
        const past: Event[] = []

        events.forEach((event: Event) => {
            // Parse date as local date to avoid timezone shifts
            const eventDate = parseLocalDate(event.date)
            const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate())

            if (eventDateOnly >= today) {
                upcoming.push(event)
            } else {
                past.push(event)
            }
        })

        // Sort upcoming events by date (earliest first) - timezone-safe
        upcoming.sort((a, b) => {
            const dateA = parseLocalDate(a.date)
            const dateB = parseLocalDate(b.date)
            return dateA.getTime() - dateB.getTime()
        })

        // Sort past events by date (most recent first) - timezone-safe
        past.sort((a, b) => {
            const dateA = parseLocalDate(a.date)
            const dateB = parseLocalDate(b.date)
            return dateB.getTime() - dateA.getTime()
        })

        setUpcomingEvents(upcoming)
        setPastEvents(past)
    }, [events])

    // Set initial tab from URL parameter
    useEffect(() => {
        const tabParam = searchParams.get('tab')
        if (tabParam && ['events-calendar', 'past-events', 'working-groups', 'phoning'].includes(tabParam)) {
            setActiveTab(tabParam)
        }
    }, [searchParams])

    // Handle tab change and update URL
    const handleTabChange = (newTab: string) => {
        setActiveTab(newTab)
        const params = new URLSearchParams(searchParams.toString())
        if (newTab === "events-calendar") {
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
                    <TabsList className="grid w-full grid-cols-4 max-w-4xl mx-auto mb-12">
                        <TabsTrigger value="events-calendar">Events Calendar</TabsTrigger>
                        <TabsTrigger value="past-events">Past Events</TabsTrigger>
                        <TabsTrigger value="working-groups">Join Committees</TabsTrigger>
                        <TabsTrigger value="phoning">Legislator Calls</TabsTrigger>
                    </TabsList>

                    <TabsContent value="phoning" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-3xl font-bold mb-4">Phoning Your Legislator</h2>
                            <p className="text-gray-600">Make your voice heard by contacting Indiana's federal legislators about science policy issues</p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Contact Information for Indiana's Federal Legislators</CardTitle>
                                    <CardDescription>Below is contact information for the DC offices for three Indiana legislators from the 9th district.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="font-semibold text-lg text-science-blue">Senator Todd Young</h3>
                                                <div className="text-sm text-gray-600 space-y-1">
                                                    <p>400 Russell Senate Office Building</p>
                                                    <p>Washington DC 20510</p>
                                                    <p className="font-medium">(202) 224-5623</p>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-lg text-science-blue">Senator Mike Braun</h3>
                                                <div className="text-sm text-gray-600 space-y-1">
                                                    <p>374 Russell Senate Office Building</p>
                                                    <p>Washington DC 20510</p>
                                                    <p className="font-medium">(202) 224-4814</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-lg text-science-blue">Rep. Trey Hollingsworth (9th district)</h3>
                                            <div className="text-sm text-gray-600 space-y-1">
                                                <p>1641 Longworth House Office Building</p>
                                                <p>Washington, D.C. 20515</p>
                                                <p className="font-medium">(202) 225-5315</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Sample Script for Calling Your Legislator</CardTitle>
                                    <CardDescription>Use this script as a guide when calling to express your support for science funding</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <div className="space-y-4 text-sm">
                                            <p>
                                                <strong>Hi, My name is [NAME], and I'm a constituent from [CITY, ZIP CODE],</strong>
                                            </p>

                                            <p>
                                                I am calling to express opposition to budget cuts to scientific research. Research is critical to keep America a leader in biomedical and energy research and innovation. Research creates jobs and helps keep America safe. The deep budget cuts proposed by the President would end the careers of scientists of all levels, and thereby cripple US research and the economy for decades to come. I expect [REP NAME] to vote against budget cuts to scientific research and any attempt to undermine the integrity and productivity of US scientific research and development.
                                            </p>

                                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                                                <p className="text-sm">
                                                    <strong>IF LEAVING A VOICEMAIL:</strong> Please leave your full street address to ensure your call is tallied
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="events-calendar" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-3xl font-bold mb-4">Events Calendar</h2>
                            <p className="text-gray-600">Browse our upcoming events and select a date to view event details</p>
                        </div>

                        <EventsCalendar events={events} />

                        {/* {upcomingEvents.length > 0 ? (
                            <div className="flex flex-wrap justify-center gap-8">
                                {upcomingEvents.map((event: Event) => (
                                    <div key={event._id} className="w-full md:w-96 lg:w-80">
                                        <EventCard event={event} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No upcoming events scheduled at this time.</p>
                                <p className="text-gray-400 mt-2">Check back soon for new events!</p>
                            </div>
                        )} */}
                    </TabsContent>

                    <TabsContent value="past-events" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-3xl font-bold mb-4">Past Events</h2>
                            <p className="text-gray-600">Check out our recent advocacy training, public forums, and community engagement events</p>
                        </div>

                        {pastEvents.length > 0 ? (
                            <div className="flex flex-wrap justify-center gap-8">
                                {pastEvents.map((event: Event) => (
                                    <div key={event._id} className="w-full md:w-96 lg:w-80">
                                        <EventCard event={event} isPast={true} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No past events to display at this time.</p>
                                <p className="text-gray-400 mt-2">Check back soon for event updates!</p>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="working-groups" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-3xl font-bold mb-4">Join Our Committees</h2>
                            <p className="text-gray-600">Choose a specialized committee focused on different aspects of our advocacy work and contribute your skills</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="">
                                <CardHeader>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-science-blue rounded-md flex items-center justify-center">
                                            <div className="h-10 w-11 flex items-center justify-center">
                                                <Vote className="h-6 w-6 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <CardTitle className="text-science-blue">Policy & Government Relations</CardTitle>
                                            <CardDescription>Direct engagement with policymakers and legislative processes</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Work directly with elected officials, track legislation, develop policy positions on key
                                        science issues, and coordinate political action campaigns.
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <Users className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">12 active members</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">Meets bi-weekly</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">3-5 hours/week commitment</span>
                                        </div>
                                    </div>
                                    <Button size="sm" className="bg-science-blue">
                                        <Slack className="h-4 w-4 mr-0.5" />
                                        Join Slack
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="">
                                <CardHeader>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-science-green rounded-md flex items-center justify-center">
                                            <div className="h-10 w-11 flex items-center justify-center">
                                                <Monitor className="h-6 w-6 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <CardTitle className="text-science-green">Digital Media & Communications</CardTitle>
                                            <CardDescription>Digital presence, media relations, and content strategy</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Manage social media accounts, create digital content, and develop communication strategies.
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <Users className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">8 active members</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">Meets weekly</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">2-4 hours/week commitment</span>
                                        </div>
                                    </div>
                                    <Button size="sm" className="bg-science-green">
                                        <Slack className="h-4 w-4 mr-0.5" />
                                        Join Slack
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="">
                                <CardHeader>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-science-red rounded-md flex items-center justify-center">
                                            <div className="h-10 w-11 flex items-center justify-center">
                                                <PenTool className="ml-0.5 mt-0.5 h-6 w-6 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <CardTitle className="text-science-red">Written Journalism</CardTitle>
                                            <CardDescription>Content creation, editorial work, and written advocacy</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Write articles, op-eds, policy briefs, and other written content to advance science advocacy
                                        and communicate complex issues to diverse audiences.
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <Users className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">6 active members</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">Meets bi-weekly</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">2-3 hours/week commitment</span>
                                        </div>
                                    </div>
                                    <Button size="sm" className="bg-science-red">
                                        <Slack className="h-4 w-4 mr-0.5" />
                                        Join Slack
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="">
                                <CardHeader>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-science-orange rounded-md flex items-center justify-center">
                                            <div className="h-10 w-11 flex items-center justify-center">
                                                <CalendarDays className="h-6 w-6 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <CardTitle className="text-science-orange">Event Planning</CardTitle>
                                            <CardDescription>Planning and coordinating advocacy events and activities</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Plan and execute advocacy training sessions, public forums, workshops, and community engagement
                                        events throughout the year.
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <Users className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">5 active members</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">Meets weekly</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">2-3 hours/week commitment</span>
                                        </div>
                                    </div>
                                    <Button size="sm" className="bg-science-orange">
                                        <Slack className="h-4 w-4 mr-0.5" />
                                        Join Slack
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
