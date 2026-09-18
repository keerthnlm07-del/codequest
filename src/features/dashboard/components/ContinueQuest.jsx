import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, Zap, CheckCircle2, ArrowRight } from 'lucide-react'
import { mockContinueQuestData } from '../data/mockDashboardData'

export default function ContinueQuest() {
  const percentage = Math.round(
    (mockContinueQuestData.completedSubTasks / mockContinueQuestData.totalSubTasks) * 100
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card rounded-3xl p-6 sm:p-8 border border-indigo-500/30 relative overflow-hidden shadow-xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        {/* Left Lesson Info */}
        <div className="space-y-3 max-w-xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
              Continue Your Quest
            </span>
            <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
              {mockContinueQuestData.category}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              {mockContinueQuestData.difficulty}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight">
            {mockContinueQuestData.lessonTitle}
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {mockContinueQuestData.completedSubTasks} of{' '}
                  {mockContinueQuestData.totalSubTasks} challenges completed
                </span>
              </span>
              <span className="text-indigo-400 font-mono">{percentage}%</span>
            </div>
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Right CTA & XP Badge */}
        <div className="flex flex-col sm:items-end justify-between gap-4 border-t sm:border-t-0 sm:border-l border-slate-800/80 pt-4 sm:pt-0 sm:pl-8">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs">
            <Zap className="w-4 h-4 fill-amber-400" />
            <span>+{mockContinueQuestData.rewardXP} XP Reward</span>
          </div>

          <Link
            to={mockContinueQuestData.route}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-500/25 group"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Continue Challenge</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
