import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Lock, ArrowRight, AlertCircle, Loader2 } from 'lucide-react'
import Button from '../../../components/common/Button'
import GoogleAuthButton from './GoogleAuthButton'

export default function SignUpForm({ onToggleMode, onSuccess }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.'
    }

    if (!email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!password) {
      newErrors.password = 'Password is required.'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.'
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.'
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.'
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
      className="space-y-5"
    >
      {/* Header */}
      <div className="space-y-1 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Start Your Quest 🚀
        </h2>
        <p className="text-sm text-slate-400">
          Create your account to unlock interactive coding worlds.
        </p>
      </div>

      {/* Primary Google Option */}
      <GoogleAuthButton onGoogleClick={onSuccess} />

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="w-full border-t border-slate-800" />
        <span className="absolute bg-slate-900 px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest">
          OR
        </span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Alex Mercer"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`w-full px-4 py-2 rounded-xl bg-slate-950 border ${
              errors.fullName
                ? 'border-rose-500/80 focus:ring-rose-500/30'
                : 'border-slate-800 focus:border-indigo-500/60 focus:ring-indigo-500/20'
            } text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 transition-all`}
          />
          {errors.fullName && (
            <p className="text-xs text-rose-400 flex items-center gap-1 pt-0.5">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Email Address</span>
          </label>
          <input
            type="email"
            placeholder="alex@university.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 rounded-xl bg-slate-950 border ${
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
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Password</span>
          </label>
          <input
            type="password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 rounded-xl bg-slate-950 border ${
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

        {/* Confirm Password */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full px-4 py-2 rounded-xl bg-slate-950 border ${
              errors.confirmPassword
                ? 'border-rose-500/80 focus:ring-rose-500/30'
                : 'border-slate-800 focus:border-indigo-500/60 focus:ring-indigo-500/20'
            } text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 transition-all`}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-rose-400 flex items-center gap-1 pt-0.5">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.confirmPassword}</span>
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
            {submitting ? 'Creating Account...' : 'Create Account'}
          </Button>
        </div>
      </form>

      {/* Switch Link */}
      <div className="text-center pt-2 border-t border-slate-800/80">
        <p className="text-xs text-slate-400">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onToggleMode}
            className="text-indigo-400 font-semibold hover:text-indigo-300 underline underline-offset-4 cursor-pointer focus:outline-none"
          >
            Sign In
          </button>
        </p>
      </div>
    </motion.div>
  )
}
