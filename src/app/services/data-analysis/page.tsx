// src/app/services/data-analysis/page.tsx
import Link from "next/link";

export default function DataAnalysisPage() {
  const benefits = [
    {
      title: "Make Better Business Decisions",
      description: "Turn your data into actionable insights that inform strategic decision-making and drive business growth."
    },
    {
      title: "Identify Market Opportunities",
      description: "Use predictive analytics to spot emerging trends and untapped opportunities before your competitors."
    },
    {
      title: "Optimize Operations",
      description: "Analyze operational data to eliminate inefficiencies and reduce costs across your organization."
    },
    {
      title: "Enhance Customer Experience",
      description: "Gain deeper understanding of customer behavior to personalize experiences and increase satisfaction."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Assessment & Discovery",
      description: "We begin by understanding your business goals and evaluating your current data ecosystem."
    },
    {
      number: "02",
      title: "Data Collection & Cleaning",
      description: "We identify relevant data sources, collect data, and perform thorough cleaning and normalization."
    },
    {
      number: "03",
      title: "Analysis & Modeling",
      description: "Our data scientists apply advanced statistical methods and machine learning to uncover insights."
    },
    {
      number: "04",
      title: "Visualization & Reporting",
      description: "We create intuitive dashboards and reports that make complex data accessible and actionable."
    },
    {
      number: "05",
      title: "Implementation & Training",
      description: "We help you implement changes based on insights and train your team to use analytical tools."
    },
    {
      number: "06",
      title: "Ongoing Support & Optimization",
      description: "We provide continuous support, refining models and adapting to changing business needs."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Analysis Services</h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Transform your raw data into actionable insights that drive better business decisions and create competitive advantage.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
                <svg className="w-24 h-24 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Unlock the Power of Your Data</h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's data-driven world, the ability to extract meaningful insights from your data is critical for business success. Our data analysis services help you transform raw information into strategic assets that drive growth and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At Datika, we combine advanced analytical techniques with deep industry knowledge to deliver insights that address your specific business challenges. Whether you're looking to optimize operations, enhance customer experiences, or identify new market opportunities, our team of data scientists and analysts will develop tailored solutions that deliver measurable results.
              </p>
              <p className="text-lg text-gray-600">
                We work with businesses of all sizes across various industries, using the latest tools and methodologies to turn complex data into clear, actionable strategies.
              </p>
            </div>
            <div className="md:w-1/3 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Data Analysis Services Include:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Business Intelligence Solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Predictive Analytics & Forecasting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Custom Dashboard Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Data Mining & Pattern Recognition</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Machine Learning Implementation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Data Visualization & Reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Big Data Solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
            Benefits of Our Data Analysis Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Data Analysis Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to deliver comprehensive data analysis that addresses your unique business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="border border-gray-100 rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="text-blue-600 font-bold text-5xl mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and tools to deliver powerful data analysis solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="block text-lg font-medium">Python</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="block text-lg font-medium">R</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="block text-lg font-medium">SQL</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="block text-lg font-medium">Tableau</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="block text-lg font-medium">Power BI</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="block text-lg font-medium">TensorFlow</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="block text-lg font-medium">Apache Spark</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="block text-lg font-medium">AWS/Azure/GCP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Case Study</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our data analysis services have helped businesses achieve their goals.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-blue-100 p-12 flex items-center justify-center">
                <div className="text-blue-600 text-6xl font-bold">+28%</div>
              </div>
              <div className="md:w-1/2 p-12">
                <span className="text-sm font-medium text-blue-600">Retail Analytics</span>
                <h3 className="text-2xl font-bold mt-2 mb-4 text-gray-900">
                  National Retail Chain Boosts Revenue Through Advanced Customer Analytics
                </h3>
                <p className="text-gray-600 mb-6">
                  We helped a national retail chain implement advanced customer analytics that led to a 28% increase in revenue and a 15% improvement in customer retention.
                </p>
                <Link href="/case-studies/retail-analytics" className="text-blue-600 font-medium inline-flex items-center">
                  Read Full Case Study
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Data Into Insights?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Contact us today to discuss how our data analysis services can help your business make better decisions and achieve your goals.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-md transition-colors inline-block"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}