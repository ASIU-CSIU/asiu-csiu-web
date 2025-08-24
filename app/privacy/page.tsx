import { LayoutWrapper } from "@/components/layout-wrapper"

export default function PrivacyPage() {
    return (
        <LayoutWrapper>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="font-heading text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">
                        <strong>Last updated:</strong> December 2024
                    </p>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Introduction</h2>
                        <p className="text-gray-700 mb-4">
                            Advocates for Science @ IU ("we," "our," or "us") is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                            when you visit our website and use our services.
                        </p>
                        <p className="text-gray-700 mb-4">
                            By using our website, you consent to the data practices described in this policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Information We Collect</h2>

                        <h3 className="font-heading text-xl font-semibold mb-3">Personal Information</h3>
                        <p className="text-gray-700 mb-4">
                            We may collect personal information that you voluntarily provide to us, including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                            <li>Name and email address (when subscribing to our newsletter)</li>
                            <li>Contact information (when reaching out to us)</li>
                            <li>Information you provide when participating in events or activities</li>
                            <li>Any other information you choose to provide</li>
                        </ul>

                        <h3 className="font-heading text-xl font-semibold mb-3">Automatically Collected Information</h3>
                        <p className="text-gray-700 mb-4">
                            When you visit our website, we automatically collect certain information about your device, including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                            <li>IP address and browser type</li>
                            <li>Operating system and device information</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website information</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">How We Use Your Information</h2>
                        <p className="text-gray-700 mb-4">
                            We use the information we collect for various purposes, including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Providing and maintaining our website and services</li>
                            <li>Sending newsletters and updates to subscribers</li>
                            <li>Responding to your inquiries and requests</li>
                            <li>Organizing and promoting events and activities</li>
                            <li>Improving our website and user experience</li>
                            <li>Analyzing website usage and trends</li>
                            <li>Complying with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
                        <p className="text-gray-700 mb-4">
                            We do not sell, trade, or otherwise transfer your personal information to third parties without
                            your consent, except in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>With your explicit consent</li>
                            <li>To comply with legal obligations or court orders</li>
                            <li>To protect our rights, property, or safety</li>
                            <li>In connection with a business transfer or merger</li>
                            <li>With service providers who assist us in operating our website (under strict confidentiality agreements)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
                        <p className="text-gray-700 mb-4">
                            We use cookies and similar tracking technologies to enhance your experience on our website.
                            Cookies are small text files stored on your device that help us:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                            <li>Remember your preferences and settings</li>
                            <li>Analyze website traffic and usage patterns</li>
                            <li>Improve website functionality and performance</li>
                            <li>Provide personalized content and experiences</li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            You can control cookie settings through your browser preferences. However, disabling cookies
                            may affect the functionality of our website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Data Security</h2>
                        <p className="text-gray-700 mb-4">
                            We implement appropriate security measures to protect your personal information against
                            unauthorized access, alteration, disclosure, or destruction. These measures include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Encryption of data in transit and at rest</li>
                            <li>Regular security assessments and updates</li>
                            <li>Access controls and authentication procedures</li>
                            <li>Secure hosting and infrastructure</li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            However, no method of transmission over the internet or electronic storage is 100% secure,
                            and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Your Rights and Choices</h2>
                        <p className="text-gray-700 mb-4">
                            You have certain rights regarding your personal information, including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                            <li><strong>Access:</strong> Request access to your personal information</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                            <li><strong>Opt-out:</strong> Unsubscribe from newsletters and communications</li>
                            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            To exercise these rights, please contact us using the information provided below.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Third-Party Links</h2>
                        <p className="text-gray-700 mb-4">
                            Our website may contain links to third-party websites or services. We are not responsible
                            for the privacy practices or content of these third-party sites. We encourage you to review
                            the privacy policies of any third-party sites you visit.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Children's Privacy</h2>
                        <p className="text-gray-700 mb-4">
                            Our website is not intended for children under the age of 13. We do not knowingly collect
                            personal information from children under 13. If you are a parent or guardian and believe
                            your child has provided us with personal information, please contact us immediately.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Changes to This Policy</h2>
                        <p className="text-gray-700 mb-4">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by
                            posting the new Privacy Policy on this page and updating the "Last updated" date.
                            We encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-gray-700 mb-4">
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Email: advocatesforscience.in@gmail.com</li>
                            <li>Please include "Privacy Policy Inquiry" in the subject line</li>
                        </ul>
                    </section>
                </div>
            </div>
        </LayoutWrapper>
    )
}
