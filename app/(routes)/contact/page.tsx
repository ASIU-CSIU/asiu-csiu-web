"use client"

import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Button } from "@/components/ui/primitives/button"
import { Input } from "@/components/ui/primitives/input"
import { Textarea } from "@/components/ui/primitives/textarea"
import { Label } from "@/components/ui/primitives/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/composite/accordion"
import { Mail, Instagram, Facebook, MapPin, Clock, MessageSquare, Users, Calendar } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { firstName, lastName, subject, message } = formData
    const fullName = `${firstName} ${lastName}`.trim()

    // Create mailto link with prefilled data
    const mailtoLink = `mailto:advocatesforscience.in@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Dear Advocates for Science @ IU,

${message}

Best regards,
${fullName}`)}`

    // Open the user's default email client
    window.location.href = mailtoLink
  }

  return (
    <>
      <LayoutWrapper>
        {/* Hero Section */}
        <HeroSection
          title="Contact Us"
          subtitle="Get in touch with our leadership team, join our community, or learn more about our advocacy efforts. We welcome questions and collaboration opportunities."
          showLogo={false}
          showNewsletter={false}
          primaryButtonText=""
          secondaryButtonText=""
          className="py-16"
          overlayImage="/images/overlays/overlay-contact.JPG"
        />

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-8">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What can we help you with?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-science-blue">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-science-blue" />
                        <span>Email</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">asiu@indiana.edu</p>
                      <p className="text-sm text-gray-500 mt-2">
                        We typically respond within 24-48 hours during business days.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-science-green" />
                        <span>Location</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Indiana University Bloomington</p>
                      <p className="text-gray-600">Bloomington, IN 47405</p>
                      <p className="text-sm text-gray-500 mt-2">
                        We're based on the IU Bloomington campus and welcome in-person meetings.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-science-red" />
                        <span>Meeting Times</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">General Assembly: Every Wednesday</p>
                      <p className="text-gray-600">7:00 PM - 8:30 PM</p>
                      <p className="text-sm text-gray-500 mt-2">
                        All are welcome to attend our weekly meetings.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-heading text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2" asChild>
                      <a href="https://www.instagram.com/asiu.indiana" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        <span>Instagram</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2" asChild>
                      <a href="https://www.facebook.com/asiu.indiana" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4" />
                        <span>Facebook</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How can I join Advocates for Science @ IU?</AccordionTrigger>
                <AccordionContent>
                  We welcome all IU students who are passionate about science policy advocacy. You can join by attending
                  our weekly General Assembly meetings, which are held every Wednesday at 7:00 PM. No prior experience is
                  required - we provide training and support for all members.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What types of advocacy work do you do?</AccordionTrigger>
                <AccordionContent>
                  Our advocacy work includes legislative advocacy (engaging with policymakers), community engagement
                  (public forums and educational events), policy research and analysis, and science communication
                  training. We focus on issues like climate policy, healthcare, and research funding.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need to be a science major to join?</AccordionTrigger>
                <AccordionContent>
                  No! While many of our members are science majors, we welcome students from all academic backgrounds.
                  Policy advocacy benefits from diverse perspectives, and we value contributions from students in
                  humanities, social sciences, business, and other fields.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How can faculty and staff get involved?</AccordionTrigger>
                <AccordionContent>
                  Faculty and staff can support our work by serving as advisors, participating in our events, providing
                  expertise for policy research, and helping connect us with relevant networks and resources. We're
                  always open to collaboration opportunities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can community members participate in your events?</AccordionTrigger>
                <AccordionContent>
                  Yes! Many of our events, such as public forums and educational workshops, are open to the broader
                  community. We believe that science policy affects everyone, and we welcome community participation in
                  our advocacy efforts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-science-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Ready to Get Involved?</h2>
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
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  )
}
