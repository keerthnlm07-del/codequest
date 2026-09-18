import { motion } from 'framer-motion'
import { Code2, Zap, Shield, CheckCircle2 } from 'lucide-react'

export default function ChallengeHeader({
  levelInfo,
  currentIndex,
  totalChallenges,
  sessionXP,
}) {
  const currentStep = currentIndex + 1
  const progressPercent = Math.round((currentStep / totalChallenges) * 100)

  return (
    <div className="glass-card rounded-3xl p-5 border border-slate-800 space-y-4 shadow-xl">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-bold text-xs flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5" />
              <span>Level {levelInfo.levelCode}</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold">
              {levelInfo.difficulty}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {levelInfo.title} — Level {levelInfo.levelCode}
          </h1>
        </div>

        {/* XP Earned Strip */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs shadow-sm self-start sm:self-auto">
          <Zap className="w-4 h-4 fill-amber-400" />
          <span>+{sessionXP} XP Earned</span>
        </div>
      </div>

      {/* Progress Bar & Challenge Counter */}
      <div className="space-y-1.5 pt-1">
        <div className="flex justify-between items-center text-xs font-semibold">
          <span className="text-slate-400">
            Challenge {currentStep} of {totalChallenges}
          </span>
          <span className="text-indigo-400 font-mono">{progressPercent}%</span>
        </div>
        <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full shadow-sm"
          />
        </div>
      </div>
    </div>
  )
}
