import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Zap, 
  ChevronRight,
  Award,
  BarChart,
  Layers,
  Sparkles,
  MessageSquare,
  Globe
} from "lucide-react"

export default function FeaturesSection() {
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
          <Zap className="h-5 w-5 text-primary" />
          Key Features
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Levels Remastered is packed with features to enhance your server&apos;s progression system.
            Here&apos;s an overview of the main features:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" />
                Advanced Leveling System
              </h3>
              <p className="text-sm text-gray-400">
                Customizable leveling formula with unlimited levels and XP sources.
              </p>
            </div>
            
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Custom Rewards
              </h3>
              <p className="text-sm text-gray-400">
                Configure rewards for each level, including commands, items, and permissions.
              </p>
            </div>
            
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                <BarChart className="h-4 w-4 text-primary" />
                Detailed Statistics
              </h3>
              <p className="text-sm text-gray-400">
                Track player progress with detailed statistics and leaderboards.
              </p>
            </div>
            
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                Multi-Language Support
              </h3>
              <p className="text-sm text-gray-400">
                Support for multiple languages with easy translation options.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-primary" />
          Reward System
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            The reward system allows you to configure custom rewards for each level. Players will receive these rewards automatically when they level up.
          </p>
          
          <h3 className="text-lg font-medium mt-6">Reward Types</h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><span className="font-medium text-white">Commands</span> - Execute commands when a player levels up</li>
            <li><span className="font-medium text-white">Items</span> - Give items to players when they level up</li>
            <li><span className="font-medium text-white">Permissions</span> - Grant permissions at specific levels</li>
            <li><span className="font-medium text-white">Money</span> - Give in-game currency (requires Vault)</li>
            <li><span className="font-medium text-white">Messages</span> - Send custom messages or broadcasts</li>
          </ul>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50 mt-4">
            <h3 className="font-medium text-white mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Example Reward Configuration
            </h3>
            <pre className="text-sm text-gray-300 font-mono bg-accent/30 p-3 rounded-lg overflow-x-auto mt-2">
              <span className="text-blue-400">rewards</span>:{"\n"}
              {"  "}<span className="text-blue-400">5</span>:{"\n"}
              {"    "}<span className="text-blue-400">commands</span>:{"\n"}
              {"      "}- <span className="text-green-400">&quot;give %player% diamond 5&quot;</span>{"\n"}
              {"      "}- <span className="text-green-400">&quot;broadcast %player% reached level 5!&quot;</span>{"\n"}
              {"    "}<span className="text-blue-400">messages</span>:{"\n"}
              {"      "}- <span className="text-green-400">&quot;&aCongratulations on reaching level 5!&quot;</span>{"\n"}
              {"  "}<span className="text-blue-400">10</span>:{"\n"}
              {"    "}<span className="text-blue-400">commands</span>:{"\n"}
              {"      "}- <span className="text-green-400">&quot;give %player% emerald 10&quot;</span>{"\n"}
              {"    "}<span className="text-blue-400">permissions</span>:{"\n"}
              {"      "}- <span className="text-green-400">&quot;example.vip.perm&quot;</span>
            </pre>
          </div>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <MessageSquare className="h-5 w-5 text-primary" />
          Placeholders
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Levels Remastered provides a variety of placeholders that can be used in messages, commands, and other plugins.
          </p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-2 px-4 text-left font-medium text-gray-300">Placeholder</th>
                  <th className="py-2 px-4 text-left font-medium text-gray-300">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">%levels_level%</td>
                  <td className="py-3 px-4 text-gray-300">Player&apos;s current level</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">%levels_xp%</td>
                  <td className="py-3 px-4 text-gray-300">Player&apos;s current XP</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">%levels_xp_needed%</td>
                  <td className="py-3 px-4 text-gray-300">XP needed for next level</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">%levels_xp_progress%</td>
                  <td className="py-3 px-4 text-gray-300">Progress percentage to next level</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">%levels_rank%</td>
                  <td className="py-3 px-4 text-gray-300">Player&apos;s rank on the leaderboard</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">%levels_top_1_name%</td>
                  <td className="py-3 px-4 text-gray-300">Name of the #1 player</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-sm text-primary">%levels_top_1_level%</td>
                  <td className="py-3 px-4 text-gray-300">Level of the #1 player</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>
      
      <motion.div variants={fadeIn} className="flex justify-between items-center pt-4">
        <Link 
          href="/docs/levels-remastered?s=permissions"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-white text-sm font-medium transition-colors"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Permissions
        </Link>
        
        <Link 
          href="/docs/levels-remastered?s=api"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
        >
          API
          <ChevronRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  )
} 