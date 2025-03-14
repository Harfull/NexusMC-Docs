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
    <div className="flex flex-col md:flex-row pt-16">
      <DocsSidebar 
        className="md:w-64 lg:w-72 shrink-0 md:h-[calc(100vh-4rem)] md:sticky md:top-16" 
        setSearchOpen={setSearchOpen}
      />
      <div className="flex-1 pt-8 md:pt-10 pb-16 px-4 md:px-8 lg:px-12 max-w-3xl mx-auto">
        <div className="prose prose-invert prose-purple max-w-none">
          {children}
        </div>
      </div>
      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

