import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, Cpu, Globe, ArrowRight, Layers } from 'lucide-react'

const iconMap = {
  Code2,
  Cpu,
  Globe,
}

export default function WorldCard({ world, index }) {
  const Icon = iconMap[world.iconName] || Code2

  const glowClasses = {
    indigo: 'hover:border-indigo-500/50 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]',
    purple: 'hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]',
    cyan: 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={world.route} className="block h-full">
        <motion.div
          whileHover={{ y: -6 }}
          className={`glass-card rounded-3xl p-6 h-full border border-slate-800 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 ${glowClasses[world.glowColor]}`}
        >
          {/* Top Gradient Accent Strip */}
          <div
            className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${world.accentColor} opacity-80 group-hover:opacity-100 transition-opacity`}
          />

          <div>
            {/* Icon Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                {world.badgeText}
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl font-black text-white group-hover:text-indigo-300 transition-colors mb-2">
              {world.title}
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {world.description}
            </p>

            {/* Progress Stats & Bar */}
            <div className="space-y-2 mb-6 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-slate-500" />
                  <span>{world.completedLevels} / {world.totalLevels} levels</span>
                </span>
                <span className="text-indigo-400 font-mono">
                  {world.progressPercentage}% Complete
                </span>
              </div>

              <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${world.progressPercentage}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${world.accentColor} rounded-full`}
                />
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-sm font-bold text-indigo-400 group-hover:text-indigo-300">
            <span>Continue</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
