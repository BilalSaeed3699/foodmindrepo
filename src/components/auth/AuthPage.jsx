import { useState } from 'react'
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { Brand } from '../landing/Shared'
import LanguageSelect from '../app/LanguageSelect'
import { startSession } from '../../demoSession'
import { useLanguage } from '../../language'

const pageText = {
  login: { title: 'Welcome back', subtitle: 'A little more ease is just around the corner.', action: 'Continue to demo' },
  register: { title: 'Make food decisions easier', subtitle: 'Start exploring your personal food companion.', action: 'Start the demo' },
  'forgot-password': { title: 'Forgot your password?', subtitle: 'Preview how a password reset request would work.', action: 'Preview reset request' },
  'reset-password': { title: 'Set a new password', subtitle: 'Preview the password reset experience.', action: 'Preview password reset' },
}

export default function AuthPage({ page }) {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [complete, setComplete] = useState(false)
  const isRegister = page === 'register'
  const needsPassword = page !== 'forgot-password'
  const needsConfirmation = isRegister || page === 'reset-password'

  function submit(event) {
    event.preventDefault()
    setError('')
    if (needsConfirmation && password !== confirm) {
      setError(t('Passwords do not match.'))
      return
    }
    if (isRegister && !name.trim()) {
      setError(t('Please enter your name.'))
      return
    }
    if (page === 'forgot-password' || page === 'reset-password') {
      setComplete(true)
      return
    }
    try {
      startSession(isRegister ? name.trim() : email.split('@')[0], email.trim())
      window.location.assign('/app')
    } catch (storageError) {
      console.error('Unable to start the demo session.', storageError)
      setError(t('Unable to start the demo. Please enable browser storage and try again.'))
    }
  }

  return (
    <div className="auth-page">
      <header className="auth-header"><Brand /><LanguageSelect /></header>
      <main className="auth-main">
        <div className="auth-intro">
          <span className="workspace-icon"><Sparkles size={22} aria-hidden="true" /></span>
          <p className="eyebrow">{t('YOUR PERSONAL FOOD COMPANION')}</p>
          <h1>{t('A little more mindful, every day.')}</h1>
          <p>{t('Discover food ideas that fit your life, one conversation at a time.')}</p>
          <div className="auth-note"><ShieldCheck size={19} aria-hidden="true" /><span>{t('Demo only. No account is created and no password is saved. Please do not use a real password.')}</span></div>
        </div>
        <div className="auth-card">
          <a className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" /> {t('Back to home')}</a>
          <h2>{t(pageText[page].title)}</h2>
          <p className="muted">{t(pageText[page].subtitle)}</p>
          <div className="demo-banner">{t('Demo only. No account is created and no password is saved. Please do not use a real password.')}</div>
          {complete ? (
            <div className="auth-success" role="status">
              <ShieldCheck size={25} aria-hidden="true" />
              <p>{page === 'forgot-password' ? t('This is a demo. No email was sent and no reset link was generated.') : t('This is a demo. No password was changed.')}</p>
              {page === 'forgot-password' && <a className="form-link" href="/reset-password">{t('Preview the reset password screen')}</a>}
              <a className="workspace-button" href="/login">{t('Back to login')}</a>
            </div>
          ) : (
            <form className="auth-form" onSubmit={submit}>
              {isRegister && <label>{t('Name')}<input autoComplete="name" required maxLength={60} value={name} onChange={(event) => setName(event.target.value)} /></label>}
              {page !== 'reset-password' && <label>{t('Email address')}<input type="email" autoComplete="email" required maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} /></label>}
              {needsPassword && <label>{t(page === 'reset-password' ? 'New password' : 'Password')}<input type="password" autoComplete={page === 'login' ? 'current-password' : 'new-password'} required minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} /></label>}
              {needsConfirmation && <label>{t('Confirm password')}<input type="password" autoComplete="new-password" required minLength={8} value={confirm} onChange={(event) => setConfirm(event.target.value)} /></label>}
              {page === 'login' && <a className="form-link" href="/forgot-password">{t('Forgot password?')}</a>}
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="workspace-button" type="submit">{t(pageText[page].action)} <ArrowRight size={17} aria-hidden="true" /></button>
            </form>
          )}
          {page === 'login' && <p className="auth-switch">{t('New to FoodMind?')} <a href="/register">{t('Create an account')}</a></p>}
          {isRegister && <p className="auth-switch">{t('Already have an account?')} <a href="/login">{t('Login')}</a></p>}
          {page === 'forgot-password' && !complete && <p className="auth-switch"><a href="/login">{t('Back to login')}</a></p>}
        </div>
      </main>
    </div>
  )
}
