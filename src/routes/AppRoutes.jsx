import { Routes, Route, Navigate } from 'react-router-dom'
import { Code2, Cpu, Globe, Swords, Trophy, BarChart3, User } from 'lucide-react'
import LandingPage from '../features/landing/LandingPage'
import AuthPage from '../features/auth/AuthPage'
import DashboardPage from '../features/dashboard/DashboardPage'
import WorldPlaceholderPage from '../features/placeholders/WorldPlaceholderPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route
        path="/programming"
        element={
          <WorldPlaceholderPage
            title="Programming World"
            subtitle="Progressive programming fundamentals challenges are being prepared."
            icon={Code2}
            badgeText="World Preview"
          />
        }
      />
      <Route
        path="/dsa"
        element={
          <WorldPlaceholderPage
            title="DSA World"
            subtitle="Interactive Data Structures and Algorithms levels are under construction."
            icon={Cpu}
            badgeText="World Preview"
          />
        }
      />
      <Route
        path="/web"
        element={
          <WorldPlaceholderPage
            title="Web World"
            subtitle="Interactive HTML, CSS, and JavaScript challenges coming next."
            icon={Globe}
            badgeText="World Preview"
          />
        }
      />
      <Route
        path="/challenges"
        element={
          <WorldPlaceholderPage
            title="Challenges Hub"
            subtitle="Explore daily quests and algorithm challenges."
            icon={Swords}
            badgeText="Mode Preview"
          />
        }
      />
      <Route
        path="/achievements"
        element={
          <WorldPlaceholderPage
            title="Achievements & Badges"
            subtitle="Track unlocked badges, titles, and quest trophies."
            icon={Trophy}
            badgeText="Badges Preview"
          />
        }
      />
      <Route
        path="/progress"
        element={
          <WorldPlaceholderPage
            title="Learning Analytics"
            subtitle="Detailed analytics on completed topics and mastery curves."
            icon={BarChart3}
            badgeText="Stats Preview"
          />
        }
      />
      <Route
        path="/profile"
        element={
          <WorldPlaceholderPage
            title="Student Profile & Settings"
            subtitle="Manage your coder identity, preferences, and avatar."
            icon={User}
            badgeText="Profile Preview"
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
