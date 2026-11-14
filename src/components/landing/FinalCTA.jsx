import { Sparkles } from 'lucide-react'
import { ComingSoonButton } from './Shared'

export default function FinalCTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-panel">
          <span className="cta-icon"><Sparkles size={22} aria-hidden="true" /></span>
          <p className="eyebrow">A BETTER WAY TO FOOD</p>
          <h2>Your next favorite meal starts here.</h2>
          <p>Stop wondering what to eat. Let FoodMind help you discover meals that fit your day.</p>
          <ComingSoonButton className="cta-button" />
          <span className="cta-availability">Coming soon</span>
        </div>
      </div>
    </section>
  )
}
