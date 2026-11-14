import { ArrowRight, Leaf, Sparkles } from 'lucide-react'

export function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#home" aria-label="FoodMind home">
      <span className="brand-icon"><Leaf size={19} aria-hidden="true" /></span>
      <span>FoodMind<span className="brand-dot">.</span></span>
    </a>
  )
}

export function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading${centered ? ' centered' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export function IconCard({ icon: Icon, title, description, className = '' }) {
  return (
    <article className={`icon-card ${className}`}>
      <span className="icon-tile"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export function ComingSoonButton({ children = 'Get Started Free', className = '' }) {
  return (
    <button className={`button button-primary ${className}`} type="button" disabled title="Coming soon">
      {children} <ArrowRight size={17} aria-hidden="true" />
      <span className="sr-only"> (coming soon)</span>
    </button>
  )
}

export function AssistantAvatar() {
  return <span className="assistant-avatar"><Sparkles size={16} aria-hidden="true" /></span>
}
