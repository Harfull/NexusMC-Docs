"use client"

import { useState, useEffect, ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react"

// Define types for navigation items
interface NavChild {
  label: string;
  href: string;
  icon: ReactNode;
}

interface NavItem {
  label: string;
  href: string;
  icon: ReactNode;
  children?: NavChild[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-8 h-8 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">N</div>
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="font-bold text-white text-xl"
            >
              Nexus
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <NavItem 
                key={item.href} 
                item={item} 
                isActive={pathname === item.href || pathname.startsWith(`${item.href}/`)}
                delay={index * 0.05}
              />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-accent/20 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg border-t border-purple-900/30"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    {item.children ? (
                      <MobileDropdownItem item={item} isActive={pathname.startsWith(item.href)} />
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                          pathname === item.href
                            ? "bg-primary/20 text-primary"
                            : "text-gray-300 hover:bg-accent/10 hover:text-white"
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                  className="mt-2"
                >
                  <Link 
                    href="https://builtbybit.com/resources/authors/nexus-studios.209184/"
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500/90 to-pink-500/90 text-white font-medium"
                  >
                    <span>Visit Store</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// Desktop Nav Item Component
function NavItem({ item, isActive, delay }: { item: NavItem; isActive: boolean; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)
  
  if (item.children) {
    return (
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay }}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isActive ? "text-primary" : "text-gray-300 hover:text-white"
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isHovered ? "rotate-180" : ""}`} />
        </motion.button>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-1 w-56 rounded-lg overflow-hidden bg-black/90 backdrop-blur-lg border border-purple-900/30 shadow-xl"
            >
              <div className="py-2">
                {item.children.map((child: NavChild) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-primary/10 hover:text-white transition-colors"
                  >
                    {child.icon}
                    <span>{child.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive 
            ? "bg-primary/20 text-primary" 
            : "text-gray-300 hover:bg-accent/10 hover:text-white"
        }`}
      >
        {item.icon}
        <span>{item.label}</span>
      </Link>
    </motion.div>
  )
}

// Mobile Dropdown Item Component
function MobileDropdownItem({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full px-4 py-3 rounded-lg ${
          isActive ? "bg-primary/20 text-primary" : "text-gray-300 hover:bg-accent/10 hover:text-white"
        }`}
      >
        <div className="flex items-center gap-2">
          {item.icon}
          <span>{item.label}</span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 py-1 space-y-1">
              {item.children?.map((child: NavChild) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-accent/10 hover:text-white"
                >
                  {child.icon}
                  <span>{child.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Navigation Items
const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  },
  {
    label: "Docs",
    href: "/docs",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    children: [
      {
        label: "Levels Remastered",
        href: "/docs/levels-remastered",
        icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      }
    ]
  },
  {
    label: "Support",
    href: "/support",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  },
]

