import { ArrowUpRight, Check, Clock3, Sparkles } from 'lucide-react'
import { recipes } from '../../data/landingContent'
import { AssistantAvatar } from './Shared'

export default function ChatPreview({ compact = false }) {
  return (
    <div className={`chat-preview${compact ? ' chat-compact' : ''}`} aria-label="Illustrative FoodMind assistant conversation">
      <div className="chat-header">
        <div className="chat-identity">
          <AssistantAvatar />
          <div><strong>FoodMind Assistant</strong><span>Here to help you eat well</span></div>
        </div>
        <span className="preview-label"><span /> Preview</span>
      </div>
      <div className="chat-body">
        <div className="chat-date">A LITTLE INSPIRATION FOR YOU</div>
        <div className="user-message">I have chicken, rice and yogurt. What can I cook in 30 minutes?</div>
        <div className="assistant-message">
          <AssistantAvatar />
          <div className="assistant-content">
            <p>Here are three ideas based on your ingredients, time and preferences.</p>
            <div className="recipe-list">
              {recipes.map(({ icon: Icon, name, detail, time }) => (
                <div className="recipe-card" key={name}>
                  <span className="recipe-icon"><Icon size={19} aria-hidden="true" /></span>
                  <div className="recipe-info"><strong>{name}</strong><span>{detail}</span></div>
                  <span className="recipe-time"><Clock3 size={12} aria-hidden="true" /> {time}</span>
                  <ArrowUpRight className="recipe-arrow" size={16} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {!compact && (
          <div className="chat-prompts">
            <span>MORE TO EXPLORE</span>
            <div><span>Make it budget-friendly</span><span>Something vegetarian</span></div>
          </div>
        )}
      </div>
      <div className="chat-input-preview" aria-hidden="true">
        <span>Ask anything about food...</span>
        <span className="chat-send"><Sparkles size={16} /></span>
      </div>
      <div className="chat-footnote"><Check size={12} aria-hidden="true" /> An example conversation, not a live chat</div>
    </div>
  )
}
