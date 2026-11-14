import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { Brand } from './Shared'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand"><Brand /><p>A more thoughtful way to decide what’s on the menu. Made for real life, and all its appetites.</p>
            <div className="social-links" aria-label="Social profiles coming soon">
              <button type="button" disabled aria-label="Instagram, coming soon" title="Instagram coming soon"><Instagram size={17} aria-hidden="true" /></button>
              <button type="button" disabled aria-label="LinkedIn, coming soon" title="LinkedIn coming soon"><Linkedin size={17} aria-hidden="true" /></button>
              <button type="button" disabled aria-label="X, coming soon" title="X coming soon"><Twitter size={17} aria-hidden="true" /></button>
            </div>
          </div>
          <div className="footer-column"><h3>Product</h3><a href="#how-it-works">How It Works</a><a href="#features">Features</a><a href="#faq">FAQ</a></div>
          <div className="footer-column"><h3>Company</h3><a href="#about">About Us</a><span>Contact <small>Coming soon</small></span></div>
          <div className="footer-column"><h3>Legal</h3><span>Privacy Policy <small>Coming soon</small></span><span>Terms of Service <small>Coming soon</small></span></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} FoodMind. All rights reserved.</span><span>Made for more mindful moments.</span></div>
      </div>
    </footer>
  )
}
