'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram, Linkedin, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Head from 'next/head'

const MovingYellowBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full bg-yellow-300/60 blur-[60px] md:blur-[120px]"
        animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-yellow-300/40 blur-[50px] md:blur-[100px]"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link 
      href={href} 
      className={`text-lg font-semibold ${isActive ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400 transition-colors`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-background overflow-hidden relative text-white flex flex-col">
      <Head>
        <title>Slug AI</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>

      <MovingYellowBlobs />

      {/* Navigation */}
      <nav className="sticky top-0 z-30 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image src="/logo.png" alt="SLUG AI Logo" width={48} height={48} />
            </Link>
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
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
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay and Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay to close sidebar when clicked outside */}
            <motion.div
              className="fixed inset-0 z-30 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu} // Close menu when clicking outside
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 z-40 w-64 bg-gradient-to-b from-white/20 to-gray-800/40 backdrop-blur-lg shadow-lg rounded-l-2xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col h-full p-6">
                {/* Close Button */}
                <button onClick={toggleMenu} className="self-end mb-4 p-1">
                  <X className="h-6 w-6 text-white hover:text-yellow-400" />
                </button>

                <div className="flex flex-col space-y-8 text-center">
                  <NavLink href="/" onClick={toggleMenu}>HOME</NavLink>
                  <NavLink href="/services" onClick={toggleMenu}>SERVICES</NavLink>
                  <NavLink href="/about" onClick={toggleMenu}>ABOUT</NavLink>
                  <Link href="/join" onClick={toggleMenu}>
                    <motion.button
                      className="w-full px-4 py-2 text-lg rounded-lg bg-yellow-400 text-[#1E3A8A] hover:bg-gradient-to-r from-[#FFB800] to-[#FF8A00] hover:text-white shadow-md transition-all duration-300"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)"
                      }}
                    >
                      JOIN
                    </motion.button>
                  </Link>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mt-auto">
                  <Link className="hover:text-yellow-400 transition-colors" href="https://www.instagram.com/slugai.ucsc/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-6 w-6 text-white hover:text-yellow-400" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link className="hover:text-yellow-400 transition-colors" href="https://www.linkedin.com/company/slug-ai/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-white hover:text-yellow-400" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10 flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-b from-background to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Image src="/logo.png" alt="SLUG AI Logo" width={64} height={64} className="mb-4" />
              <p className="text-sm text-gray-400 text-center md:text-left">
                Empowering the next generation of AI innovators in Santa Cruz.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link className="text-sm hover:text-yellow-400 transition-colors" href="/">Home</Link>
                <Link className="text-sm hover:text-yellow-400 transition-colors" href="/about">About</Link>
                <Link className="text-sm hover:text-yellow-400 transition-colors" href="/services">Services</Link>
                <Link className="text-sm hover:text-yellow-400 transition-colors" href="/join">Join</Link>
              </nav>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link className="hover:text-yellow-400 transition-colors" href="https://www.instagram.com/slugai.ucsc/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link className="hover:text-yellow-400 transition-colors" href="https://www.linkedin.com/company/slug-ai/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SLUG AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
