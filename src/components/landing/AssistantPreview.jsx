import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import ChatPreview from './ChatPreview'
import { SectionHeading } from './Shared'

export default function AssistantPreview() {
  return (
    <section className="section assistant-section">
      <div className="container assistant-grid">
        <div className="assistant-copy">
          <SectionHeading eyebrow="MEET YOUR FOOD COMPANION" title="Just tell FoodMind what's on your mind." description="No complicated searches. No endless scrolling. Just share what you need, and let the conversation lead you somewhere delicious." />
          <div className="assistant-point"><span><MessageCircle size={19} aria-hidden="true" /></span><div><strong>Ask in your own words</strong><p>From specific ingredients to a vague craving, start wherever you are.</p></div></div>
          <div className="assistant-point"><span><Sparkles size={19} aria-hidden="true" /></span><div><strong>Get ideas that fit your day</strong><p>Bring your preferences, time, and budget into the conversation.</p></div></div>
          <a className="text-link" href="#features">Explore the features <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        <ChatPreview />
      </div>
    </section>
  )
}
