import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Gamepad2, ArrowLeft, Lock, Sparkles } from 'lucide-react'
import Button from '../../components/common/Button'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

export default function WorldPlaceholderPage({
  title = 'World Coming Soon',
  subtitle = 'This game region is currently under construction. Stay tuned for full level unlocks!',
  icon: Icon = Lock,
  badgeText = 'Quest Locked',
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center border border-slate-800 space-y-6 relative z-10 shadow-2xl shadow-indigo-950/60"
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
            <Button to="/" variant="secondary" size="md" icon={ArrowLeft} iconPosition="left">
              Return to Landing
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
