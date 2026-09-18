import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LayoutDashboard, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react'
import Button from '../../components/common/Button'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

export default function DashboardPlaceholderPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center border border-slate-800 space-y-6 relative z-10 shadow-2xl shadow-indigo-950/60"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mock Auth Successful</span>
          </div>

          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Dashboard Placeholder
          </h1>

          <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
            Authentication UI test successful! You have navigated to the dashboard route. The full interactive dashboard experience will be built in a future task.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <Button to="/signin" variant="secondary" size="md" icon={ArrowLeft} iconPosition="left">
              Back to Sign In
            </Button>
            <Button to="/" variant="outline" size="md">
              Home
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
