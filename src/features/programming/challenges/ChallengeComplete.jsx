import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Trophy, Zap, CheckCircle2, ArrowRight, ArrowLeft, Unlock, Sparkles } from 'lucide-react'
import Button from '../../../components/common/Button'
import { useProgramming } from '../context/ProgrammingContext'

export default function ChallengeComplete({ totalXpEarned = 60 }) {
  const navigate = useNavigate()
  const { completeTopic } = useProgramming()

  const handleContinueToNextWorld = () => {
    // Complete topic in local state so Data Types is unlocked
    completeTopic('variables', totalXpEarned)
    navigate('/programming')
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-3xl p-8 sm:p-12 max-w-xl w-full text-center border border-indigo-500/40 space-y-6 shadow-2xl shadow-indigo-950/80 relative overflow-hidden"
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-emerald-500/10 blur-3xl pointer-events-none" />

        {/* Trophy Header */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-amber-500 p-0.5 mx-auto shadow-xl shadow-indigo-500/40"
        >
          <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
            <Trophy className="w-10 h-10 text-amber-400" />
          </div>
        </motion.div>

        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Level 01 Complete</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Variables Level Complete!
          </h1>
          <p className="text-slate-300 text-base">
            You mastered Variables and completed all challenges.
          </p>
        </div>

        {/* Stats & Rewards Strip */}
        <div className="grid grid-cols-2 gap-3 py-2 max-w-md mx-auto relative z-10">
          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-xl">
              <Zap className="w-5 h-5 fill-amber-400" />
              <span>+{totalXpEarned} XP</span>
            </div>
            <div className="text-xs text-slate-400">Total XP Earned</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-400 font-black text-xl">
              <CheckCircle2 className="w-5 h-5" />
              <span>5 / 5</span>
            </div>
            <div className="text-xs text-slate-400">Challenges Cleared</div>
          </div>
        </div>

        {/* Achievement Badge Banner */}
        <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between gap-4 text-left relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase font-bold">Achievement Unlocked</div>
              <div className="text-sm font-extrabold text-white">Variables Explorer</div>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center gap-1">
            <Unlock className="w-3.5 h-3.5" />
            <span>Unlocked</span>
          </span>
        </div>

        {/* Unlock Notice */}
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center gap-2 text-xs font-bold text-indigo-300 relative z-10">
          <Unlock className="w-4 h-4 text-emerald-400" />
          <span>🔓 Data Types Level Unlocked on Programming Map!</span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
          <Button
            onClick={handleContinueToNextWorld}
            variant="primary"
            size="lg"
            icon={ArrowRight}
            className="w-full sm:w-auto shadow-indigo-500/30"
          >
            Continue to Data Types
          </Button>

          <Button
            to="/programming"
            variant="secondary"
            size="lg"
            icon={ArrowLeft}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Back to Map
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
