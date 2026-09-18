import { useLocation } from 'react-router-dom'
import { Flame, Zap, Shield } from 'lucide-react'
import { mockStudentData } from '../data/mockDashboardData'

const routeHeaderMap = {
  '/dashboard': {
    title: 'Dashboard',
    subtitle: 'Personal Coding Game Hub',
  },
  '/programming': {
    title: 'Programming World',
    subtitle: 'Master Programming Through Challenges',
  },
  '/programming/variables': {
    title: 'Variables — Level 01',
    subtitle: 'Interactive Challenge Zone',
  },
  '/dsa': {
    title: 'DSA World',
    subtitle: 'Master Data Structures & Algorithms Through Challenges',
  },
  '/web': {
    title: 'Web World',
    subtitle: 'Build Your Web Skills Through Challenges',
  },
  '/challenges': {
    title: 'Challenges',
    subtitle: 'Test Your Skills & Earn XP',
  },
  '/achievements': {
    title: 'Achievements',
    subtitle: 'Collect Badges & Milestones',
  },
  '/progress': {
    title: 'Progress',
    subtitle: 'Track Your Learning Journey',
  },
  '/profile': {
    title: 'Profile',
    subtitle: 'Your CodeQuest Profile',
  },
}

export default function DashboardHeader() {
  const location = useLocation()
  const currentHeader =
    routeHeaderMap[location.pathname] || routeHeaderMap['/dashboard']

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60 bg-slate-950/40 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Dynamic Page Title */}
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          {currentHeader.title}
        </h1>
        <p className="text-xs text-slate-400">
          {currentHeader.subtitle}
        </p>
      </div>

      {/* Right Stats & Profile Strip */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Streak */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-xs shadow-sm">
          <Flame className="w-3.5 h-3.5 fill-rose-400" />
          <span>{mockStudentData.streakDays} Day Streak</span>
        </div>

        {/* XP */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs shadow-sm">
          <Zap className="w-3.5 h-3.5 fill-amber-400" />
          <span>{mockStudentData.currentXP} XP</span>
        </div>

        {/* Level Badge */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold text-xs">
          <Shield className="w-3.5 h-3.5 text-indigo-400" />
          <span>Level {mockStudentData.level} — {mockStudentData.levelTitle}</span>
        </div>

        {/* Profile Avatar */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
          <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400/40 overflow-hidden shrink-0">
            <img
              src={mockStudentData.avatar}
              alt={mockStudentData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-bold text-white leading-tight">
              {mockStudentData.name}
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              {mockStudentData.handle}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
