/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
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
  Terminal
} from "lucide-react"
import CodeBlock from "@/components/ui/code-block"

export default function ConfigurationSection() {
  const [copied, setCopied] = useState({
    config: false,
    mysql: false,
    messages: false
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
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5 text-primary" />
          Configuration Overview
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Levels Remastered offers extensive configuration options to customize the plugin to your server&apos;s needs. 
            Below is a breakdown of the main configuration sections.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Settings className="h-5 w-5 text-primary" />
          Complete Configuration File
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Below is the complete <code>config.yml</code> file with all available options and explanations.
            You can copy this and modify it according to your server&apos;s needs.
          </p>
          
          <CodeBlock language="yaml" title="config.yml" showLineNumbers>
{`# ===============================
#     License Configuration
# ===============================
license-key: YOUR_LICENSE_KEY_HERE # Obtain your license key from https://discord.gg/RDE5u85kAX

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

# Crafting Guide:
#
# crafting-enabled: true/false | This will enable/disable crafting for the recipe.
# crafting:
#   shape:
#     - " I "
#     - " M "
#     - "   "
#   I: MATERIAL_NAME | This would be invalid since it's not a proper material.
#   X: '{xp-shard}'
#   L: '{level-stealer}'
#   M: '{multiplier}'
#   You can use the material of the item, or you can set a variable for items in the plugin with {}.

multiplier:
  enabled: true
  item: heart_of_the_sea
  name: "&a&lMultiplier"           # Display name of the item
  custom_model_data: -1           # Custom model data (use -1 for none)
  shiny: true                     # Whether the item should be shiny
  lore:
    - "&7Use this to gain +1 Multiplier!"  # Item lore
  crafting-enabled: true          # This will enable crafting for this item
  crafting:
    shape: # " " (space) for air, or use defined material variables.
      - "DED"
      - "ENE"
      - "DED"
    D: DIAMOND_BLOCK # This is how to design a material variable
    E: EXPERIENCE_BOTTLE
    N: NETHER_STAR

level-stealer:
  enabled: true
  item: diamond_sword
  name: "&a&l&oLevel Stealer" # Display name of the item
  unbreakable: true
  custom_model_data: -1 # Custom model data (use -1 for none)
  # lore:
  #   - "&7You can add lore to it, or keep it with none."
  enchants:
    - SHARPNESS:5
    - FIRE_ASPECT:2
    - LOOTING:3
    - MENDING:1
  ban-on-death: false # This will ban the victim when they die
  crafting-enabled: true # This will enable crafting for this item
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
  name: "&a&l&oXP Shard" # Display name of the item
  custom_model_data: -1 # Custom model data (use -1 for none)
  shiny: true
  # lore:
  #   - "&7You can add lore to it, or keep it with none."
  enchants:
    - SHARPNESS:5
    - FIRE_ASPECT:2
    - LOOTING:3
    - MENDING:1
  crafting-enabled: false # This will enable crafting for this item
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
  Database-Type: SQLite   # Choose between SQLite, MySQL, or MongoDB
  MySQL:                  # If using MySQL
    host: localhost       # MySQL server host
    user: root            # MySQL user
    password: ''          # MySQL password
    database: multipliers # MySQL database name
    port: 3306            # MySQL port
    max-pool: 15          # Max connection pool size
    use-ssl: false        # Whether to use SSL for MySQL connections
  MongoDB:                 # If using MongoDB
    uri: mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
    database: multipliers
    collection: data

# ===============================
#           Commands
# ===============================
commands: # These are all the subcommands for /multiplier
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
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Heart className="h-5 w-5 text-pink-400" />
          Heart & Multiplier Settings
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            This section controls how hearts and multipliers work in the plugin.
          </p>
          
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
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Key Settings:</h3>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li><strong>heart-per-levels</strong>: How many hearts a player gets per level.</li>
              <li><strong>max-hearts</strong>: The maximum number of hearts a player can have.</li>
              <li><strong>multiplier-enabled</strong>: Whether the multiplier system is enabled.</li>
              <li><strong>min/max-multiplier</strong>: The range of possible multiplier values.</li>
              <li><strong>starting-multiplier</strong>: The multiplier value players start with.</li>
              <li><strong>gain/lose-multiplier-on-kill/death</strong>: Whether players gain/lose multiplier on kills/deaths.</li>
            </ul>
          </div>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Star className="h-5 w-5 text-amber-400" />
          Item Settings
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Configure special items like multipliers, level stealers, and XP shards.
          </p>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50 mb-6">
            <h3 className="font-medium text-white mb-2">Crafting Guide:</h3>
            <p className="text-sm mb-2">
              You can enable crafting for each item and define custom recipes.
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
          
          <h3 className="text-lg font-medium text-white mb-3">Multiplier Item</h3>
          <CodeBlock language="yaml" title="Multiplier Item Configuration" showLineNumbers={false}>
{`multiplier:
  enabled: true
  item: heart_of_the_sea
  name: "&a&lMultiplier"           # Display name of the item
  custom_model_data: -1           # Custom model data (use -1 for none)
  shiny: true                     # Whether the item should be shiny
  lore:
    - "&7Use this to gain +1 Multiplier!"  # Item lore
  crafting-enabled: true          # This will enable crafting for this item
  crafting:
    shape: # " " (space) for air, or use defined material variables.
      - "DED"
      - "ENE"
      - "DED"
    D: DIAMOND_BLOCK # This is how to design a material variable
    E: EXPERIENCE_BOTTLE
    N: NETHER_STAR`}
          </CodeBlock>
          
          <h3 className="text-lg font-medium text-white mb-3 mt-6">Level Stealer Item</h3>
          <CodeBlock language="yaml" title="Level Stealer Configuration" showLineNumbers={false}>
{`level-stealer:
  enabled: true
  item: diamond_sword
  name: "&a&l&oLevel Stealer" # Display name of the item
  unbreakable: true
  custom_model_data: -1 # Custom model data (use -1 for none)
  # lore:
  #   - "&7You can add lore to it, or keep it with none."
  enchants:
    - SHARPNESS:5
    - FIRE_ASPECT:2
    - LOOTING:3
    - MENDING:1
  ban-on-death: false # This will ban the victim when they die
  crafting-enabled: true # This will enable crafting for this item
  crafting:
    shape:
      - "XNX"
      - "XNX"
      - " S "
    N: NETHERITE_INGOT
    S: STICK
    X: '{xp-shard}'`}
          </CodeBlock>
          
          <h3 className="text-lg font-medium text-white mb-3 mt-6">XP Shard Item</h3>
          <CodeBlock language="yaml" title="XP Shard Configuration" showLineNumbers={false}>
{`xp-shard:
  enabled: true
  item: amethyst_shard
  name: "&a&l&oXP Shard" # Display name of the item
  custom_model_data: -1 # Custom model data (use -1 for none)
  shiny: true
  # lore:
  #   - "&7You can add lore to it, or keep it with none."
  enchants:
    - SHARPNESS:5
    - FIRE_ASPECT:2
    - LOOTING:3
    - MENDING:1
  crafting-enabled: false # This will enable crafting for this item
  crafting:
    shape:
      - "EEE"
      - "EEE"
      - "EEE"
    E: EXPERIENCE_BOTTLE`}
          </CodeBlock>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Database className="h-5 w-5 text-blue-400" />
          Database Configuration
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Configure how player data is stored. The plugin supports SQLite, MySQL, and MongoDB.
          </p>
          
          <CodeBlock language="yaml" title="Database Configuration" showLineNumbers={false}>
{`Database:
  Database-Type: SQLite   # Choose between SQLite, MySQL, or MongoDB
  MySQL:                  # If using MySQL
    host: localhost       # MySQL server host
    user: root            # MySQL user
    password: ''          # MySQL password
    database: multipliers # MySQL database name
    port: 3306            # MySQL port
    max-pool: 15          # Max connection pool size
    use-ssl: false        # Whether to use SSL for MySQL connections
  MongoDB:                 # If using MongoDB
    uri: mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
    database: multipliers
    collection: data`}
          </CodeBlock>
          
          <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-medium text-white mb-2">Database Types:</h3>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li><strong>SQLite</strong>: Simplest option, stores data in a file. Good for small servers.</li>
              <li><strong>MySQL</strong>: Better for larger servers or networks. Requires a MySQL server.</li>
              <li><strong>MongoDB</strong>: NoSQL option, good for very large servers or complex data.</li>
            </ul>
          </div>
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Command className="h-5 w-5 text-purple-400" />
          Commands Configuration
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Enable or disable commands and set permissions for each command.
          </p>
          
          <CodeBlock language="yaml" title="Commands Configuration" showLineNumbers={false}>
{`commands: # These are all the subcommands for /multiplier
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
        </div>
      </motion.section>
      
      <motion.section variants={fadeIn} className="glass-card rounded-xl p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5 text-green-400" />
          Language Customization
        </h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            Levels Remastered allows you to customize all messages and colors through the <code>lang.yml</code> file.
            You can use both traditional Minecraft color codes and modern hex color codes for complete customization.
          </p>
          
          <h3 className="text-lg font-medium text-white mb-3">Color Formatting Options</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h4 className="font-medium text-white mb-2">Traditional Color Codes</h4>
              <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
                <li><code>&amp;0</code> - <span className="text-gray-900">Black</span></li>
                <li><code>&amp;1</code> - <span className="text-blue-900">Dark Blue</span></li>
                <li><code>&amp;2</code> - <span className="text-green-700">Dark Green</span></li>
                <li><code>&amp;3</code> - <span className="text-cyan-700">Dark Aqua</span></li>
                <li><code>&amp;4</code> - <span className="text-red-700">Dark Red</span></li>
                <li><code>&amp;5</code> - <span className="text-purple-700">Dark Purple</span></li>
                <li><code>&amp;6</code> - <span className="text-yellow-600">Gold</span></li>
                <li><code>&amp;7</code> - <span className="text-gray-400">Gray</span></li>
                <li><code>&amp;8</code> - <span className="text-gray-600">Dark Gray</span></li>
                <li><code>&amp;9</code> - <span className="text-blue-500">Blue</span></li>
                <li><code>&amp;a</code> - <span className="text-green-500">Green</span></li>
                <li><code>&amp;b</code> - <span className="text-cyan-300">Aqua</span></li>
                <li><code>&amp;c</code> - <span className="text-red-500">Red</span></li>
                <li><code>&amp;d</code> - <span style={{ color: "#F261FA" }}>Light Purple</span></li>
                <li><code>&amp;e</code> - <span className="text-yellow-400">Yellow</span></li>
                <li><code>&amp;f</code> - <span className="text-white">White</span></li>
              </ul>
            </div>
            
            <div className="bg-accent/20 p-4 rounded-lg border border-border/50">
              <h4 className="font-medium text-white mb-2">Formatting Codes</h4>
              <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
                <li><code>&amp;l</code> - <span className="font-bold">Bold</span></li>
                <li><code>&amp;o</code> - <span className="italic">Italic</span></li>
                <li><code>&amp;n</code> - <span className="underline">Underline</span></li>
                <li><code>&amp;m</code> - <span className="line-through">Strikethrough</span></li>
                <li><code>&amp;k</code> - Obfuscated (magic)</li>
                <li><code>&amp;r</code> - Reset formatting</li>
              </ul>
              
              <h4 className="font-medium text-white mt-4 mb-2">Hex Color Format</h4>
              <p className="text-sm">
                <code>&amp;#RRGGBB</code> - Custom hex colors (e.g., <code>&amp;#ff5500</code> for orange)
              </p>
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-medium text-white mb-3">Example lang.yml</h3>
            <CodeBlock language="yaml" title="lang.yml" showLineNumbers={false}>
{`# Prefix configuration
prefix: "&a&lLevelsRM &7Â» &f" # Prefix will show up before all messages. Leave this blank if no prefix is needed.

# Action bar message format
action_bar: "&fXP Multiplier: &a{value}x"

# Placeholder definitions:
# {min} = Minimum Multiplier
# {max} = Maximum Multiplier
# {sender} = The sender (only used in commands)
# {target} = The target (only used in commands)
# {ms} = The time it took to reload (only in /levelsrm reload)

# Command messages and usages
USAGE_MULTIPLIER: "Usage: /multiplier set|add|get|give|withdraw <player> [<value>]"
MULTIPLIER_DISABLED: "Multipliers are currently disabled!"
MULTIPLIER_SET_USAGE: "Usage: /multiplier set <player> <value>"
UNKNOWN_PLAYER: "Player not found!"
INVALID_MULTIPLIER_NUMBER: "Value must be between {min} and {max}."
MULTIPLIER_SET_SUCCESS: "Successfully set {player}'s multiplier to {value}."
MULTIPLIER_INCREASE_SUCCESS: "Increased {player}'s multiplier to &ax{value}."
MULTIPLIER_INCREASE_UNSUCCESSFUL: "&a{target}&f is already at the max multiplier!"
MULTIPLIER_INCREASED: "Your multiplier has been increased to x{value}."
MULTIPLIER_MAX: "You are already at the maximum multiplier!"
MULTIPLIER_MIN: "You didn't lose a multiplier as you were at the minimum!"
MULTIPLIER_NO_GAIN: "You didn't gain a multiplier as &a{victim} &fwas at the minimum!"
MULTIPLIER_GET: "{player}'s multiplier is x{value}."
USAGE_ADD_MULTIPLIER: "Usage: /multiplier add <player>"
USAGE_GIVE_MULTIPLIER: "Usage: /multiplier give <player> <amount>"
USAGE_GET_MULTIPLIER: "Usage: /multiplier get <player>"
INVALID_NUMBER_FORMAT: "Invalid number format."
NO_PERMISSION: "You do not have permission to use this command."
NO_WITHDRAW: "You cannot withdraw a multiplier as you are at the minimum!"
MULTIPLIER_WITHDRAW_SUCCESS: "Successfully withdrew a multiplier!"
MULTIPLIER_GIVE_SUCCESS: "Successfully gave &a{target} {amount}x&f multipliers."

# LevelSMP command messages
USAGE_LEVELSRM: "Usage: /levelsrm reload|give"
RELOAD_SUCCESS: "Configuration reloaded in &a{ms}ms."
USAGE_GIVE_ITEM: "Usage: /levelsrm give <player> <itemID> [<amount>"
INVALID_ITEM: "Invalid item."
ITEM_GIVE_SUCCESS: "Successfully gave &a{target} {amount}x&f {item}'s"
# Events
EXPERIENCE_STOLE: "You stole &a{value} &fexperience from &a{target}!"
NEW_MULTIPLIER: "Your multiplier is now &a{value}."
`}
            </CodeBlock>
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
          
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-amber-400 mb-1">Important Note</h4>
              <p className="text-sm text-gray-300">
                After modifying the lang.yml file, make sure to restart your server or use the reload command for changes to take effect.
              </p>
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
          href="/docs/levels-remastered?s=commands"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
        >
          Commands
          <ChevronRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  )
} 