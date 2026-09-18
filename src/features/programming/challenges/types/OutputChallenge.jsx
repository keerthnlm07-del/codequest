import { useState } from 'react'
import { Code2, Terminal } from 'lucide-react'

export default function OutputChallenge({ challenge, onSubmit, disabled }) {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedOption === null || disabled) return
    onSubmit(selectedOption)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Code Snippet Box */}
      {challenge.codeSnippet && (
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
          <div className="bg-slate-900/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" /> snippet.js
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
              <Terminal className="w-3 h-3" /> Console Output
            </span>
          </div>

          <div className="p-4 font-mono text-sm text-indigo-200 leading-relaxed whitespace-pre-wrap">
            {challenge.codeSnippet}
          </div>
        </div>
      )}

      {/* Question Header */}
      <div className="text-sm font-bold text-white">
        {challenge.question}
      </div>

      {/* Multiple Choice Options */}
      <div className="grid grid-cols-2 gap-3">
        {challenge.options.map((option) => {
          const isSelected = selectedOption === option
          return (
            <button
              key={option}
              type="button"
              disabled={disabled}
              onClick={() => setSelectedOption(option)}
              className={`p-4 rounded-2xl border text-left font-mono font-bold text-sm transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-md shadow-indigo-500/20 ring-2 ring-indigo-500/40'
                  : 'bg-slate-950/80 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-900'
              } ${disabled ? 'opacity-75 cursor-not-allowed' : ''}`}
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
          disabled={disabled || selectedOption === null}
          className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-md shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Submit Answer
        </button>
      </div>
    </form>
  )
}
