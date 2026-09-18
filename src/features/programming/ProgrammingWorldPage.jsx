import { motion } from 'framer-motion'
import ProgrammingHeader from './components/ProgrammingHeader'
import ProgrammingMap from './components/ProgrammingMap'
import ProgressPanel from './components/ProgressPanel'

export default function ProgrammingWorldPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Header & Stats */}
      <ProgrammingHeader />

      {/* Main Grid: Map + Side Progress Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Game Map Column */}
        <div className="lg:col-span-8">
          <ProgrammingMap />
        </div>

        {/* Side Progress Panel Column */}
        <div className="lg:col-span-4">
          <ProgressPanel />
        </div>
      </div>
    </motion.div>
  )
}
