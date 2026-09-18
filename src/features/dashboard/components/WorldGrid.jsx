import WorldCard from './WorldCard'
import { mockWorldsData } from '../data/mockDashboardData'
import { Compass } from 'lucide-react'
import SectionHeading from '../../../components/common/SectionHeading'

export default function WorldGrid() {
  return (
    <section className="space-y-6">
      <SectionHeading
        badgeText="Learning Worlds"
        badgeIcon={Compass}
        badgeVariant="indigo"
        title="Your Worlds"
        subtitle="Choose a path and continue your journey."
        centered={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockWorldsData.map((world, index) => (
          <WorldCard key={world.id} world={world} index={index} />
        ))}
      </div>
    </section>
  )
}
