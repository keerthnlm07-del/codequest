import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-purple-500 border border-indigo-400/30',
    secondary:
      'bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700/80 hover:border-slate-600 shadow-md',
    outline:
      'bg-transparent hover:bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:border-indigo-500/60',
    ghost:
      'bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white',
  }

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  }

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="h-4 w-4" />}
    </>
  )

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={combinedClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  )
}
