import Header from './components/landing/Header'
import Hero from './components/landing/Hero'
import ProblemSolution from './components/landing/ProblemSolution'
import HowItWorks from './components/landing/HowItWorks'
import Features from './components/landing/Features'
import AssistantPreview from './components/landing/AssistantPreview'
import Personalization from './components/landing/Personalization'
import WhyFoodMind from './components/landing/WhyFoodMind'
import FAQ from './components/landing/FAQ'
import FinalCTA from './components/landing/FinalCTA'
import Footer from './components/landing/Footer'
import { useLanguage } from './language'
import AuthPage from './components/auth/AuthPage'
import AppLayout from './components/app/AppLayout'
import Dashboard from './components/app/Dashboard'
import Assistant from './components/app/Assistant'
import './App.css'
import './workspace.css'

function App() {
  const { t } = useLanguage()
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (['/login', '/register', '/forgot-password', '/reset-password'].includes(path)) {
    return <AuthPage page={path.slice(1)} />
  }
  if (path === '/app' || path === '/app/assistant') {
    return <AppLayout><main id="main-content">{path === '/app' ? <Dashboard /> : <Assistant />}</main></AppLayout>
  }
  if (path !== '/') {
    return <main className="not-found"><h1>{t('Page not found')}</h1><a href="/">{t('Back to home')}</a></main>
  }
  return (
    <>
      <a className="skip-link" href="#main-content">{t('Skip to content')}</a>
      <Header />
      <main id="main-content">
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <AssistantPreview />
        <Personalization />
        <WhyFoodMind />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
