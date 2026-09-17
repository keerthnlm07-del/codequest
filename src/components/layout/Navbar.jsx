import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Menu, X, ArrowRight, Sparkles } from 'lucide-react'
import Button from '../common/Button'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', href: '#home', isAnchor: true },
    { name: 'Worlds', href: '#worlds', isAnchor: true },
    { name: 'How It Works', href: '#how-it-works', isAnchor: true },
    { name: 'Challenges', href: '#challenges', isAnchor: true },
  ]

  const handleNavClick = (e, link) => {
    if (link.isAnchor && location.pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(link.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="text-xl font-extrabold tracking-wider text-white flex items-center gap-1">
            CODE<span className="text-indigo-400">QUEST</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/signin"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2"
          >
            Sign In
          </Link>
          <Button to="/signin" variant="primary" size="md" icon={Sparkles}>
            Start Learning
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-4"
          >
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-base font-medium text-slate-300 hover:text-white py-2 border-b border-slate-900"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center w-full py-2.5 text-sm font-medium text-slate-300 hover:text-white rounded-xl bg-slate-900 border border-slate-800"
              >
                Sign In
              </Link>
              <Button
                to="/signin"
                variant="primary"
                size="md"
                className="w-full"
                icon={ArrowRight}
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Learning
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
