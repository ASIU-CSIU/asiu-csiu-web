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

export default function EventsPage() {
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
          <Tabs defaultValue="bulletins" className="w-full">
            <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="bulletins">News Bulletins</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
              <TabsTrigger value="educational">Educational</TabsTrigger>
              <TabsTrigger value="external">External Links</TabsTrigger>
            </TabsList>

            <TabsContent value="bulletins" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-bold mb-4">News Bulletins</h2>
                <p className="text-gray-600">Latest news bulletins and organizational updates</p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-science-blue">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-science-blue">News Bulletin</Badge>
                      <span className="text-sm text-gray-500">January 8, 2025</span>
                    </div>
                    <CardTitle className="text-xl">New Partnership with State Environmental Agency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      We're excited to announce a new partnership with the Indiana Department of Environmental
                      Management to provide student input on upcoming environmental regulations. This collaboration will
                      give our members direct access to the policy-making process.
                    </p>
                    <Button size="sm" variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      Read Full Announcement
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-science-green">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-science-green">Open Letter</Badge>
                      <span className="text-sm text-gray-500">December 20, 2024</span>
                    </div>
                    <CardTitle className="text-xl">Healthcare Policy Statement Released</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Our comprehensive statement on evidence-based healthcare policy has been signed by over 150
                      students and faculty members. The letter calls for increased funding for public health research
                      and evidence-based healthcare reforms.
                    </p>
                    <Button size="sm" variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      Read Open Letter
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-science-red">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-science-red">Policy Update</Badge>
                      <span className="text-sm text-gray-500">December 1, 2024</span>
                    </div>
                    <CardTitle className="text-xl">Success: Science Funding Bill Passes State Legislature</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Thanks to advocacy efforts from our members and partner organizations, the Indiana Science
                      Research Funding Act has passed the state legislature, securing $50 million in additional funding
                      for university research programs.
                    </p>
                    <Button size="sm" variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      View Impact Report
                    </Button>
                  </CardContent>
                </Card>
              </div>
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
                    <Button size="sm" className="bg-science-blue hover:bg-blue-700">
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
                    <Button size="sm" className="bg-science-green hover:bg-green-700">
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
                    <Button size="sm" className="bg-science-red hover:bg-red-700">
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
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
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

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-pink-500">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-4">
                      <Instagram className="h-6 w-6 text-pink-500" />
                      <span className="font-semibold">@asiu_bloomington</span>
                    </div>
                    <CardTitle>Instagram Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">
                          "Amazing turnout at today's climate policy workshop! 🌱 Our members are ready to make their
                          voices heard in the statehouse. #ScienceAdvocacy #ClimateAction"
                        </p>
                        <span className="text-xs text-gray-500">2 days ago</span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">
                          "Behind the scenes at our weekly planning meeting. Democracy in action! 📊 #StudentAdvocacy
                          #EvidenceBasedPolicy"
                        </p>
                        <span className="text-xs text-gray-500">1 week ago</span>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4 bg-pink-500 hover:bg-pink-600">
                      <Instagram className="mr-2 h-4 w-4" />
                      Follow on Instagram
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-600">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-4">
                      <Facebook className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold">Advocates for Science @ IU</span>
                    </div>
                    <CardTitle>Facebook Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">
                          "Join us next Wednesday for our Science Communication Workshop! Learn how to effectively
                          communicate complex scientific concepts to policymakers and the public."
                        </p>
                        <span className="text-xs text-gray-500">3 days ago</span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">
                          "Proud to announce our partnership with the Indiana Department of Environmental Management.
                          Student voices matter in policy-making!"
                        </p>
                        <span className="text-xs text-gray-500">1 week ago</span>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4 bg-blue-600 hover:bg-blue-700">
                      <Facebook className="mr-2 h-4 w-4" />
                      Follow on Facebook
                    </Button>
                  </CardContent>
                </Card>
              </div>
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
                    <Button size="sm" className="bg-science-blue hover:bg-blue-700">
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
                    <Button size="sm" className="bg-science-green hover:bg-green-700">
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
                    <Button size="sm" className="bg-science-red hover:bg-red-700">
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
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
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
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
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
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
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
  )
}
