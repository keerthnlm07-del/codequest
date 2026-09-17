import { motion } from 'framer-motion'
import { Trophy, Flame, Zap, Award, Target, TrendingUp } from 'lucide-react'
import SectionHeading from '../../../components/common/SectionHeading'

export default function ProgressPreviewSection() {
  const stats = [
    {
      id: 'xp',
      label: 'Experience Points (XP)',
      value: '14,850',
      subtext: 'Level 18 Explorer',
      icon: Zap,
      color: 'from-amber-500 to-orange-500',
      border: 'border-amber-500/30',
      textColor: 'text-amber-400',
    },
    {
      id: 'streak',
      label: 'Daily Streak',
      value: '14 Days 🔥',
      subtext: 'Active learning streak',
      icon: Flame,
      color: 'from-rose-500 to-orange-500',
      border: 'border-rose-500/30',
      textColor: 'text-rose-400',
    },
    {
      id: 'achievements',
      label: 'Achievements',
      value: '32 Badges',
      subtext: 'Unlocked across 3 worlds',
      icon: Award,
      color: 'from-purple-500 to-indigo-500',
      border: 'border-purple-500/30',
      textColor: 'text-purple-400',
    },
    {
      id: 'completed',
      label: 'Challenges Cleared',
      value: '128 Quests',
      subtext: '88% First-try accuracy',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      border: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
    },
  ]

  return (
    <section className="py-20 relative bg-slate-950/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badgeText="Gamification System"
          badgeIcon={Trophy}
          badgeVariant="purple"
          title="Track Your Mastery"
          subtitle="Every line of code you write earns XP, builds your daily streak, and unlocks prestigious engineering badges."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div
                  className={`glass-card rounded-2xl p-6 border ${stat.border} hover:border-slate-700 transition-all flex flex-col justify-between h-full group`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 shadow-md`}
                    >
                      <div className="w-full h-full bg-slate-950 rounded-[10px] p-2 flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${stat.textColor}`} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div
                      className={`text-3xl font-extrabold ${stat.textColor} group-hover:scale-105 transition-transform origin-left`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {stat.subtext}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Animated Progress Bar Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 max-w-3xl mx-auto space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              <span className="text-base font-bold text-white">Overall Learning Mastery</span>
            </div>
            <span className="text-sm font-mono font-bold text-indigo-400">Level 18 (75%)</span>
          </div>

          <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '75%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full shadow-lg shadow-indigo-500/50"
            />
          </div>

          <div className="flex justify-between text-xs text-slate-500 font-medium pt-1">
            <span>Programming: 85%</span>
            <span>DSA: 70%</span>
            <span>Web: 68%</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
