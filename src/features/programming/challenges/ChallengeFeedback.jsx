import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, ArrowRight, RotateCcw, Zap } from 'lucide-react'
import Button from '../../../components/common/Button'

export default function ChallengeFeedback({
  isCorrect,
  explanation,
  hint,
  xp,
  onNext,
  onRetry,
  isLastChallenge,
}) {
  if (isCorrect === null) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl p-5 border shadow-xl ${
        isCorrect
          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
          : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left Feedback Message */}
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2 font-bold text-base">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-emerald-300">✓ Correct!</span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-extrabold text-xs">
                  <Zap className="w-3.5 h-3.5 fill-amber-400" /> +{xp} XP
                </span>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <span className="text-rose-300">Not quite. Try again.</span>
              </>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isCorrect ? explanation : hint}
          </p>
        </div>

        {/* Right Action Button */}
        <div className="shrink-0">
          {isCorrect ? (
            <Button
              onClick={onNext}
              variant="primary"
              size="md"
              icon={ArrowRight}
              className="bg-emerald-600 hover:bg-emerald-500 border-emerald-400/30 shadow-emerald-500/20"
            >
              {isLastChallenge ? 'Complete Level' : 'Next Challenge'}
            </Button>
          ) : (
            <Button
              onClick={onRetry}
              variant="secondary"
              size="md"
              icon={RotateCcw}
              iconPosition="left"
            >
              Retry Challenge
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
