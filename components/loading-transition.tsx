"use client"

import { useEffect, useState } from "react"

export function LoadingTransition() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (remove in production and use actual loading state)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        loading ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-serif font-bold text-white">
            N
          </div>
        </div>
        <h1 className="mt-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Nexus Studios
        </h1>
      </div>
    </div>
  )
} 