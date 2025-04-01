"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, User, BarChart2, Database, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Predictive Analytics in Business Decision Making",
    date: "February 12, 2025",
    author: "Nikola Kiryakov",
    category: "Predictive Analytics",
    icon: <BarChart2 className="h-24 w-24 text-purple-500" />,
    content: `
      <h2>The Evolution of Predictive Analytics</h2>
      <p>Predictive analytics has come a long way from its early applications in financial forecasting. Today, it's transforming how businesses across all industries make strategic decisions. By leveraging historical data, statistical algorithms, and machine learning techniques, organizations can now forecast future outcomes with unprecedented accuracy.</p>
      
      <p>The most significant advancement in recent years has been the accessibility of these powerful tools. What was once the domain of data scientists with specialized knowledge is now available through user-friendly platforms that business analysts can leverage without extensive technical expertise.</p>
      
      <h2>Real-Time Decision Making</h2>
      <p>Perhaps the most revolutionary aspect of modern predictive analytics is the shift toward real-time analysis and decision-making. Traditional analytics often involved batch processing and retrospective analysis, creating a lag between data collection and actionable insights.</p>
      
      <p>Today's predictive models can ingest streaming data and provide immediate forecasts, allowing businesses to respond to market changes, customer behavior shifts, or operational issues as they happen. This capability is particularly valuable in industries like e-commerce, where real-time personalization can significantly impact conversion rates.</p>
      
      <h2>Cross-Functional Applications</h2>
      <p>While predictive analytics was initially adopted primarily by marketing and finance departments, we're now seeing its application across virtually every business function:</p>
      
      <ul>
        <li><strong>Supply Chain Management:</strong> Forecasting demand, optimizing inventory levels, and predicting potential disruptions</li>
        <li><strong>Human Resources:</strong> Predicting employee turnover, optimizing hiring processes, and personalizing employee development</li>
        <li><strong>Customer Service:</strong> Anticipating support needs and personalizing service experiences</li>
        <li><strong>Product Development:</strong> Identifying emerging customer needs and predicting market reception to new features</li>
      </ul>
      
      <h2>Ethical Considerations</h2>
      <p>As predictive analytics becomes more powerful and pervasive, organizations must address important ethical considerations. Models can inadvertently perpetuate biases present in historical data, leading to unfair or discriminatory outcomes. Forward-thinking companies are implementing governance frameworks to ensure their predictive models are transparent, fair, and accountable.</p>
      
      <h2>The Road Ahead</h2>
      <p>Looking to the future, we can expect predictive analytics to become even more integrated with operational systems, enabling automated decision-making in appropriate contexts. The combination of predictive analytics with prescriptive capabilities—not just forecasting what will happen but recommending specific actions—will further enhance its business value.</p>
      
      <p>Organizations that develop a strong predictive analytics capability, supported by the right data infrastructure, talent, and governance, will have a significant competitive advantage in the increasingly data-driven business landscape.</p>
    `,
  },
  {
    id: 2,
    title: "Building a Data-Driven Culture: Strategies for Modern Organizations",
    date: "February 25, 2025",
    author: "Nikola Kiryakov",
    category: "Data Culture",
    icon: <Database className="h-24 w-24 text-blue-500" />,
    content: `
      <h2>Why Culture Matters in Data Transformation</h2>
      <p>While investing in data infrastructure and analytics tools is essential, the true differentiator in successful data transformation is culture. Organizations with a strong data culture make better decisions faster, innovate more effectively, and ultimately outperform their competitors.</p>
      
      <p>A data-driven culture is characterized by widespread data literacy, decision-making based on evidence rather than intuition, and a commitment to measuring outcomes. Building this culture requires deliberate strategy and sustained effort from leadership at all levels.</p>
      
      <h2>Leadership Commitment and Role Modeling</h2>
      <p>Cultural transformation starts at the top. When executives consistently use data in their decision-making and communicate the rationale behind their choices, they send a powerful message throughout the organization. Leaders should:</p>
      
      <ul>
        <li>Regularly reference data insights in communications</li>
        <li>Ask for evidence when presented with proposals</li>
        <li>Share how data changed their thinking or approach</li>
        <li>Celebrate data-informed successes and learning from failures</li>
      </ul>
      
      <h2>Democratizing Data Access</h2>
      <p>A true data culture requires broad access to relevant data across the organization. Breaking down data silos and implementing self-service analytics tools empowers employees at all levels to incorporate data into their daily work. This democratization should be balanced with appropriate governance to ensure data security and quality.</p>
      
      <p>Modern data platforms that combine robust security with user-friendly interfaces are essential for this balance. When employees can easily access trusted data without technical barriers, data-driven decision making becomes the path of least resistance.</p>
      
      <h2>Building Data Literacy</h2>
      <p>For employees to effectively use data, they need the skills to understand, interpret, and communicate with data. A comprehensive data literacy program should include:</p>
      
      <ul>
        <li>Basic statistical concepts and data interpretation</li>
        <li>Critical thinking about data quality and limitations</li>
        <li>Effective data visualization principles</li>
        <li>Ethical considerations in data analysis</li>
      </ul>
      
      <p>Training should be role-specific, focusing on the data skills most relevant to each employee's responsibilities. Creating a community of practice where employees can share knowledge and support each other accelerates learning.</p>
      
      <h2>Embedding Data in Processes</h2>
      <p>To make data-driven decision making sustainable, it must be integrated into core business processes rather than treated as an optional add-on. This integration might include:</p>
      
      <ul>
        <li>Requiring data-backed justifications for major decisions</li>
        <li>Incorporating data review into regular meeting agendas</li>
        <li>Setting and tracking metrics for all significant initiatives</li>
        <li>Using A/B testing for product and process changes</li>
      </ul>
      
      <h2>Celebrating and Sharing Success</h2>
      <p>Recognizing and rewarding data-driven behaviors reinforces their importance. Organizations should create mechanisms to highlight successful applications of data, whether they led to major business outcomes or small process improvements. These success stories become powerful examples that inspire others and demonstrate the tangible value of a data-driven approach.</p>
      
      <h2>The Journey, Not the Destination</h2>
      <p>Building a data-driven culture is an ongoing journey rather than a one-time transformation. As data capabilities, business needs, and external environments evolve, so too must the organization's approach to data. The most successful organizations maintain a learning mindset, continuously refining their data practices while staying true to the core principle that better data leads to better decisions.</p>
    `,
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogPosts.find((post) => post.id === postId)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">Blog post not found</h1>
            <Link href="/blog">
              <Button className="mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Link href="/blog" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <div className="flex items-center justify-center h-32 w-32">{post.icon}</div>
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300 mb-2">
                    {post.category}
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    {post.title}
                  </h1>
                  <div className="flex items-center justify-center gap-4 text-sm text-zinc-400 mt-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="w-full py-12 md:py-16 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl prose prose-invert prose-zinc">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Ready to Transform Your Data Strategy?
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how our data analytics services can help your business grow.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

