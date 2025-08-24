import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { HeroSection } from "@/components/hero-section"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Megaphone, BookOpen, Calendar, ExternalLink, Quote } from "lucide-react"

export default function HomePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="Science at the Heart of Policy"
        subtitle="Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society."
        primaryButtonText="Get Involved"
        primaryButtonLink="/get-involved"
        secondaryButtonText="Donate Now"
        secondaryButtonLink="https://www.gofundme.com/f/support-advocates-for-science-iu/donate?source=btn_donate"
      />

      {/* Recent News & Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Latest News & Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our recent advocacy efforts, events, and policy initiatives
            </p>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              <Card className="flex-none w-80 card-shadow">
                <div className="h-48 bg-gradient-to-r from-science-red/20 to-science-red/10 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/climate-policy-workshop.png"
                    alt="Climate Policy Workshop"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-science-red/10 text-science-red">
                      Advocacy Training
                    </Badge>
                    <span className="text-sm text-gray-500">Dec 15, 2024</span>
                  </div>
                  <CardTitle className="text-lg">Climate Policy Workshop</CardTitle>
                  <CardDescription>
                    Interactive session on communicating climate science to policymakers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Over 30 students participated in our latest advocacy training, learning effective strategies for
                    science communication and policy engagement.
                  </p>
                  <Button variant="outline" size="sm" className="text-science-red border-science-red bg-transparent">
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex-none w-80 card-shadow">
                <div className="h-48 bg-gradient-to-r from-science-blue/20 to-science-blue/10 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/science-democracy-forum.png"
                    alt="Science & Democracy Forum"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-science-blue/10 text-science-blue">
                      Public Forum
                    </Badge>
                    <span className="text-sm text-gray-500">Dec 8, 2024</span>
                  </div>
                  <CardTitle className="text-lg">Science & Democracy Forum</CardTitle>
                  <CardDescription>Community discussion on the role of science in democratic processes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Faculty, students, and community members gathered to discuss how scientific evidence can better
                    inform democratic decision-making.
                  </p>
                  <Button variant="outline" size="sm" className="text-science-blue border-science-blue bg-transparent">
                    View Highlights
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex-none w-80 card-shadow">
                <div className="h-48 bg-gradient-to-r from-science-green/20 to-science-green/10 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/healthcare-policy-open-letter.png"
                    alt="Healthcare Policy Statement"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-science-green/10 text-science-green">
                      Open Letter
                    </Badge>
                    <span className="text-sm text-gray-500">Nov 28, 2024</span>
                  </div>
                  <CardTitle className="text-lg">Healthcare Policy Statement</CardTitle>
                  <CardDescription>Joint letter supporting evidence-based healthcare policies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Released a comprehensive statement signed by 150+ students and faculty advocating for science-based
                    healthcare policy reforms.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-science-green border-science-green bg-transparent"
                  >
                    Read Letter
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex-none w-80 card-shadow">
                <div className="h-48 bg-gradient-to-r from-science-blue/20 to-science-blue/10 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/environmental-advocacy-meeting.png"
                    alt="Environmental Advocacy"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-science-blue/10 text-science-blue">
                      Campaign
                    </Badge>
                    <span className="text-sm text-gray-500">Nov 15, 2024</span>
                  </div>
                  <CardTitle className="text-lg">Environmental Advocacy Campaign</CardTitle>
                  <CardDescription>Student-led initiative for campus sustainability policies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Launched a comprehensive campaign advocating for evidence-based environmental policies on campus.
                  </p>
                  <Button variant="outline" size="sm" className="text-science-blue border-science-blue bg-transparent">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex-none w-80 card-shadow">
                <div className="h-48 bg-gradient-to-r from-science-red/20 to-science-red/10 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/science-presentation.png"
                    alt="Research Presentation"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-science-red/10 text-science-red">
                      Research
                    </Badge>
                    <span className="text-sm text-gray-500">Oct 30, 2024</span>
                  </div>
                  <CardTitle className="text-lg">Science Communication Research</CardTitle>
                  <CardDescription>Presenting findings on effective science policy communication</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Our research team presented findings on the most effective methods for science policy communication.
                  </p>
                  <Button variant="outline" size="sm" className="text-science-red border-science-red bg-transparent">
                    View Research
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We are committed to ensuring that scientific evidence guides policy decisions that affect our communities,
            environment, and future. Through advocacy, education, and engagement, we work to bridge the gap between
            scientific research and public policy.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-science-blue mb-2">200+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-science-red mb-2">15</div>
              <div className="text-gray-600">Policy Briefings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-science-green mb-2">8</div>
              <div className="text-gray-600">Open Letters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-700 mb-2">25+</div>
              <div className="text-gray-600">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Groups Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-3xl font-bold text-center mb-12">How We Make Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-science-red rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-science-red">Legislative Advocacy</CardTitle>
                <CardDescription>Working with policymakers on science-based legislation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Recent advocacy training sessions and policy briefings with local representatives on climate action
                  and public health initiatives.
                </p>
                <Button variant="outline" size="sm" className="text-science-red border-science-red bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-science-blue rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-science-blue">Education & Outreach</CardTitle>
                <CardDescription>Community engagement and science communication</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Public forums and educational workshops on climate science, public health, and evidence-based policy
                  making.
                </p>
                <Button variant="outline" size="sm" className="text-science-blue border-science-blue bg-transparent">
                  Join Events
                </Button>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-science-green rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-science-green">Community Building</CardTitle>
                <CardDescription>Regular organizing and planning sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Weekly meetings to plan campaigns, coordinate advocacy efforts, and build a strong community of
                  science advocates.
                </p>
                <Button variant="outline" size="sm" className="text-science-green border-science-green bg-transparent">
                  Get Involved
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Our Members Say */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-3xl font-bold text-center mb-12">What Our Members Say</h3>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              <Card className="flex-none w-96 bg-white card-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-science-blue mb-4" />
                  <p className="text-gray-600 mb-4 italic">
                    "Joining Advocates for Science has given me the tools and confidence to effectively communicate
                    scientific research to policymakers. The advocacy training was transformative."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-science-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">SM</span>
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Martinez</div>
                      <div className="text-sm text-gray-500">Graduate Student, Environmental Science</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-none w-96 bg-white card-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-science-green mb-4" />
                  <p className="text-gray-600 mb-4 italic">
                    "The community here is incredible. We're not just talking about science policy - we're actively
                    working to make evidence-based change happen in our community."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-science-green rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">DJ</span>
                    </div>
                    <div>
                      <div className="font-semibold">David Johnson</div>
                      <div className="text-sm text-gray-500">Undergraduate, Public Policy</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-none w-96 bg-white card-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-science-red mb-4" />
                  <p className="text-gray-600 mb-4 italic">
                    "The research opportunities and policy engagement through ASIU have been invaluable for my career
                    development. I've learned so much about effective advocacy."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-science-red rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">AL</span>
                    </div>
                    <div>
                      <div className="font-semibold">Alex Liu</div>
                      <div className="text-sm text-gray-500">PhD Student, Biology</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-none w-96 bg-white card-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-science-blue mb-4" />
                  <p className="text-gray-600 mb-4 italic">
                    "Being part of the communications team has helped me develop skills in science writing and public
                    engagement that I use every day in my research."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-science-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">MK</span>
                    </div>
                    <div>
                      <div className="font-semibold">Maya Krishnan</div>
                      <div className="text-sm text-gray-500">Graduate Student, Chemistry</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-none w-96 bg-white card-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-science-green mb-4" />
                  <p className="text-gray-600 mb-4 italic">
                    "The weekly meetings are so energizing. It's amazing to be surrounded by people who are passionate
                    about using science to make positive change."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-science-green rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">JR</span>
                    </div>
                    <div>
                      <div className="font-semibold">Jordan Rodriguez</div>
                      <div className="text-sm text-gray-500">Undergraduate, Physics</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold mb-4">Upcoming Events</h3>
            <p className="text-gray-600">Join us at our next meetings and events</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-science-blue card-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-science-blue" />
                  <span className="text-sm font-medium text-science-blue">Weekly Meeting</span>
                </div>
                <CardTitle className="text-lg">General Assembly</CardTitle>
                <CardDescription>Every Wednesday, 7:00 PM - 8:30 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Join our weekly planning meetings to coordinate advocacy efforts and discuss current policy issues.
                </p>
                <div className="text-sm text-gray-500 mb-4">Location: Student Union, Room 204</div>
                <Button className="bg-science-blue text-white">Join Meeting</Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-science-red card-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-science-red" />
                  <span className="text-sm font-medium text-science-red">Special Event</span>
                </div>
                <CardTitle className="text-lg">Science Communication Workshop</CardTitle>
                <CardDescription>January 15, 2025, 6:00 PM - 9:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Learn effective strategies for communicating complex scientific concepts to diverse audiences.
                </p>
                <div className="text-sm text-gray-500 mb-4">Location: Wells Library, Conference Room A</div>
                <Button className="bg-science-red text-white">Register Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-science-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-3xl font-bold mb-6">Ready to Make a Difference?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Join our community of students, researchers, and advocates working to ensure science guides policy
            decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button size="lg" variant="secondary" className="bg-white text-science-blue hover:bg-gray-100">
                Join Our Team
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-science-blue bg-transparent"
            >
              Attend a Meeting
            </Button>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
