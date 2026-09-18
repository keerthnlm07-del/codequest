import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Gamepad2,
  Home,
  Code2,
  Cpu,
  Globe,
  Swords,
  Trophy,
  BarChart3,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react'

export default function DashboardSidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Programming', path: '/programming', icon: Code2 },
    { name: 'DSA', path: '/dsa', icon: Cpu },
    { name: 'Web', path: '/web', icon: Globe },
    { name: 'Challenges', path: '/challenges', icon: Swords },
    { name: 'Achievements', path: '/achievements', icon: Trophy },
    { name: 'Progress', path: '/progress', icon: BarChart3 },
    { name: 'Profile', path: '/profile', icon: User },
  ]

  const isActive = (path) => location.pathname === path

  const handleSignOut = () => {
    navigate('/signin')
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-slate-800/80 bg-slate-950/90 backdrop-blur-xl h-screen sticky top-0 z-40 p-4 justify-between select-none">
        <div className="space-y-6">
          {/* Logo Header */}
          <Link to="/" className="flex items-center gap-3 px-2 pt-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="text-lg font-black tracking-wider text-white">
              CODE<span className="text-indigo-400">QUEST</span>
            </span>
          </Link>

          {/* Nav List */}
          <nav className="space-y-1.5 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 relative ${
                    active
                      ? 'text-white bg-indigo-500/10 border border-indigo-500/30 shadow-sm shadow-indigo-500/20 font-semibold'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/80'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      active ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'
                    }`}
                  />
                  <span>{item.name}</span>
                  {active && (
                    <motion.div
                      layoutId="sidebarActiveIndicator"
                      className="absolute right-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400"
                    />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-800/80 space-y-1">
          <Link
            to="/profile"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-slate-400 hover:text-slate-100 hover:bg-slate-900/80 transition-all"
          >
            <Settings className="w-4 h-4 text-slate-500" />
            <span>Settings</span>
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-rose-400/90 hover:text-rose-300 hover:bg-rose-500/10 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4 text-rose-400" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Top Header with Hamburger */}
      <div className="lg:hidden sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/90 border-b border-slate-800 px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 p-0.5">
            <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
              <Gamepad2 className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
          <span className="text-base font-black tracking-wider text-white">
            CODE<span className="text-indigo-400">QUEST</span>
          </span>
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-slate-800 bg-slate-950/95 px-4 py-4 space-y-2 sticky top-16 z-40"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-medium text-xs transition-all ${
                      active
                        ? 'text-white bg-indigo-500/10 border border-indigo-500/30'
                        : 'text-slate-400 hover:text-white bg-slate-900/60'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${active ? 'text-indigo-400' : 'text-slate-500'}`} />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
            <div className="pt-2 border-t border-slate-900 flex justify-between gap-2">
              <button
                onClick={handleSignOut}
                className="w-full py-2 rounded-xl bg-rose-500/10 text-rose-400 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
