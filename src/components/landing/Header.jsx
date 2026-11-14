import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Brand, ComingSoonButton } from './Shared'
import { useLanguage } from '../../language'
import LanguageSelect from '../app/LanguageSelect'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'About Us', href: '#about' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <div className="header-controls">
          <LanguageSelect />
        <button className="menu-toggle" type="button" aria-label={t(menuOpen ? 'Close menu' : 'Open menu')} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
        </div>
        <nav className={`navigation${menuOpen ? ' is-open' : ''}`} id="primary-navigation" aria-label={t('Main navigation')}>
          <div className="nav-links">
            {links.map(({ label, href }) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{t(label)}</a>)}
          </div>
          <div className="nav-actions">
            <a className="login-link" href="/login">{t('Login')}</a>
            <ComingSoonButton className="header-cta">Get Started</ComingSoonButton>
          </div>
        </nav>
      </div>
    </header>
  )
}
