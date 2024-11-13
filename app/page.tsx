'use client'

import { ReactNode } from "react"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import SharedLayout from '@/components/shared-layout'

const MovingYellowBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className={`absolute w-[600px] h-[600px] rounded-full ${
              index % 2 === 0 ? 'bg-yellow-300/70' : 'bg-yellow-400/50'
            } blur-[100px]`}
            initial={{
              top: `${(index * 20) % 100}%`,
              left: `${(index * 40) % 100}%`,
            }}
            animate={{
              x: [0, 300, -300, 0],
              y: [0, 300, -300, 0],
            }}
            transition={{
              duration: 15 + index * 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}

interface FadeInWhenVisibleProps {
  children: ReactNode
  delay?: number
}

const FadeInWhenVisible = ({ children, delay = 0 }: FadeInWhenVisibleProps) => {
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

export default function LandingPage() {
  const sections = [
    {
      number: "1",
      title: "AI Training Program",
      description: "Slug builds on experience scaling, deploying, and working with cutting-edge tech while our AI Training Program is equal to real-world career experience."
    },
    {
      number: "2",
      title: "Professional Networking",
      description: "Join Slug AI's vibrant community to connect with industry professionals, exchange ideas and experiences, and build meaningful relationships."
    },
    {
      number: "3",
      title: "Industry Opportunity",
      description: "Attend Slug AI hosted events, speaker sessions, and meetups with industry representatives, keeping you at the forefront of AI trends."
    },
    {
      number: "4",
      title: "AI Projects and Consulting",
      description: "Participate in real-world projects and consult for clients under Slug AI, building your portfolio while contributing to innovative AI solutions."
    }
  ]

  return (
    <SharedLayout>
      {/* Moving Blobs Background */}
      <MovingYellowBlobs />

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Hero Section */}
        <section className="text-center space-y-12 mb-24">
          <motion.h1 
            className="text-[180px] font-black leading-none tracking-tighter text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SLUG
            <span className="bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-transparent bg-clip-text">
              AI
            </span>
          </motion.h1>
          <motion.div 
            className="flex justify-between max-w-[600px] mx-auto text-xl font-semibold tracking-wide text-white drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>CONNECT</span>
            <span>LEARN</span>
            <span>CREATE</span>
          </motion.div>
        </section>

        {/* Say Hello Section */}
        <FadeInWhenVisible>
          <section className="max-w-2xl mx-auto text-center mb-24 space-y-4">
            <h2 className="text-3xl font-bold text-white drop-shadow-md">Say Hello</h2>
            <p className="text-white drop-shadow-md">
              Slug AI is a Santa Cruz AI mentoring organization that helps transfer knowledge from AI through projects, workshops, and networking events. Join us to learn more about Data, Deep/ML/NLP, and the AI industry.
            </p>
          </section>
        </FadeInWhenVisible>

        {/* Who Are We Section */}
        <section className="max-w-3xl mx-auto mb-24 space-y-8">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center text-white drop-shadow-md">Who Are We?</h2>
          </FadeInWhenVisible>
          <div className="space-y-6">
            {sections.map((item, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <div className="flex items-start space-x-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFB800] text-white font-bold flex-shrink-0">
                    {item.number}
                  </span>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-white drop-shadow-md">{item.title}</h3>
                    <p className="text-white drop-shadow-md">{item.description}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <FadeInWhenVisible>
          <section className="max-w-lg mx-auto text-center py-16 px-8 bg-gray-900 bg-opacity-60 rounded-3xl shadow-lg mt-16 backdrop-blur-md border border-gray-700">
            <h2 className="text-4xl font-extrabold mb-6 text-white tracking-tight">
              Join the AI Revolution
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md mx-auto">
              Ready to be part of the AI revolution? Apply now to join SLUG AI and start your journey in the world of artificial intelligence!
            </p>
            <Button
              className="w-full max-w-xs mx-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-semibold text-lg py-3 px-6 rounded-full hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
              onClick={() => window.location.href = '/join'}
            >
              Apply Now
            </Button>
          </section>
        </FadeInWhenVisible>
      </div>
    </SharedLayout>
  )
}
