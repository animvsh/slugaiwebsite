'use client'

import { ReactNode } from "react"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'
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

// Updated MovingYellowBlobs Component without scroll-based movement
const MovingYellowBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-yellow-${300 + (index % 2) * 100}/50 blur-2xl`}
          style={{
            width: `${200 + index * 20}px`,
            height: `${200 + index * 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
          }}
          transition={{
            duration: 10 + index * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
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
      <Head>
        <title>Slug AI</title>
      </Head>

      <div className="relative">
        {/* Background Blobs */}
        <MovingYellowBlobs />

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
        </div>
      </div>
    </SharedLayout>
  )
}
