import { LayoutWrapper } from "@/components/layout-wrapper"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Instagram, Facebook, MapPin, Clock, MessageSquare, Users, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team, join our community, or learn more about our advocacy efforts. We'd love to hear from you!"
        showLogo={false}
        showNewsletter={false}
        primaryButtonText="Send Message"
        secondaryButtonText=""
        className="py-16"
      />

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Whether you're interested in joining our advocacy efforts, have questions about our work, or want to
                  collaborate on science policy initiatives, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-science-blue" />
                      <span>Email</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-2">Primary contact for all inquiries</p>
                    <a
                      href="mailto:advocatesforscience.in@gmail.com"
                      className="text-science-blue hover:underline font-medium"
                    >
                      advocatesforscience.in@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      <span>Social Media</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Instagram</p>
                          <p className="text-sm text-gray-600">@asiu_bloomington</p>
                        </div>
                        <Button size="sm" className="bg-pink-500">
                          <Instagram className="h-4 w-4 mr-2" />
                          Follow
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Facebook</p>
                          <p className="text-sm text-gray-600">Advocates for Science @ IU</p>
                        </div>
                        <Button size="sm" className="bg-blue-600">
                          <Facebook className="h-4 w-4 mr-2" />
                          Follow
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-science-green" />
                      <span>Meeting Location</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">Weekly General Assembly</p>
                      <p className="text-gray-600">Student Union, Room 204</p>
                      <p className="text-gray-600">Indiana University Bloomington</p>
                      <div className="flex items-center space-x-2 mt-3">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Wednesdays, 7:00 PM - 8:30 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-science-blue" />
                    <span>Send Us a Message</span>
                  </CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="affiliation">Affiliation (Optional)</Label>
                      <Input id="affiliation" placeholder="University, organization, or title" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry or how you'd like to get involved..."
                        rows={5}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="newsletter" className="rounded" />
                        <Label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for updates on advocacy efforts and events
                        </Label>
                      </div>

                      <Button type="submit" className="w-full bg-science-blue">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about joining and participating in our organization</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How can I join Advocates for Science @ IU?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Joining is easy! Simply attend one of our weekly General Assembly meetings on Wednesdays at 7:00 PM in
                  the Student Union, Room 204. You can also email us at advocatesforscience.in@gmail.com or fill out the
                  contact form above. All IU students, faculty, and staff are welcome to participate.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Do I need a science background to participate?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Not at all! While we focus on science policy, we welcome members from all academic backgrounds.
                  Students in public policy, communications, political science, business, and other fields bring
                  valuable perspectives to our advocacy efforts. We provide training and resources to help everyone
                  contribute effectively.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">What time commitment is expected?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  We understand that students have busy schedules. The minimum commitment is attending our weekly
                  General Assembly meetings (1.5 hours per week). Beyond that, you can choose your level of involvement
                  based on your interests and availability. Working group meetings and special events are optional but
                  encouraged.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Can I participate if I'm not a student at IU?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  While our organization is primarily for IU students, we welcome participation from faculty, staff, and
                  community members who share our mission. Community members can attend our public events, forums, and
                  advocacy training sessions. Contact us to discuss how you can get involved.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                How do you choose which policy issues to focus on?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Our policy priorities are determined democratically by our membership through discussions at General
                  Assembly meetings and input from our working groups. We focus on issues where scientific evidence can
                  inform policy decisions and where student voices can make a meaningful impact. Current priorities
                  include climate action, healthcare policy, research funding, and science education.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">Do you provide advocacy training?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">
                  Yes! We regularly host advocacy training workshops covering topics like science communication, policy
                  research, meeting with elected officials, and effective messaging. These sessions are open to all
                  members and are designed to build confidence and skills for effective advocacy work.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-science-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-science-blue">Attend a Meeting</CardTitle>
                <CardDescription>Join us at our next General Assembly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Every Wednesday at 7:00 PM in the Student Union, Room 204. No RSVP required - just show up!
                </p>
                <Button className="bg-science-blue">Get Directions</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-science-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-science-green">Join a Working Group</CardTitle>
                <CardDescription>Find your area of interest and expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Choose from Legislative Advocacy, Education & Outreach, Events, Communications, Steering, or Finance.
                </p>
                <Button className="bg-science-green">Explore Groups</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-science-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-science-red">Start a Conversation</CardTitle>
                <CardDescription>Have questions or ideas to share?</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Reach out via email or social media. We're always excited to hear from potential new members.
                </p>
                <Button className="bg-science-red">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
