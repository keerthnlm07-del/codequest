import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  glowColor = 'indigo',
  onClick,
  ...props
}) {
  const glowClasses = {
    indigo: 'hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.25)]',
    purple: 'hover:border-purple-500/40 hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.25)]',
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.25)]',
    emerald: 'hover:border-emerald-500/40 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.25)]',
  }

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={`glass-card rounded-2xl p-6 transition-all duration-300 ${
        hoverEffect ? `cursor-pointer ${glowClasses[glowColor]}` : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
