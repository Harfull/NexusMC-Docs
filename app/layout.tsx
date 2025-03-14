/* eslint-disable @typescript-eslint/no-unused-vars */
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Providers } from '@/components/providers'
import DynamicMeta from '@/components/dynamic-meta'
import { cn } from '@/lib/utils'
import LoadingScreen from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexus Studios",
  description: "Premium Minecraft plugins to enhance your server experience",
  icons: {
    icon: "/nexus-assets/logo.png",
    apple: "/nexus-assets/logo.png",
  },
  openGraph: {
    title: "Nexus Studios",
    description: "Premium Minecraft plugins to enhance your server experience",
    url: "https://docs.nexusmc.xyz",
    siteName: "Nexus Studios",
    images: [
      {
        url: "/nexus-assets/docs logo.png",
        width: 1200,
        height: 630,
        alt: "Nexus Studios",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Studios",
    description: "Premium Minecraft plugins to enhance your server experience",
    images: ["/nexus-assets/docs logo.png"],
  },
  metadataBase: new URL("https://docs.nexusmc.xyz"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Metadata for Dynamic Titles & Open Graph */}
        <DynamicMeta />

        {/* Favicon */}
        <link rel="icon" href="/nexus-assets/logo.png" type="image/png" />

        {/* Fallback PNG for browsers that don't support SVG */}
        <link rel="icon" type="image/png" sizes="32x32" href="/nexus-assets/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/nexus-assets/logo.png" />

        {/* Apple Touch Icon (for iOS devices) */}
        <link rel="apple-touch-icon" href="/nexus-assets/logo.png" />
      </head>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased stone-texture',
        'flex flex-col'
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <LoadingScreen />
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}

