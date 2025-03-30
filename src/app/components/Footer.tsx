// src/app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="font-bold text-2xl text-white">
            Datika
          </Link>
          <p className="mt-4 text-gray-400">
            Transforming businesses through data analysis, digital transformation, and innovative marketing solutions.
          </p>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services/data-analysis" className="text-gray-400 hover:text-white transition-colors">
                Data Analysis
              </Link>
            </li>
            <li>
              <Link href="/services/digital-transformation" className="text-gray-400 hover:text-white transition-colors">
                Digital Transformation
              </Link>
            </li>
            <li>
              <Link href="/services/marketing" className="text-gray-400 hover:text-white transition-colors">
                Marketing Solutions
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">
              <span className="block">Email: info@datika.com</span>
            </li>
            <li className="text-gray-400">
              <span className="block">Phone: +1 (555) 123-4567</span>
            </li>
            <li className="text-gray-400">
              <span className="block">Address: 123 Data Street</span>
              <span className="block">San Francisco, CA 94105</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Datika. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
