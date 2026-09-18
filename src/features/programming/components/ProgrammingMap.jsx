import { motion } from 'framer-motion'
import TopicNode from './TopicNode'
import { programmingTopicsData } from '../data/programmingWorldData'
import { Star, Flag, Trophy, ShieldAlert } from 'lucide-react'

export default function ProgrammingMap() {
  return (
    <div className="relative py-4 space-y-8">
      {/* Start Marker Banner */}
      <div className="flex items-center justify-center gap-2 max-w-xs mx-auto px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold text-xs tracking-wider uppercase text-center shadow-lg shadow-indigo-950/40">
        <Star className="w-4 h-4 text-amber-400 fill-amber-400 animate-spin-slow" />
        <span>Quest Zone 1: Fundamentals</span>
      </div>

      {/* Central Connector Line for Desktop */}
      <div className="hidden lg:block absolute top-16 bottom-20 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 via-purple-600/40 to-slate-800 rounded-full z-0" />

      {/* Mobile Connector Line */}
      <div className="lg:hidden absolute top-16 bottom-20 left-6 w-1 bg-gradient-to-b from-indigo-500 via-purple-600/40 to-slate-800 rounded-full z-0" />

      {/* Topics Journey List */}
      <div className="space-y-10 relative z-10">
        {programmingTopicsData.map((topic, index) => {
          const isLeft = index % 2 === 0
          return (
            <div
              key={topic.id}
              className={`flex flex-col lg:flex-row items-center justify-between gap-6 ${
                isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Left/Right Node Container */}
              <div className="w-full lg:w-[46%] flex justify-center lg:justify-end pl-12 lg:pl-0">
                <TopicNode topic={topic} index={index} isLeft={isLeft} />
              </div>

              {/* Node Center Badge Node */}
              <div className="hidden lg:flex w-10 h-10 rounded-full bg-slate-900 border-2 border-indigo-500/50 items-center justify-center font-bold text-xs text-indigo-300 shadow-lg shadow-indigo-950 shrink-0 z-20">
                {topic.levelCode}
              </div>

              {/* Empty Spacer Column for Desktop Grid Alignment */}
              <div className="hidden lg:block w-[46%]" />
            </div>
          )
        })}
      </div>

      {/* Final Boss Finish Marker */}
      <div className="flex flex-col items-center justify-center pt-8 space-y-2 text-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 p-0.5 shadow-xl shadow-rose-950/60">
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
            <Trophy className="w-7 h-7 text-amber-400" />
          </div>
        </div>
        <div className="text-sm font-extrabold text-white">
          Programming Mastery Capstone
        </div>
        <div className="text-xs text-slate-400 max-w-xs">
          Complete all 10 topics to unlock the Programming Mastery Trophy!
        </div>
      </div>
    </div>
  )
}
