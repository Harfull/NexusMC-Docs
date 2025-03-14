/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Terminal, 
  ChevronRight,
  Users,
  Shield
} from "lucide-react"

export default function CommandsSection() {
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
          <Terminal className="h-5 w-5 text-primary" />
          Command Overview
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Levels Remastered provides a comprehensive set of commands for both players and administrators.
            All commands start with <code className="text-primary font-mono">/levels</code> or the configured alias.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50 mt-4">
            <h3 className="font-medium text-white mb-2">Command Aliases</h3>
            <p className="text-sm text-gray-400">
              The main command <code className="text-primary font-mono">/levels</code> can also be used with these aliases:
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-accent/30 rounded font-mono text-xs text-primary">/level</span>
              <span className="px-2 py-1 bg-accent/30 rounded font-mono text-xs text-primary">/lvl</span>
              <span className="px-2 py-1 bg-accent/30 rounded font-mono text-xs text-primary">/lvls</span>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Users className="h-5 w-5 text-primary" />
          Player Commands
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            These commands are available to all players with the appropriate permissions.
          </p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-2 px-4 text-left font-medium text-gray-300">Command</th>
                  <th className="py-2 px-4 text-left font-medium text-gray-300">Description</th>
                  <th className="py-2 px-4 text-left font-medium text-gray-300">Permission</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">/levels</td>
                  <td className="py-3 px-4 text-gray-300">View your current level and XP</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-400">levels.use</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">/levels top</td>
                  <td className="py-3 px-4 text-gray-300">View the top players leaderboard</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-400">levels.top</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">/levels stats</td>
                  <td className="py-3 px-4 text-gray-300">View detailed statistics</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-400">levels.stats</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">/levels info &lt;player&gt;</td>
                  <td className="py-3 px-4 text-gray-300">View another player&apos;s level</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-400">levels.info</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">/levels help</td>
                  <td className="py-3 px-4 text-gray-300">Show help menu</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-400">levels.use</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Shield className="h-5 w-5 text-primary" />
          Admin Commands
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            These commands are available to server administrators with the appropriate permissions.
          </p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-2 px-4 text-left font-medium text-gray-300">Command</th>
                  <th className="py-2 px-4 text-left font-medium text-gray-300">Description</th>
                  <th className="py-2 px-4 text-left font-medium text-gray-300">Permission</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">/levels admin</td>
                  <td className="py-3 px-4 text-gray-300">Access admin panel</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-400">levels.admin</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">/levels set &lt;player&gt; &lt;level&gt;</td>
                  <td className="py-3 px-4 text-gray-300">Set a player&apos;s level</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-400">levels.admin.set</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">/levels add &lt;player&gt; &lt;xp&gt;</td>
                  <td className="py-3 px-4 text-gray-300">Add XP to a player</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-400">levels.admin.add</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">/levels reset &lt;player&gt;</td>
                  <td className="py-3 px-4 text-gray-300">Reset a player&apos;s level and XP</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-400">levels.admin.reset</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">/levels reload</td>
                  <td className="py-3 px-4 text-gray-300">Reload plugin configuration</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-400">levels.admin.reload</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">/levels backup</td>
                  <td className="py-3 px-4 text-gray-300">Create a backup of player data</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-400">levels.admin.backup</td>
                </tr>
              </tbody>
            </table>
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
          href="/docs/levels-remastered?s=permissions"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
        >
          Permissions
          <ChevronRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  )
} 