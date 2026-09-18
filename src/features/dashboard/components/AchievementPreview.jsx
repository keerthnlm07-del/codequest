import { motion } from 'framer-motion'
import { Trophy, Flame, Layers, Zap, Shield, Lock } from 'lucide-react'
import { mockAchievementsData } from '../data/mockDashboardData'

const iconMap = {
  Trophy,
  Flame,
  Layers,
  Zap,
  Shield,
}

export default function AchievementPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          <span>Achievements</span>
        </h3>
        <span className="text-xs text-indigo-400 font-semibold hover:underline cursor-pointer">
          View All (32)
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {mockAchievementsData.map((badge, idx) => {
          const Icon = iconMap[badge.iconName] || Trophy
          const unlocked = badge.isUnlocked

          return (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className={`p-3.5 rounded-2xl border transition-all text-center flex flex-col items-center justify-between gap-2.5 ${
                unlocked
                  ? 'bg-slate-900/90 border-slate-700/80 hover:border-indigo-500/40 shadow-md'
                  : 'bg-slate-950/60 border-slate-800/80 opacity-70 hover:opacity-100'
              }`}
            >
              {/* Badge Icon */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm ${
                  unlocked
                    ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400'
                    : 'bg-slate-900 border-slate-800 text-slate-500'
                }`}
              >
                {unlocked ? <Icon className="w-5 h-5" /> : <Lock className="w-4 h-4 text-slate-500" />}
              </div>

              {/* Title & Status */}
              <div>
                <div className="text-xs font-bold text-white truncate max-w-[110px]">
                  {badge.title}
                </div>
                <div
                  className={`text-[10px] font-medium ${
                    unlocked ? 'text-indigo-400' : 'text-slate-500'
                  }`}
                >
                  {badge.status}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
