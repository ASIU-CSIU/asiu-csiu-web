import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home | Concerned Scientists @ IU',
  description: 'Concerned Scientists @ IU - Faculty organization dedicated to promoting scientific integrity and evidence-based policy at Indiana University.'
}

export default function CSIUHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-csiu-red/5 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Concerned Scientists @ IU
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Faculty organization dedicated to promoting scientific integrity and evidence-based policy at Indiana University.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-csiu-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-csiu-red-dark transition-colors">
              Get Involved
            </button>
            <button className="border-2 border-csiu-red text-csiu-red px-8 py-3 rounded-lg font-semibold hover:bg-csiu-red hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-csiu-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scientific Integrity</h3>
              <p className="text-gray-600">Promoting honest, transparent research and evidence-based decision making.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-csiu-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Policy Advocacy</h3>
              <p className="text-gray-600">Working to ensure science informs public policy at all levels of government.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-csiu-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">Educating faculty, students, and the public about the importance of science in society.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-csiu-red text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-6 opacity-90">
            Be part of a faculty network working to strengthen the role of science in public discourse.
          </p>
          <button className="bg-white text-csiu-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}