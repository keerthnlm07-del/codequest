import { motion } from 'framer-motion'
import { Shield, Zap, Sparkles, Terminal, Code2, Trophy, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AuthVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8">
      {/* Brand Header */}
      <div className="space-y-3">
        <Link to="/" className="inline-flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Terminal className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="text-2xl font-black tracking-wider text-white">
            CODE<span className="text-indigo-400">QUEST</span>
          </span>
        </Link>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Enter the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Game World</span> of Coding.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
          Master programming fundamentals, solve DSA challenges, and build full-stack web applications to level up your engineering skills.
        </p>
      </div>

      {/* Game Visual Interface Card */}
      <div className="relative w-full">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-400/10 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 glass-card rounded-3xl p-6 border border-slate-700/60 shadow-2xl space-y-5"
        >
          {/* Top Status */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Level 15 Coder</div>
                <div className="text-[11px] text-slate-400">Season 1 Active</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs">
              <Zap className="w-3.5 h-3.5 fill-amber-400" />
              <span>3,200 XP</span>
            </div>
          </div>

          {/* Active Challenge Preview */}
          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" /> Recursion Quest
              </span>
              <span className="text-emerald-400 font-mono text-[10px]">85% Completed</span>
            </div>
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
              />
            </div>
          </div>

          {/* Achievements unlocked preview */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-300 font-medium">Daily Streak 🔥 14D</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-400 shrink-0" />
              <span className="text-slate-300 font-medium">Boss Unlocked ⚔️</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Decorative Badges */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 -right-3 z-20 px-3 py-1.5 rounded-xl glass-card border border-indigo-500/40 text-[11px] font-bold text-indigo-300 shadow-lg flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Interactive Challenges</span>
        </motion.div>
      </div>
    </div>
  )
}
