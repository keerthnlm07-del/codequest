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
    <div className="space-y-8">
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
    </div>
  )
}
