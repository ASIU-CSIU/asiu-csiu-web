'use client'

import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { HeroBackground } from "@/components/hero-background"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
    title: string
    subtitle: string
    showLogo?: boolean
    logoPath?: string
    primaryButtonText?: string
    primaryButtonLink?: string
    secondaryButtonText?: string
    secondaryButtonLink?: string
    showNewsletter?: boolean
    backgroundGradient?: string
    className?: string
}

export function HeroSection({
    title,
    subtitle,
    showLogo = true,
    logoPath = "/logo.svg",
    primaryButtonText = "Get Involved",
    primaryButtonLink = "/get-involved",
    secondaryButtonText = "Donate Now",
    secondaryButtonLink = "#",
    showNewsletter = true,
    backgroundGradient = "from-blue-50 to-green-50",
    className = ""
}: HeroSectionProps) {
    return (
        <section className={`relative bg-gradient-to-r ${backgroundGradient} pt-36 pb-32 overflow-hidden ${className}`}>
            <HeroBackground
                starColor="#FFFFFF"
                starSize={8}
                starCount={150}
                className="opacity-100"
            />
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* {showLogo && (
                    <div className="mb-8">
                        <div className="w-48 h-48 mx-auto relative">
                            <Image
                                src={logoPath}
                                alt="ASIU Logo"
                                width={108}
                                height={108}
                                className="w-full h-full relative z-10"
                                priority
                            />
                        </div>
                    </div>
                )} */}

                <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-8" dangerouslySetInnerHTML={{ __html: title }} />

                <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                    {subtitle}
                </p>

                {(primaryButtonText || secondaryButtonText) && (<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 mt-10">
                    {primaryButtonText && (
                        <Link href={primaryButtonLink}>
                            <Button size="lg" className="bg-science-blue text-white">
                                {primaryButtonText}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    )}

                    {secondaryButtonText && (
                        secondaryButtonLink?.startsWith('http') ? (
                            <a href={secondaryButtonLink} target="_blank" rel="noopener noreferrer">
                                <Button
                                    size="lg"
                                    className="border-science-green text-science-green bg-white hover:text-science-green"
                                >
                                    {secondaryButtonText}
                                </Button>
                            </a>
                        ) : (
                            <Link href={secondaryButtonLink || "#"}>
                                <Button
                                    size="lg"
                                    className="border-science-green text-science-green bg-white hover:text-science-green"
                                >
                                    {secondaryButtonText}
                                </Button>
                            </Link>
                        )
                    )}
                </div>)}

                {/* {showNewsletter && <NewsletterSignup />} */}
            </div>
        </section>
    )
}
