// src/app/services/page.tsx
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "data-analysis",
      title: "Data Analysis",
      description: "Transform your raw data into actionable insights with our advanced analytics services.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "blue",
      features: [
        "Comprehensive data audits and cleaning",
        "Predictive analytics and trend forecasting",
        "Custom dashboards and visualizations",
        "Business intelligence integration",
        "Machine learning model development",
        "Real-time data monitoring solutions"
      ]
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Modernize your business with custom digital solutions tailored to your specific needs.",
      icon: (
        <svg className="w-12 h-12 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "purple",
      features: [
        "Legacy system modernization",
        "Process automation and optimization",
        "Cloud migration strategies",
        "Custom software development",
        "API development and integration",
        "Digital workplace solutions"
      ]
    },
    {
      id: "marketing",
      title: "Marketing Solutions",
      description: "Reach your target audience with data-driven marketing strategies that deliver measurable results.",
      icon: (
        <svg className="w-12 h-12 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      color: "green",
      features: [
        "Comprehensive marketing strategy development",
        "Search engine optimization (SEO)",
        "Content marketing and creation",
        "Social media management and advertising",
        "Email marketing campaigns",
        "Analytics and performance tracking"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions to drive your business forward in the digital age. We combine data expertise with technical innovation to deliver measurable results.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col md:flex-row items-center gap-12 py-16 ${
                index < services.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="md:w-1/3 flex justify-center">
                <div className={`bg-${service.color}-100 p-8 rounded-xl`}>
                  {service.icon}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                
                <h3 className="text-lg font-medium mb-4 text-gray-800">What we offer:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className={`w-5 h-5 text-${service.color}-600 mr-2 mt-1 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={`/services/${service.id}`}
                  className={`bg-${service.color}-600 hover:bg-${service.color}-700 text-white font-medium px-6 py-3 rounded-md transition-colors inline-block`}
                >
                  Learn more about {service.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Our team of experts can help you identify the right solutions for your business challenges. Get in touch for a free consultation.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}