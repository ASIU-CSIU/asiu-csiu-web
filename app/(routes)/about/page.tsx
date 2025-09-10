import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Target, Heart, Users, Award, BookOpen, AlertTriangle, TrendingDown, Shield, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { getCommitteeChairs, getFacultyAdvisors } from "@/lib/sanity"
import { PersonCard } from "@/components/cards/person-card"
import type { CommitteeChair, FacultyAdvisor } from "@/lib/types"
import { getPageMetadata, getStructuredData, getBreadcrumbData } from "@/lib/metadata"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { headers } from 'next/headers'

export const revalidate = 3600

export async function generateMetadata() {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const domain = host.replace(/^www\./, '') // Remove www prefix for domain matching

  return getPageMetadata("about", domain)
}

export default async function AboutPage() {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const domain = host.replace(/^www\./, '') // Remove www prefix for domain matching

  const chairs = await getCommitteeChairs()
  const advisors = await getFacultyAdvisors()

  // Sort chairs so that Co-Presidents appear first
  const sortedChairs = chairs.sort((a: CommitteeChair, b: CommitteeChair) => {
    // Check if either chair has the role "Co-President"
    const aIsCoPresident = a.role.toLowerCase().includes('co-president')
    const bIsCoPresident = b.role.toLowerCase().includes('co-president')

    if (aIsCoPresident && !bIsCoPresident) return -1
    if (!aIsCoPresident && bIsCoPresident) return 1
    return 0
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData("about", domain))
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
          subtitle="We are a unified organization dedicated to bridging the gap between scientific research and public policy, ensuring that evidence-based decision making guides our future."
          showLogo={false}
          showNewsletter={false}
          primaryButtonText=""
          secondaryButtonText=""
          className="py-16"
          overlayImage="/images/overlays/overlay-about.JPG"
          showPageOutcrop={true}
          breadcrumbItems={[{ label: "About Our Mission" }]}
        />

        {/* Mission Statement */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We are a group of scientists and science supporters, organizing in defense of science. Our coalition has formed as a direct response to attacks on science in the current political climate. Advocates for Science @ IU is a student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We believe that scientific evidence should be at the heart of all policy decisions that affect our communities, environment, and future. Through advocacy, education, and community engagement, we work to bridge the gap between scientific research and public policy, ensuring that the best available evidence guides impactful decisions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <Link href="/get-involved" className="text-science-blue hover:text-science-green transition-colors font-medium">
                  Join our efforts
                </Link> to make a difference in science policy.
              </p>
            </div>

            {/* Core Aims */}
            <div className="mt-16">
              {/* <h3 className="font-heading text-2xl font-bold text-center mb-8">Our Core Aims</h3> */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-science-blue" />
                      <span>Accurate Science Representation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Promote the accurate representation of science in the media, in education, and in the design of legislation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-science-red" />
                      <span>Public Science Communication</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Engage with the public to communicate science, especially as it relates to core issues influenced by public policy.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-science-green" />
                      <span>Scientific Policy Participation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Promote the participation of scientists in policy-making processes at all levels of government and international organizations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-gray-700" />
                      <span>Research Funding Defense</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Support continued federal funding for independent scientific research and defend research from politically motivated attacks.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Scientists Are Concerned */}
        <section className="pb-16 pt-15 bg-red-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-8 text-white">Why Are Scientists Concerned?</h2>

            {/* Budget Cuts */}
            <div className="mb-8">
              {/* <p className="text-lg text-white/90 mb-6">
                The President's budget proposes draconian funding cuts for science research, e.g.:
              </p> */}
              <div className="grid xl:grid-cols-3 gap-8 mb-8">
                {/* EPA Cut */}
                <Card className="bg-science-red text-white border-0">
                  <CardContent className="px-8">
                    <div className="text-left">
                      <div className="text-xl text-white/90"><b>EPA Funding Cuts</b> over</div>
                      <div className="flex items-center">
                        <div className="min-w-20 h-14 md:h-18 mb-1 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                          <TrendingDown className="h-16 w-16 text-white" />
                        </div>
                        <div className="text-7xl md:text-8xl font-bold">31%</div>
                      </div>
                      <div className="text-xl text-semibold text-white/90">eliminates climate change research</div>
                    </div>
                  </CardContent>
                </Card>

                {/* NIH Cut */}
                <Card className="bg-science-red text-white border-0">
                  <CardContent className="px-8">
                    <div className="text-left">
                      <div className="text-xl text-white/90"><b>NIH Budget Cuts</b> over</div>
                      <div className="flex items-center">
                        <div className="min-w-20 h-14 md:h-18 mb-1 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                          <TrendingDown className="h-16 w-16 text-white" />
                        </div>
                        <div className="text-7xl md:text-8xl font-bold">18%</div>
                      </div>
                      <div className="text-xl text-semibold text-white/90">hinders biomedical research</div>
                    </div>
                  </CardContent>
                </Card>

                {/* DOE Cut */}
                <Card className="bg-science-red text-white border-0">
                  <CardContent className="px-8">
                    <div className="text-left">
                      <div className="text-xl text-white/90"><b>DOE Spending Cuts</b> over</div>
                      <div className="flex items-center">
                        <div className="min-w-20 h-14 md:h-18 mb-1 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                          <TrendingDown className="h-16 w-16 text-white" />
                        </div>
                        <div className="text-7xl md:text-8xl font-bold">17%</div>
                      </div>
                      <div className="text-xl text-semibold text-white/90">prevents renewable energy R&D</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional Concerns */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-science-red border-none">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <AlertTriangle className="h-6 w-6" />
                    <span>Climate Denial</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    The President, some Cabinet members, and many Congressional allies call climate change a "hoax," despite broad scientific evidence showing it is real and primarily driven by human activity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-science-red border-none">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Users className="h-6 w-6" />
                    <span>Unstaffed OSTP</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    The federal Office of Science and Technology Policy remains unstaffed, leaving the administration without a key body meant to coordinate scientific advice on national policy.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-science-red border-none md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Shield className="h-6 w-6" />
                    <span>Threats to Scientific Review</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    Rep. Lamar Smith of Texas, Chair of the House Science Committee, says citizens can only get the “unvarnished truth” from the President, and he has proposed legislation giving the government authority to set criteria for how scientific research is reviewed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why You Should Advocate */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-8 text-white">Why Should You Advocate?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none bg-science-blue text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6" />
                    <span>Scientific Method</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The scientific method provides a proven, self-correcting approach for establishing real, as opposed to "alternative," facts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-science-blue text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-6 w-6" />
                    <span>Evidence-Based Solutions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Scientific research provides a robust foundation for identifying real problems, evaluating potential solutions, and underpinning evidence-based decision making.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-science-blue text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="h-6 w-6" />
                    <span>Economic Driver</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Scientific research has long been, and continues to be, a major driver in improving health, technology, national security and the economy. It leads to lots of jobs in old and new sectors of the economy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none bg-science-blue text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-6 w-6" />
                    <span>Bipartisan Support at Risk</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The present political climate threatens what was once strong bipartisan support for federal investment in scientific research, often deemed the most effective non-defense spending the government undertakes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Committee Chairs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">ASIU Student Leadership Team</h2>
            {sortedChairs && sortedChairs.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-8">
                {sortedChairs.map((chair: CommitteeChair) => (
                  <div key={chair._id} className="w-full md:w-96 lg:w-85">
                    <PersonCard person={chair} />
                  </div>
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
            <h2 className="font-heading text-3xl font-bold text-center mb-12">CSIU Faculty Leadership Team</h2>
            {advisors && advisors.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-8">
                {advisors.map((advisor: CommitteeChair) => (
                  <div key={advisor._id} className="w-full md:w-96 lg:w-80">
                    <PersonCard person={advisor} />
                  </div>
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
              <Button size="lg" variant="secondary" className="bg-white text-science-blue hover:bg-gray-100" asChild>
                <Link href="/get-involved">Learn About Leadership Opportunities</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-science-blue bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Leadership Team</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Partners</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
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

            {/* Partner Logos */}
            <div className="text-center pt-6">
              <h3 className="text-gray-500 mb-8">Working with Leading Organizations</h3>
              <div className="flex flex-wrap justify-center items-center gap-x-7">
                <Image
                  src="/images/partners/partner-logosArtboard-1.png"
                  alt="Partner Organization 1"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-2.png"
                  alt="Partner Organization 2"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-3.png"
                  alt="Partner Organization 3"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-4.png"
                  alt="Partner Organization 4"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-5.png"
                  alt="Partner Organization 5"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-6.png"
                  alt="Partner Organization 6"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-7.png"
                  alt="Partner Organization 7"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-10.png"
                  alt="Partner Organization 8"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  )
}
