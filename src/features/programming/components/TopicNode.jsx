import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Lock,
  ArrowRight,
  Zap,
  CheckCircle2,
  Sparkles,
  ShieldAlert,
  Variable,
  Binary,
  Calculator,
  GitBranch,
  Repeat,
  Box,
  ListOrdered,
  Type,
  Boxes,
} from 'lucide-react'

const iconMap = {
  Variable,
  Binary,
  Calculator,
  GitBranch,
  Repeat,
  Box,
  ListOrdered,
  Type,
  Boxes,
  ShieldAlert,
}

export default function TopicNode({ topic, index, isLeft }) {
  const Icon = iconMap[topic.iconName] || Variable
  const isUnlocked = topic.status === 'UNLOCKED'
  const isCompleted = topic.status === 'COMPLETED'
  const isLocked = topic.status === 'LOCKED'

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={isUnlocked ? { y: -4, scale: 1.01 } : {}}
      className={`relative w-full max-w-md glass-card rounded-3xl p-6 border transition-all duration-300 ${
        isUnlocked
          ? 'border-indigo-500/40 hover:border-indigo-500/70 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.35)] cursor-pointer'
          : isCompleted
          ? 'border-emerald-500/40 bg-emerald-950/20'
          : 'border-slate-800/80 bg-slate-950/70 opacity-70 cursor-not-allowed'
      }`}
    >
      {/* Current Quest Pulsing Badge */}
      {topic.isCurrentQuest && (
        <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 border border-indigo-400/40 text-white font-extrabold text-[10px] tracking-wider uppercase shadow-lg shadow-indigo-500/40 flex items-center gap-1.5 animate-pulse">
          <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
          <span>{topic.badgeText || 'START HERE'}</span>
        </div>
      )}

      {/* Boss Level Header Badge */}
      {topic.isBossLevel && (
        <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 font-extrabold text-[10px] tracking-wider uppercase shadow-lg flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>BOSS LEVEL</span>
        </div>
      )}

      {/* Node Header Row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md ${
              isUnlocked
                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                : isCompleted
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-slate-900 border-slate-800 text-slate-500'
            }`}
          >
            {isLocked ? <Lock className="w-5 h-5 text-slate-500" /> : <Icon className="w-6 h-6" />}
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500 font-mono">
              LEVEL {topic.levelCode}
            </div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>{topic.title}</span>
            </h3>
          </div>
        </div>

        {/* Reward Pill */}
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs shrink-0">
          <Zap className="w-3.5 h-3.5 fill-amber-400" />
          <span>+{topic.rewardXP} XP</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-5">
        {topic.description}
      </p>

      {/* Details Strip */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/80">
        <div className="flex items-center gap-3 font-medium">
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
            {topic.difficulty}
          </span>
          <span>{topic.challengeCount} Challenges</span>
        </div>

        {/* Action / Lock State Button */}
        {isUnlocked && (
          <span className="inline-flex items-center gap-1 font-bold text-indigo-400 group-hover:text-indigo-300">
            <span>Enter Level</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        )}

        {isCompleted && (
          <span className="inline-flex items-center gap-1 font-bold text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Completed</span>
          </span>
        )}

        {isLocked && (
          <span className="text-[11px] text-slate-500 flex items-center gap-1 italic">
            <Lock className="w-3 h-3" />
            <span>Complete previous level to unlock</span>
          </span>
        )}
      </div>
    </motion.div>
  )

  if (isUnlocked && topic.route) {
    return (
      <Link to={topic.route} className="block w-full">
        {content}
      </Link>
    )
  }

  return content
}
