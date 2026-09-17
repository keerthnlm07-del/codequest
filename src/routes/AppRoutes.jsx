import { Routes, Route, Navigate } from 'react-router-dom'
import { Code2, Cpu, Globe, Lock } from 'lucide-react'
import LandingPage from '../features/landing/LandingPage'
import WorldPlaceholderPage from '../features/placeholders/WorldPlaceholderPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/signin"
        element={
          <WorldPlaceholderPage
            title="Sign In Coming Soon"
            subtitle="Authentication will be connected in a future update."
            icon={Lock}
            badgeText="Auth Locked"
          />
        }
      />
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
