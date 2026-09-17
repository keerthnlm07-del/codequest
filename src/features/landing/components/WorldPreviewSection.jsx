import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, Cpu, Globe, ArrowRight, Layers, Sparkles } from 'lucide-react'
import SectionHeading from '../../../components/common/SectionHeading'
import Card from '../../../components/common/Card'

export default function WorldPreviewSection() {
  const worlds = [
    {
      id: 'programming',
      title: 'Programming',
      icon: Code2,
      iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      glowColor: 'indigo',
      description:
        'Build your programming fundamentals through progressive challenges.',
      path: ['Beginner', 'Intermediate', 'Advanced'],
      route: '/programming',
      badge: 'Core Track',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: 'dsa',
      title: 'DSA',
      icon: Cpu,
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      glowColor: 'purple',
      description:
        'Master data structures and algorithms by solving interactive problems.',
      path: ['Arrays', 'Strings', 'Linked List', 'Algorithms'],
      route: '/dsa',
      badge: 'High Impact',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 'web',
      title: 'Web',
      icon: Globe,
      iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      glowColor: 'cyan',
      description:
        'Learn HTML, CSS and JavaScript by building interactive experiences.',
      path: ['HTML', 'CSS', 'JavaScript'],
      route: '/web',
      badge: 'Full Stack',
      color: 'from-cyan-500 to-blue-600',
    },
  ]

  return (
    <section id="worlds" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badgeText="Learning Paths"
          badgeIcon={Sparkles}
          badgeVariant="purple"
          title="Choose Your World"
          subtitle="Select a learning track tailored to your engineering goals and start conquering levels."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {worlds.map((world, idx) => {
            const Icon = world.icon
            return (
              <motion.div
                key={world.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Link to={world.route} className="block h-full">
                  <Card
                    glowColor={world.glowColor}
                    className="h-full flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Decorative Border Accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${world.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                    />

                    <div>
                      {/* Header & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${world.iconBg} shadow-md`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                          {world.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-3 flex items-center justify-between">
                        <span>{world.title}</span>
                      </h3>

                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {world.description}
                      </p>

                      {/* Progression Path */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                          <Layers className="w-3.5 h-3.5 text-slate-500" />
                          <span>Progression Path</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {world.path.map((step, sIdx) => (
                            <div
                              key={step}
                              className="flex items-center gap-1.5"
                            >
                              <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium">
                                {step}
                              </span>
                              {sIdx < world.path.length - 1 && (
                                <span className="text-slate-600 text-xs">
                                  →
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action CTA */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-sm font-semibold text-indigo-400 group-hover:text-indigo-300">
                      <span>Enter World</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
