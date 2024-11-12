'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Brain, Code, Database, MessageSquare, Sparkles, Zap, CheckCircle } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function ServicesPage() {
  const processSteps = [
    {
      title: "Discovery & Scoping",
      items: [
        "Define project parameters and deliverables",
        "Establish clear timelines",
        "Determine budget requirements",
        "Define key success metrics"
      ],
      icon: <MessageSquare className="w-6 h-6 text-white" />
    },
    {
      title: "Solution Design & Kickoff",
      items: [
        "Detailed technical approach presentation",
        "Implementation Roadmap",
        "Resource allocation plan",
        "Early feedback integration"
      ],
      icon: <Sparkles className="w-6 h-6 text-white" />
    },
    {
      title: "Development & Midpoint Review",
      items: [
        "Regular progress updates",
        "Iterative feature functionality",
        "Performance testing review",
        "Opportunity impact corrections"
      ],
      icon: <Code className="w-6 h-6 text-white" />
    },
    {
      title: "Refinement & Revision",
      items: [
        "Detailed revision implementation",
        "Feature optimization",
        "Performance tuning",
        "User experience enhancement"
      ],
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      title: "Delivery & Support",
      items: [
        "Comprehensive solution delivery",
        "Integration support",
        "Team training",
        "Ongoing technical assistance",
        "Performance monitoring"
      ],
      icon: <CheckCircle className="w-6 h-6 text-white" />
    }
  ]

  return (
    <SharedLayout>
      <style jsx global>{`
        @keyframes blobMovement {
          0% { transform: translate(0px, 0px) scale(1); }
          20% { transform: translate(100px, -30px) scale(1.1); }
          40% { transform: translate(-80px, 60px) scale(1); }
          60% { transform: translate(50px, -100px) scale(1.2); }
          80% { transform: translate(-90px, 40px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>

      <div className="relative">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="bg-yellow-400 opacity-80 w-72 h-72 rounded-full blur-3xl absolute"
            style={{ top: '10%', left: '20%', animation: 'blobMovement 18s ease-in-out infinite alternate-reverse' }}></div>
          <div className="bg-yellow-300 opacity-80 w-96 h-96 rounded-full blur-3xl absolute"
            style={{ bottom: '15%', right: '20%', animation: 'blobMovement 16s ease-in-out infinite alternate', animationDelay: '1s' }}></div>
          <div className="bg-yellow-500 opacity-80 w-80 h-80 rounded-full blur-3xl absolute"
            style={{ top: '40%', left: '60%', animation: 'blobMovement 17s ease-in-out infinite alternate-reverse', animationDelay: '2s' }}></div>
          <div className="bg-yellow-200 opacity-60 w-64 h-64 rounded-full blur-2xl absolute"
            style={{ top: '5%', left: '75%', animation: 'blobMovement 20s ease-in-out infinite alternate', animationDelay: '0.5s' }}></div>
          <div className="bg-yellow-400 opacity-70 w-48 h-48 rounded-full blur-2xl absolute"
            style={{ bottom: '10%', left: '10%', animation: 'blobMovement 19s ease-in-out infinite alternate-reverse', animationDelay: '3s' }}></div>
          <div className="bg-yellow-300 opacity-70 w-56 h-56 rounded-full blur-2xl absolute"
            style={{ top: '30%', right: '30%', animation: 'blobMovement 21s ease-in-out infinite alternate', animationDelay: '1.5s' }}></div>
          <div className="bg-yellow-500 opacity-60 w-40 h-40 rounded-full blur-2xl absolute"
            style={{ top: '80%', left: '50%', animation: 'blobMovement 22s ease-in-out infinite alternate-reverse', animationDelay: '4s' }}></div>
          <div className="bg-yellow-200 opacity-70 w-52 h-52 rounded-full blur-2xl absolute"
            style={{ top: '50%', left: '10%', animation: 'blobMovement 23s ease-in-out infinite alternate', animationDelay: '2.5s' }}></div>
        </div>

        <div className="container mx-auto px-6 py-12 max-w-5xl text-white relative">
          
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gray-800 bg-opacity-70 rounded-2xl mb-24 shadow-lg backdrop-blur-lg">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <FadeInWhenVisible>
                <div className="flex flex-col justify-center space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Everything AI<br />at Santa Cruz
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Slug AI is UC Santa Cruz&apos;s AI Consulting and Training organization, offering many services to its members.
                  </p>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2}>
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="w-full max-w-[400px] h-[400px] relative">
                    <svg viewBox="0 0 400 400" className="w-full h-full text-gray-600">
                      <path
                        fill="currentColor"
                        d="M50 50h300v300H50z"
                        transform="rotate(45 200 200)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold">
                      AI
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-24">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-center mb-16 text-white">Services</h2>
            </FadeInWhenVisible>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <FadeInWhenVisible delay={0.1}>
                <div className="p-8 bg-black/70 rounded-2xl shadow-lg backdrop-blur-md transition-shadow h-full">
                  <h3 className="text-xl font-semibold mb-6 text-white">Consulting Services</h3>
                  <ul className="space-y-4 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-white" />
                      <span>Business Consulting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-white" />
                      <span>Online Research</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-white" />
                      <span>Competitive Analysis</span>
                    </li>
                  </ul>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div className="p-8 bg-black/70 rounded-2xl shadow-lg backdrop-blur-md transition-shadow h-full">
                  <h3 className="text-xl font-semibold mb-6 text-white">Software Development</h3>
                  <ul className="space-y-4 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-white" />
                      <span>Full-Stack Engineering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-white" />
                      <span>AI/ML Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-white" />
                      <span>Data Infrastructure</span>
                    </li>
                  </ul>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.3}>
                <div className="p-8 bg-black/70 rounded-2xl shadow-lg backdrop-blur-md transition-shadow h-full">
                  <h3 className="text-xl font-semibold mb-6 text-white">Generative AI Services</h3>
                  <ul className="space-y-4 text-gray-300 text-sm">
                    <li>• Large Language Models</li>
                    <li>• Image & LLM</li>
                    <li>• Generation (Text)</li>
                    <li>• Generation (Code)</li>
                    <li>• Diffusion Models</li>
                    <li>• Fine-tuning</li>
                    <li>• Deployment</li>
                  </ul>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.4}>
                <div className="p-8 bg-black/70 rounded-2xl shadow-lg backdrop-blur-md transition-shadow h-full">
                  <h3 className="text-xl font-semibold mb-6 text-white">Predictive AI Services</h3>
                  <ul className="space-y-4 text-gray-300 text-sm">
                    <li>• Classical Machine Learning</li>
                    <li>• Deep Learning</li>
                    <li>• Computer Vision (CNNs)</li>
                    <li>• Graph Neural Networks</li>
                  </ul>
                </div>
              </FadeInWhenVisible>
            </div>
          </section>

          {/* Process Timeline */}
          <section className="mb-24">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-white">Our Consulting Process</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  At SLUG AI, we transform complex challenges into elegant AI solutions through our proven five-step consulting process. Our collaborative approach ensures your vision is realized with precision and expertise.
                </p>
              </div>

              <div className="relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gray-500 before:to-gray-400">
                {processSteps.map((step, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <div className="relative pl-12 pb-12">
                      <div className="absolute left-0 top-0 w-10 h-10 bg-gray-600 rounded-full -translate-x-[10px] flex items-center justify-center text-white ring-4 ring-gray-800">
                        {step.icon}
                      </div>
                      <div className="p-6 bg-black/70 rounded-2xl shadow-lg backdrop-blur-md">
                        <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeInWhenVisible>
                ))}
              </div>
            </FadeInWhenVisible>
          </section>

          {/* Partnership Section */}
          <section className="mb-24">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg"
                alt="Partnership"
                width={1200}
                height={400}
                className="w-full h-[400px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/70 p-12 flex flex-col justify-end backdrop-blur-md">
                <FadeInWhenVisible>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    We don&apos;t just deliver solutions—we build partnerships.
                  </h2>
                  <p className="text-gray-300 max-w-2xl">
                    At SLUG AI, we believe effective tech starts with effective relationships. From initial concept to final implementation, our team of UCSC-trained experts is committed to your success.
                  </p>
                </FadeInWhenVisible>
              </div>
            </div>
          </section>

          {/* Join Us Section */}
          <FadeInWhenVisible>
            <section className="max-w-lg mx-auto text-center py-16 px-6 bg-gray-800 bg-opacity-70 rounded-2xl shadow-xl mt-16 backdrop-blur-sm">
              <h2 className="text-4xl font-extrabold mb-6 text-white tracking-tight">
                Join the AI Revolution
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md mx-auto">
                Ready to make a difference with AI? Apply now to join SLUG AI and embark on an exciting journey in the world of artificial intelligence!
              </p>
              <Button
                className="w-full max-w-xs mx-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-semibold text-lg py-3 px-6 rounded-full hover:shadow-2xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
                onClick={() => window.location.href = '/join'}
              >
                Apply Now
              </Button>
            </section>
          </FadeInWhenVisible>
        </div>
      </div>
    </SharedLayout>
  )
}
