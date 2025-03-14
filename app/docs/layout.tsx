"use client"

import { useState } from "react"
import DocsSidebar from "@/components/docs-sidebar"
import SearchBar from "@/components/search-bar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [searchOpen, setSearchOpen] = useState(false)
  
  return (
    <div className="flex flex-col md:flex-row pt-16 min-h-screen bg-background">
      <DocsSidebar 
        className="md:w-64 lg:w-72 shrink-0 md:h-[calc(100vh-4rem)] md:sticky md:top-16 border-r border-border/50" 
        setSearchOpen={setSearchOpen}
      />
      <div className="flex-1 pt-8 md:pt-10 pb-16 px-4 md:px-8 lg:px-12 max-w-3xl mx-auto w-full">
        <div className="prose prose-invert prose-purple max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-300 prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-white prose-code:text-primary prose-pre:bg-accent/20 prose-pre:border prose-pre:border-border/50">
          {children}
        </div>
      </div>
      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

