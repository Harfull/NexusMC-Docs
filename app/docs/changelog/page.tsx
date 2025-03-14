"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Package, 
  Clock, 
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Bug
} from "lucide-react"
import { cn } from "@/lib/utils"

const plugins = [
  { id: "levelsrm", name: "Levels Remastered", active: true },
  { id: "coming-soon", name: "Coming Soon", active: false },
]

const changelog = [
  {
    version: "1.8 (Upcoming)",
    date: "Coming Soon",
    changes: [
      {
        type: "feature",
        description: "Death ban system"
      },
      {
        type: "feature",
        description: "Revival system"
      },
      {
        type: "feature",
        description: "Additional custom items"
      },
      {
        type: "feature",
        description: "Skript support"
      },
      {
        type: "feature",
        description: "Developer API"
      },
      {
        type: "improvement",
        description: "Expanded config options"
      },
      {
        type: "improvement",
        description: "Updated language system with new options"
      }
    ]
  },
  {
    version: "1.7",
    date: "2024-03-13",
    changes: [
      {
        type: "feature",
        description: "New license system"
      },
      {
        type: "feature",
        description: "server-info.txt generates in plugin folder on startup"
      }
    ]
  },
  {
    version: "1.6-Patch",
    date: "2024-02-04",
    changes: [
      {
        type: "bugfix",
        description: "Fixed an issue where multipliers are still gained if a victim is at 0.1"
      },
      {
        type: "improvement",
        description: "Added new language options for multiplier messages"
      }
    ]
  },
  {
    version: "1.6",
    date: "2024-01-29",
    changes: [
      {
        type: "feature",
        description: "2 New items: XP Shard and Level Stealer"
      },
      {
        type: "feature",
        description: "2 New sub-commands for /levelsrm (/levelsrm give & info)"
      },
      {
        type: "feature",
        description: "New config and language options"
      },
      {
        type: "improvement",
        description: "Minor optimizations"
      },
      {
        type: "improvement",
        description: "Changed command name for the main command (/LevelSMP --> /LevelsRM)"
      },
      {
        type: "improvement",
        description: "Changed some default language options"
      },
      {
        type: "improvement",
        description: "The crafting system in config.yml has been completely overhauled"
      },
      {
        type: "bugfix",
        description: "If you collect experience at 0.1, you will no longer receive 0"
      },
      {
        type: "bugfix",
        description: "If you die, you will respawn correctly and items will not disappear"
      },
      {
        type: "bugfix",
        description: "Fixed prefix changes in lang.yml not taking effect"
      }
    ]
  },
  {
    version: "1.5",
    date: "2024-09-24",
    changes: [
      {
        type: "feature",
        description: "New placeholders (%levelsrm_multiplier%)"
      },
      {
        type: "improvement",
        description: "Improved licensing system"
      },
      {
        type: "improvement",
        description: "Minor optimizations"
      },
      {
        type: "bugfix",
        description: "If you withdraw on 1.0, it will no longer go to 0.1"
      },
      {
        type: "bugfix",
        description: "The plugin will no longer throw an error on versions below 1.21"
      },
      {
        type: "bugfix",
        description: "Now license system actually verifies IP's"
      }
    ]
  },
  {
    version: "1.1",
    date: "2024-08-24",
    changes: [
      {
        type: "bugfix",
        description: "Fixed license system"
      },
      {
        type: "bugfix",
        description: "Fixed config not reloading from /levelsmp reload"
      },
      {
        type: "bugfix",
        description: "Fixed lang not reloading from /levelsmp reload"
      },
      {
        type: "improvement",
        description: "More optimization"
      },
      {
        type: "bugfix",
        description: "Fixed locking issue with SQLite"
      }
    ]
  }
]

export default function ChangelogPage() {
  const [selectedPlugin, setSelectedPlugin] = useState("levelsrm")

  const getChangeIcon = (type: string) => {
    switch (type) {
      case "feature":
        return <Sparkles className="h-4 w-4 text-blue-400" />
      case "improvement":
        return <CheckCircle2 className="h-4 w-4 text-green-400" />
      case "bugfix":
        return <Bug className="h-4 w-4 text-red-400" />
      default:
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 pt-4"
      >
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Changelog
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Stay updated with the latest changes and improvements.
        </p>
      </motion.div>

      {/* Plugin Selection */}
      <div className="mb-8">
        <div className="flex gap-2">
          {plugins.map((plugin) => (
            <button
              key={plugin.id}
              onClick={() => plugin.active && setSelectedPlugin(plugin.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedPlugin === plugin.id
                  ? "bg-primary/20 text-primary border-b-2 border-primary"
                  : plugin.active
                  ? "bg-accent/10 hover:bg-accent/20 text-gray-300 hover:text-white"
                  : "bg-accent/5 text-gray-500 cursor-not-allowed"
              }`}
            >
              <Package className="h-4 w-4" />
              {plugin.name}
            </button>
          ))}
        </div>
      </div>

      {/* Changelog Content */}
      <div className="space-y-8">
        {changelog.map((entry) => (
          <motion.div
            key={entry.version}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "rounded-xl p-6",
              entry.date === "Coming Soon" 
                ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 shadow-lg shadow-purple-500/5" 
                : "glass-card"
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className={cn(
                  "text-2xl font-semibold",
                  entry.date === "Coming Soon" && "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                )}>
                  v{entry.version}
                </h2>
                <span className={cn(
                  "text-sm",
                  entry.date === "Coming Soon" ? "text-purple-400" : "text-gray-400"
                )}>
                  ({entry.date})
                </span>
              </div>
              <div className={cn(
                "flex items-center gap-2 text-sm",
                entry.date === "Coming Soon" ? "text-purple-400" : "text-gray-400"
              )}>
                <Clock className="h-4 w-4" />
                {entry.date === "Coming Soon" ? "Coming Soon" : "Released"}
              </div>
            </div>
            
            <div className="space-y-3">
              {entry.changes.map((change, index) => (
                <div key={index} className="flex items-start gap-3">
                  {getChangeIcon(change.type)}
                  <span className="text-gray-300">{change.description}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 