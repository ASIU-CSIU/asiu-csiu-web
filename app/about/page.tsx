import { LayoutWrapper } from "@/components/layout-wrapper"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Heart, Users, Award, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { getCommitteeChairs, getFacultyAdvisors } from "@/lib/sanity"
import { PersonCard } from "@/components/person-card"
import type { CommitteeChair, FacultyAdvisor } from "@/lib/types"
import { getPageMetadata, getStructuredData, getBreadcrumbData } from "@/lib/metadata"
import Link from "next/link"

export const revalidate = 3600

export const metadata = getPageMetadata("about")

export default async function AboutPage() {
  const chairs = await getCommitteeChairs()
  const advisors = await getFacultyAdvisors()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData("about"))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbData("/about", "About"))
        }}
      />
      <LayoutWrapper>
        {/* Hero Section */}
        <HeroSection
          title="About Our Mission"
          subtitle="We are a student-led organization dedicated to bridging the gap between scientific research and public policy, ensuring that evidence-based decision making guides our future."
          showLogo={false}
          showNewsletter={false}
          primaryButtonText="Learn More"
          secondaryButtonText=""
          className="py-16"
        />

        {/* Mission Statement */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Advocates for Science @ IU is a student affiliate of Concerned Scientists @ IU, working to promote
              scientific integrity and evidence-based decision making in policy and society. We believe that scientific
              evidence should be at the heart of all policy decisions that affect our communities, environment, and
              future.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through advocacy, education, and community engagement, we work to bridge the gap between scientific
              research and public policy, ensuring that the best available evidence guides decisions that impact us all.
              <Link href="/get-involved" className="text-science-blue hover:text-science-green transition-colors font-medium">
                Join our efforts
              </Link> to make a difference in science policy.
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Committee Chairs</h2>
            {chairs && chairs.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {chairs.map((chair: CommitteeChair) => (
                  <PersonCard key={chair._id} person={chair} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>Committee chair information will be available soon.</p>
              </div>
            )}
          </div>
        </section>

        {/* Faculty Advisor */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Faculty Advisors</h2>
            {advisors && advisors.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advisors.map((advisor: CommitteeChair) => (
                  <PersonCard key={advisor._id} person={advisor} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>Faculty advisor information will be available soon.</p>
              </div>
            )}
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
    </>
  )
}
