"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  AlertTriangle, 
  MessageSquare, 
  Server, 
  ChevronRight,
  Key,
  Terminal
} from "lucide-react"
import CodeBlock from "@/components/ui/code-block"

export default function InstallationSection() {
  const [copied, setCopied] = useState(false)

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

  return (
    <div className="space-y-8">
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Download className="h-5 w-5 text-primary" />
          Download & Install
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Follow these steps to get Levels Remastered up and running on your server:
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Step 1: Purchase</h3>
            <p className="text-sm text-gray-400 mb-3">
              Purchase Levels Remastered from our official BuiltByBit page. This is the only legitimate way to obtain the plugin.
            </p>
            <Link 
              href="https://builtbybit.com/resources/levels-remastered.50363/" 
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
            >
              <Download className="h-4 w-4" />
              Purchase on BuiltByBit
              <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          </div>

          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Step 2: Installation</h3>
            <ol className="list-decimal list-inside space-y-2 pl-2 text-sm">
              <li>Download the plugin jar file from BuiltByBit</li>
              <li>Place the jar file in your server&apos;s plugins folder</li>
              <li>Start or restart your server</li>
              <li>The plugin will generate a <code className="bg-gray-800 px-2 py-0.5 rounded text-gray-200">server-info.txt</code> file</li>
            </ol>
          </div>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Key className="h-5 w-5 text-primary" />
          License Setup
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            You have two options to get your license key:
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Manual Setup
              </h3>
              <ol className="list-decimal list-inside space-y-2 pl-2 text-sm">
                <li>Join our <a href="https://discord.gg/nexusmcs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord server</a></li>
                <li>Create a support ticket</li>
                <li>Provide your:
                  <ul className="list-disc list-inside pl-4 mt-1">
                    <li>Proof of purchase</li>
                    <li>BuiltByBit profile link</li>
                    <li>server-info.txt file</li>
                  </ul>
                </li>
                <li>Wait for staff to provide your license key</li>
              </ol>
            </div>

            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary" />
                Quick Setup
              </h3>
              <ol className="list-decimal list-inside space-y-2 pl-2 text-sm">
                <li>Link your Discord to BuiltByBit</li>
                <li>Run <code className="bg-gray-800 px-2 py-0.5 rounded text-gray-200">/sync</code> in commands channel</li>
                <li>Run <code className="bg-gray-800 px-2 py-0.5 rounded text-gray-200">/get-license</code> to get your key</li>
                <li>Verify with <code className="bg-gray-800 px-2 py-0.5 rounded text-gray-200">/licenses</code></li>
              </ol>
            </div>
          </div>

          <div className="bg-accent/20 p-4 rounded-lg border border-border/50 mt-4">
            <h3 className="font-medium text-white mb-2">Configure License Key</h3>
            <p className="text-sm text-gray-400 mb-3">
              Add your license key to the config.yml file:
            </p>
            <CodeBlock language="yaml" title="config.yml" showLineNumbers={false}>
              {`# License Configuration
license-key: "YOUR-LICENSE-KEY-HERE"
# Obtain your license key from https://discord.gg/nexusmcs`}
            </CodeBlock>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Server className="h-5 w-5 text-primary" />
          Final Steps
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li>Save your config.yml file</li>
            <li>Restart your server</li>
            <li>The plugin should now be working!</li>
          </ol>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-amber-400 mb-1">Need Help?</h4>
              <p className="text-sm text-gray-300">
                If you encounter any issues, create a support ticket in our Discord server and our staff will assist you.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.div variants={fadeIn} className="flex justify-between items-center pt-4">
        <Link 
          href="/docs/levels-remastered?s=overview"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-white text-sm font-medium transition-colors"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Overview
        </Link>
        
        <Link 
          href="/docs/levels-remastered?s=configuration"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
        >
          Configuration
          <ChevronRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  )
} 