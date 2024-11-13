'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'
import { Button } from "@/components/ui/button"
import SharedLayout from '@/components/shared-layout'

// Moving yellow blobs component
const MovingYellowBlobs = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-1/3 left-1/4 w-[300px] h-[300px] md:w-[800px] md:h-[800px] rounded-full bg-yellow-400/70 blur-[50px] md:blur-[140px]"
      animate={{
        x: [0, 100, -100, 0],
        y: [0, -100, 100, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-2/3 right-1/4 w-[250px] h-[250px] md:w-[700px] md:h-[700px] rounded-full bg-yellow-500/80 blur-[45px] md:blur-[130px]"
      animate={{
        x: [0, -90, 90, 0],
        y: [0, 90, -90, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-1/4 left-1/2 w-[200px] h-[200px] md:w-[600px] md:h-[600px] rounded-full bg-yellow-300/80 blur-[40px] md:blur-[120px]"
      animate={{
        x: [0, 80, -80, 0],
        y: [0, -80, 80, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-1/2 right-1/3 w-[275px] h-[275px] md:w-[750px] md:h-[750px] rounded-full bg-yellow-400/85 blur-[45px] md:blur-[125px]"
      animate={{
        x: [0, -70, 70, 0],
        y: [0, 70, -70, 0],
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>
)

export default function JoinPage() {
  return (
    <>
      <Head>
        <title>Join Slug AI</title>
        <meta name="description" content="Join Slug AI - Applications coming soon!" />
      </Head>
      <SharedLayout>
        <MovingYellowBlobs />
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="container mx-auto py-12 sm:py-24 max-w-3xl text-center">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6 bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-12 shadow-lg"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Join SLUG AI</h1>
              <p className="text-base sm:text-lg text-gray-100">
                Applications are coming soon! In the meantime, stay connected with us on Instagram for the latest updates and our interest form.
              </p>
              <Button 
                className="mt-4 sm:mt-6 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md transform hover:scale-105 transition-transform"
                onClick={() => window.open('https://www.instagram.com/slugai.ucsc/', '_blank')}
              >
                Visit Our Instagram
              </Button>
            </motion.section>
          </div>
        </div>
      </SharedLayout>
    </>
  )
}