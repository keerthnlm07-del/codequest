import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import HeroSection from './components/HeroSection'
import WorldPreviewSection from './components/WorldPreviewSection'
import HowItWorksSection from './components/HowItWorksSection'
import ChallengePreviewSection from './components/ChallengePreviewSection'
import ProgressPreviewSection from './components/ProgressPreviewSection'
import FinalCTASection from './components/FinalCTASection'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WorldPreviewSection />
        <HowItWorksSection />
        <ChallengePreviewSection />
        <ProgressPreviewSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
