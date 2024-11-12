'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import SharedLayout from '@/components/shared-layout'

// Moving yellow blobs component
const MovingYellowBlobs = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    {/* Larger, more vibrant blobs with animation */}
    <motion.div
      className="absolute top-1/3 left-1/4 w-[800px] h-[800px] rounded-full bg-yellow-400/70 blur-[140px]"
      animate={{
        x: [0, 300, -300, 0],
        y: [0, -300, 300, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-2/3 right-1/4 w-[700px] h-[700px] rounded-full bg-yellow-500/80 blur-[130px]"
      animate={{
        x: [0, -280, 280, 0],
        y: [0, 280, -280, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-1/4 left-1/2 w-[600px] h-[600px] rounded-full bg-yellow-300/80 blur-[120px]"
      animate={{
        x: [0, 250, -250, 0],
        y: [0, -250, 250, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute top-1/2 right-1/3 w-[750px] h-[750px] rounded-full bg-yellow-400/85 blur-[125px]"
      animate={{
        x: [0, -220, 220, 0],
        y: [0, 220, -220, 0],
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
      <MovingYellowBlobs />
      <SharedLayout>
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 py-24 max-w-3xl text-center">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 bg-white/10 backdrop-blur-md rounded-xl p-12 shadow-lg"
            >
              <h1 className="text-4xl font-bold text-white">Join SLUG AI</h1>
              <p className="text-lg text-gray-100">
                Applications are coming soon! In the meantime, stay connected with us on Instagram for the latest updates and our interest form.
              </p>
              <Button 
                className="mt-6 bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-white px-6 py-3 rounded-full shadow-md transform hover:scale-105 transition-transform"
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
