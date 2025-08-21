import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Megaphone,
  BookOpen,
  Calendar,
  MessageSquare,
  Settings,
  DollarSign,
  Users,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react"

export default function GetInvolvedPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Involved</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join our community of passionate advocates working to ensure science guides policy decisions. There are many
            ways to contribute your skills and make a meaningful impact.
          </p>
        </div>
      </section>

      {/* Working Groups */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Working Groups</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our working groups focus on different aspects of science advocacy. Join one or more groups based on your
              interests and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-science-red rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-science-red">Legislative Advocacy</CardTitle>
                <CardDescription>Direct engagement with policymakers and legislative processes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Work directly with local and state representatives to advocate for evidence-based policies.
                  Participate in policy briefings, draft position papers, and organize advocacy campaigns.
                </p>
                <div className="space-y-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Policy Research
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Government Relations
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Campaign Strategy
                  </Badge>
                </div>
                <Button size="sm" className="bg-science-red hover:bg-red-700">
                  Join Group
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-science-blue rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-science-blue">Education & Outreach</CardTitle>
                <CardDescription>Community engagement and science communication</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Develop educational materials, organize public forums, and create content to communicate scientific
                  concepts to diverse audiences. Lead workshops and community presentations.
                </p>
                <div className="space-y-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Science Communication
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Workshop Development
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Public Speaking
                  </Badge>
                </div>
                <Button size="sm" className="bg-science-blue hover:bg-blue-700">
                  Join Group
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-science-green rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-science-green">Events</CardTitle>
                <CardDescription>Planning and coordinating advocacy events and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Organize advocacy training sessions, public forums, networking events, and collaborative activities
                  with partner organizations. Manage logistics and coordinate volunteers.
                </p>
                <div className="space-y-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Event Planning
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Logistics Management
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Partnership Coordination
                  </Badge>
                </div>
                <Button size="sm" className="bg-science-green hover:bg-green-700">
                  Join Group
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-purple-600">Communications</CardTitle>
                <CardDescription>Managing our digital presence and messaging</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Develop content for social media, newsletters, and website. Create graphics, manage online campaigns,
                  and coordinate messaging across all platforms.
                </p>
                <div className="space-y-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Social Media
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Content Creation
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Graphic Design
                  </Badge>
                </div>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Join Group
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-orange-600">Steering</CardTitle>
                <CardDescription>Strategic planning and organizational leadership</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Guide the overall direction of the organization, coordinate between working groups, and make strategic
                  decisions about campaigns and initiatives.
                </p>
                <div className="space-y-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Strategic Planning
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Leadership
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Coordination
                  </Badge>
                </div>
                <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                  Join Group
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-green-600">Finance</CardTitle>
                <CardDescription>Budget management and fundraising coordination</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Manage organizational finances, coordinate fundraising efforts, apply for grants, and ensure
                  transparent financial practices for all activities.
                </p>
                <div className="space-y-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Budget Management
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Grant Writing
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Fundraising
                  </Badge>
                </div>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Join Group
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meeting Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Meeting Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-science-blue">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-science-blue" />
                  <span className="text-sm font-medium text-science-blue">General Assembly</span>
                </div>
                <CardTitle>Weekly All-Hands Meeting</CardTitle>
                <CardDescription>Open to all members and newcomers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Every Wednesday, 7:00 PM - 8:30 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Student Union, Room 204</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Join us for updates, planning sessions, and coordination between working groups. Perfect for new
                    members to get oriented.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-science-green">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Settings className="h-5 w-5 text-science-green" />
                  <span className="text-sm font-medium text-science-green">Working Group Meetings</span>
                </div>
                <CardTitle>Specialized Team Sessions</CardTitle>
                <CardDescription>Focus on specific advocacy areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Various times throughout the week</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Locations vary by group</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Each working group meets separately to focus on their specific projects and initiatives. Schedule
                    varies by group.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-science-red">Event Support</CardTitle>
                <CardDescription>Help with logistics and coordination</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Assist with setup, registration, and coordination for our advocacy training sessions, public forums,
                  and community events.
                </p>
                <Badge variant="outline" className="text-xs mb-2">
                  Flexible Schedule
                </Badge>
                <br />
                <Badge variant="outline" className="text-xs">
                  No Experience Required
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-science-blue">Research Support</CardTitle>
                <CardDescription>Contribute to policy research and analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Help research policy issues, compile data, and support the development of position papers and advocacy
                  materials.
                </p>
                <Badge variant="outline" className="text-xs mb-2">
                  Research Skills Helpful
                </Badge>
                <br />
                <Badge variant="outline" className="text-xs">
                  Remote Friendly
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-science-green">Outreach Ambassador</CardTitle>
                <CardDescription>Represent us at campus and community events</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Staff information tables, distribute materials, and engage with students and community members at
                  various events.
                </p>
                <Badge variant="outline" className="text-xs mb-2">
                  Communication Skills
                </Badge>
                <br />
                <Badge variant="outline" className="text-xs">
                  Training Provided
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-science-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-3xl font-bold mb-6">Ready to Join Our Movement?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Whether you have 2 hours a week or 20, there's a place for you in our community of science advocates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-science-blue hover:bg-gray-100">
              Attend Next Meeting
              <ArrowRight className="ml-2 h-5 w-5" />
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
  )
}
