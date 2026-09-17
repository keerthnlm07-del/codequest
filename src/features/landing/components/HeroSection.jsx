import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Compass } from 'lucide-react'
import Button from '../../../components/common/Button'
import Badge from '../../../components/common/Badge'
import GameWorldVisual from './GameWorldVisual'

export default function HeroSection() {
  const scrollToWorlds = (e) => {
    e.preventDefault()
    const element = document.querySelector('#worlds')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <Badge variant="indigo" icon={Sparkles} className="inline-flex">
              Gamified Platform for Engineering Students
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Learn to Code.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Play. Solve. Level Up.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Master programming, DSA, and web development through interactive challenges designed for engineering students.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                to="/signin"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto shadow-lg shadow-indigo-500/30"
              >
                Start Your Quest
              </Button>

              <Button
                onClick={scrollToWorlds}
                variant="secondary"
                size="lg"
                icon={Compass}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Explore Worlds
              </Button>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-2xl font-extrabold text-white">3</div>
                <div className="text-xs text-slate-400">Core Worlds</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-indigo-400">100+</div>
                <div className="text-xs text-slate-400">Quests</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-purple-400">XP & Badges</div>
                <div className="text-xs text-slate-400">Rewards</div>
              </div>
            </div>
          </motion.div>

          {/* Right Game Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <GameWorldVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
