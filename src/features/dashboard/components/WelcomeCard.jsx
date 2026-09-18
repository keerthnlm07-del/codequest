import { motion } from 'framer-motion'
import { Sparkles, Trophy, Zap, Shield, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { mockStudentData } from '../data/mockDashboardData'

export default function WelcomeCard() {
  const percentage = Math.round(
    (mockStudentData.currentXP / mockStudentData.nextLevelXP) * 100
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-3xl p-6 sm:p-8 border border-indigo-500/30 relative overflow-hidden shadow-2xl shadow-indigo-950/40"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-600/20 via-purple-600/15 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        {/* Left Welcome Info */}
        <div className="lg:col-span-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Active Quest Session</span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Welcome back, Coder 👋
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Ready for your next challenge? Your learning streak is active!
            </p>
          </div>

          {/* Level & XP Stats Grid */}
          <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center sm:text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Level
              </div>
              <div className="text-base sm:text-lg font-black text-white flex items-center gap-1">
                LEVEL 0{mockStudentData.level}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center sm:text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Rank Title
              </div>
              <div className="text-xs sm:text-sm font-bold text-indigo-300 truncate">
                {mockStudentData.levelTitle}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center sm:text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                XP Progress
              </div>
              <div className="text-xs sm:text-sm font-bold text-amber-400">
                {mockStudentData.currentXP} / {mockStudentData.nextLevelXP} XP
              </div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="space-y-1.5 max-w-lg">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-400">Level 5 Unlock Progress</span>
              <span className="text-indigo-400 font-mono">{percentage}%</span>
            </div>
            <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full shadow-md shadow-indigo-500/50"
              />
            </div>
          </div>
        </div>

        {/* Right Game Visual Element */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="relative p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl text-center space-y-3 w-full max-w-xs">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 mx-auto shadow-lg shadow-indigo-500/30"
            >
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Trophy className="w-8 h-8 text-amber-400" />
              </div>
            </motion.div>

            <div>
              <div className="text-xs font-bold text-slate-200">
                Next Rank: Code Architect
              </div>
              <div className="text-[11px] text-slate-400">
                Unlock at 1,000 XP
              </div>
            </div>

            <Link
              to="/challenges"
              className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md"
            >
              <span>Jump to Quest</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
