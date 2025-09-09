import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { getEvents } from "@/lib/sanity"
import { GetInvolvedClient } from "./get-involved-client"
import type { Event } from "@/lib/types"
import { generateEventSchema, type EventSchemaData } from "@/lib/schema-generators"
import { parseLocalDate, createLocalMidnightISO } from "@/lib/utils"
import { Button } from "@/components/ui/primitives/button"
import Link from "next/link"
import { Suspense } from "react"

export const revalidate = 3600

export default async function GetInvolvedPage() {
    const events = await getEvents()

    // Sort events into upcoming for schema generation
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    const upcomingEvents: Event[] = []
    events.forEach((event: Event) => {
        const eventDate = parseLocalDate(event.date)
        const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate())
        if (eventDateOnly >= today) {
            upcomingEvents.push(event)
        }
    })

    // Sort upcoming events by date (earliest first) - timezone-safe
    upcomingEvents.sort((a, b) => {
        const dateA = parseLocalDate(a.date)
        const dateB = parseLocalDate(b.date)
        return dateA.getTime() - dateB.getTime()
    })

    // Generate event schema for upcoming events - timezone-safe
    const eventSchemas = upcomingEvents.slice(0, 5).map((event: Event) => {
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
            },
            offers: {
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock"
            }
        }
        return generateEventSchema(eventSchema)
    })

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Get Involved - Advocates for Science @ IU",
                        "description": "Join Advocates for Science @ IU and make a difference in science policy. Discover upcoming events, join working groups, and contribute to evidence-based advocacy efforts.",
                        "url": "https://www.advocatesforscienceatiu.org/get-involved"
                    })
                }}
            />
            {/* Event Schemas */}
            {eventSchemas.map((schema, index) => (
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
                    title="Get Involved"
                    subtitle="Join Advocates for Science @ IU and make a difference in science policy. Discover upcoming events, join working groups, and contribute to evidence-based advocacy efforts."
                    showLogo={false}
                    showNewsletter={false}
                    primaryButtonText=""
                    secondaryButtonText=""
                    className="py-16"
                    overlayImage="/images/overlays/overlay-get-involved.JPG"
                    showPageOutcrop={true}
                    breadcrumbItems={[{ label: "Get Involved" }]}
                />

                {/* Content Tabs */}
                <Suspense fallback={<div className="py-8 text-center">Loading...</div>}>
                    <GetInvolvedClient events={events} />
                </Suspense>

                {/* Call to Action */}
                <section className="py-16 bg-science-blue text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-heading text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
                        <p className="text-xl mb-8 text-blue-100">
                            Join our community of science advocates and help ensure that evidence-based decision making guides our
                            future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="bg-white text-science-blue hover:bg-gray-100" asChild>
                                <Link href="/news">Attend a Meeting</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-science-blue bg-transparent"
                                asChild
                            >
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </LayoutWrapper>
        </>
    )
}
