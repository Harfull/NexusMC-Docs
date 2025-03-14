"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right gradient */}
        <div className="absolute -top-[400px] -right-[400px] w-[800px] h-[800px] rounded-full bg-purple-500/10 blur-3xl animate-pulse-slow" />
        {/* Bottom-left gradient */}
        <div className="absolute -bottom-[400px] -left-[400px] w-[800px] h-[800px] rounded-full bg-pink-500/10 blur-3xl animate-pulse-slow delay-75" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Logo Mark */}
          <motion.div 
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
            }}
            className="relative w-24 h-24 mx-auto"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl animate-pulse-slow" />
            <div className="relative h-full rounded-xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white/80" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Nexus Studios
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
            }}
            className="text-xl md:text-2xl text-gray-300/90 max-w-2xl mx-auto"
          >
            Premium Minecraft plugins to enhance your server experience with advanced features and optimized performance
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }
            }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link 
              href="/docs/levels-remastered"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-pink-500/50 transition-opacity group-hover:opacity-100 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative font-medium text-white">Documentation</span>
              <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link 
              href="https://builtbybit.com/members/him.447849/"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:opacity-100 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative font-medium text-white flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Plugins
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
