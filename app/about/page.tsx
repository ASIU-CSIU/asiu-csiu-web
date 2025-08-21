import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Heart, Users, Award, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function AboutPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Our Mission</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a student-led organization dedicated to bridging the gap between scientific research and public
            policy, ensuring that evidence-based decision making guides our future.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-science-blue" />
                  <span>Scientific Integrity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in the importance of rigorous, unbiased scientific research and the responsible
                  communication of scientific findings to the public and policymakers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-science-red" />
                  <span>Inclusive Advocacy</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive to amplify diverse voices in science and ensure that all communities have access to the
                  benefits of scientific progress and evidence-based policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-science-green" />
                  <span>Collaborative Action</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We work collaboratively with students, faculty, researchers, and community members to create
                  meaningful change through collective action and shared expertise.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-gray-700" />
                  <span>Effective Communication</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We are committed to translating complex scientific concepts into accessible information that empowers
                  informed decision-making at all levels of society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Committee Chairs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Committee Chairs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-science-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <CardTitle>Marcus Johnson</CardTitle>
                <CardDescription className="text-science-green font-medium">Legislative Advocacy Chair</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-3">
                  PhD candidate in Political Science coordinating our policy research and government relations efforts.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="secondary">Climate Policy</Badge>
                  <Badge variant="secondary">Legislative Advocacy</Badge>
                  <Badge variant="secondary">Environmental Science</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">EL</span>
                </div>
                <CardTitle>Emily Liu</CardTitle>
                <CardDescription className="text-purple-600 font-medium">Education & Outreach Chair</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-3">
                  Master's student in Science Education developing workshops and community engagement programs.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="secondary">Climate Policy</Badge>
                  <Badge variant="secondary">Legislative Advocacy</Badge>
                  <Badge variant="secondary">Environmental Science</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">DK</span>
                </div>
                <CardTitle>David Kim</CardTitle>
                <CardDescription className="text-orange-600 font-medium">Events Chair</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-3">
                  Undergraduate in Event Management organizing our advocacy training sessions and public forums.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="secondary">Climate Policy</Badge>
                  <Badge variant="secondary">Legislative Advocacy</Badge>
                  <Badge variant="secondary">Environmental Science</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">RT</span>
                </div>
                <CardTitle>Rachel Thompson</CardTitle>
                <CardDescription className="text-pink-600 font-medium">Communications Chair</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-3">
                  Graduate student in Media Studies managing our digital presence and content strategy.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="secondary">Climate Policy</Badge>
                  <Badge variant="secondary">Legislative Advocacy</Badge>
                  <Badge variant="secondary">Environmental Science</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">JW</span>
                </div>
                <CardTitle>Jordan Williams</CardTitle>
                <CardDescription className="text-teal-600 font-medium">Steering Chair</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-3">
                  PhD candidate in Organizational Leadership coordinating strategic planning and group coordination.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="secondary">Climate Policy</Badge>
                  <Badge variant="secondary">Legislative Advocacy</Badge>
                  <Badge variant="secondary">Environmental Science</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">AC</span>
                </div>
                <CardTitle>Aisha Chen</CardTitle>
                <CardDescription className="text-green-600 font-medium">Finance Chair</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-3">
                  Master's student in Public Administration managing budgets, grants, and fundraising initiatives.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="secondary">Climate Policy</Badge>
                  <Badge variant="secondary">Legislative Advocacy</Badge>
                  <Badge variant="secondary">Environmental Science</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Advisor */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Faculty Advisor</h2>
          <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-3xl">DR</span>
              </div>
              <CardTitle className="text-2xl">Dr. Rebecca Foster</CardTitle>
              <CardDescription className="text-gray-700 font-medium text-lg">Faculty Advisor</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professor of Environmental Policy and Director of the Science Policy Institute at IU. Dr. Foster brings
                over 15 years of experience in science policy research and has advised numerous student advocacy
                organizations. Her research focuses on the intersection of scientific evidence and democratic
                decision-making.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="secondary">Climate Policy</Badge>
                  <Badge variant="secondary">Legislative Advocacy</Badge>
                  <Badge variant="secondary">Environmental Science</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
                <Button size="sm" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button size="sm" variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Research
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Spotlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Team Spotlight</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-science-blue rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-science-blue">Collaborative Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Our co-president model ensures diverse perspectives and shared responsibility in guiding the
                  organization's mission and activities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-science-red rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-science-red">Expertise & Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Our team brings together students from diverse academic backgrounds, creating a rich foundation of
                  knowledge and skills.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-science-green rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-science-green">Passion for Change</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Every team member is driven by a shared commitment to ensuring science guides policy decisions for a
                  better future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 bg-science-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-3xl font-bold mb-6">Want to Join Our Leadership Team?</h3>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for passionate students to take on leadership roles and help guide our advocacy
            efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-science-blue hover:bg-gray-100">
              Learn About Leadership Opportunities
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-science-blue bg-transparent"
            >
              Contact Leadership Team
            </Button>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-science-blue">Concerned Scientists @ IU</CardTitle>
                <CardDescription>Parent Organization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Our parent organization providing guidance, resources, and expertise in science policy advocacy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-science-red">IU Environmental Science</CardTitle>
                <CardDescription>Academic Partnership</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Collaborating on climate science communication and environmental policy research initiatives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-science-green">Local Community Groups</CardTitle>
                <CardDescription>Community Engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Working with local organizations to ensure science-based solutions reach all community members.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
