import { Plus } from 'lucide-react'
import { faqs } from '../../data/landingContent'
import { SectionHeading } from './Shared'

export default function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div><SectionHeading eyebrow="GOOD TO KNOW" title="Questions? We've got answers." description="A little more about what FoodMind is and what we’re working toward." /><p className="faq-note">Still curious? Keep an eye out for more updates.</p></div>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>{question}<Plus size={19} aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
