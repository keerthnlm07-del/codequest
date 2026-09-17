import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../../../components/common/Button'

export default function FinalCTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Radial Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/30 to-slate-950 pointer-events-none" />
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-14 border border-indigo-500/30 shadow-2xl shadow-indigo-950/80 space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Ready to Level Up?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Your coding journey starts here.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Choose a world, solve your first challenge, and start building your skills one level at a time.
          </p>

          <div className="pt-4 flex justify-center">
            <Button
              to="/signin"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="px-8 py-3.5 text-base shadow-xl shadow-indigo-500/40"
            >
              Start Your Quest
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
