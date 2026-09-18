import { motion } from 'framer-motion'
import { BarChart3, CheckCircle2, Award, Zap } from 'lucide-react'
import { mockStudentData } from '../data/mockDashboardData'

export default function LearningProgress() {
  const tracks = [
    { name: 'Programming', percentage: 60, color: 'from-indigo-500 to-purple-600' },
    { name: 'DSA', percentage: 20, color: 'from-purple-500 to-pink-600' },
    { name: 'Web', percentage: 20, color: 'from-cyan-500 to-blue-600' },
  ]

  return (
    <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-indigo-400" />
          <span>Learning Progress</span>
        </h3>
        <span className="text-xs text-slate-400 font-mono">
          Overall Level 4
        </span>
      </div>

      {/* Track Progress Bars */}
      <div className="space-y-4">
        {tracks.map((track) => (
          <div key={track.name} className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-slate-300">{track.name}</span>
              <span className="text-indigo-400 font-mono">{track.percentage}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${track.percentage}%` }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className={`h-full bg-gradient-to-r ${track.color} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stat Counters */}
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-800/80 text-center">
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
          <div className="text-base font-extrabold text-white">
            {mockStudentData.completedChallengesCount}
          </div>
          <div className="text-[10px] text-slate-400">Challenges</div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <Award className="w-4 h-4 text-purple-400 mx-auto mb-1" />
          <div className="text-base font-extrabold text-white">
            {mockStudentData.topicsMasteredCount}
          </div>
          <div className="text-[10px] text-slate-400">Topics Mastered</div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
          <Zap className="w-4 h-4 text-amber-400 mx-auto mb-1" />
          <div className="text-base font-extrabold text-amber-400">
            {mockStudentData.currentXP}
          </div>
          <div className="text-[10px] text-slate-400">Total XP</div>
        </div>
      </div>
    </div>
  )
}
