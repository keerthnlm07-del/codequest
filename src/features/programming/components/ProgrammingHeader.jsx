import { Code2, Flame, Zap, Shield, CheckCircle2 } from 'lucide-react'
import { programmingWorldStats } from '../data/programmingWorldData'

export default function ProgrammingHeader() {
  return (
    <div className="space-y-6">
      {/* Title & Subtitle */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-400">
          <Code2 className="w-4 h-4" />
          <span>Programming World Track</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Master Programming Through Challenges
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Complete each level, earn XP, and unlock the next challenge zone.
        </p>
      </div>

      {/* Stats Row Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
        <div className="p-3 rounded-2xl glass-card border border-slate-800 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Current Level</div>
            <div className="text-sm font-extrabold text-white">0{programmingWorldStats.currentLevel}</div>
          </div>
        </div>

        <div className="p-3 rounded-2xl glass-card border border-slate-800 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">XP Available</div>
            <div className="text-sm font-extrabold text-amber-400">{programmingWorldStats.totalXpAvailable} XP</div>
          </div>
        </div>

        <div className="p-3 rounded-2xl glass-card border border-slate-800 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Topics Done</div>
            <div className="text-sm font-extrabold text-white">
              {programmingWorldStats.completedTopics} / {programmingWorldStats.totalLevels}
            </div>
          </div>
        </div>

        <div className="p-3 rounded-2xl glass-card border border-slate-800 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
            <Flame className="w-4 h-4 fill-rose-400" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Current Streak</div>
            <div className="text-sm font-extrabold text-rose-400">{programmingWorldStats.streakDays} Days</div>
          </div>
        </div>
      </div>
    </div>
  )
}
