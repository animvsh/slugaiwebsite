'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

const MovingYellowBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large yellow blob */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-yellow-300/60 blur-[120px]"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Medium yellow blob */}
      <motion.div
        className="absolute top-3/4 right-1/4 w-[600px] h-[600px] rounded-full bg-yellow-300/40 blur-[100px]"
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Small yellow blob */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-yellow-200/40 blur-[80px]"
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -60, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Extra yellow blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-yellow-200/50 blur-[90px]"
        animate={{
          x: [0, -70, 70, 0],
          y: [0, 70, -70, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link 
      href={href} 
      className={`text-sm relative group ${isActive ? 'font-bold' : 'font-medium'} text-white`}
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFB800] group-hover:w-full"
        animate={{ width: isActive ? '100%' : '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative text-white">
      <MovingYellowBlobs />

      {/* Navigation */}
      <nav className="sticky top-0 z-20 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              {/* Logo Image */}
              <Image
                src="/logo.png"
                alt="SLUG AI Logo"
                width={64} // Increase width
                height={64} // Increase height
              />
            </Link>
            <div className="flex items-center space-x-12">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/services">SERVICES</NavLink>
              <NavLink href="/about">ABOUT</NavLink>
              <Link href="/join">
                <motion.button
                  className="px-3 py-1.5 rounded-lg bg-white text-[#1E3A8A] border-2 border-transparent transition-all"
                  whileHover={{
                    background: "linear-gradient(to right, #FFB800, #FF8A00)",
                    color: "#ffffff",
                    borderColor: "#FFB800"
                  }}
                >
                  JOIN
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-700 bg-background/80 backdrop-blur-md relative z-10">
        <div className="container flex flex-col gap-4 py-10 md:h-24 md:flex-row md:items-center md:py-0">
          <div className="flex flex-1 items-center justify-center gap-4 md:justify-start">
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="/">
                Home
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/about">
                About
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/services">
                Services
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/join">
                Join
              </Link>
            </nav>
          </div>
          <div className="flex items-center justify-center gap-4 md:justify-end">
            <Link className="rounded-full bg-gray-700 p-2 hover:bg-gray-600" href="https://www.instagram.com/slugai.ucsc/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 text-white" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link className="rounded-full bg-gray-700 p-2 hover:bg-gray-600" href="https://www.linkedin.com/company/slug-ai/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-white" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
