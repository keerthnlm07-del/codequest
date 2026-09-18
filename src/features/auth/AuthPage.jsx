import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import AuthVisual from './components/AuthVisual'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const navigate = useNavigate()

  const handleMockSuccess = () => {
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-transparent blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column - Game Visual & Branding */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <AuthVisual />
          </div>

          {/* Right Column - Centered Authentication Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-md glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl shadow-indigo-950/60"
            >
              <AnimatePresence mode="wait">
                {isSignUp ? (
                  <SignUpForm
                    key="signup"
                    onToggleMode={() => setIsSignUp(false)}
                    onSuccess={handleMockSuccess}
                  />
                ) : (
                  <SignInForm
                    key="signin"
                    onToggleMode={() => setIsSignUp(true)}
                    onSuccess={handleMockSuccess}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
