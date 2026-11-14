import { ArrowRight, Leaf, Sparkles } from 'lucide-react'
import { useLanguage } from '../../language'

export function Brand({ light = false }) {
  const { t } = useLanguage()
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="/#home" aria-label={t('FoodMind home')}>
      <span className="brand-icon"><Leaf size={19} aria-hidden="true" /></span>
      <span dir="ltr">FoodMind<span className="brand-dot">.</span></span>
    </a>
  )
}

export function SectionHeading({ eyebrow, title, description, centered = false }) {
  const { t } = useLanguage()
  return (
    <div className={`section-heading${centered ? ' centered' : ''}`}>
      <p className="eyebrow">{t(eyebrow)}</p>
      <h2>{t(title)}</h2>
      {description && <p className="section-description">{t(description)}</p>}
    </div>
  )
}

export function IconCard({ icon: Icon, title, description, className = '' }) {
  const { t } = useLanguage()
  return (
    <article className={`icon-card ${className}`}>
      <span className="icon-tile"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
      <h3>{t(title)}</h3>
      <p>{t(description)}</p>
    </article>
  )
}

export function ComingSoonButton({ children = 'Get Started Free', className = '' }) {
  const { t } = useLanguage()
  return (
    <a className={`button button-primary ${className}`} href="/register">
      {t(children)} <ArrowRight size={17} aria-hidden="true" />
    </a>
  )
}

export function AssistantAvatar() {
  return <span className="assistant-avatar"><Sparkles size={16} aria-hidden="true" /></span>
}
