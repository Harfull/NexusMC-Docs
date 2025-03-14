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
  ChevronRight 
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
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Download className="h-5 w-5 text-primary" />
          Download Levels Remastered
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            You will first need to purchase the plugin if you haven&apos;t already. You can buy it through BuiltByBit.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50 flex flex-col sm:flex-row items-start gap-3">
            <div className="bg-amber-500/20 p-1.5 rounded-full mt-0.5 shrink-0">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </div>
            <div>
              <p className="font-medium text-white">Only purchase from official sources</p>
              <p className="text-sm text-gray-400 mt-1">
                This is the only legit way to purchase the plugin. Do NOT purchase from any other sources.
              </p>
              <Link 
                href="https://builtbybit.com/resources/levels-remastered.50363/" 
                target="_blank"
                className="inline-flex items-center gap-1.5 mt-3 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
              >
                <Download className="h-4 w-4" />
                Purchase on BuiltByBit
                <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="mt-4">
            <ol className="list-decimal list-inside space-y-3 pl-4">
              <li>After you have purchased the plugin, click the Download button to download the plugin.</li>
              <li>After you have the plugin jar, add it to your server and restart it.</li>
              <li>You will get an error message saying &quot;Invalid License&quot;, refer to the next step.</li>
            </ol>
          </div>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <MessageSquare className="h-5 w-5 text-primary" />
          Join our Discord to get your license key
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            After you have joined the discord, make a ticket and follow the instructions provided.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Required information:</h3>
            <ul className="list-disc list-inside space-y-1 pl-2 text-gray-300">
              <li>Proof of purchase</li>
              <li>Your BuiltByBit profile link</li>
              <li>Your server-info.txt file</li>
            </ul>
            
            <Link 
              href="https://discord.gg/nexusmcs" 
              target="_blank"
              className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              Join Discord Server
              <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          </div>
          
          <div className="mt-4">
            <ol className="list-decimal list-inside space-y-3 pl-4">
              <li>After that, a staff should supply you with a license key shortly.</li>
              <li>You will get a DM with your license key, copy that and load it into your config.yml, and save it.</li>
            </ol>
          </div>
          
          <CodeBlock language="yaml" title="config.yml" showLineNumbers={false}>
            {`# License Configuration
  license-key: "YOUR-LICENSE-KEY-HERE"
  # Obtain your license key from https://discord.gg/RDE5u85kAX`}
          </CodeBlock>
          
          <p className="mt-4">
            Then the plugin should work after you restart your server. If it doesn&apos;t work, create a ticket and ask a staff for support or ping a staff member in the help channel.
          </p>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
  <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
    <MessageSquare className="h-5 w-5 text-primary" />
    Quick License Setup
  </h2>
  
  <div className="space-y-4 text-gray-300">
    <p>
      Get your license key instantly by syncing your Discord roles through these simple steps:
    </p>
    
    <div className="mt-4">
      <ol className="list-decimal list-inside space-y-3 pl-4">
        <li>Ensure your Discord account is linked to your BuiltByBit account, then run <code className="bg-gray-800 px-2 py-0.5 rounded text-gray-200">/sync</code> in the commands channel.</li>
        <li>Once you receive the Levels Remastered role, run <code className="bg-gray-800 px-2 py-0.5 rounded text-gray-200">/get-license</code> in the commands channel.</li>
        <li>If you encounter any errors, verify your license key by running <code className="bg-gray-800 px-2 py-0.5 rounded text-gray-200">/licenses</code>.</li>
      </ol>
    </div>

    <p className="mt-4">
      After obtaining your license key, add it to your server configuration and create a support ticket to register your server details. Restart your server and it should work.
    </p>
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