import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home | Concerned Scientists @ IU',
  description: 'Concerned Scientists @ IU - Faculty organization dedicated to promoting scientific integrity and evidence-based policy at Indiana University.'
}

export default function CSIUHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Concerned Scientists @ IU
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Faculty organization dedicated to promoting scientific integrity and evidence-based policy at Indiana University.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors">
              Get Involved
            </button>
            <button className="border-2 border-red-700 text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scientific Integrity</h3>
              <p className="text-gray-600">Promoting honest, transparent research and evidence-based decision making.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Policy Advocacy</h3>
              <p className="text-gray-600">Working to ensure science informs public policy at all levels of government.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">Educating faculty, students, and the public about the importance of science in society.</p>
            </div>
          </div>
        </div>

        {/* Monorepo Demo Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">🏗️ Monorepo Architecture Demo</h2>
          <p className="text-blue-800 mb-4">
            This CSIU site demonstrates the successful monorepo implementation with:
          </p>
          <ul className="list-disc list-inside text-blue-700 space-y-2">
            <li>Independent frontend apps for ASIU and CSIU organizations</li>
            <li>Shared packages for utilities, types, SEO, and Sanity CMS</li>
            <li>Organization-specific branding and configuration</li>
            <li>SEO-optimized structure with proper robots.txt and sitemaps</li>
            <li>Turborepo build system for efficient development</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-red-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-6 opacity-90">
            Be part of a faculty network working to strengthen the role of science in public discourse.
          </p>
          <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}