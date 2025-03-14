"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Simulate loading time or check if assets are loaded
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-24 h-24 mb-6"
            >
              <Image
                src="/nexus-assets/nexus-logo.png"
                alt="Nexus Studios Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 text-gray-400 text-sm"
            >
              Loading Nexus Studios...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 