import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swords, Clock, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import { mockDailyChallengeData } from '../data/mockDashboardData'

export default function DailyChallenge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/30 relative overflow-hidden shadow-xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left Side */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs">
              <Swords className="w-3.5 h-3.5" />
              <span>Daily Challenge</span>
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              {mockDailyChallengeData.difficulty}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {mockDailyChallengeData.title}
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Zap className="w-3.5 h-3.5 fill-amber-400" />
              <span>+{mockDailyChallengeData.rewardXP} XP</span>
            </span>
            <span className="flex items-center gap-1 text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>{mockDailyChallengeData.estimatedTime}</span>
            </span>
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>1,240 students solved</span>
            </span>
          </div>
        </div>

        {/* Right CTA */}
        <div>
          <Link
            to={mockDailyChallengeData.route}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-amber-500/20 group"
          >
            <span>Start Challenge</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
