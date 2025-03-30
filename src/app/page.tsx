// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Business Through Data
            </h1>
            <p className="text-xl mt-6 text-blue-100 max-w-xl">
              We help businesses harness the power of data analysis, digital transformation, and strategic marketing to drive growth and innovation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-md text-center transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md text-center transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg h-80">
              {/* Replace with actual image when available */}
              <div className="bg-blue-400/20 backdrop-blur-md border border-white/10 rounded-2xl w-full h-full"></div>
              <div className="absolute -bottom-4 -right-4 bg-purple-500/20 backdrop-blur-md border border-white/10 rounded-2xl w-48 h-48"></div>
              <div className="absolute -top-4 -left-4 bg-blue-300/20 backdrop-blur-md border border-white/10 rounded-2xl w-40 h-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to drive your business forward in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Analysis */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Data Analysis</h3>
              <p className="text-gray-600 mb-6">
                Transform your raw data into actionable insights. Our team uses advanced analytics to uncover patterns and opportunities for your business.
              </p>
              <Link href="/services/data-analysis" className="text-blue-600 font-medium inline-flex items-center">
                Learn more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-3 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Digital Transformation</h3>
              <p className="text-gray-600 mb-6">
                Modernize your business with custom digital solutions. We help you adopt new technologies and streamline processes.
              </p>
              <Link href="/services/digital-transformation" className="text-purple-600 font-medium inline-flex items-center">
                Learn more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Marketing Solutions */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Marketing Solutions</h3>
              <p className="text-gray-600 mb-6">
                Reach your target audience with data-driven marketing strategies. We create campaigns that convert and build your brand.
              </p>
              <Link href="/services/marketing" className="text-green-600 font-medium inline-flex items-center">
                Learn more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Datika
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Data-Driven Approach</h3>
              <p className="text-gray-600">
                We base all our strategies and solutions on thorough data analysis, ensuring measurable results and continuous improvement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Tailored Solutions</h3>
              <p className="text-gray-600">
                Every business is unique. We create custom solutions designed specifically for your industry, challenges, and goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">
                Our team brings together experts in data science, software development, UX design, and digital marketing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Long-term Partnership</h3>
              <p className="text-gray-600">
                We don't just deliver a project and leave. We build lasting partnerships to support your ongoing digital journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Case Studies
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses like yours achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 bg-blue-500/10"></div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600">Data Analysis</span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900">Retail Chain Analytics Transformation</h3>
                <p className="text-gray-600 mb-4">
                  How we helped a national retail chain increase revenue by 28% through advanced customer analytics.
                </p>
                <Link href="/case-studies/retail-analytics" className="text-blue-600 font-medium inline-flex items-center">
                  Read Case Study
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 bg-purple-500/10"></div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-purple-600">Digital Transformation</span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900">Healthcare Provider Modernization</h3>
                <p className="text-gray-600 mb-4">
                  Modernizing a healthcare provider's systems, reducing operational costs by 35% and improving patient satisfaction.
                </p>
                <Link href="/case-studies/healthcare-modernization" className="text-purple-600 font-medium inline-flex items-center">
                  Read Case Study
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 bg-green-500/10"></div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-green-600">Marketing</span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900">SaaS Company Growth Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Helping a B2B SaaS company achieve 215% growth in qualified leads through integrated marketing campaigns.
                </p>
                <Link href="/case-studies/saas-growth" className="text-green-600 font-medium inline-flex items-center">
                  Read Case Study
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-md transition-colors inline-block"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help you leverage data and digital solutions to achieve your goals.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-md text-center transition-colors inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}