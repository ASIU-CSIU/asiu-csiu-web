import { LayoutWrapper } from "@/components/layout-wrapper"
import { HeroSection } from "@/components/hero-section"
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
import { getPageMetadata, getStructuredData } from "@/lib/metadata"

export const metadata = getPageMetadata("getInvolved")

export default function GetInvolvedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData("getInvolved"))
        }}
      />
      <LayoutWrapper>
        {/* Hero Section */}
        <HeroSection
          title="Get Involved"
          subtitle="Join Advocates for Science @ IU and make a difference in science policy. Discover upcoming events, join working groups, and contribute to evidence-based advocacy efforts."
          showLogo={false}
          showNewsletter={false}
          primaryButtonText=""
          secondaryButtonText=""
          className="py-16"
        />

        {/* Content Tabs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="events" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
                <TabsTrigger value="events">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past-events">Past Events</TabsTrigger>
                <TabsTrigger value="working-groups">Join Committees</TabsTrigger>
              </TabsList>

              <TabsContent value="events" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">Upcoming Events</h2>
                  <p className="text-gray-600">Join us for advocacy training, public forums, and community engagement opportunities</p>
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

              <TabsContent value="past-events" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">Past Events</h2>
                  <p className="text-gray-600">Check out our recent advocacy training, public forums, and community engagement events</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-l-4 border-l-science-blue hover:shadow-lg transition-shadow opacity-75">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-science-blue">Advocacy Training</Badge>
                        <span className="text-sm text-gray-500">Dec 10, 2024</span>
                      </div>
                      <CardTitle className="text-xl">Policy Briefing Workshop</CardTitle>
                      <CardDescription>Learn how to create effective policy briefs for legislators</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">6:00 PM - 8:00 PM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Wells Library, Conference Room B</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">25 attendees</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        Workshop covered policy brief structure, effective messaging, and how to present scientific
                        information to policymakers.
                      </p>
                      <Button size="sm" variant="outline" className="border-science-blue text-science-blue">
                        View Photos
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-science-green hover:shadow-lg transition-shadow opacity-75">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-science-green">Public Forum</Badge>
                        <span className="text-sm text-gray-500">Nov 28, 2024</span>
                      </div>
                      <CardTitle className="text-xl">Healthcare Policy Discussion</CardTitle>
                      <CardDescription>Community forum on evidence-based healthcare policy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">7:00 PM - 9:00 PM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Monroe County Public Library</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">40 attendees</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        Featured local healthcare experts discussing evidence-based approaches to healthcare policy
                        and community health initiatives.
                      </p>
                      <Button size="sm" variant="outline" className="border-science-green text-science-green">
                        Read Summary
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-science-red hover:shadow-lg transition-shadow opacity-75">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-science-red">Special Event</Badge>
                        <span className="text-sm text-gray-500">Nov 15, 2024</span>
                      </div>
                      <CardTitle className="text-xl">Science Advocacy Awards</CardTitle>
                      <CardDescription>Annual recognition of outstanding science advocates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">6:30 PM - 9:00 PM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Indiana Memorial Union</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">60 attendees</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        Celebrated the achievements of local science advocates and recognized outstanding contributions
                        to evidence-based policy making.
                      </p>
                      <Button size="sm" variant="outline" className="border-science-red text-science-red">
                        View Winners
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow opacity-75">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-purple-600">Training Session</Badge>
                        <span className="text-sm text-gray-500">Oct 30, 2024</span>
                      </div>
                      <CardTitle className="text-xl">Social Media Advocacy</CardTitle>
                      <CardDescription>Workshop on effective digital advocacy strategies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">5:00 PM - 7:00 PM</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Student Union, Room 204</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">18 attendees</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        Covered best practices for social media advocacy, content creation, and building online
                        communities around science policy issues.
                      </p>
                      <Button size="sm" variant="outline" className="border-purple-600 text-purple-600">
                        Access Materials
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="working-groups" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">Join Our Committees</h2>
                  <p className="text-gray-600">Choose a specialized committee focused on different aspects of our advocacy work and contribute your skills</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-l-4 border-l-science-blue">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-science-blue clip-hexagon flex items-center justify-center">
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

                  <Card className="border-l-4 border-l-science-green">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-science-green clip-hexagon flex items-center justify-center">
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
                        Manage social media accounts, create digital content, develop communication strategies, and
                        build relationships with media outlets to amplify our advocacy messages.
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

                  <Card className="border-l-4 border-l-science-red">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-science-red clip-hexagon flex items-center justify-center">
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

                  <Card className="border-l-4 border-l-purple-600">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-purple-600 clip-hexagon flex items-center justify-center">
                          <div className="h-10 w-11 flex items-center justify-center">
                            <CalendarDays className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <CardTitle className="text-purple-600">Event Planning</CardTitle>
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
                      <Button size="sm" className="bg-purple-600">
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

        {/* Call to Action */}
        <section className="py-16 bg-science-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our community of science advocates and help ensure that evidence-based decision making guides our
              future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-science-blue hover:bg-gray-100">
                Attend a Meeting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-science-blue bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  )
}
