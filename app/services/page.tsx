'use client'

import { ReactNode } from "react"
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Brain, Code, Database, MessageSquare, Sparkles, Zap, CheckCircle } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'

interface FadeInWhenVisibleProps {
  children: ReactNode
  delay?: number
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children, delay = 0 }) => {
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

interface ProcessStep {
  title: string
  items: string[]
  icon: ReactNode
}

export default function ServicesPage() {
  const processSteps: ProcessStep[] = [
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
          {/* Animated blobs */}
          {/* Blob elements with updated keyframes */}
        </div>

        <div className="container mx-auto px-6 py-12 max-w-5xl text-white relative">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center bg-transparent mb-24">
            <div className="relative max-w-5xl w-full mx-auto p-8 lg:p-12 bg-black bg-opacity-40 rounded-2xl shadow-lg backdrop-blur-md flex flex-col lg:flex-row items-center lg:items-stretch space-y-8 lg:space-y-0 lg:space-x-8">
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl mb-4">
                  Everything AI<br />at Santa Cruz
                </h1>
                <p className="text-gray-300 max-w-md lg:max-w-lg text-lg md:text-xl">
                  Slug AI is UC Santa Cruz&apos;s AI Consulting and Training organization, offering many services to its members.
                </p>
              </div>
              <div className="relative w-full lg:w-1/2 h-80 lg:h-auto flex-shrink-0 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/long-logo.png"
                  alt="Slug AI Logo"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-80 transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-24">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-center mb-16 text-white">Services</h2>
            </FadeInWhenVisible>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Services components */}
            </div>
          </section>

          {/* Process Timeline */}
          <section className="mb-24">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-white">Our Consulting Process</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  At SLUG AI, we transform complex challenges into elegant AI solutions through our proven five-step consulting process.
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
                src="/crowd.png"
                alt="Partnership Background"
                layout="fill"
                objectFit="cover"
                className="w-full h-[400px] object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black/70 p-12 flex flex-col justify-end backdrop-blur-md">
                <FadeInWhenVisible>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    We don&apos;t just deliver solutions—we build partnerships.
                  </h2>
                  <p className="text-gray-300 max-w-2xl">
                    At SLUG AI, we believe effective tech starts with effective relationships.
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
                Ready to make a difference with AI? Apply now to join SLUG AI and embark on an exciting journey.
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
