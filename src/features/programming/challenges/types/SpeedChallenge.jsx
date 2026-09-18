import { useState, useEffect } from 'react'
import { Code2, Clock, Zap } from 'lucide-react'

export default function SpeedChallenge({ challenge, onSubmit, disabled }) {
  const [selectedOption, setSelectedOption] = useState(null)
  const [timeLeft, setTimeLeft] = useState(challenge.timerSeconds || 20)

  useEffect(() => {
    if (disabled || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          onSubmit('TIMEOUT') // Expired
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [disabled, timeLeft, onSubmit])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedOption === null || disabled) return
    onSubmit(selectedOption)
  }

  const timerPercent = Math.round((timeLeft / (challenge.timerSeconds || 20)) * 100)

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Timer Bar */}
      <div className="p-3.5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-2">
        <div className="flex justify-between items-center text-xs font-bold">
          <span className="text-amber-400 flex items-center gap-1.5">
            <Clock className="w-4 h-4 animate-spin-slow" />
            <span>Speed Run Timer</span>
          </span>
          <span className="font-mono text-sm text-amber-400">{timeLeft}s remaining</span>
        </div>

        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
          <div
            style={{ width: `${timerPercent}%` }}
            className={`h-full rounded-full transition-all duration-1000 ${
              timeLeft <= 5 ? 'bg-rose-500' : 'bg-gradient-to-r from-amber-500 to-rose-500'
            }`}
          />
        </div>
      </div>

      {/* Code Snippet Box */}
      {challenge.codeSnippet && (
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
          <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-amber-400" /> speed.js
            </span>
          </div>
          <div className="p-4 font-mono text-sm text-indigo-200 leading-relaxed whitespace-pre-wrap">
            {challenge.codeSnippet}
          </div>
        </div>
      )}

      {/* Question */}
      <div className="text-sm font-bold text-white">
        {challenge.question}
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {challenge.options.map((option) => {
          const isSelected = selectedOption === option
          return (
            <button
              key={option}
              type="button"
              disabled={disabled || timeLeft <= 0}
              onClick={() => setSelectedOption(option)}
              className={`p-4 rounded-2xl border text-left font-mono font-bold text-sm transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md ring-2 ring-amber-500/40'
                  : 'bg-slate-950/80 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-900'
              } ${disabled || timeLeft <= 0 ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {option}
            </button>
          )
        })}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={disabled || selectedOption === null || timeLeft <= 0}
          className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-md shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Lock Answer ⚡
        </button>
      </div>
    </form>
  )
}
