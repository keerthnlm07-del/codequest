import { motion } from 'framer-motion'
import { CheckCircle2, Trophy, Clock, History } from 'lucide-react'
import { mockRecentActivityData } from '../data/mockDashboardData'

export default function RecentActivity() {
  return (
    <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <History className="w-5 h-5 text-indigo-400" />
          <span>Recent Activity</span>
        </h3>
        <span className="text-xs text-slate-500 font-mono">Live Sync</span>
      </div>

      <div className="space-y-3">
        {mockRecentActivityData.map((act, idx) => (
          <motion.div
            key={act.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-3">
              {act.type === 'achievement' ? (
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <Trophy className="w-4 h-4" />
                </div>
              ) : (
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              )}

              <div>
                <div className="font-semibold text-slate-200">{act.title}</div>
                <div className="text-[10px] text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{act.timeAgo}</span>
                </div>
              </div>
            </div>

            <span className="font-mono font-bold text-amber-400 px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800">
              {act.reward}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
