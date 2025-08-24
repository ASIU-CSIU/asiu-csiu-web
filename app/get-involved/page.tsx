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
  MessageSquare,
  Settings,
  DollarSign,
  ArrowRight,
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
          subtitle="Join Advocates for Science @ IU and make a difference in science policy. Discover upcoming events, volunteer opportunities, and ways to contribute to evidence-based advocacy efforts."
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
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
                <TabsTrigger value="events">Upcoming Events</TabsTrigger>
                <TabsTrigger value="opportunities">Volunteer Opportunities</TabsTrigger>
                <TabsTrigger value="working-groups">Working Groups</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
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

              <TabsContent value="opportunities" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">Volunteer Opportunities</h2>
                  <p className="text-gray-600">Find ways to contribute your skills and time to our advocacy efforts</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-science-blue rounded-lg flex items-center justify-center mb-4">
                        <Megaphone className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Event Planning</CardTitle>
                      <CardDescription>Help organize advocacy events and workshops</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Assist with planning and coordinating public forums, training sessions, and community engagement
                        events.
                      </p>
                      <Badge variant="secondary" className="text-xs">2-4 hours/week</Badge>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-science-green rounded-lg flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Research Support</CardTitle>
                      <CardDescription>Contribute to policy research and analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Help research policy issues, analyze legislation, and prepare briefing materials for advocacy
                        efforts.
                      </p>
                      <Badge variant="secondary" className="text-xs">3-5 hours/week</Badge>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-science-red rounded-lg flex items-center justify-center mb-4">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Communications</CardTitle>
                      <CardDescription>Help with social media and content creation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Create social media content, write blog posts, and help maintain our digital presence to reach
                        broader audiences.
                      </p>
                      <Badge variant="secondary" className="text-xs">2-3 hours/week</Badge>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Outreach Coordinator</CardTitle>
                      <CardDescription>Help build partnerships and community connections</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Reach out to potential partners, coordinate with other organizations, and help expand our network
                        of supporters.
                      </p>
                      <Badge variant="secondary" className="text-xs">3-4 hours/week</Badge>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Grant Writing</CardTitle>
                      <CardDescription>Help secure funding for our programs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Assist with grant applications, fundraising campaigns, and financial planning to support our
                        advocacy initiatives.
                      </p>
                      <Badge variant="secondary" className="text-xs">4-6 hours/week</Badge>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                        <Settings className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Technical Support</CardTitle>
                      <CardDescription>Help with website and technical needs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Provide technical support for our website, digital tools, and help maintain our online presence
                        and systems.
                      </p>
                      <Badge variant="secondary" className="text-xs">2-3 hours/week</Badge>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="working-groups" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">Working Groups</h2>
                  <p className="text-gray-600">Join specialized teams focused on different aspects of our advocacy work</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-l-4 border-l-science-blue">
                    <CardHeader>
                      <CardTitle className="text-science-blue">Legislative Advocacy</CardTitle>
                      <CardDescription>Direct engagement with policymakers and legislative processes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Work directly with elected officials, track legislation, and develop policy positions on key
                        science issues.
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
                      </div>
                      <Button size="sm" className="bg-science-blue">
                        Join Group
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-science-green">
                    <CardHeader>
                      <CardTitle className="text-science-green">Education & Outreach</CardTitle>
                      <CardDescription>Community engagement and science communication</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Develop educational materials, organize public forums, and create science communication content
                        for diverse audiences.
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
                      </div>
                      <Button size="sm" className="bg-science-green">
                        Join Group
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-science-red">
                    <CardHeader>
                      <CardTitle className="text-science-red">Events</CardTitle>
                      <CardDescription>Planning and coordinating advocacy events and activities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Plan and execute advocacy training sessions, public forums, and community engagement events
                        throughout the year.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">6 active members</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Meets weekly</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-science-red">
                        Join Group
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-600">
                    <CardHeader>
                      <CardTitle className="text-purple-600">Communications</CardTitle>
                      <CardDescription>Digital presence and content strategy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Manage social media accounts, create content, and develop communication strategies to amplify
                        our advocacy messages.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">5 active members</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Meets bi-weekly</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-purple-600">
                        Join Group
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">Resources</h2>
                  <p className="text-gray-600">Tools and materials to help you get started with science advocacy</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-science-blue rounded-lg flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Advocacy Guide</CardTitle>
                      <CardDescription>Comprehensive guide to science policy advocacy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Step-by-step guide covering effective communication strategies, policy research methods, and
                        engagement techniques.
                      </p>
                      <Button size="sm" className="bg-science-blue">
                        Download Guide
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-science-green rounded-lg flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Training Materials</CardTitle>
                      <CardDescription>Workshop materials and presentation templates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Access to training materials, presentation templates, and workshop resources for science
                        communication.
                      </p>
                      <Button size="sm" className="bg-science-green">
                        Access Materials
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-science-red rounded-lg flex items-center justify-center mb-4">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Policy Database</CardTitle>
                      <CardDescription>Research and analysis resources</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Database of policy research, legislative tracking tools, and analysis frameworks for
                        understanding complex issues.
                      </p>
                      <Button size="sm" className="bg-science-red">
                        Explore Database
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
