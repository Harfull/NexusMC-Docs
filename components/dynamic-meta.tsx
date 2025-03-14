/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { usePathname } from "next/navigation"
import Head from "next/head"

export default function DynamicMeta() {
  const pathname = usePathname()
  
  let title = "Nexus Studios"
  let description = "Premium Minecraft plugins to enhance your server experience."
  
  // Update title based on current path
  if (pathname?.includes("/docs")) {
    title = "Documentation | Nexus Studios"
    description = "Documentation & guides for Nexus Studios' Plugins."
    
    if (pathname?.includes("/levels-remastered")) {
      title = "Levels Remastered | Nexus Studios"
      description = "Documentation for Levels Remastered, a comprehensive leveling system for your Minecraft server"
    }
  }
  
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://nexusstudios.com${pathname}`} />
      <meta property="og:image" content="https://nexusstudios.com/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://nexusstudios.com/og-image.png" />
    </>
  )
} 