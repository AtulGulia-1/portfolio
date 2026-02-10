'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const currentTheme = theme === 'system' ? resolvedTheme : theme

  // Hydration-safe: render same structure on server and client
  return (
    <motion.nav
      // height is ALWAYS h-16, only colors change → no mismatch
      className={`fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-xl transition-colors duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 shadow-lg border-b border-slate-200/60 dark:border-slate-800/60'
          : 'bg-white/70 dark:bg-slate-900/60'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between'>
        {/* Logo */}
        <motion.a
          href='#hero'
          className='text-2xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent hover:scale-105 transition-transform'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Atul Gulia
        </motion.a>

        {/* Desktop nav */}
        <ul className='hidden md:flex items-center space-x-8'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='text-lg font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-all py-2 relative group'
              >
                {link.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-emerald-500 group-hover:w-full transition-all duration-300' />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className='flex items-center space-x-3'>
          {/* Theme toggle (simple, hydration-safe) */}
          {resolvedTheme && (
            <motion.button
              type='button'
              onClick={() =>
                setTheme(currentTheme === 'dark' ? 'light' : 'dark')
              }
              className='p-2.5 rounded-xl backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-200/70 dark:hover:bg-slate-800/70 transition-all duration-200'
              whileHover={{ rotate: 180, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={`Switch to ${
                currentTheme === 'dark' ? 'light' : 'dark'
              } mode`}
            >
              {currentTheme === 'dark' ? (
                <svg
                  className='w-5 h-5 text-yellow-400'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='4' />
                  <path d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41' />
                </svg>
              ) : (
                <svg
                  className='w-5 h-5 text-slate-900'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
                </svg>
              )}
            </motion.button>
          )}

          {/* Mobile button */}
          <motion.button
            className='md:hidden p-2 rounded-xl backdrop-blur-sm hover:bg-slate-200/70 dark:hover:bg-slate-800/70 transition-colors'
            onClick={() => setMobileOpen((prev) => !prev)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={
                  mobileOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className='md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200/60 dark:border-slate-800/60 px-4 py-4'
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='block py-3 text-lg font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
