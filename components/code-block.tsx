"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  language: string
  code: string
  showLineNumbers?: boolean
}

export function CodeBlock({ language, code, showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-md bg-muted">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-muted">
        <span className="text-xs font-medium">{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className={cn("p-4 overflow-x-auto text-sm", showLineNumbers && "pl-12 relative")}>
        {showLineNumbers && (
          <div className="absolute left-0 top-0 pt-4 w-8 h-full flex flex-col items-end pr-2 text-xs text-muted-foreground select-none">
            {code.split("\n").map((_, i) => (
              <div key={i} className="leading-relaxed">
                {i + 1}
              </div>
            ))}
          </div>
        )}
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  )
}

