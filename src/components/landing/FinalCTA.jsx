import { Sparkles } from 'lucide-react'
import { ComingSoonButton } from './Shared'
import { useLanguage } from '../../language'

export default function FinalCTA() {
  const { t } = useLanguage()
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-panel">
          <span className="cta-icon"><Sparkles size={22} aria-hidden="true" /></span>
          <p className="eyebrow">{t('A BETTER WAY TO FOOD')}</p>
          <h2>{t('Your next favorite meal starts here.')}</h2>
          <p>{t('Stop wondering what to eat. Let FoodMind help you discover meals that fit your day.')}</p>
          <ComingSoonButton className="cta-button" />
          <span className="cta-availability">{t('Demo only')}</span>
        </div>
      </div>
    </section>
  )
}
