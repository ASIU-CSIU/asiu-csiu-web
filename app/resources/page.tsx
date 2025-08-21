import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, ExternalLink, BookOpen, Users, Gavel, Globe, Lightbulb, Archive, Link } from "lucide-react"

export default function ResourcesPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">Resources & Letters</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Access our collection of open letters, policy documents, educational materials, and advocacy resources to
            support evidence-based decision making.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="letters" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="letters">Open Letters</TabsTrigger>
              <TabsTrigger value="bulletins">News Bulletins</TabsTrigger>
              <TabsTrigger value="educational">Educational</TabsTrigger>
              <TabsTrigger value="external">External Links</TabsTrigger>
            </TabsList>

            <TabsContent value="letters" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-bold mb-4">Open Letters</h2>
                <p className="text-gray-600">
                  Our official position statements and advocacy letters on key policy issues
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-science-blue">Healthcare Policy</Badge>
                      <span className="text-sm text-gray-500">Dec 2024</span>
                    </div>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-science-blue" />
                      <span>Evidence-Based Healthcare Reform</span>
                    </CardTitle>
                    <CardDescription>
                      Comprehensive statement on healthcare policy reform signed by 150+ students and faculty
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      This letter outlines our position on healthcare policy reform, emphasizing the need for
                      evidence-based approaches to public health challenges and increased funding for health research.
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-science-blue hover:bg-blue-700">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Online
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-science-green">Climate Action</Badge>
                      <span className="text-sm text-gray-500">Nov 2024</span>
                    </div>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-science-green" />
                      <span>Climate Science and Policy Action</span>
                    </CardTitle>
                    <CardDescription>
                      Joint statement with environmental organizations on climate policy priorities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      A collaborative letter addressing the urgent need for science-based climate policies at the state
                      and federal level, co-signed with 12 partner organizations.
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-science-green hover:bg-green-700">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Online
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-science-red">Research Funding</Badge>
                      <span className="text-sm text-gray-500">Oct 2024</span>
                    </div>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-science-red" />
                      <span>Support for Science Research Funding</span>
                    </CardTitle>
                    <CardDescription>Letter to state legislators supporting increased research funding</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Our successful advocacy letter supporting the Indiana Science Research Funding Act, which secured
                      $50 million in additional funding for university research programs.
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-science-red hover:bg-red-700">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Online
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-purple-600">Science Education</Badge>
                      <span className="text-sm text-gray-500">Sep 2024</span>
                    </div>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-purple-600" />
                      <span>Science Education Standards</span>
                    </CardTitle>
                    <CardDescription>Position on K-12 science education curriculum standards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Our recommendations for evidence-based science education standards that promote critical thinking
                      and scientific literacy in K-12 education.
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Online
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="bulletins" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-bold mb-4">News Bulletins</h2>
                <p className="text-gray-600">Regular updates on our advocacy efforts and policy developments</p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-science-blue">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-science-blue">Monthly Bulletin</Badge>
                      <span className="text-sm text-gray-500">January 2025</span>
                    </div>
                    <CardTitle className="flex items-center space-x-2">
                      <Archive className="h-5 w-5 text-science-blue" />
                      <span>January 2025 Advocacy Update</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Monthly roundup of our advocacy activities, upcoming events, policy developments, and member
                      spotlights. Includes updates on our new partnership with the Indiana Department of Environmental
                      Management.
                    </p>
                    <Button size="sm" className="bg-science-blue hover:bg-blue-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Bulletin
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-science-green">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-science-green">Special Report</Badge>
                      <span className="text-sm text-gray-500">December 2024</span>
                    </div>
                    <CardTitle className="flex items-center space-x-2">
                      <Archive className="h-5 w-5 text-science-green" />
                      <span>2024 Year in Review</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Comprehensive review of our 2024 advocacy achievements, including successful policy campaigns,
                      events hosted, partnerships formed, and impact metrics.
                    </p>
                    <Button size="sm" className="bg-science-green hover:bg-green-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-science-red">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-science-red">Policy Brief</Badge>
                      <span className="text-sm text-gray-500">November 2024</span>
                    </div>
                    <CardTitle className="flex items-center space-x-2">
                      <Archive className="h-5 w-5 text-science-red" />
                      <span>State Science Funding Analysis</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Detailed analysis of state science funding trends and recommendations for future advocacy
                      priorities. Includes data visualization and policy recommendations.
                    </p>
                    <Button size="sm" className="bg-science-red hover:bg-red-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Brief
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="educational" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-bold mb-4">Educational Resources</h2>
                <p className="text-gray-600">Tools and materials for science advocacy and communication</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-science-blue rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Advocacy Training Guide</CardTitle>
                    <CardDescription>Comprehensive guide to science policy advocacy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Step-by-step guide covering effective communication strategies, policy research methods, and
                      engagement techniques for working with policymakers.
                    </p>
                    <Button size="sm" className="bg-science-blue hover:bg-blue-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Guide
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-science-green rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Community Engagement Toolkit</CardTitle>
                    <CardDescription>Resources for public science communication</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Templates, presentation materials, and best practices for engaging diverse communities in science
                      policy discussions and advocacy efforts.
                    </p>
                    <Button size="sm" className="bg-science-green hover:bg-green-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Toolkit
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-science-red rounded-lg flex items-center justify-center mb-4">
                      <Gavel className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Policy Research Methods</CardTitle>
                    <CardDescription>Guide to researching and analyzing policy issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Research methodologies, data sources, and analytical frameworks for understanding complex policy
                      issues and developing evidence-based positions.
                    </p>
                    <Button size="sm" className="bg-science-red hover:bg-red-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Methods
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Science Communication Tips</CardTitle>
                    <CardDescription>Best practices for explaining complex concepts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Practical tips and techniques for making scientific concepts accessible to non-expert audiences,
                      including policymakers and the general public.
                    </p>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Tips
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Letter Writing Templates</CardTitle>
                    <CardDescription>Templates for contacting elected officials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Ready-to-use templates for writing effective letters to representatives, including formatting
                      guidelines and sample language for various policy issues.
                    </p>
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Templates
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Digital Advocacy Guide</CardTitle>
                    <CardDescription>Using social media and online tools for advocacy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      Strategies for effective online advocacy, including social media best practices, digital campaign
                      planning, and online community building.
                    </p>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Guide
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="external" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-bold mb-4">External Resources</h2>
                <p className="text-gray-600">Curated links to valuable external resources and partner organizations</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Link className="h-5 w-5 text-science-blue" />
                      <span>Policy Organizations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Union of Concerned Scientists</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">American Association for the Advancement of Science</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Science Policy Research Institute</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">National Science Policy Network</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Link className="h-5 w-5 text-science-green" />
                      <span>Government Resources</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Indiana General Assembly</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Congressional Research Service</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Government Accountability Office</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Office of Science and Technology Policy</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Link className="h-5 w-5 text-science-red" />
                      <span>Research & Data</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">National Science Foundation</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">National Institutes of Health</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Environmental Protection Agency</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Centers for Disease Control</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Link className="h-5 w-5 text-purple-600" />
                      <span>Training & Education</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Science Communication Training</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Policy Advocacy Workshops</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Congressional Fellowship Programs</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Science Policy Graduate Programs</span>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </LayoutWrapper>
  )
}
