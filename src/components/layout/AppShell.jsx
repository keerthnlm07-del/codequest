import { Outlet } from 'react-router-dom'
import DashboardSidebar from '../../features/dashboard/components/DashboardSidebar'
import DashboardHeader from '../../features/dashboard/components/DashboardHeader'

export default function AppShell() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sidebar Navigation */}
      <DashboardSidebar />

      {/* Main App Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen relative overflow-x-hidden">
        {/* Ambient Background Glow Overlays */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-gradient-to-tr from-cyan-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

        {/* App Top Header */}
        <DashboardHeader />

        {/* Dynamic Route Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 relative z-10 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
