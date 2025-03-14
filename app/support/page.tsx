"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DiscordLogoIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

export default function DiscordRedirect() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Create a smooth progress animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    // Redirect after 2 seconds
    const timer = setTimeout(() => {
      router.push("https://discord.gg/nexusmcs")
    }, 2000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="relative w-full max-w-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#18181B] backdrop-blur-md shadow-xl p-8"
        >
          {/* Progress bar */}
          <motion.div 
            className="absolute top-0 left-0 h-1 bg-[#5865F2]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.05, ease: "linear" }}
          />

          <div className="relative space-y-6">
            {/* Discord Logo */}
            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative"
              >
                <div className="p-4 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/20">
                  <DiscordLogoIcon className="w-12 h-12 text-[#5865F2]" />
                </div>
                <motion.div 
                  className="absolute -inset-1 rounded-full bg-[#5865F2]/10 z-[-1]"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="space-y-2 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-2xl font-semibold text-white"
              >
                Joining Discord Server
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="text-sm text-stone-400"
              >
                You&apos;ll be redirected to our community server in a moment
              </motion.p>
            </div>

            {/* Loading Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-sm text-stone-400"
            >
              <Loader2 className="h-4 w-4 animate-spin text-[#5865F2]" />
              <span>Redirecting...</span>
            </motion.div>

            {/* Cancel Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="flex justify-center"
            >
              <button
                onClick={() => router.back()}
                className="px-4 py-2 text-sm text-stone-400 hover:text-stone-300 transition-colors"
              >
                Cancel
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
