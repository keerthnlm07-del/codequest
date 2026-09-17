export default function Badge({
  children,
  variant = 'indigo',
  icon: Icon,
  className = '',
}) {
  const variants = {
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    slate: 'bg-slate-800 text-slate-300 border-slate-700',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      <span>{children}</span>
    </span>
  )
}
