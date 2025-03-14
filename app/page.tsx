"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import HeroSection from "@/components/sections/hero-section"

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <main className="flex-1">
      <HeroSection />

      {/* Call to Action Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute -bottom-[500px] -left-[500px] w-[1000px] h-[1000px] rounded-full bg-pink-500/10 blur-3xl" />
        </div>

        {/* Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative container mx-auto px-4 sm:px-6"
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Heading */}
            <motion.div 
              variants={fadeInUp}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
              <h2 className="relative text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
                Ready to enhance your
                <br className="hidden sm:block" /> 
                Minecraft server?
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg sm:text-xl text-gray-300/90"
            >
              Our plugins are designed to be lightweight, performant, 
              and easy to use.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              variants={fadeInUp}
              className="mt-10"
            >
              <Link 
                href="/docs/levels-remastered"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
              >
                {/* Button Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Button Content */}
                <span className="relative font-medium text-white">
                  Get Started
                </span>
                <ArrowRight className="relative h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
