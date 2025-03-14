/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  AlertTriangle, 
  MessageSquare, 
  Server, 
  ChevronRight,
  Settings,
  Terminal,
  Users,
  Shield,
  Zap,
  BookOpen,
  Code,
  Database,
  Command
} from "lucide-react"

// Import the installation page component
import InstallationSection from "./sections/InstallationSection"
import ConfigurationSection from "./sections/ConfigurationSection"
import CodeBlock from "@/components/ui/code-block"

export default function LevelsRemasteredPage() {
  const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState("overview")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const section = searchParams.get("s")
    if (section) {
      setActiveSection(section)
    } else {
      setActiveSection("overview")
    }
  }, [searchParams])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  // Navigation items
  const navItems = [
    { id: "overview", label: "Overview", icon: <BookOpen className="h-4 w-4" /> },
    { id: "installation", label: "Installation", icon: <Download className="h-4 w-4" /> },
    { id: "configuration", label: "Configuration", icon: <Settings className="h-4 w-4" /> },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Levels Remastered
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          The best Levels SMP recreation on the market.
        </p>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-accent/50 scrollbar-track-transparent pb-2">
        <div className="flex space-x-2 min-w-max">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/docs/levels-remastered?s=${item.id}`}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-primary/20 text-primary border-b-2 border-primary"
                  : "bg-accent/10 hover:bg-accent/20 text-gray-300 hover:text-white"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activeSection === "overview" && (
            <div className="space-y-8">
              <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                  About Levels Remastered
                </h2>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Levels Remastered is a premium Minecraft plugin that adds a comprehensive leveling system to your server. 
                    It allows players to gain experience points (XP) through various activities and level up, unlocking rewards and perks along the way.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
                      <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        Performance Optimized
                      </h3>
                      <p className="text-sm text-gray-400">
                        Built with performance in mind, ensuring minimal impact on your server&apos;s TPS.
                      </p>
                    </div>
                    
                    <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
                      <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                        <Database className="h-4 w-4 text-primary" />
                        Multiple Storage Options
                      </h3>
                      <p className="text-sm text-gray-400">
                        Store data in MySQL, SQLite, or YAML files based on your server&apos;s needs.
                      </p>
                    </div>
                    
                    <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
                      <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                        <Settings className="h-4 w-4 text-primary" />
                        Highly Customizable
                      </h3>
                      <p className="text-sm text-gray-400">
                        Configure every aspect of the plugin to fit your server&apos;s theme and gameplay.
                      </p>
                    </div>
                    
                    <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
                      <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        Developer API
                      </h3>
                      <p className="text-sm text-gray-400">
                        Integrate with other plugins using our comprehensive API.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
              
              <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <Terminal className="h-5 w-5 text-primary" />
                  Available Commands
                </h2>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Here&apos;s a complete list of commands available in Levels Remastered:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
                      <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                        <Command className="h-4 w-4 text-primary" />
                        Multiplier Commands
                      </h3>
                      <ul className="space-y-2.5 text-sm">
                        <li className="flex flex-col gap-0.5">
                          <code className="text-primary">/multiplier set &lt;player&gt; &lt;value&gt;</code>
                          <span className="text-gray-400 text-xs">Set a player&apos;s multiplier value</span>
                        </li>
                        <li className="flex flex-col gap-0.5">
                          <code className="text-primary">/multiplier add &lt;player&gt;</code>
                          <span className="text-gray-400 text-xs">Add multiplier to a player</span>
                        </li>
                        <li className="flex flex-col gap-0.5">
                          <code className="text-primary">/multiplier get &lt;player&gt;</code>
                          <span className="text-gray-400 text-xs">Check a player&apos;s current multiplier</span>
                        </li>
                        <li className="flex flex-col gap-0.5">
                          <code className="text-primary">/multiplier withdraw</code>
                          <span className="text-gray-400 text-xs">Convert your multiplier to an item</span>
                        </li>
                        <li className="flex flex-col gap-0.5">
                          <code className="text-primary">/multiplier give &lt;player&gt; &lt;amount&gt;</code>
                          <span className="text-gray-400 text-xs">Give multiplier items to a player</span>
                        </li>
                        <li className="flex flex-col gap-0.5">
                          <code className="text-primary">/multiplier reload</code>
                          <span className="text-gray-400 text-xs">Reload the multiplier configuration</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
                      <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-primary" />
                        LevelsRM Commands
                      </h3>
                      <ul className="space-y-2.5 text-sm">
                        <li className="flex flex-col gap-0.5">
                          <code className="text-primary">/levelsrm reload</code>
                          <span className="text-gray-400 text-xs">Reload all plugin configurations</span>
                        </li>
                        <li className="flex flex-col gap-0.5">
                          <code className="text-primary">/levelsrm info</code>
                          <span className="text-gray-400 text-xs">Display plugin information</span>
                        </li>
                        <li className="flex flex-col gap-0.5">
                          <code className="text-primary">/levelsrm give &lt;player&gt; &lt;item&gt; [amount]</code>
                          <span className="text-gray-400 text-xs">Give plugin items to a player</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-6 flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-400 mb-1">Permission Note</h4>
                      <p className="text-sm text-gray-300">
                        All commands require appropriate permissions to use. Check the configuration section for details on required permissions for each command.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Link 
                      href="/docs/levels-remastered?s=configuration"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
                    >
                      <Settings className="h-4 w-4" />
                      Configuration Guide
                    </Link>
                  </div>
                </div>
              </motion.section>
              
              <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Asking for Support
                </h2>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    If you need help with the plugin or need to obtain a license key, our support team is ready to assist you.
                  </p>
                  
                  <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
                    <h3 className="font-medium text-white mb-2">Getting a License Key:</h3>
                    <ol className="list-decimal list-inside space-y-2 pl-2">
                      <li>Join our <a href="https://discord.gg/nexusmcs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord server</a></li>
                      <li>Create a support ticket in the appropriate channel</li>
                      <li>Send the staff your <code>server-info.txt</code> file that gets generated when you first run the plugin</li>
                      <li>A staff member will supply you with a license key that will work for your server</li>
                    </ol>
                    <p className="mt-3 text-sm text-gray-400">
                      If you want to use the plugin on a new server, create a ticket and a staff member will help you transfer your license.
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-medium text-white mb-3">Example server-info.txt:</h3>
                    <CodeBlock language="text" title="server-info.txt" showLineNumbers={false}>
                      {`License-Key: XXXX-XXXX-XXXX-XXXX-XXXX
IP: 127.0.0.1
HWID: e4a3d6b9328c4df9bbf8c8d8a7d2a8f7
Server Version: 1.20.1-R0.1-SNAPSHOT (MC: 1.20.1)
Java Version: 17.0.8
OS: Linux`}
                    </CodeBlock>
                  </div>
                  
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4 flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-400 mb-1">Important Note</h4>
                      <p className="text-sm text-gray-300">
                        Never share your actual license key publicly. The key above is just an example with placeholder values. Your license key is tied to your server and should be kept private.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Link 
                      href="https://discord.gg/nexusmcs"
                      target="_blank"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Join Discord for Support
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.section>
              
              <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <Download className="h-5 w-5 text-primary" />
                  Quick Start
                </h2>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Get started with Levels Remastered in just a few steps:
                  </p>
                  
                  <ol className="list-decimal list-inside space-y-3 pl-4">
                    <li>Purchase the plugin from BuiltByBit</li>
                    <li>Download and install the plugin on your server</li>
                    <li>Join our Discord to get your license key</li>
                    <li>Configure the plugin to your liking</li>
                    <li>Restart your server and enjoy!</li>
                  </ol>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Link 
                      href="/docs/levels-remastered?s=installation"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      Installation Guide
                    </Link>
                    
                    <Link 
                      href="/docs/levels-remastered?s=configuration"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-white text-sm font-medium transition-colors"
                    >
                      <Settings className="h-4 w-4" />
                      Configuration
                    </Link>
                    
                    <Link 
                      href="/docs/levels-remastered?s=commands"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-white text-sm font-medium transition-colors"
                    >
                      <Terminal className="h-4 w-4" />
                      Commands
                    </Link>
                  </div>
                </div>
              </motion.section>
              
              <motion.div variants={fadeIn} className="flex justify-between items-center pt-4">
                <div></div>
                
                <Link 
                  href="/docs/levels-remastered?s=installation"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
                >
                  Installation
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          )}

          {activeSection === "installation" && <InstallationSection />}
          {activeSection === "configuration" && <ConfigurationSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

