import { motion } from 'framer-motion'
import DashboardSidebar from './components/DashboardSidebar'
import DashboardHeader from './components/DashboardHeader'
import WelcomeCard from './components/WelcomeCard'
import WorldGrid from './components/WorldGrid'
import ContinueQuest from './components/ContinueQuest'
import DailyChallenge from './components/DailyChallenge'
import QuickActions from './components/QuickActions'
import AchievementPreview from './components/AchievementPreview'
import LearningProgress from './components/LearningProgress'
import RecentActivity from './components/RecentActivity'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen relative overflow-x-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

        {/* Top Header */}
        <DashboardHeader />

        {/* Dashboard Body Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 relative z-10 max-w-7xl w-full mx-auto">
          {/* Welcome Card */}
          <WelcomeCard />

          {/* Quick Actions */}
          <QuickActions />

          {/* Your Worlds */}
          <WorldGrid />

          {/* Continue Quest & Daily Challenge Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <ContinueQuest />
            </div>
            <div className="lg:col-span-5">
              <DailyChallenge />
            </div>
          </div>

          {/* Achievements */}
          <AchievementPreview />

          {/* Learning Progress & Recent Activity Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <LearningProgress />
            </div>
            <div className="lg:col-span-5">
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
