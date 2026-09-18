import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Variable, Sparkles, Zap, Play } from 'lucide-react'

export default function TopicPlaceholder() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="glass-card rounded-3xl p-8 sm:p-12 max-w-xl w-full text-center border border-indigo-500/30 space-y-6 shadow-2xl shadow-indigo-950/60 relative overflow-hidden"
      >
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/15 blur-3xl rounded-full pointer-events-none" />

        {/* Icon & Badge */}
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mx-auto flex items-center justify-center shadow-inner">
          <Variable className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-indigo-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Level 01 • Active Level</span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Variables — Level 01
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            Your Variables challenges will appear here next. Get ready to store and manipulate data in interactive code puzzles!
          </p>
        </div>

        {/* Level Info Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 py-3 border-y border-slate-800/80 text-xs text-slate-300">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
            Difficulty: Easy
          </span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
            5 Challenges
          </span>
          <span className="flex items-center gap-1 text-amber-400 font-bold px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30">
            <Zap className="w-3.5 h-3.5 fill-amber-400" /> +50 XP
          </span>
        </div>

        {/* Navigation Action */}
        <div className="pt-2 flex justify-center">
          <Link
            to="/programming"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700/80 hover:border-slate-600 text-sm font-bold transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Programming World</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
