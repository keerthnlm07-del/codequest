import { motion } from 'framer-motion'
import { Code2, ShieldCheck, Sparkles } from 'lucide-react'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400">
          <Sparkles className="h-4 w-4" />
          <span>Foundation Ready</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
          CodeQuest
        </h1>

        <p className="text-lg text-slate-400">
          Gamified coding learning platform for engineering students.
        </p>

        <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-500 pt-4 border-t border-slate-800">
          <span className="flex items-center gap-1.5">
            <Code2 className="h-4 w-4 text-indigo-400" /> React + Vite
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Clean Architecture
          </span>
        </div>
      </motion.div>
    </div>
  )
}
