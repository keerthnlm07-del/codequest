import { motion } from 'framer-motion'
import { Trophy, CheckCircle2, Zap, Layers } from 'lucide-react'
import { useProgramming } from '../context/ProgrammingContext'
import { programmingWorldStats } from '../data/programmingWorldData'

export default function ProgressPanel() {
  const { userXP, completedCount, masteryPercentage, topics } = useProgramming()
  const completedChallenges = completedCount * 5

  return (
    <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-5 shadow-xl sticky top-24">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Trophy className="w-4 h-4 text-indigo-400" />
          <span>Programming Mastery</span>
        </h3>
        <span className="text-xs font-mono font-bold text-indigo-400">
          {masteryPercentage}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${masteryPercentage}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full"
        />
      </div>

      {/* Breakdown Grid */}
      <div className="grid grid-cols-3 gap-2.5 text-center pt-2">
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <Layers className="w-3.5 h-3.5 text-purple-400 mx-auto mb-1" />
          <div className="text-xs font-bold text-white">
            {completedCount} / {topics.length}
          </div>
          <div className="text-[10px] text-slate-400">Topics</div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <Zap className="w-3.5 h-3.5 text-amber-400 mx-auto mb-1" />
          <div className="text-xs font-bold text-amber-400">
            {userXP} / {programmingWorldStats.totalXpAvailable}
          </div>
          <div className="text-[10px] text-slate-400">XP</div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
          <div className="text-xs font-bold text-white">
            {completedChallenges} / {programmingWorldStats.totalChallengesCount}
          </div>
          <div className="text-[10px] text-slate-400">Challenges</div>
        </div>
      </div>
    </div>
  )
}
