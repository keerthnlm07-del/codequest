import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Compass, Trophy, ArrowRight } from 'lucide-react'

export default function QuickActions() {
  const actions = [
    {
      title: 'Daily Challenge',
      desc: 'Solve today’s quest',
      icon: Target,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      route: '/challenges',
    },
    {
      title: 'Explore Worlds',
      desc: 'Pick your path',
      icon: Compass,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      route: '/programming',
    },
    {
      title: 'View Achievements',
      desc: 'Check your badges',
      icon: Trophy,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      route: '/achievements',
    },
  ]

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
        Quick Actions
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {actions.map((act) => {
          const Icon = act.icon
          return (
            <Link key={act.title} to={act.route}>
              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${act.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {act.title}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {act.desc}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </motion.div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
