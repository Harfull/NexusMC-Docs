/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Twitter, MessageSquare, ChevronRight, Mail, Globe } from "lucide-react"
import { DiscordLogoIcon } from "@radix-ui/react-icons"

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null)
  
  const currentYear = new Date().getFullYear()
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  return (
    <footer className="bg-black/50 border-t border-purple-900/30 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4 pb-1 border-b border-purple-900/30">Company</h3>
            <div className="space-y-3">
              <motion.div variants={fadeInUp}>
                <Link href="/" className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">N</div>
                  </div>
                  <span className="font-bold text-white text-xl">Nexus</span>
                </Link>
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-gray-400 text-sm mt-4">
                Premium Minecraft plugins to enhance your server experience with advanced features and optimized performance.
              </motion.p>
            </div>
          </motion.div>
          
          {/* Products column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4 pb-1 border-b border-purple-900/30">Products</h3>
            <ul className="space-y-3">
              <motion.li variants={fadeInUp}>
                <Link 
                  href="https://builtbybit.com/resources/levels-remastered.50363/" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Levels Remastered</span>
                </Link>
              </motion.li>
              <motion.li variants={fadeInUp}>
                <span className="flex items-center text-gray-600 cursor-not-allowed">
                  <span className="mr-2 opacity-0">&gt;</span>
                  <span>Coming Soon</span>
                </span>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Documentation & Support column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4 pb-1 border-b border-purple-900/30">Documentation</h3>
            <ul className="space-y-3">
              <motion.li variants={fadeInUp}>
                <Link 
                  href="/docs/levels-remastered" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Levels Remastered</span>
                </Link>
              </motion.li>
              <motion.li variants={fadeInUp}>
                <Link 
                  href="/support" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Support</span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Legal column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4 pb-1 border-b border-purple-900/30">Legal</h3>
            <ul className="space-y-3">
              <motion.li variants={fadeInUp}>
                <Link 
                  href="/terms" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Terms of Service</span>
                </Link>
              </motion.li>
              <motion.li variants={fadeInUp}>
                <Link 
                  href="/privacy" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Privacy Policy</span>
                </Link>
              </motion.li>
              <motion.li variants={fadeInUp}>
                <Link 
                  href="/eula" 
                  className="group flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>EULA</span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-purple-900/30 text-center text-gray-500 text-sm">
          <p>© {currentYear} Nexus Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

