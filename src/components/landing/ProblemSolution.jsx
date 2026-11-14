import { problems } from '../../data/landingContent'
import { IconCard, SectionHeading } from './Shared'

export default function ProblemSolution() {
  return (
    <section className="section problems-section">
      <div className="container">
        <SectionHeading eyebrow="SOUND FAMILIAR?" title="Eating decisions shouldn't be complicated." description="From the daily “what’s for dinner?” to making the most of what you have, FoodMind is here to make it simpler." centered />
        <div className="card-grid three-columns">
          {problems.map((problem) => <IconCard key={problem.title} {...problem} />)}
        </div>
      </div>
    </section>
  )
}
