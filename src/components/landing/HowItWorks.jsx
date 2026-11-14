import { ArrowRight } from 'lucide-react'
import { steps } from '../../data/landingContent'
import { SectionHeading } from './Shared'

export default function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <SectionHeading eyebrow="HOW IT WORKS" title="Your food decisions, made smarter in three simple steps." description="Good food starts with a simple conversation. Here’s how FoodMind is designed to help." centered />
        <div className="steps-grid">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <article className="step-card" key={title}>
              <div className="step-top"><span className="step-icon"><Icon size={24} strokeWidth={1.7} aria-hidden="true" /></span><span className="step-number">0{index + 1}</span></div>
              <h3>{title}</h3><p>{description}</p>
              {index < steps.length - 1 && <ArrowRight className="step-arrow" size={19} aria-hidden="true" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
