import { Routes, Route, Navigate } from 'react-router-dom'
import { Code2, Cpu, Globe, Swords, Trophy, BarChart3, User } from 'lucide-react'
import LandingPage from '../features/landing/LandingPage'
import AuthPage from '../features/auth/AuthPage'
import AppShell from '../components/layout/AppShell'
import DashboardPage from '../features/dashboard/DashboardPage'
import AppPlaceholderPage from '../features/placeholders/AppPlaceholderPage'

export default function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC WEBSITE ROUTES */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<AuthPage />} />

      {/* AUTHENTICATED APP AREA ROUTES (Nested in AppShell) */}
      <Route element={<AppShell />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route
          path="/programming"
          element={
            <AppPlaceholderPage
              title="Programming World"
              subtitle="Your interactive programming journey is coming next."
              icon={Code2}
              badgeText="World Preview"
            />
          }
        />
        <Route
          path="/dsa"
          element={
            <AppPlaceholderPage
              title="DSA World"
              subtitle="Your interactive DSA journey is coming next."
              icon={Cpu}
              badgeText="World Preview"
            />
          }
        />
        <Route
          path="/web"
          element={
            <AppPlaceholderPage
              title="Web World"
              subtitle="Your interactive Web development journey is coming next."
              icon={Globe}
              badgeText="World Preview"
            />
          }
        />
        <Route
          path="/challenges"
          element={
            <AppPlaceholderPage
              title="Challenges Hub"
              subtitle="Your interactive coding & quiz challenges are coming next."
              icon={Swords}
              badgeText="Mode Preview"
            />
          }
        />
        <Route
          path="/achievements"
          element={
            <AppPlaceholderPage
              title="Achievements & Badges"
              subtitle="Detailed achievement showcase and trophy case coming next."
              icon={Trophy}
              badgeText="Badges Preview"
            />
          }
        />
        <Route
          path="/progress"
          element={
            <AppPlaceholderPage
              title="Learning Analytics"
              subtitle="Detailed analytics and topic mastery curves coming next."
              icon={BarChart3}
              badgeText="Stats Preview"
            />
          }
        />
        <Route
          path="/profile"
          element={
            <AppPlaceholderPage
              title="Student Profile & Settings"
              subtitle="Student identity customization and settings coming next."
              icon={User}
              badgeText="Profile Preview"
            />
          }
        />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
