import { features } from '../../data/landingContent'
import { IconCard, SectionHeading } from './Shared'
import { useLanguage } from '../../language'

export default function Features() {
  const { t } = useLanguage()
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="heading-row">
          <SectionHeading eyebrow="A LITTLE HELP GOES A LONG WAY" title="Everything you need to make better food decisions." />
          <p>{t('One thoughtful companion for all the little decisions that happen around food. Here’s what we’re building.')}</p>
        </div>
        <div className="card-grid three-columns">
          {features.map((feature) => <IconCard key={feature.title} {...feature} className="feature-card" />)}
        </div>
      </div>
    </section>
  )
}
