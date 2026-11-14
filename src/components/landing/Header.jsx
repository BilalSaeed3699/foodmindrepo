import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Brand, ComingSoonButton } from './Shared'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'About Us', href: '#about' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
        <nav className={`navigation${menuOpen ? ' is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
          <div className="nav-links">
            {links.map(({ label, href }) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </div>
          <div className="nav-actions">
            <button type="button" className="login-disabled" disabled title="Coming soon">Login <span>soon</span></button>
            <ComingSoonButton className="header-cta">Get Started</ComingSoonButton>
          </div>
        </nav>
      </div>
    </header>
  )
}
