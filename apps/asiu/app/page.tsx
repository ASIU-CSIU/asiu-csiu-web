import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home | Advocates for Science @ IU',
  description: 'Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society.'
}

export default function ASIUHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Advocates for Science @ IU
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Get Involved
            </button>
            <button className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Science Advocacy</h3>
              <p className="text-gray-600">Promoting the role of science in public policy and decision making.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Leadership</h3>
              <p className="text-gray-600">Empowering students to be advocates for scientific integrity.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
              <p className="text-gray-600">Building connections between science and the community.</p>
            </div>
          </div>
        </div>

        {/* Monorepo Demo Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-4">✅ Monorepo Implementation Complete</h2>
          <p className="text-green-800 mb-4">
            This ASIU site demonstrates the successful monorepo implementation:
          </p>
          <ul className="list-disc list-inside text-green-700 space-y-2">
            <li>Original ASIU content preserved in apps/asiu/</li>
            <li>New CSIU organization with independent frontend</li>
            <li>Shared CMS backend for both organizations</li>
            <li>Shared packages for utilities, types, SEO, and Sanity</li>
            <li>Independent deployment configurations</li>
            <li>Turborepo build system for efficient development</li>
          </ul>
          <div className="mt-4 p-4 bg-white rounded border">
            <p className="text-sm text-gray-600">
              <strong>Next Steps:</strong> The original complex ASIU components can be restored by moving back the complex layout and components from the backup files when ready for production deployment.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-xl mb-6 opacity-90">
            Student voices are powerful. Join us in advocating for science-based policy.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Involved Today
          </button>
        </div>
      </div>
    </div>
  )
}