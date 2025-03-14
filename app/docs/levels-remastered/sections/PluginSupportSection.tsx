"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Puzzle, 
  ChevronRight,
  Lightbulb,
  AlertTriangle
} from "lucide-react"
import CodeBlock from "@/components/ui/code-block"

export default function PluginSupportSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <div className="space-y-8">
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Puzzle className="h-5 w-5 text-primary" />
          Plugin Support
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Levels Remastered currently supports integration with PlaceholderAPI, providing various placeholders for use in other plugins and messages.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Available Placeholders:</h3>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li><code>%levelsrm_multiplier%</code> - Returns the player&apos;s current multiplier</li>
              <li><code>%levelsrm_banned%</code> - Returns if the player is death banned</li>
              <li><code>%levelsrm_health%</code> - Returns the player&apos;s health (default: 20)</li>
              <li><code>%levelsrm_hearts%</code> - Returns the player&apos;s hearts (default: 10)</li>
              <li><code>%levelsrm_next_heart%</code> - Returns levels needed for next heart</li>
            </ul>
          </div>

          <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-100">
              Note: Health and hearts are different values. Health is the raw value (20 = full health), while hearts are the visual representation (10 = full hearts).
            </p>
          </div>
        </div>
      </motion.section>
      
      <motion.div variants={fadeIn} className="flex justify-between items-center pt-4">
        <Link 
          href="/docs/levels-remastered?s=skript"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-white text-sm font-medium transition-colors"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Skript Integration
        </Link>
        
        <Link 
          href="/docs/levels-remastered?s=overview"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
        >
          Overview
          <ChevronRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  )
} 