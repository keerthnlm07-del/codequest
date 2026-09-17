import { motion } from 'framer-motion'
import { Code2, Cpu, Globe, Zap, Trophy, Shield, CheckCircle2 } from 'lucide-react'

export default function GameWorldVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/10 rounded-full blur-3xl" />

      {/* Main Game Interface Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full glass-card rounded-3xl p-6 border border-slate-700/60 shadow-2xl shadow-indigo-950/80 space-y-6"
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 shadow-md shadow-indigo-500/30">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Trophy className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Rank #12</div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                Level 12 Explorer <Shield className="w-3.5 h-3.5 text-amber-400 inline" />
              </div>
            </div>
          </div>

          {/* XP Badge */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs shadow-sm"
          >
            <Zap className="w-4 h-4 fill-amber-400" />
            <span>2,450 XP</span>
          </motion.div>
        </div>

        {/* Progress Bar Section */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-400">Quest Progress</span>
            <span className="text-indigo-400">78% (390 / 500 XP)</span>
          </div>
          <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '78%' }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full shadow-sm shadow-indigo-500/50"
            />
          </div>
        </div>

        {/* Learning Worlds Grid */}
        <div className="grid grid-cols-3 gap-3">
          <motion.div
            whileHover={{ y: -3 }}
            className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-center gap-1.5 text-center"
          >
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-200">Programming</span>
            <span className="text-[10px] text-emerald-400 font-mono">Lvl 4</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-center gap-1.5 text-center"
          >
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-200">DSA</span>
            <span className="text-[10px] text-purple-400 font-mono">Lvl 5</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-center gap-1.5 text-center"
          >
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Globe className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-200">Web</span>
            <span className="text-[10px] text-cyan-400 font-mono">Lvl 3</span>
          </motion.div>
        </div>

        {/* Active Quest Preview Card */}
        <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="text-xs font-bold text-slate-100">Binary Search Boss</div>
              <div className="text-[11px] text-slate-400">Active Quest • DSA World</div>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
            +100 XP
          </span>
        </div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 z-20 px-3.5 py-2 rounded-2xl glass-card border border-indigo-500/30 text-xs font-bold text-indigo-300 shadow-xl flex items-center gap-2"
      >
        <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
        <span>7 Day Streak 🔥</span>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-4 -left-4 z-20 px-3.5 py-2 rounded-2xl glass-card border border-purple-500/30 text-xs font-bold text-purple-300 shadow-xl flex items-center gap-2"
      >
        <Shield className="w-4 h-4 text-purple-400" />
        <span>Boss Unlocked ⚔️</span>
      </motion.div>
    </div>
  )
}
