import { useState } from 'react'
import { Bell, ChevronDown, LayoutDashboard, LogOut, Menu, MessageCircle, X } from 'lucide-react'
import { Brand } from '../landing/Shared'
import LanguageSelect from './LanguageSelect'
import { endSession, readSession } from '../../demoSession'
import { useLanguage } from '../../language'

export default function AppLayout({ children }) {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [error, setError] = useState('')
  const session = readSession()
  const currentPath = window.location.pathname

  function logout() {
    try {
      endSession()
      window.location.assign('/')
    } catch (storageError) {
      console.error('Unable to end demo session.', storageError)
      setError(t('Unable to end the demo session. Please try again.'))
    }
  }

  if (!session) {
    return <main className="access-page"><Brand /><div className="auth-card"><h1>{t('Explore the FoodMind demo')}</h1><p>{t('Start a local demo session to view your workspace. This is not a real account.')}</p><a className="workspace-button" href="/login">{t('Continue to demo')}</a></div></main>
  }

  return (
    <div className="workspace">
      <a className="skip-link" href="#main-content">{t('Skip to content')}</a>
      {menuOpen && <button className="sidebar-backdrop" aria-label={t('Close menu')} onClick={() => setMenuOpen(false)} />}
      <aside className={`workspace-sidebar${menuOpen ? ' sidebar-open' : ''}`} id="workspace-navigation">
        <div className="sidebar-top"><Brand /><button className="sidebar-close" onClick={() => setMenuOpen(false)} aria-label={t('Close menu')}><X size={20} /></button></div>
        <p className="sidebar-label">{t('WORKSPACE')}</p>
        <nav aria-label={t('Main navigation')} className="sidebar-links">
          <a href="/app" className={currentPath === '/app' ? 'active' : ''} aria-current={currentPath === '/app' ? 'page' : undefined}><LayoutDashboard size={19} />{t('Dashboard')}</a>
          <a href="/app/assistant" className={currentPath === '/app/assistant' ? 'active' : ''} aria-current={currentPath === '/app/assistant' ? 'page' : undefined}><MessageCircle size={19} />{t('AI Food Assistant')}</a>
        </nav>
        <div className="sidebar-bottom"><span className="demo-pill">{t('Demo workspace')}</span><p>{t('Your food companion is just getting started.')}</p><a href="/">{t('Back to home')}</a></div>
      </aside>
      <div className="workspace-main">
        <header className="workspace-header">
          <button className="workspace-menu" onClick={() => setMenuOpen(true)} aria-label={t('Open menu')} aria-expanded={menuOpen} aria-controls="workspace-navigation"><Menu size={21} /></button>
          <span className="header-page-title">{t(currentPath === '/app' ? 'Dashboard' : 'AI Food Assistant')}</span>
          <div className="workspace-header-actions">
            <LanguageSelect />
            <details className="header-popover"><summary aria-label={t('Notifications')}><Bell size={19} /></summary><div className="popover-content"><strong>{t('Notifications')}</strong><p>{t('No new notifications.')}</p></div></details>
            <details className="header-popover profile-popover"><summary aria-label={t('User profile menu')}><span className="profile-avatar">{session.name.charAt(0).toUpperCase()}</span><span className="profile-name">{session.name}</span><ChevronDown size={15} /></summary><div className="popover-content"><strong>{session.name}</strong><p className="profile-email">{session.email}</p><span className="demo-pill">{t('Demo only')}</span><button onClick={logout}><LogOut size={15} />{t('End demo session')}</button></div></details>
          </div>
        </header>
        {error && <p className="form-error workspace-error" role="alert">{error}</p>}
        {children}
      </div>
    </div>
  )
}
