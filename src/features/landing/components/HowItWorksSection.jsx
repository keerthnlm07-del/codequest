import { motion } from 'framer-motion'
import { BookOpen, CheckSquare, Zap, ShieldAlert, Compass } from 'lucide-react'
import SectionHeading from '../../../components/common/SectionHeading'

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Learn',
      description: 'Discover a concept through a short interactive challenge.',
      icon: BookOpen,
      iconColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    },
    {
      number: '02',
      title: 'Solve',
      description: 'Test your understanding with different challenge types.',
      icon: CheckSquare,
      iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    },
    {
      number: '03',
      title: 'Level Up',
      description: 'Earn XP, unlock levels and collect achievements.',
      icon: Zap,
      iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      number: '04',
      title: 'Master',
      description: 'Complete boss challenges and prove your skills.',
      icon: ShieldAlert,
      iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 relative bg-slate-950/60 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badgeText="Game Mechanics"
          badgeIcon={Compass}
          badgeVariant="indigo"
          title="How CodeQuest Works"
          subtitle="A structured 4-step loop designed to convert complex concepts into intuitive gaming milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/40 to-amber-500/20 -translate-y-12 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative z-10"
              >
                <div className="glass-card rounded-2xl p-6 h-full border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-slate-700 group-hover:text-indigo-400 transition-colors">
                        {step.number}
                      </span>
                      <div className={`p-3 rounded-xl border ${step.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Visual Progress Connector */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Phase {step.number}</span>
                    <span className="w-2 h-2 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
