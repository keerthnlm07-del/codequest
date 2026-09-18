import { useState } from 'react'
import { Code2, ShieldAlert, CheckCircle2 } from 'lucide-react'

export default function BossChallenge({ challenge, onSubmit, disabled }) {
  const [task1Ans, setTask1Ans] = useState(null)
  const [task2Ans, setTask2Ans] = useState(null)
  const [task3Ans, setTask3Ans] = useState('')

  const t1 = challenge.tasks[0]
  const t2 = challenge.tasks[1]
  const t3 = challenge.tasks[2]

  const isFormComplete =
    task1Ans !== null && task2Ans !== null && task3Ans.trim().length > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isFormComplete || disabled) return

    // Pass user answers to ChallengeEngine
    onSubmit({
      t1: task1Ans,
      t2: task2Ans,
      t3: task3Ans,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Boss Code Snippet Window */}
      {challenge.codeSnippet && (
        <div className="rounded-2xl bg-slate-950 border border-purple-500/40 overflow-hidden shadow-xl shadow-purple-950/30">
          <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-purple-500/30">
            <span className="text-xs font-mono text-purple-300 flex items-center gap-1.5 font-bold">
              <ShieldAlert className="w-4 h-4 text-purple-400" /> boss_challenge.js
            </span>
          </div>
          <div className="p-4 font-mono text-sm text-indigo-200 leading-relaxed whitespace-pre-wrap">
            {challenge.codeSnippet}
          </div>
        </div>
      )}

      {/* Task 1 */}
      <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
        <div className="text-xs font-bold text-slate-200">{t1.question}</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {t1.options.map((opt) => (
            <button
              key={opt}
              type="button"
              disabled={disabled}
              onClick={() => setTask1Ans(opt)}
              className={`p-2.5 rounded-xl border font-mono font-bold text-xs text-center transition-all ${
                task1Ans === opt
                  ? 'bg-purple-600/30 border-purple-400 text-purple-200 ring-2 ring-purple-500/40'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Task 2 */}
      <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
        <div className="text-xs font-bold text-slate-200">{t2.question}</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {t2.options.map((opt) => (
            <button
              key={opt}
              type="button"
              disabled={disabled}
              onClick={() => setTask2Ans(opt)}
              className={`p-2.5 rounded-xl border font-mono font-bold text-xs text-center transition-all ${
                task2Ans === opt
                  ? 'bg-purple-600/30 border-purple-400 text-purple-200 ring-2 ring-purple-500/40'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Task 3 */}
      <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
        <div className="text-xs font-bold text-slate-200">{t3.question}</div>
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-purple-400">print(</span>
          <input
            type="text"
            value={task3Ans}
            onChange={(e) => setTask3Ans(e.target.value)}
            disabled={disabled}
            placeholder={t3.placeholder}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-indigo-200 focus:outline-none focus:border-purple-500 w-36 text-xs font-bold"
          />
          <span className="text-purple-400">)</span>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={disabled || !isFormComplete}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-sm transition-all shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Defeat Variables Boss 👑
        </button>
      </div>
    </form>
  )
}
