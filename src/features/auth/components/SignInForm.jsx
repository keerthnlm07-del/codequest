import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, ArrowRight, AlertCircle, Loader2 } from 'lucide-react'
import Button from '../../../components/common/Button'
import GoogleAuthButton from './GoogleAuthButton'

export default function SignInForm({ onToggleMode, onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!password) {
      newErrors.password = 'Password is required.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      onSuccess()
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="space-y-1 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Welcome Back, Coder 👋
        </h2>
        <p className="text-sm text-slate-400">
          Continue your coding journey.
        </p>
      </div>

      {/* Primary Google Auth Option */}
      <GoogleAuthButton onGoogleClick={onSuccess} />

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="w-full border-t border-slate-800" />
        <span className="absolute bg-slate-900 px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest">
          OR
        </span>
      </div>

      {/* Standard Form */}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Email Address */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Email Address</span>
          </label>
          <input
            type="email"
            placeholder="coder@university.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${
              errors.email
                ? 'border-rose-500/80 focus:ring-rose-500/30'
                : 'border-slate-800 focus:border-indigo-500/60 focus:ring-indigo-500/20'
            } text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 transition-all`}
          />
          {errors.email && (
            <p className="text-xs text-rose-400 flex items-center gap-1 pt-0.5">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Password</span>
            </label>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${
              errors.password
                ? 'border-rose-500/80 focus:ring-rose-500/30'
                : 'border-slate-800 focus:border-indigo-500/60 focus:ring-indigo-500/20'
            } text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 transition-all`}
          />
          {errors.password && (
            <p className="text-xs text-rose-400 flex items-center gap-1 pt-0.5">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.password}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={submitting}
            icon={submitting ? Loader2 : ArrowRight}
          >
            {submitting ? 'Authenticating...' : 'Sign In'}
          </Button>
        </div>
      </form>

      {/* Footer Switch Link */}
      <div className="text-center pt-2 border-t border-slate-800/80">
        <p className="text-xs text-slate-400">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onToggleMode}
            className="text-indigo-400 font-semibold hover:text-indigo-300 underline underline-offset-4 cursor-pointer focus:outline-none"
          >
            Create one
          </button>
        </p>
      </div>
    </motion.div>
  )
}
