import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Sparkles, Lock } from 'lucide-react'

export default function AppPlaceholderPage({
  title = 'World Coming Soon',
  subtitle = 'Your interactive journey for this module is coming next.',
  icon: Icon = Lock,
  badgeText = 'Quest Locked',
}) {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="glass-card rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center border border-slate-800 space-y-6 shadow-2xl shadow-indigo-950/60"
      >
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mx-auto flex items-center justify-center shadow-inner">
          <Icon className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-indigo-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badgeText}</span>
        </div>

        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          {title}
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
          {subtitle}
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700/80 hover:border-slate-600 text-sm font-semibold transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Dashboard</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
