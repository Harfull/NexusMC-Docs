"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Settings, 
  FileText, 
  Database, 
  Command, 
  Heart, 
  Star, 
  Shield, 
  ChevronRight,
  AlertTriangle,
  ExternalLink,
  Terminal,
  ChevronDown,
  ChevronUp,
  Lightbulb
} from "lucide-react"
import CodeBlock from "@/components/ui/code-block"

export default function ConfigurationSection() {
  const [copied, setCopied] = useState({
    config: false,
    mysql: false,
    messages: false
  })
  const [expandedSections, setExpandedSections] = useState({
    config: false,
    lang: false
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

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

  const expandAnimation = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className="space-y-8">
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5 text-primary" />
          Configuration Overview
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Levels Remastered offers extensive configuration options to customize the plugin to your server&apos;s needs. 
            Below is a breakdown of the main configuration sections.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white flex items-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-pink-400" />
                Heart & Multiplier Settings
              </h3>
              <p className="text-sm text-gray-400">
                Configure hearts per level, max hearts, and multiplier behavior.
              </p>
            </div>
            
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white flex items-center gap-2 mb-2">
                <Star className="h-4 w-4 text-amber-400" />
                Item Settings
              </h3>
              <p className="text-sm text-gray-400">
                Customize special items like multipliers, level stealers, and XP shards.
              </p>
            </div>
            
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white flex items-center gap-2 mb-2">
                <Database className="h-4 w-4 text-blue-400" />
                Database Configuration
              </h3>
              <p className="text-sm text-gray-400">
                Set up your preferred database type: SQLite, MySQL, or MongoDB.
              </p>
            </div>
            
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white flex items-center gap-2 mb-2">
                <Command className="h-4 w-4 text-purple-400" />
                Commands
              </h3>
              <p className="text-sm text-gray-400">
                Enable/disable commands and set permissions for each command.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Heart className="h-5 w-5 text-pink-400" />
          Heart & Multiplier Settings
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            This section controls how hearts and multipliers work in the plugin. Hearts are gained through levels and provide additional health, while multipliers affect XP gain rates.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Key Settings:</h3>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li><strong>heart-per-levels</strong>: How many hearts a player gets per level.</li>
              <li><strong>max-hearts</strong>: The maximum number of hearts a player can have.</li>
              <li><strong>multiplier-enabled</strong>: Whether the multiplier system is enabled.</li>
              <li><strong>min/max-multiplier</strong>: The range of possible multiplier values.</li>
              <li><strong>starting-multiplier</strong>: The multiplier value players start with.</li>
              <li><strong>gain/lose-multiplier-on-kill/death</strong>: Whether players gain/lose multiplier on kills/deaths.</li>
              <li><strong>steal-levels-on-kill</strong>: Whether players steal levels on kill (overrides level stealer item).</li>
            </ul>
          </div>

          <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/30 flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-100">
              Setting <code>steal-levels-on-kill</code> to true will override the level stealer item functionality, making all kills steal levels.
            </p>
          </div>
          
          <CodeBlock language="yaml" title="Heart & Multiplier Settings" showLineNumbers={false}>
{`heart-per-levels: 10      # Number of hearts per level
max-hearts: 20            # Maximum number of hearts a player can have

# Multiplier Configuration
multiplier-enabled: true  # Enable or disable multipliers
min-multiplier: 0.1       # Minimum multiplier (can be less than 1)
max-multiplier: 5.0       # Maximum multiplier
change-per-over-1: 0.5    # Amount to increase/decrease per use when multiplier is over 1
change-per-under-1: 0.1   # Amount to increase/decrease per use when multiplier is 1 or below
starting-multiplier: 1    # Starting multiplier value
gain-multiplier-on-kill: true  # Gain multiplier on killing someone
lose-multiplier-on-death: true  # Lose multiplier on death
steal-levels-on-kill: false # Steal levels from players on kill, this will override level stealer item.`}
          </CodeBlock>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Star className="h-5 w-5 text-amber-400" />
          Item Settings
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Configure special items like multipliers, level stealers, and XP shards. Each item can be customized with its own properties, crafting recipe, and effects.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Crafting Guide:</h3>
            <p className="text-sm mb-2">
              You can enable crafting for each item and define custom recipes. Use the following format:
            </p>
            <CodeBlock language="yaml" title="Crafting Example" showLineNumbers={false}>
{`crafting-enabled: true/false # Enable/disable crafting for the recipe
crafting:
  shape:
    - " I " # Each row of the crafting table
    - " M " # Spaces represent empty slots
    - "   "
  I: MATERIAL_NAME # Define materials for each letter
  X: '{xp-shard}' # Reference other plugin items with {}`}
            </CodeBlock>
          </div>
          
          <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-100">
              When using custom items, make sure the material names are valid and match the exact Minecraft material names.
            </p>
          </div>
          
          <h3 className="text-lg font-medium text-white mb-3">Item Configuration Format</h3>
          <CodeBlock language="yaml" title="Item Configuration Example" showLineNumbers={false}>
            {`example-item:
  enabled: true                    # Whether this item is enabled
  item: diamond_sword             # Minecraft material name
  name: "&a&lExample Item"        # Item display name
  custom_model_data: -1           # Custom model data for resource packs
  unbreakable: true               # Whether the item is unbreakable
  shiny: true                     # Whether the item has the enchantment glint
  enchants:                       # List of enchantments
    - SHARPNESS:5
    - FIRE_ASPECT:2
    - MENDING:1
  lore:                          # List of lore lines
    - "&7This is an example item"
    - "&7with multiple lines"
  crafting-enabled: true          # Whether crafting is enabled
  crafting:                      # Crafting recipe configuration
    shape:                       # 3x3 crafting grid
      - "XXX"
      - "X X"
      - "XXX"
    X: DIAMOND                   # Material for X in the shape
    # Reference other plugin items with {}
    # Y: '{multiplier}'`}
          </CodeBlock>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Database className="h-5 w-5 text-blue-400" />
          Database Configuration
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Configure how player data is stored. The plugin supports SQLite, MySQL, and MongoDB.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Database Types:</h3>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li><strong>SQLite</strong>: Simplest option, stores data in a file. Good for small servers.</li>
              <li><strong>MySQL</strong>: Better for larger servers or networks. Requires a MySQL server.</li>
              <li><strong>MongoDB</strong>: NoSQL option, good for very large servers or complex data.</li>
            </ul>
          </div>
          
          <CodeBlock language="yaml" title="Database Configuration" showLineNumbers={false}>
            {`Database:
  Database-Type: SQLite
  MySQL:
    host: localhost
    user: root
    password: ''
    database: multipliers
    port: 3306
    max-pool: 15
    use-ssl: false
  MongoDB:
    uri: mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
    database: multipliers
    collection: data`}
          </CodeBlock>

          <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/30 flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-100">
              MySQL and SQLite connections utilize HikariCP for significantly improved performance and connection efficiency, ensuring optimal response times even under heavy server loads.
            </p>
          </div>

          <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-100">
              For MySQL/MongoDB, ensure your database credentials are correct, regularly backup your database to prevent data loss, and keep your database credentials secure and never share them.
            </p>
          </div>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Command className="h-5 w-5 text-purple-400" />
          Commands Configuration
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Enable or disable commands and set permissions for each command.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Available Commands:</h3>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li><strong>/multiplier withdraw</strong>: Withdraw your multiplier into an item.</li>
              <li><strong>/multiplier give [player] [amount]</strong>: Give a multiplier item to a player.</li>
              <li><strong>/multiplier add [player]</strong>: Add multiplier to a player.</li>
              <li><strong>/multiplier set [player] [amount]</strong>: Set a player&apos;s multiplier.</li>
              <li><strong>/multiplier get [player]</strong>: Check a player&apos;s multiplier.</li>
            </ul>
          </div>
          
          <CodeBlock language="yaml" title="Commands Configuration" showLineNumbers={false}>
            {`commands:
  withdraw:
    enabled: true
    permission: multiplier.withdraw
  give:
    enabled: true
    permission: multiplier.give
  add:
    enabled: true
    permission: multiplier.add
  set:
    enabled: true
    permission: multiplier.set
  get:
    enabled: true
    permission: multiplier.get`}
          </CodeBlock>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-primary" />
          Color Formatting Guide
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Levels Remastered supports both traditional Minecraft color codes and modern hex colors for complete customization of all messages.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white mb-3">Traditional Color Codes</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><code className="text-gray-900">&amp;0</code> - <span className="text-gray-900">Black</span></div>
                <div><code className="text-blue-900">&amp;1</code> - <span className="text-blue-900">Dark Blue</span></div>
                <div><code className="text-green-700">&amp;2</code> - <span className="text-green-700">Dark Green</span></div>
                <div><code className="text-cyan-700">&amp;3</code> - <span className="text-cyan-700">Dark Aqua</span></div>
                <div><code className="text-red-700">&amp;4</code> - <span className="text-red-700">Dark Red</span></div>
                <div><code className="text-purple-700">&amp;5</code> - <span className="text-purple-700">Dark Purple</span></div>
                <div><code className="text-yellow-600">&amp;6</code> - <span className="text-yellow-600">Gold</span></div>
                <div><code className="text-gray-400">&amp;7</code> - <span className="text-gray-400">Gray</span></div>
                <div><code className="text-gray-600">&amp;8</code> - <span className="text-gray-600">Dark Gray</span></div>
                <div><code className="text-blue-500">&amp;9</code> - <span className="text-blue-500">Blue</span></div>
                <div><code className="text-green-500">&amp;a</code> - <span className="text-green-500">Green</span></div>
                <div><code className="text-cyan-300">&amp;b</code> - <span className="text-cyan-300">Aqua</span></div>
                <div><code className="text-red-500">&amp;c</code> - <span className="text-red-500">Red</span></div>
                <div><code className="text-pink-400">&amp;d</code> - <span className="text-pink-400">Light Purple</span></div>
                <div><code className="text-yellow-400">&amp;e</code> - <span className="text-yellow-400">Yellow</span></div>
                <div><code className="text-white">&amp;f</code> - <span className="text-white">White</span></div>
              </div>
            </div>
            
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h3 className="font-medium text-white mb-3">Formatting Codes</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><code>&amp;l</code> - <span className="font-bold">Bold</span></div>
                <div><code>&amp;o</code> - <span className="italic">Italic</span></div>
                <div><code>&amp;n</code> - <span className="underline">Underline</span></div>
                <div><code>&amp;m</code> - <span className="line-through">Strikethrough</span></div>
                <div><code>&amp;k</code> - Obfuscated (magic)</div>
                <div><code>&amp;r</code> - Reset formatting</div>
              </div>

              <h3 className="font-medium text-white mt-4 mb-2">Hex Color Format</h3>
              <p className="text-sm">
                <code>&amp;#RRGGBB</code> - Custom hex colors (e.g., <code>&amp;#ff5500</code> for orange)
              </p>
            </div>
          </div>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Creating Gradients</h3>
            <p className="text-sm mb-3">
              Use <a 
                href="https://www.birdflop.com/resources/rgb/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                RGBirdflop
                <ExternalLink className="h-3 w-3" />
              </a> to create beautiful gradient text:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-2 text-sm">
              <li>Visit <a 
                href="https://www.birdflop.com/resources/rgb/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                RGBirdflop
                <ExternalLink className="h-3 w-3" />
              </a></li>
              <li>Enter your text</li>
              <li>Select &quot;&#rrggbb&quot; format</li>
              <li>Choose gradient colors</li>
              <li>Copy and paste into lang.yml</li>
            </ol>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Settings className="h-5 w-5 text-primary" />
          Complete Configuration Files
        </h2>
        
        <div className="space-y-6 text-gray-300">
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-white flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                config.yml
              </h3>
              <button
                onClick={() => toggleSection('config')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 hover:bg-accent/20 text-sm font-medium transition-colors"
              >
                {expandedSections.config ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Show More
                  </>
                )}
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                Main configuration file containing all plugin settings. Click "Show More" to view the complete file.
              </p>
              
              <AnimatePresence>
                {expandedSections.config && (
                  <motion.div
                    variants={expandAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <CodeBlock 
                      language="yaml" 
                      title="config.yml" 
                      showLineNumbers
                    >
                      {`# ===============================
#     License Configuration
# ===============================
license-key: YOUR_LICENSE_KEY_HERE # Obtain your license key from https://discord.gg/nexusmcs

# ===============================
#     Heart and Multiplier Settings
# ===============================
heart-per-levels: 10      # Number of hearts per level
max-hearts: 20            # Maximum number of hearts a player can have

# Multiplier Configuration
multiplier-enabled: true  # Enable or disable multipliers
min-multiplier: 0.1       # Minimum multiplier (can be less than 1)
max-multiplier: 5.0       # Maximum multiplier
change-per-over-1: 0.5    # Amount to increase/decrease per use when multiplier is over 1
change-per-under-1: 0.1   # Amount to increase/decrease per use when multiplier is 1 or below
starting-multiplier: 1    # Starting multiplier value
gain-multiplier-on-kill: true  # Gain multiplier on killing someone
lose-multiplier-on-death: true  # Lose multiplier on death
steal-levels-on-kill: false # Steal levels from players on kill, this will override level stealer item.

# ===============================
#        Item Settings
# ===============================
multiplier:
  enabled: true
  item: heart_of_the_sea
  name: "&a&lMultiplier"
  custom_model_data: -1
  shiny: true
  lore:
    - "&7Use this to gain +1 Multiplier!"
  crafting-enabled: true
  crafting:
    shape:
      - "DED"
      - "ENE"
      - "DED"
    D: DIAMOND_BLOCK
    E: EXPERIENCE_BOTTLE
    N: NETHER_STAR

level-stealer:
  enabled: true
  item: diamond_sword
  name: "&a&l&oLevel Stealer"
  unbreakable: true
  custom_model_data: -1
  enchants:
    - SHARPNESS:5
    - FIRE_ASPECT:2
    - LOOTING:3
    - MENDING:1
  ban-on-death: false
  crafting-enabled: true
  crafting:
    shape:
      - "XNX"
      - "XNX"
      - " S "
    N: NETHERITE_INGOT
    S: STICK
    X: '{xp-shard}'

xp-shard:
  enabled: true
  item: amethyst_shard
  name: "&a&l&oXP Shard"
  custom_model_data: -1
  shiny: true
  enchants:
    - SHARPNESS:5
    - FIRE_ASPECT:2
    - LOOTING:3
    - MENDING:1
  crafting-enabled: false
  crafting:
    shape:
      - "EEE"
      - "EEE"
      - "EEE"
    E: EXPERIENCE_BOTTLE

# ===============================
#     Database Configuration
# ===============================
Database:
  Database-Type: SQLite
  MySQL:
    host: localhost
    user: root
    password: ''
    database: multipliers
    port: 3306
    max-pool: 15
    use-ssl: false
  MongoDB:
    uri: mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
    database: multipliers
    collection: data

# ===============================
#           Commands
# ===============================
commands:
  withdraw:
    enabled: true
    permission: multiplier.withdraw
  give:
    enabled: true
    permission: multiplier.give
  add:
    enabled: true
    permission: multiplier.add
  set:
    enabled: true
    permission: multiplier.set`}
                    </CodeBlock>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-white flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                lang.yml
              </h3>
              <button
                onClick={() => toggleSection('lang')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 hover:bg-accent/20 text-sm font-medium transition-colors"
              >
                {expandedSections.lang ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Show More
                  </>
                )}
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                Language configuration file for customizing all plugin messages. Click "Show More" to view the complete file.
              </p>
              
              <AnimatePresence>
                {expandedSections.lang && (
                  <motion.div
                    variants={expandAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <CodeBlock 
                      language="yaml" 
                      title="lang.yml" 
                      showLineNumbers
                    >
                      {`# ===============================
#     General Messages
# ===============================
prefix: "&8[&aLevelsRM&8]"
no-permission: "&cYou don't have permission to use this command!"
player-only: "&cThis command can only be used by players!"

# ===============================
#     Multiplier Messages
# ===============================
multiplier:
  current: "&aYour current multiplier is: &f%multiplier%"
  set: "&aSuccessfully set %player%'s multiplier to &f%multiplier%"
  add: "&aSuccessfully added &f%amount% &amultiplier to %player%"
  give: "&aSuccessfully gave &f%amount% &amultiplier items to %player%"
  withdraw: "&aSuccessfully withdrew &f%amount% &amultiplier"
  invalid-amount: "&cPlease enter a valid amount!"
  invalid-player: "&cPlayer not found!"
  no-multiplier: "&cYou don't have any multiplier items!"
  max-multiplier: "&cYou have reached the maximum multiplier!"
  min-multiplier: "&cYou have reached the minimum multiplier!"

# ===============================
#     Level Messages
# ===============================
level:
  gain: "&aYou gained &f%amount% &alevels!"
  lose: "&cYou lost &f%amount% &clevels!"
  steal: "&aYou stole &f%amount% &alevels from %player%!"
  stolen: "&c%player% stole &f%amount% &clevels from you!"

# ===============================
#     Heart Messages
# ===============================
heart:
  gain: "&aYou gained &f%amount% &ahearts!"
  lose: "&cYou lost &f%amount% &chearts!"
  max: "&cYou have reached the maximum number of hearts!"`}
                    </CodeBlock>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
              <h4 className="font-medium text-amber-400 mb-1">Configuration Tips</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                <li>Always backup your configuration files before making changes</li>
                <li>Check the console for any errors after reloading</li>
                <li>Keep your license key secure and never share it</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      
      <motion.div variants={fadeIn} className="flex justify-between items-center pt-4">
        <Link 
          href="/docs/levels-remastered?s=installation"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-white text-sm font-medium transition-colors"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Installation
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