"use client"

import { useState, useRef } from "react"
import { Check, Copy, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  children: React.ReactNode
  language?: string
  title?: string
  showLineNumbers?: boolean
  className?: string
}

export default function CodeBlock({ 
  children, 
  language, 
  title, 
  showLineNumbers = false,
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)
  
  const copyToClipboard = () => {
    if (!preRef.current) return
    
    const code = preRef.current.textContent || ""
    navigator.clipboard.writeText(code)
    setCopied(true)
    
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }
  
  return (
    <div className="code-block-wrapper">
      {title && (
        <div className="code-block-title">
          <Terminal className="h-4 w-4 mr-2 text-primary" />
          {title}
          {language && <span className="ml-2 text-gray-500">{language}</span>}
        </div>
      )}
      
      <pre 
        ref={preRef}
        className={cn(
          showLineNumbers && "with-line-numbers",
          className
        )}
      >
        {children}
      </pre>
      
      <button 
        onClick={copyToClipboard}
        className={cn(
          "code-copy-button",
          copied && "copied"
        )}
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <Check className="h-3 w-3 mr-1 inline-block" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="h-3 w-3 mr-1 inline-block" />
            Copy
          </>
        )}
      </button>
    </div>
  )
} 