import { useState } from 'react'
import { Code2, Terminal, Wrench } from 'lucide-react'

export default function DebugChallenge({ challenge, onSubmit, disabled }) {
  const [userCode, setUserCode] = useState(challenge.starterCode || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!userCode.trim() || disabled) return
    onSubmit(userCode)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Code Editor Container */}
      <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
        <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" /> fix-me.js
            </span>
          </div>
          <span className="text-[11px] font-mono text-amber-400 flex items-center gap-1">
            <Wrench className="w-3 h-3" /> Debug Mode
          </span>
        </div>

        <div className="p-4 bg-slate-950">
          <textarea
            rows={5}
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            disabled={disabled}
            className="w-full bg-transparent font-mono text-sm text-indigo-200 focus:outline-none resize-none leading-relaxed"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={disabled || !userCode.trim()}
          className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-md shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Test Fix
        </button>
      </div>
    </form>
  )
}
