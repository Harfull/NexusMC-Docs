/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Book, FileText, Settings, Terminal, ChevronRight, ChevronDown, Search, Command, Code2, Clock } from "lucide-react"

interface DocsSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  setSearchOpen?: (open: boolean) => void;
}

export default function DocsSidebar({ className, setSearchOpen }: DocsSidebarProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLevelsOpen, setIsLevelsOpen] = useState(true)
  
  // Auto-expand sections based on current path
  useEffect(() => {
    if (pathname?.includes("/docs/levels-remastered")) {
      setIsLevelsOpen(true)
    }
  }, [pathname])

  return (
    <div className={cn("py-6 px-4 border-r border-border/40 bg-background/50 backdrop-blur-sm", className)}>
      <div className="flex flex-col h-full">
        <div className="space-y-6 flex-1 overflow-auto pr-2 custom-scrollbar">
          {/* Mobile search button */}
          {setSearchOpen && (
            <button
              onClick={() => setSearchOpen(true)}
              className="md:hidden w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-border/40 bg-background/50 text-sm text-gray-400 hover:text-white transition-colors mb-4"
            >
              <Search className="h-4 w-4" />
              <span>Search docs...</span>
              <div className="flex items-center border border-border/40 rounded px-1.5 py-0.5 text-xs text-gray-500 ml-auto">
                <Command className="h-3 w-3 mr-1" />
                <span>K</span>
              </div>
            </button>
          )}
          
          <div>
            <div className="mb-3 px-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Getting Started</h4>
            </div>
            <div className="space-y-1">
              <Link
                href="/docs"
                className={cn(
                  "flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors relative",
                  pathname === "/docs" && !searchParams?.has("s")
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-300 hover:bg-accent/30 hover:text-white"
                )}
              >
                <Book className="h-4 w-4" />
                Introduction
                {pathname === "/docs" && !searchParams?.has("s") && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
                )}
              </Link>
            </div>
          </div>
          
          <div>
            <div className="mb-3 px-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Plugins</h4>
            </div>
            <div className="space-y-1">
              <button
                onClick={() => setIsLevelsOpen(!isLevelsOpen)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors",
                  pathname?.includes("/docs/levels-remastered")
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-300 hover:bg-accent/30 hover:text-white"
                )}
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Levels Remastered
                </div>
                {isLevelsOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              
              {isLevelsOpen && (
                <div className="ml-4 pl-2 border-l border-border/40 space-y-1 py-1">
                  <Link
                    href="/docs/levels-remastered?s=overview"
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors relative",
                      pathname === "/docs/levels-remastered" && searchParams?.get("s") === "overview"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-300 hover:bg-accent/30 hover:text-white"
                    )}
                  >
                    Overview
                    {pathname === "/docs/levels-remastered" && searchParams?.get("s") === "overview" && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
                    )}
                  </Link>
                  
                  <Link
                    href="/docs/levels-remastered?s=installation"
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors relative",
                      pathname === "/docs/levels-remastered" && searchParams?.get("s") === "installation"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-300 hover:bg-accent/30 hover:text-white"
                    )}
                  >
                    Installation
                    {pathname === "/docs/levels-remastered" && searchParams?.get("s") === "installation" && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
                    )}
                  </Link>
                  
                  <Link
                    href="/docs/levels-remastered?s=configuration"
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors relative",
                      pathname === "/docs/levels-remastered" && searchParams?.get("s") === "configuration"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-300 hover:bg-accent/30 hover:text-white"
                    )}
                  >
                    Configuration
                    {pathname === "/docs/levels-remastered" && searchParams?.get("s") === "configuration" && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
                    )}
                  </Link>

                  <Link
                    href="/docs/levels-remastered?s=skript"
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors relative",
                      pathname === "/docs/levels-remastered" && searchParams?.get("s") === "skript"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-300 hover:bg-accent/30 hover:text-white"
                    )}
                  >
                    Skript Integration
                    {pathname === "/docs/levels-remastered" && searchParams?.get("s") === "skript" && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
                    )}
                  </Link>

                  <Link
                    href="/docs/levels-remastered?s=plugins"
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors relative",
                      pathname === "/docs/levels-remastered" && searchParams?.get("s") === "plugins"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-300 hover:bg-accent/30 hover:text-white"
                    )}
                  >
                    Plugin Support
                    {pathname === "/docs/levels-remastered" && searchParams?.get("s") === "plugins" && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
                    )}
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <div className="mb-3 px-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h4>
            </div>
            <div className="space-y-1">
              <Link
                href="/docs/changelog"
                className={cn(
                  "flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors relative",
                  pathname === "/docs/changelog"
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-300 hover:bg-accent/30 hover:text-white"
                )}
              >
                <Clock className="h-4 w-4" />
                Changelog
                {pathname === "/docs/changelog" && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
                )}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/40">
          <div className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20">
            <h4 className="text-sm font-medium text-white mb-1">Need help?</h4>
            <p className="text-xs text-gray-400 mb-3">Join our Discord community for support and updates.</p>
            <a 
              href="https://discord.gg/nexusmcs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium hover:opacity-90 transition-opacity"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

