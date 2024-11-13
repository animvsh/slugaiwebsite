'use client'

import { ReactNode } from "react"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'
import { Mail, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import SharedLayout from '@/components/shared-layout'

interface MemberProps {
  firstName: string
  lastName: string
  role: string
  image: string
  email: string
  linkedInUrl: string
  description?: string
}

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

const MovingYellowBlobs = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-yellow-300/40 blur-[30px] md:blur-[60px]"
        animate={{ x: [0, 75, -75, 0], y: [0, -75, 75, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-yellow-300/40 blur-[25px] md:blur-[50px]"
        animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-[125px] h-[125px] md:w-[250px] md:h-[250px] rounded-full bg-yellow-300/30 blur-[20px] md:blur-[40px]"
        animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full bg-yellow-300/20 blur-[15px] md:blur-[30px]"
        animate={{ x: [0, 45, -45, 0], y: [0, -45, 45, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-full bg-yellow-300/25 blur-[10px] md:blur-[20px]"
        animate={{ x: [0, -35, 35, 0], y: [0, 35, -35, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 right-1/5 w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full bg-yellow-300/30 blur-[10px] md:blur-[20px]"
        animate={{ x: [0, 40, -40, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-[60px] h-[60px] md:w-[120px] md:h-[120px] rounded-full bg-yellow-300/25 blur-[12px] md:blur-[25px]"
        animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

const FounderProfile = ({ 
  firstName, 
  lastName, 
  role, 
  image, 
  email, 
  linkedInUrl, 
  description 
}: MemberProps) => (
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full bg-white/10 p-4 md:p-6 rounded-xl shadow-lg backdrop-blur-md">
    <div className="relative w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-full group">
      <Image src={image} alt={`${firstName} ${lastName}`} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        <a href={`mailto:${email}`} className="text-white hover:text-[#FFB800] transition-colors" aria-label={`Email ${firstName}`}>
          <Mail className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a href={linkedInUrl} className="text-white hover:text-[#FFB800] transition-colors" aria-label={`${firstName}'s LinkedIn profile`} target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>
    </div>
    <div className="flex-1 text-white text-center md:text-left">
      <h3 className="text-2xl md:text-3xl font-bold mb-2">{firstName} <span className="font-light">{lastName}</span></h3>
      <p className="text-lg md:text-xl font-medium mb-2 md:mb-4">{role}</p>
      <p className="text-sm md:text-lg leading-relaxed">{description}</p>
    </div>
  </div>
)

const TeamMember = ({ firstName, lastName, role, image, email, linkedInUrl }: Omit<MemberProps, 'description'>) => (
  <motion.div className="group relative text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
    <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 overflow-hidden rounded-full mx-auto">
      <Image src={image} alt={`${firstName} ${lastName}`} fill className="object-cover transition-transform group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        <a href={`mailto:${email}`} className="text-white hover:text-[#FFB800] transition-colors" aria-label={`Email ${firstName}`}>
          <Mail className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a href={linkedInUrl} className="text-white hover:text-[#FFB800] transition-colors" aria-label={`${firstName}'s LinkedIn profile`} target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </div>
    <h3 className="text-lg md:text-xl font-bold text-white mb-1">{firstName} <span className="font-light">{lastName}</span></h3>
    <p className="text-xs md:text-sm text-gray-200 mb-2">{role}</p>
  </motion.div>
)

export default function AboutPage() {
  const founders = [
    {
      firstName: "Animesh",
      lastName: "Alang",
      role: "Founder",
      image: "/animesh_alang.jpg",
      email: "aalang@ucsc.edu",
      linkedInUrl: "https://www.linkedin.com/in/animesh-alang-232713132/",
      description: "UC Santa Cruz undergraduate with extensive experience in AI and machine learning, working with multiple startups and research labs."
    },
    {
      firstName: "Neel",
      lastName: "Billimoria",
      role: "Founder",
      image: "/neel_billimoria.jpg",
      email: "nbillimo@ucsc.edu",
      linkedInUrl: "https://www.linkedin.com/in/neel-billimoria/",
      description: "Expert in AI and data science, leveraging UCSC's research opportunities to advance AI consulting services."
    }
  ]

  const team = [
    { firstName: "Jeffrey", lastName: "Antony", role: "Design Lead", image: "/jeffrey_antony.jpg", email: "jeantony@ucsc.edu", linkedInUrl: "https://www.linkedin.com/in/jeff-antony/" },
    { firstName: "Adithya", lastName: "Pradeep", role: "Outreach Lead", image: "/adithya_pradeep.jpg", email: "adpradee@ucsc.edu", linkedInUrl: "https://www.linkedin.com/in/adithya-pradeep/" },
    { firstName: "Aneel", lastName: "Jon", role: "Outreach Lead", image: "/aneel_jon.jpg", email: "asjon@ucsc.edu", linkedInUrl: "https://www.linkedin.com/in/aneel-singh-jon/" },
    { firstName: "Joshua", lastName: "Antony", role: "Design Lead", image: "/joshua_antony.jpg", email: "antonyjosh02@gmail.com", linkedInUrl: "https://www.linkedin.com/in/joshuajantony2006/" },
    { firstName: "Paras", lastName: "Gandhi", role: "Outreach Lead", image: "/paras_gandhi.jpg", email: "pmgandhi@ucsc.edu", linkedInUrl: "https://www.linkedin.com/in/parasmgandhi/" },
    { firstName: "Shreyan", lastName: "Phadke", role: "Social Media Lead", image: "/shreyan_phadke.jpg", email: "shphadke@ucsc.edu", linkedInUrl: "https://www.linkedin.com/in/shreyanphadke/" },
    { firstName: "Anirudh", lastName: "Krishna", role: "Development Lead", image: "/anirudh_krishna.jpg", email: "akrish38@ucsc.edu", linkedInUrl: "https://www.linkedin.com/in/anikrish/" }
  ]

  return (
    <>
      <Head>
        <title>About SLUG AI</title>
      </Head>
      <SharedLayout>
        <div className="relative">
          <MovingYellowBlobs />
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">
            <section className="flex flex-col lg:flex-row items-center mb-12 sm:mb-16 gap-6 sm:gap-8 bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="w-full lg:w-1/2">
                <Image src="/crowd.png" alt="Team Photo" width={500} height={500} className="rounded-xl object-cover w-full h-auto" />
              </div>
              <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Team</h1>
                <p className="text-base sm:text-lg leading-relaxed">
                  Born in the innovative spirit of UC Santa Cruz, Slug AI represents the next generation of AI consultants. Our passionate team is pushing boundaries in AI consulting, inspired by UCSC's unique blend of scientific rigor and creativity.
                </p>
              </div>
            </section>

            <section className="mb-16 sm:mb-24">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white text-center">Our Founders</h2>
              <div className="grid gap-8 sm:gap-12">
                {founders.map((founder, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <FounderProfile {...founder} />
                  </FadeInWhenVisible>
                ))}
              </div>
            </section>

            <section className="mb-16 sm:mb-24">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white text-center">The Team</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
                {team.map((member, index) => (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <TeamMember {...member} />
                  </FadeInWhenVisible>
                ))}
              </div>
            </section>

            <FadeInWhenVisible>
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-10 shadow-lg"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Join Us</h2>
                <p className="text-base sm:text-lg text-white mb-6">
                  Ready to be part of something extraordinary? Join us as we push the boundaries of AI innovation.
                </p>
                <Button 
                  className="bg-gradient-to-r from-[#FFB800] to-[#FF8A00] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md transform hover:scale-105 transition-transform"
                  onClick={() => window.location.href = '/join'}
                >
                Apply Now
                </Button>
              </motion.section>
            </FadeInWhenVisible>
          </div>
        </div>
      </SharedLayout>
    </>
  )
}