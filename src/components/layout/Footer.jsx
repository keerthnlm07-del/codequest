import { Gamepad2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Motto */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 shadow-md shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-indigo-400" />
              </div>
            </div>
            <span className="text-lg font-bold tracking-wider text-white">
              CODE<span className="text-indigo-400">QUEST</span>
            </span>
          </div>
          <p className="text-xs text-slate-500">Learn. Play. Level Up.</p>
        </div>

        {/* Minimal Nav Links */}
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#worlds" className="hover:text-white transition-colors">
            Worlds
          </a>
          <a href="#challenges" className="hover:text-white transition-colors">
            Challenges
          </a>
          <Link to="/signin" className="hover:text-white transition-colors">
            Sign In
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-600">
          © {new Date().getFullYear()} CodeQuest. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
