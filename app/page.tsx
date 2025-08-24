import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { HeroSection } from "@/components/hero-section"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Megaphone, BookOpen, Calendar, ExternalLink, Quote } from "lucide-react"
import { getPageMetadata, getStructuredData } from "@/lib/metadata"

export const metadata = getPageMetadata("home")

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData("home"))
        }}
      />
      <LayoutWrapper>
        {/* Hero Section */}
        <HeroSection
          title="Science at the Heart of Policy"
          subtitle="Join Advocates for Science @ IU in promoting scientific integrity and evidence-based decision making. We bridge the gap between research and policy to create a better future for all."
          showLogo={true}
          showNewsletter={true}
          primaryButtonText="Get Involved"
          secondaryButtonText="Learn More"
          className="py-16"
        />

        {/* Featured Activities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">Featured Activities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how we're making a difference in science policy and advocacy. From educational initiatives to
                community engagement, our activities span various areas of scientific importance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-science-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Community Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Building bridges between scientists, policymakers, and the public through educational events and
                    collaborative initiatives.
                  </p>
                  <Link href="/get-involved" className="text-science-blue hover:text-science-green font-medium">
                    Get Involved →
                  </Link>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-science-green rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Megaphone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Policy Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Advocating for evidence-based policies at local, state, and national levels to ensure scientific
                    integrity in decision-making.
                  </p>
                  <Link href="/news" className="text-science-blue hover:text-science-green font-medium">
                    Stay Updated →
                  </Link>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-science-red rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Education & Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Conducting research and providing educational resources to promote scientific literacy and
                    evidence-based thinking.
                  </p>
                  <Link href="/about" className="text-science-blue hover:text-science-green font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Activities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">Recent Activities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with our latest advocacy efforts and community initiatives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-science-blue">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-science-blue">Climate Policy</Badge>
                    <span className="text-sm text-gray-500">Dec 2024</span>
                  </div>
                  <CardTitle>Climate Action Workshop</CardTitle>
                  <CardDescription>Training session on effective climate policy advocacy</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Hosted a comprehensive workshop teaching students how to effectively communicate climate science to policymakers and the public.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    <span>45 participants</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-science-green">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-science-green">Healthcare</Badge>
                    <span className="text-sm text-gray-500">Nov 2024</span>
                  </div>
                  <CardTitle>Healthcare Policy Forum</CardTitle>
                  <CardDescription>Community discussion on evidence-based healthcare policy</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Organized a public forum bringing together healthcare professionals, researchers, and community members to discuss evidence-based healthcare policy solutions.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    <span>120 attendees</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join us for upcoming advocacy training sessions, public forums, and community engagement opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-science-blue">Training</Badge>
                    <span className="text-sm text-gray-500">Jan 15, 2025</span>
                  </div>
                  <CardTitle>Science Communication Workshop</CardTitle>
                  <CardDescription>Learn effective strategies for communicating with policymakers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">6:00 PM - 9:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Open to all members</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-science-blue">
                    Register Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-science-green">Public Forum</Badge>
                    <span className="text-sm text-gray-500">Jan 22, 2025</span>
                  </div>
                  <CardTitle>Climate Action Town Hall</CardTitle>
                  <CardDescription>Community discussion on local climate policy initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">7:00 PM - 8:30 PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Open to the public</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-science-green">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-science-red">Weekly Meeting</Badge>
                    <span className="text-sm text-gray-500">Every Wednesday</span>
                  </div>
                  <CardTitle>General Assembly</CardTitle>
                  <CardDescription>Regular planning and coordination meeting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">7:00 PM - 8:30 PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">All members welcome</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-science-red">
                    Join Meeting
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">What Our Members Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from our community about the impact of science-based advocacy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-science-blue mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    "ASIU has given me the tools and confidence to effectively communicate scientific concepts to policymakers. The training and support are invaluable."
                  </p>
                  <div className="font-medium">Sarah Chen</div>
                  <div className="text-sm text-gray-500">Environmental Science Major</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-science-green mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    "Being part of ASIU has shown me how science can truly influence policy decisions. The community is passionate and the impact is real."
                  </p>
                  <div className="font-medium">Marcus Johnson</div>
                  <div className="text-sm text-gray-500">Public Policy Graduate Student</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-science-red mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    "The advocacy training I received through ASIU has been crucial in my work with local government. Science-based policy making is essential."
                  </p>
                  <div className="font-medium">Dr. Emily Rodriguez</div>
                  <div className="text-sm text-gray-500">Faculty Advisor</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-science-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join Advocates for Science @ IU and help ensure that scientific evidence guides policy decisions for a better future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-science-blue hover:bg-gray-100">
                Get Involved
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-science-blue bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  )
}
