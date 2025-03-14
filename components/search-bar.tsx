/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  Command, 
  FileText, 
  Settings, 
  Book, 
  Download,
  MessageSquare,
  Home,
  ExternalLink
} from "lucide-react"

type SearchResult = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  url: string
  external?: boolean
}

type SearchBarProps = {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  
  // Mock search results based on query
  const allResults: SearchResult[] = [
    {
      id: "home",
      title: "Home",
      description: "Return to homepage",
      icon: <Home className="h-4 w-4 text-primary" />,
      url: "/"
    },
    {
      id: "docs-home",
      title: "Documentation",
      description: "Browse all documentation",
      icon: <Book className="h-4 w-4 text-primary" />,
      url: "/docs"
    },
    {
      id: "levels-overview",
      title: "Levels Remastered",
      description: "Overview and features",
      icon: <FileText className="h-4 w-4 text-primary" />,
      url: "/docs/levels-remastered?s=overview"
    },
    {
      id: "levels-installation",
      title: "Installation Guide",
      description: "How to install Levels Remastered",
      icon: <Download className="h-4 w-4 text-primary" />,
      url: "/docs/levels-remastered?s=installation"
    },
    {
      id: "levels-configuration",
      title: "Configuration",
      description: "Configure Levels Remastered",
      icon: <Settings className="h-4 w-4 text-primary" />,
      url: "/docs/levels-remastered?s=configuration"
    },
    {
      id: "discord",
      title: "Discord Server",
      description: "Join our community",
      icon: <MessageSquare className="h-4 w-4 text-primary" />,
      url: "https://discord.gg/yourserver",
      external: true
    }
  ];
  
  const results = !query 
    ? [] 
    : allResults.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) || 
        result.description.toLowerCase().includes(query.toLowerCase())
      );
  
  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery("")
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [isOpen])
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : prev
          )
          break
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : prev
          )
          break
        case "Enter":
          e.preventDefault()
          if (results.length > 0) {
            handleResultClick(results[selectedIndex])
          }
          break
        case "Escape":
          e.preventDefault()
          onClose()
          break
      }
    }
    
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, results, selectedIndex, onClose])
  
  const handleResultClick = (result: SearchResult) => {
    if (result.external) {
      window.open(result.url, "_blank")
    } else {
      router.push(result.url)
    }
    onClose()
  }

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            />
            
            <motion.div
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-50 p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="rounded-xl border border-border/40 bg-background/95 backdrop-blur-md shadow-xl overflow-hidden">
                <div className="flex items-center px-4 py-3 border-b border-border/30">
                  <Search className="h-4 w-4 text-gray-400 mr-3" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                      setSelectedIndex(0)
                    }}
                    placeholder="Search documentation..."
                    className="flex-1 bg-transparent border-0 outline-none text-sm text-white placeholder:text-gray-500"
                  />
                  <div className="flex items-center border border-border/40 rounded px-1.5 py-0.5 text-xs text-gray-500">
                    <span>ESC</span>
                  </div>
                </div>
                
                <div className="max-h-[60vh] overflow-y-auto">
                  {results.length > 0 ? (
                    <div className="py-2">
                      {results.map((result, index) => (
                        <button
                          key={result.id}
                          className={`w-full flex items-start gap-3 px-4 py-2.5 text-left text-sm ${
                            index === selectedIndex 
                              ? "bg-primary/10 text-primary" 
                              : "text-gray-300 hover:bg-accent/30 hover:text-white"
                          }`}
                          onClick={() => handleResultClick(result)}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {result.icon}
                          </div>
                          <div>
                            <div className="font-medium flex items-center">
                              {result.title}
                              {result.external && (
                                <ExternalLink className="h-3 w-3 ml-1.5 text-gray-500" />
                              )}
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">{result.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : query ? (
                    <div className="py-8 text-center">
                      <p className="text-gray-500 text-sm">No results found for &quot;{query}&quot;</p>
                    </div>
                  ) : (
                    <div className="py-4 px-3">
                      <p className="text-gray-400 text-sm mb-3">Quick Navigation</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {allResults.slice(0, 5).map((result) => (
                          <button 
                            key={result.id}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/30 text-gray-300 hover:text-white text-sm text-left transition-colors"
                            onClick={() => handleResultClick(result)}
                          >
                            <div className="flex-shrink-0">
                              {result.icon}
                            </div>
                            <div className="flex items-center gap-1.5">
                              {result.title}
                              {result.external && (
                                <ExternalLink className="h-3 w-3 text-gray-500" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border/30">
                        <p className="text-gray-400 text-sm mb-3">External Links</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <button 
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/30 text-gray-300 hover:text-white text-sm text-left transition-colors"
                            onClick={() => {
                              window.open("https://discord.gg/yourserver", "_blank")
                              onClose()
                            }}
                          >
                            <MessageSquare className="h-4 w-4 text-primary" />
                            <div className="flex items-center gap-1.5">
                              Discord Server
                              <ExternalLink className="h-3 w-3 text-gray-500" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="border-t border-border/30 p-2 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Command className="h-3 w-3" /> K
                    </span>
                    <span>to open</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>to navigate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>esc</span>
                    <span>to close</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

