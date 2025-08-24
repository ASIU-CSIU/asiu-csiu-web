import { LayoutWrapper } from "@/components/layout-wrapper"

export default function AccessibilityPage() {
    return (
        <LayoutWrapper>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="font-heading text-4xl font-bold mb-8">Accessibility Statement</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">
                        <strong>Last updated:</strong> December 2024
                    </p>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Our Commitment</h2>
                        <p className="text-gray-700 mb-4">
                            Advocates for Science @ IU is committed to ensuring digital accessibility for people with disabilities.
                            We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Conformance Status</h2>
                        <p className="text-gray-700 mb-4">
                            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to
                            improve accessibility for people with disabilities. It defines three levels of conformance: Level A,
                            Level AA, and Level AAA.
                        </p>
                        <p className="text-gray-700 mb-4">
                            This website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some
                            parts of the content do not fully conform to the accessibility standard.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Accessibility Features</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Semantic HTML structure for proper screen reader navigation</li>
                            <li>Alternative text for images and graphics</li>
                            <li>Keyboard navigation support</li>
                            <li>High contrast color schemes</li>
                            <li>Readable font sizes and spacing</li>
                            <li>Focus indicators for interactive elements</li>
                            <li>Responsive design for various screen sizes</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Known Issues</h2>
                        <p className="text-gray-700 mb-4">
                            We are aware of the following accessibility issues and are working to resolve them:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Some interactive elements may not be fully accessible to screen readers</li>
                            <li>Color contrast ratios may not meet WCAG AA standards in all areas</li>
                            <li>Some form elements may lack proper labeling</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Feedback and Contact</h2>
                        <p className="text-gray-700 mb-4">
                            We welcome your feedback on the accessibility of this website. If you experience accessibility barriers
                            or have suggestions for improvement, please contact us:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Email: advocatesforscience.in@gmail.com</li>
                            <li>Please include "Accessibility Feedback" in the subject line</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Technical Specifications</h2>
                        <p className="text-gray-700 mb-4">
                            Accessibility of this website relies on the following technologies to work with the particular
                            combination of web browser and any assistive technologies or plugins installed on your computer:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>WAI-ARIA</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Assessment Methods</h2>
                        <p className="text-gray-700 mb-4">
                            We assessed the accessibility of this website using the following methods:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Self-evaluation using accessibility testing tools</li>
                            <li>Manual testing with keyboard navigation</li>
                            <li>Review of color contrast ratios</li>
                            <li>Testing with screen reader software</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-semibold mb-4">Continuous Improvement</h2>
                        <p className="text-gray-700 mb-4">
                            We are committed to continuously improving the accessibility of our website. This includes:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Regular accessibility audits</li>
                            <li>User feedback integration</li>
                            <li>Staff training on accessibility best practices</li>
                            <li>Implementation of new accessibility features</li>
                        </ul>
                    </section>
                </div>
            </div>
        </LayoutWrapper>
    )
}
