import { lifestyles } from '../../data/landingContent'
import { IconCard, SectionHeading } from './Shared'

export default function Personalization() {
  return (
    <section className="section lifestyle-section">
      <div className="container">
        <SectionHeading eyebrow="MADE AROUND YOU" title="Food recommendations that understand you." description="Your life is unique. Your meal ideas should be, too." centered />
        <div className="card-grid four-columns">
          {lifestyles.map((lifestyle) => <IconCard key={lifestyle.title} {...lifestyle} className="lifestyle-card" />)}
        </div>
      </div>
    </section>
  )
}
