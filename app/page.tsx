import { Button } from "@/components/ui/primitives/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { LatestNewsCard } from "@/components/cards/latest-news-card"
import { EventCard } from "@/components/cards/event-card"
import { EventsCalendar } from "@/components/features/events-calendar"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Megaphone, BookOpen, Calendar, ExternalLink, Quote, TrendingUp, Award, Target } from "lucide-react"
import { getPageMetadata, getStructuredData, getBreadcrumbData } from "@/lib/metadata"
import { getPastEvents, getUpcomingEvents } from "@/lib/sanity"
import type { Event } from "@/lib/types"
import { generateEventSchema, type EventSchemaData } from "@/lib/schema-generators"
import { createLocalMidnightISO } from "@/lib/utils"
import { headers } from 'next/headers'

export async function generateMetadata() {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const domain = host.replace(/^www\./, '') // Remove www prefix for domain matching

  return getPageMetadata("home", domain)
}

export default async function HomePage() {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const domain = host.replace(/^www\./, '') // Remove www prefix for domain matching

  const pastEvents = await getPastEvents()
  const upcomingEvents = await getUpcomingEvents()

  // Generate event schema for featured upcoming events on home page
  const featuredEventSchemas = upcomingEvents.slice(0, 3).map((event: Event) => {
    const eventSchema: EventSchemaData = {
      name: event.title,
      description: event.description || `Join Advocates for Science @ IU for ${event.title}`,
      startDate: createLocalMidnightISO(event.date),
      location: {
        name: event.location || "Indiana University Bloomington",
        address: {
          addressLocality: "Bloomington",
          addressRegion: "IN",
          addressCountry: "US",
          postalCode: "47405"
        }
      },
      organizer: {
        name: "Advocates for Science @ IU",
        url: "https://www.advocatesforscienceatiu.org"
      }
    }
    return generateEventSchema(eventSchema)
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData("home", domain))
        }}
      />
      {/* Featured Event Schemas */}
      {featuredEventSchemas.map((schema: any, index: number) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
      <LayoutWrapper>
        {/* Hero Section */}
        <HeroSection
          title="Science at the Heart of Policy"
          subtitle="Join our unified mission to promote scientific integrity and evidence-based decision making. Together, Advocates for Science @ IU and Concerned Scientists @ IU bridge the gap between research and policy to create a better future for all."
          showLogo={true}
          showNewsletter={true}
          primaryButtonText="Get Involved"
          primaryButtonLink="/get-involved"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/about"
          className="py-16"
          overlayImage="/images/overlays/overlay-home.JPG"
          showPageOutcrop={true}
        />

        {/* About Our Organizations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">Our Organizations</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Working together to advance science policy and evidence-based decision making at Indiana University and beyond.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* ASIU Card */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src="/icons/asiu/logo.svg"
                      alt="ASIU Logo"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-gray-900">Advocates for Science @ IU</h3>
                    <p className="text-gray-600">Student Organization</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Our student affiliate organization brings together passionate students from across disciplines to advocate for evidence-based policy. We provide training, organize events, and create opportunities for students to engage with science policy issues.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-science-blue" />
                    <span>Student-led advocacy and training</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Megaphone className="w-4 h-4 mr-2 text-science-blue" />
                    <span>Community engagement and events</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 mr-2 text-science-blue" />
                    <span>Science communication workshops</span>
                  </div>
                </div>
              </Card>

              {/* CSIU Card */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src="/icons/csiu/logo.svg"
                      alt="CSIU Logo"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-gray-900">Concerned Scientists @ IU</h3>
                    <p className="text-gray-600">Faculty & Staff Organization</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Our faculty and staff organization provides institutional support and expertise for science policy advocacy. We work with policymakers, conduct research, and mentor students in evidence-based advocacy efforts.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-science-green" />
                    <span>Faculty expertise and mentorship</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Megaphone className="w-4 h-4 mr-2 text-science-green" />
                    <span>Policy research and analysis</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 mr-2 text-science-green" />
                    <span>Institutional advocacy support</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Together, we create a comprehensive approach to science policy advocacy, combining student energy with faculty expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-science-blue text-white" asChild>
                  <Link href="/about">Learn More About Our Mission</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-science-blue text-science-blue hover:bg-science-blue hover:text-white" asChild>
                  <Link href="/get-involved">Join Our Efforts</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News & Activities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold">Latest News & Activities</h2>
              {/* <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Stay updated with our latest advocacy efforts and community initiatives.
              </p> */}
            </div>

            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              {pastEvents && pastEvents.length > 0 ? (
                pastEvents.slice(0, 12).map((event: Event) => (
                  <LatestNewsCard key={event._id} event={event} />
                ))
              ) : (
                <div className="text-center text-gray-500 py-12 w-full">
                  <p>No past events available yet.</p>
                </div>
              )}
            </div>

            {pastEvents && pastEvents.length > 12 && (
              <div className="text-center mt-8">
                <Button size="lg" variant="outline" className="border-science-blue text-science-blue hover:bg-science-blue hover:text-white" asChild>
                  <Link href="/news">See All Past Events</Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* About ASIU Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
              {/* Image */}
              <div className="order-1">
                <div className="relative rounded-2xl overflow-hidden bg-science-blue/10 mx-auto w-80">
                  <Image
                    src="/images/events/science-democracy-forum.png"
                    alt="ASIU members collaborating on science advocacy"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-2xl object-cover aspect-square"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="order-2 text-center lg:text-left">
                <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                  Striving to do the right thing, from day one
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-base leading-relaxed">
                    We were founded on a robust framework that ensures we continue to drive the development of ethical science advocacy. We work with policymakers, researchers, and community members to inform and progress vital standards that make evidence-based decision making accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">Our Impact</h2>
              {/* <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Discover how we're making a difference in science policy and advocacy. From educational initiatives to
                community engagement, our activities span various areas of scientific importance.
              </p> */}
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center ">
                <CardHeader>
                  {/* <div className="w-12 h-12 bg-science-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div> */}
                  <CardTitle>Community Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-base mb-4">
                    Building bridges between scientists, policymakers, and the public through educational events and
                    collaborative initiatives.
                  </p>
                  {/* <div className="bg-science-blue/10 p-4 rounded-lg mb-4">
                    <div className="text-2xl font-bold text-science-blue">500+</div>
                    <div className="text-sm text-gray-600">Community Members Engaged</div>
                  </div> */}
                  <Link href="/get-involved" className="text-science-blue hover:text-science-green font-medium">
                    Get Involved →
                  </Link>
                </CardContent>
              </Card>
              <Card className="text-center ">
                <CardHeader>
                  {/* <div className="w-12 h-12 bg-science-green rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Megaphone className="h-6 w-6 text-white" />
                  </div> */}
                  <CardTitle>Policy Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-base mb-4">
                    Advocating for evidence-based policies at local, state, and national levels to ensure scientific
                    integrity in decision-making.
                  </p>
                  {/* <div className="bg-science-green/10 p-4 rounded-lg mb-4">
                    <div className="text-2xl font-bold text-science-green">25+</div>
                    <div className="text-sm text-gray-600">Policy Initiatives Supported</div>
                  </div> */}
                  <Link href="/news" className="text-science-blue hover:text-science-green font-medium">
                    Stay Updated →
                  </Link>
                </CardContent>
              </Card>
              <Card className="text-center ">
                <CardHeader>
                  {/* <div className="w-12 h-12 bg-science-red rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div> */}
                  <CardTitle>Education & Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-base mb-4">
                    Conducting research and providing educational resources to promote scientific literacy and
                    evidence-based thinking.
                  </p>
                  {/* <div className="bg-science-red/10 p-4 rounded-lg mb-4">
                    <div className="text-2xl font-bold text-science-red">15+</div>
                    <div className="text-sm text-gray-600">Research Projects Completed</div>
                  </div> */}
                  <Link href="/about" className="text-science-blue hover:text-science-green font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Metrics Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid xl:grid-cols-3 gap-8">
              {/* Card 1: Community Members */}
              <Card className="bg-science-blue text-white border-0">
                <CardContent className="px-8">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-xl text-white/90">Over</div>
                      <div className="text-5xl md:text-6xl font-bold">1,000+</div>
                      <div className="text-xl text-semibold text-white/90"><b>Community Members</b> Engaged</div>
                    </div>
                    <div className="w-24 h-40 rounded-lg -mr-2 bg-white/20 rounded-full flex items-center justify-center ml-6">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Newsletters */}
              <Card className="bg-science-blue text-white border-0">
                <CardContent className="px-8">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-7xl md:text-8xl font-bold">20+</div>
                      <div className="text-xl text-semibold text-sm text-white/90"><b>Biweekly Newsletters</b> Released</div>
                    </div>
                    <div className="w-24 h-40 rounded-lg -mr-2 bg-white/20 rounded-full flex items-center justify-center ml-6">
                      <BookOpen className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3: Events */}
              <Card className="bg-science-blue text-white border-0">
                <CardContent className="px-8">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-7xl md:text-8xl font-bold">30+</div>
                      <div className="text-xl text-semibold text-white/90"><b>Events</b> organized & hosted</div>
                    </div>
                    <div className="w-24 h-40 rounded-lg -mr-2 bg-white/20 flex items-center justify-center ml-6">
                      <Megaphone className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Donation Banner */}
        <section className="py-16 bg-science-red text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-2">
              {/* <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div> */}
              {/* <h3 className="font-heading text-3xl font-bold mb-6">Support Science Advocacy</h3> */}
            </div>
            <p className="text-white/90 text-xl mb-3 max-w-5xl mx-auto">
              Help us continue our mission to promote scientific integrity.
              Every contribution makes a difference in advancing science policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-white text-science-red hover:bg-gray-100 h-10 px-6 py-2"
                href="https://www.gofundme.com/f/support-advocates-for-science-iu/donate?source=btn_donate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                Donate Now
              </a>
              <div className="flex items-center text-white/80">
                <span className="text-xs ml-1">Secure donations via</span>
                <svg className="-mt-1.5 w-20 h-18" viewBox="0 0 652 652" fill="currentColor">
                  <path d="M50.2,329.1c7.3,0,15.6,3.1,20,9.2h0.5v-7.6h19.9v62.6c0,20.8-17.1,30.6-34.1,30.6c-16.5,0-32.6-9.4-32.8-27
	h19.7c0.5,7.9,6.2,11.5,12.8,11.5c6.6,0,13.3-4,13.3-14.1v-9.6H69c-4.5,5.3-11.9,8.2-18.8,8.2c-16.7,0-27.8-15.9-27.8-32.2
	C22.5,344.6,33.6,329.1,50.2,329.1z M247.4,330.6v35.4c0,5.3,4.1,9.5,9.3,9.5c5.1,0,9.3-4.3,9.3-9.5v-35.4H287v35.1
	c0,18-12.3,28.9-30.4,28.9c-17.7,0-30.4-10.6-30.4-28.9v-35.1H247.4z M589.5,329c18.4,0,33,13.7,33,32.9c0,1.8-0.2,3.3-0.3,4.3
	l0,0.3H578c0.8,8,5.8,12.5,11.9,12.5c3.4,0,6.9-1.4,9.9-4.7l0.4-0.5h20.4c-5.3,14.1-18.2,20.7-31.1,20.7c-16.5,0-33-10.9-33-32.7
	C556.5,342.7,571.1,329,589.5,329z M134.1,328.4c19.1,0,34.8,13.5,34.8,33c0,19.5-15.6,33-34.8,33c-19.1,0-34.5-13.4-34.5-33
	C99.6,341.8,115,328.4,134.1,328.4z M437.9,292.8V393H418v-8.3h-0.5c-5.4,6.1-13,9.5-20.6,9.5c-17.1,0-28.5-15.6-28.5-32.6
	s11.4-32.5,28.5-32.5c6.6,0,14.5,2.5,19.3,8.4h0.5v-44.8H437.9z M207.3,291c3.9,0,8,0.5,11.4,1.3v17.1c-1.6-0.4-2.8-0.6-4.2-0.6
	c-5.7,0-10.6,2.3-10.6,9.9v12.1h12.9v17.1h-12.9V393h-21.1v-45.2h-9.2v-17.1h9.2v-16.5C182.8,298.7,193.9,291,207.3,291z M337,329
	c11.7,0,22.5,8.2,22.5,24.3V393h-21.1v-35.4c0-6.2-4.2-10.4-9.5-10.4c-5.3,0-9.5,4.3-9.5,10.4V393h-21.1v-62.3h19.9v7.8h0.5
	C323.5,332.1,331,329,337,329z M525.8,329c11.2,0,21.8,8.4,21.8,24.1v40h-21.1v-36.1c0-5.8-3.8-9.7-8.6-9.7c-4.9,0-8.7,3.9-8.7,9.7
	V393H488v-36.1c0-5.8-3.8-9.7-8.6-9.7c-4.9,0-8.7,3.9-8.7,9.7V393h-21.1v-62.3h19.9v7.8h0.5c4.2-6.3,11.2-9.5,18-9.5
	c6.5,0,13.3,3.4,17.4,10.8h0.5C511.1,332.3,518.6,329,525.8,329z M403,347.7c-7.7,0-14.1,6.3-14.1,14.1c0,7.7,6.3,14.1,14.1,14.1
	c7.7,0,14.1-6.4,14.1-14.1C417.1,354,410.8,347.7,403,347.7z M134.2,347.2c-7.6,0-13.8,6.3-13.8,14.2s6.2,14.2,13.8,14.2
	c7.6,0,13.8-6.3,13.8-14.2S141.8,347.2,134.2,347.2z M56.5,347.7c-7.4,0-13.4,6-13.4,13.4s6,13.4,13.4,13.4s13.4-6,13.4-13.4
	S63.9,347.7,56.5,347.7z M589.6,344.5c-5.6,0-10.3,3.6-11.9,10.7h23.4C599.8,348.2,595.2,344.5,589.6,344.5z M612.1,309.7l3.9,11.4
	l3.9-11.4h2.6v13.5h-1.8v-8c0-0.3,0-0.7,0-1.4c0-0.6,0-1.3,0-2.1l-3.9,11.4h-1.8l-3.9-11.4v0.4c0,0.3,0,0.8,0,1.5c0,0.7,0,1.2,0,1.5
	v8h-1.8v-13.5H612.1z M607.8,309.7v1.6h-4.6v11.9h-1.9v-11.9h-4.6v-1.6H607.8z M322.5,277.4c23.7,0,44.4,12.9,55.5,32.1H266.9
	C278,290.3,298.7,277.4,322.5,277.4z M386.3,246.7c4.1-4.1,10.8-4.1,15,0c4.1,4.1,4.1,10.8,0,15l-15.9,15.9c-4.1,4.1-10.8,4.1-15,0
	l-0.4-0.4c-3.7-4.1-3.6-10.6,0.4-14.6L386.3,246.7z M244.2,246.3c4.1-3.7,10.6-3.6,14.6,0.4l15.9,15.9c4.1,4.1,4.1,10.8,0,15
	c-4.1,4.1-10.8,4.1-15,0l-15.9-15.9c-4.1-4.1-4.1-10.8,0-15L244.2,246.3z M322.3,218.1l0.5,0c5.6,0.2,10.1,4.9,10.1,10.6v22.5
	c0,5.8-4.8,10.6-10.6,10.6c-5.8,0-10.6-4.8-10.6-10.6v-22.5C311.8,222.8,316.5,218.1,322.3,218.1z"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Event Calendar */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold">Event Calendar</h2>
              {/* <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Join us for upcoming advocacy training sessions, public forums, and community engagement opportunities.
              </p> */}
            </div>

            <div className="flex justify-center">
              <EventsCalendar events={[...pastEvents, ...upcomingEvents]} />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold">What Our Members Say</h2>
              {/* <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Hear from our community about the impact of science-based advocacy.
              </p> */}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-science-blue mx-auto mb-4" />
                  <p className="text-gray-600 text-base mb-4">
                    "ASIU has given me the tools and confidence to effectively communicate scientific concepts to policymakers. The training and support are invaluable."
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                      <Image
                        src="/images/placeholders/placeholder-user.jpg"
                        alt="Sarah Chen"
                        width={40}
                        height={40}
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-lg">Sarah Chen</div>
                      <div className="text-sm text-gray-500">Environmental Science Major</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-science-green mx-auto mb-4" />
                  <p className="text-gray-600 text-base mb-4">
                    "Being part of ASIU has shown me how science can truly influence policy decisions. The community is passionate and the impact is real."
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                      <Image
                        src="/images/placeholders/placeholder-user.jpg"
                        alt="Marcus Johnson"
                        width={40}
                        height={40}
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-lg">Marcus Johnson</div>
                      <div className="text-sm text-gray-500">Public Policy Graduate Student</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-science-red mx-auto mb-4" />
                  <p className="text-gray-600 text-base mb-4">
                    "The advocacy training I received through ASIU has been crucial in my work with local government. Science-based policy making is essential."
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                      <Image
                        src="/images/placeholders/placeholder-user.jpg"
                        alt="Dr. Emily Rodriguez"
                        width={40}
                        height={40}
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-lg">Dr. Emily Rodriguez</div>
                      <div className="text-sm text-gray-500">Faculty Advisor</div>
                    </div>
                  </div>
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
              <Button size="lg" variant="secondary" className="bg-white text-science-blue hover:bg-gray-100" asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-science-blue bg-transparent"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  )
}
