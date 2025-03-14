"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Code2, 
  ChevronRight,
  ExternalLink,
  Lightbulb,
  AlertTriangle
} from "lucide-react"
import CodeBlock from "@/components/ui/code-block"

export default function SkriptSection() {
  const [copied, setCopied] = useState({
    events: false,
    effects: false,
    expressions: false,
    example: false
  })

  const copyToClipboard = (text: string, key: keyof typeof copied) => {
    navigator.clipboard.writeText(text)
    setCopied(prev => ({ ...prev, [key]: true }))
    setTimeout(() => setCopied(prev => ({ ...prev, [key]: false })), 2000)
  }

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
          <Code2 className="h-5 w-5 text-primary" />
          Skript Integration
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Levels Remastered includes optional Skript support, allowing you to create custom scripts that interact with the plugin&apos;s features. If Skript is not installed, the plugin will automatically disable Skript integration without affecting other functionality.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Features:</h3>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li>Events for multiplier changes</li>
              <li>Effects to modify multipliers</li>
              <li>Expressions to get multiplier values</li>
              <li>Full support for all plugin features</li>
            </ul>
          </div>

          <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
            <h3 className="font-medium text-white mb-2">Requirements:</h3>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li>Skript 2.9 or higher</li>
              <li>Levels Remastered 1.8 or higher (coming soon)</li>
              <li>Minecraft 1.20 or higher</li>
              <li>Paper or Spigot server</li>
            </ul>
          </div>

          <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/30 flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-100">
              The plugin will automatically register as a Skript addon when all requirements are met. No additional setup is required.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Code2 className="h-5 w-5 text-primary" />
          Events
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Events that you can use to detect when something happens with multipliers.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Available Events:</h3>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li><code>on multiplier gain</code> - When a player gains multiplier</li>
              <li><code>on multiplier lose</code> - When a player loses multiplier</li>
            </ul>
          </div>

          <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/30 flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-100">
              These events provide variables for the player and the multiplier amount.
            </p>
          </div>
          
          <CodeBlock language="skript" title="Event Examples" showLineNumbers={false}>
            {`on multiplier gain:
    send "&aYou gained one multiplier, you are now at &e%multiplier%x&a multipliers!" to player

on multiplier lose:
    send "&cYou lost one multiplier, you are now at &e%multiplier%x&c multipliers!" to player`}
          </CodeBlock>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Code2 className="h-5 w-5 text-primary" />
          Effects
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Effects that you can use to modify multipliers.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Available Effects:</h3>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li><code>increase/raise/boost multiplier [of %player%] [by %-number%]</code> - Increase a player&apos;s multiplier</li>
              <li><code>decrease/reduce/lower multiplier [of %player%] [by %-number%]</code> - Decrease a player&apos;s multiplier</li>
              <li><code>set multiplier [of %player%] to %number%</code> - Set a player&apos;s multiplier</li>
              <li><code>reset multiplier [of %player%]</code> - Reset a player&apos;s multiplier to default</li>
            </ul>
          </div>
          
          <CodeBlock language="skript" title="Effect Examples" showLineNumbers={false}>
            {`# Increase multiplier
increase multiplier of player by 0.5
# or
boost multiplier by 0.5

# Decrease multiplier
decrease multiplier of player by 0.3
# or
lower multiplier by 0.3

# Set multiplier
set multiplier of player to 2.5

# Reset multiplier
reset multiplier of player`}
          </CodeBlock>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Code2 className="h-5 w-5 text-primary" />
          Expressions
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Expressions that you can use to get multiplier values.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Available Expressions:</h3>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li><code>[the] multiplier [of %player%]</code> - Get a player&apos;s current multiplier</li>
              <li><code>[the] [expected/next/new] multiplier [value] [of %player%]</code> - Get the future multiplier value (in events)</li>
            </ul>
          </div>
          
          <CodeBlock language="skript" title="Expression Examples" showLineNumbers={false}>
            {`# Get current multiplier
set {_mult} to multiplier of player

# Check current multiplier
if multiplier of player > 2:
    send "&aYou have a high multiplier!"

# Get future multiplier in an event
on multiplier gain:
    set {_new} to new multiplier of player
    send "&aYour multiplier will be %{_new}%!" to player`}
          </CodeBlock>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Code2 className="h-5 w-5 text-primary" />
          Example Scripts
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Here are some example scripts that demonstrate how to use the Skript integration.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Multiplier Roulette</h3>
            <p className="text-sm mb-3">
              This script creates a command where players can gamble their multipliers.
            </p>
            <CodeBlock language="skript" title="Multiplier Roulette" showLineNumbers={false}>
              {`command /multiplierroulette:
    trigger:
        if chance of 50%:
            increase multiplier of player by 1
            send "&aYou won and gained one multiplier!" to player
        else:
            decrease multiplier of player by 1
            send "&cYou lost and lost one multiplier!" to player`}
            </CodeBlock>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <AlertTriangle className="h-5 w-5 text-primary" />
          Important Notes
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-amber-400 mb-1">Scripting Tips</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                <li>Always check if a player exists before using player variables</li>
                <li>Use try-catch blocks when modifying multipliers to handle errors</li>
                <li>Test your scripts thoroughly before using them on a production server</li>
                <li>Keep your scripts organized and well-commented for easier maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.div variants={fadeIn} className="flex justify-between items-center pt-4">
        <Link 
          href="/docs/levels-remastered?s=configuration"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-white text-sm font-medium transition-colors"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Configuration
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