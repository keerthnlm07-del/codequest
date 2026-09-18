import { Routes, Route, Navigate } from 'react-router-dom'
import { Code2, Cpu, Globe } from 'lucide-react'
import LandingPage from '../features/landing/LandingPage'
import AuthPage from '../features/auth/AuthPage'
import WorldPlaceholderPage from '../features/placeholders/WorldPlaceholderPage'
import DashboardPlaceholderPage from '../features/placeholders/DashboardPlaceholderPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardPlaceholderPage />} />
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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
