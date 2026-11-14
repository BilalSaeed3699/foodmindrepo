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
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
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
