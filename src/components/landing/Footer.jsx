import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { Brand } from './Shared'
import { useLanguage } from '../../language'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand"><Brand /><p>{t('A more thoughtful way to decide what’s on the menu. Made for real life, and all its appetites.')}</p>
            <div className="social-links" aria-label={t('Social profiles coming soon')}>
              <button type="button" disabled aria-label={t('Instagram, coming soon')} title={t('Instagram, coming soon')}><Instagram size={17} aria-hidden="true" /></button>
              <button type="button" disabled aria-label={t('LinkedIn, coming soon')} title={t('LinkedIn, coming soon')}><Linkedin size={17} aria-hidden="true" /></button>
              <button type="button" disabled aria-label={t('X, coming soon')} title={t('X, coming soon')}><Twitter size={17} aria-hidden="true" /></button>
            </div>
          </div>
          <div className="footer-column"><h3>{t('Product')}</h3><a href="#how-it-works">{t('How It Works')}</a><a href="#features">{t('Features')}</a><a href="#faq">{t('FAQ')}</a></div>
          <div className="footer-column"><h3>{t('Company')}</h3><a href="#about">{t('About Us')}</a><span>{t('Contact')} <small>{t('Coming soon')}</small></span></div>
          <div className="footer-column"><h3>{t('Legal')}</h3><span>{t('Privacy Policy')} <small>{t('Coming soon')}</small></span><span>{t('Terms of Service')} <small>{t('Coming soon')}</small></span></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} FoodMind. {t('All rights reserved.')}</span><span>{t('Made for more mindful moments.')}</span></div>
      </div>
    </footer>
  )
}
