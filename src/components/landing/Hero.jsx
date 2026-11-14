import { ArrowDown, Sparkles } from 'lucide-react'
import ChatPreview from './ChatPreview'
import { ComingSoonButton } from './Shared'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-badge"><Sparkles size={14} aria-hidden="true" /> YOUR PERSONAL FOOD COMPANION</div>
          <h1>Not sure what to eat? <span>Let AI figure it out.</span></h1>
          <p>Discover meals that match your taste, ingredients, budget, and lifestyle. Your next favorite meal is just a conversation away.</p>
          <div className="hero-actions">
            <div><ComingSoonButton /><span className="availability-note">Coming soon</span></div>
            <a className="button button-secondary" href="#how-it-works">Explore How It Works <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-caption"><span className="caption-line" /> A little less thinking. A lot more enjoying.</div>
        </div>
        <div className="hero-preview">
          <div className="preview-decoration decoration-one" aria-hidden="true"><Sparkles size={20} /></div>
          <ChatPreview compact />
          <div className="preview-decoration decoration-two" aria-hidden="true"><span>MADE FOR</span><strong>real life.</strong></div>
        </div>
      </div>
      <div className="container hero-bottom"><span>THOUGHTFUL FOOD CHOICES START HERE</span><span>SCROLL TO EXPLORE <ArrowDown size={13} aria-hidden="true" /></span></div>
    </section>
  )
}
