import { ArrowUpRight, Check, Sparkles } from 'lucide-react'
import { benefits } from '../../data/landingContent'
import { SectionHeading } from './Shared'

export default function WhyFoodMind() {
  return (
    <section className="section why-section" id="about">
      <div className="container why-grid">
        <div>
          <SectionHeading eyebrow="WHY FOODMIND" title="More than recipes. A smarter way to decide what to eat." description="Because feeling good about food starts long before you sit down to eat." />
          <a className="text-link" href="#faq">Get to know FoodMind <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="benefit-panel">
          <div className="benefit-header"><span><Sparkles size={19} aria-hidden="true" /></span><div><strong>A little more ease, every day.</strong><p>Designed for your real life.</p></div></div>
          <ul>{benefits.map(({ icon: Icon, text }) => <li key={text}><Icon size={19} aria-hidden="true" /><span>{text}</span><Check className="benefit-check" size={16} aria-hidden="true" /></li>)}</ul>
        </div>
      </div>
    </section>
  )
}
