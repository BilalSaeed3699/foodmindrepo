import { ArrowDown, Sparkles } from 'lucide-react'
import ChatPreview from './ChatPreview'
import { ComingSoonButton } from './Shared'
import { useLanguage } from '../../language'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-badge"><Sparkles size={14} aria-hidden="true" /> {t('YOUR PERSONAL FOOD COMPANION')}</div>
          <h1>{t('Not sure what to eat?')} <span>{t('Let AI figure it out.')}</span></h1>
          <p>{t('Discover meals that match your taste, ingredients, budget, and lifestyle. Your next favorite meal is just a conversation away.')}</p>
          <div className="hero-actions">
            <div><ComingSoonButton /><span className="availability-note">{t('Demo only')}</span></div>
            <a className="button button-secondary" href="#how-it-works">{t('Explore How It Works')} <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-caption"><span className="caption-line" /> {t('A little less thinking. A lot more enjoying.')}</div>
        </div>
        <div className="hero-preview">
          <div className="preview-decoration decoration-one" aria-hidden="true"><Sparkles size={20} /></div>
          <ChatPreview compact />
          <div className="preview-decoration decoration-two" aria-hidden="true"><span>{t('MADE FOR')}</span><strong>{t('real life.')}</strong></div>
        </div>
      </div>
      <div className="container hero-bottom"><span>{t('THOUGHTFUL FOOD CHOICES START HERE')}</span><span>{t('SCROLL TO EXPLORE')} <ArrowDown size={13} aria-hidden="true" /></span></div>
    </section>
  )
}
