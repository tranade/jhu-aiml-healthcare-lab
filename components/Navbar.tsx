'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Team', href: '/team' },
  { name: 'Publications', href: '/publications' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHomepage 
            ? (scrolled ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 shadow-depth-2' : 'bg-transparent')
            : (scrolled ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 shadow-depth-2' : 'bg-gray-950/80 backdrop-blur-sm shadow-depth-1')
        }`}
      >
        <div className="container-max mobile-padding">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-depth-1 group-hover:shadow-depth-2 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xs">JHU</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg">AI/ML Healthcare Lab</div>
                <div className="text-primary-400 text-xs">Johns Hopkins University</div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full shadow-glow-primary"></span>
                </Link>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Navigation Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-800/50 shadow-depth-4"
          >
            <div className="p-6 space-y-6">
              {/* Close button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Navigation items */}
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* Contact info */}
              <div className="pt-6 border-t border-gray-800/50">
                <div className="text-sm text-gray-400">
                  <div className="font-medium text-white mb-2">Contact Us</div>
                  <div>ai-ml-healthcare@jhu.edu</div>
                  <div>+1 (410) 516-0000</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
} 