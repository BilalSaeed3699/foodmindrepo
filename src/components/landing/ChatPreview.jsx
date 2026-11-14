import { ArrowUpRight, Check, Clock3, Sparkles } from 'lucide-react'
import { recipes } from '../../data/landingContent'
import { AssistantAvatar } from './Shared'
import { useLanguage } from '../../language'

export default function ChatPreview({ compact = false }) {
  const { t } = useLanguage()
  return (
    <div className={`chat-preview${compact ? ' chat-compact' : ''}`} aria-label={t('Illustrative FoodMind assistant conversation')}>
      <div className="chat-header">
        <div className="chat-identity">
          <AssistantAvatar />
          <div><strong>{t('FoodMind Assistant')}</strong><span>{t('Here to help you eat well')}</span></div>
        </div>
        <span className="preview-label"><span /> {t('Preview')}</span>
      </div>
      <div className="chat-body">
        <div className="chat-date">{t('A LITTLE INSPIRATION FOR YOU')}</div>
        <div className="user-message">{t('I have chicken, rice and yogurt. What can I cook in 30 minutes?')}</div>
        <div className="assistant-message">
          <AssistantAvatar />
          <div className="assistant-content">
            <p>{t('Here are three ideas based on your ingredients, time and preferences.')}</p>
            <div className="recipe-list">
              {recipes.map(({ icon: Icon, name, detail, time }) => (
                <div className="recipe-card" key={name}>
                  <span className="recipe-icon"><Icon size={19} aria-hidden="true" /></span>
                  <div className="recipe-info"><strong>{t(name)}</strong><span>{t(detail)}</span></div>
                  <span className="recipe-time"><Clock3 size={12} aria-hidden="true" /> {t(time)}</span>
                  <ArrowUpRight className="recipe-arrow" size={16} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {!compact && (
          <div className="chat-prompts">
            <span>{t('MORE TO EXPLORE')}</span>
            <div><span>{t('Make it budget-friendly')}</span><span>{t('Something vegetarian')}</span></div>
          </div>
        )}
      </div>
      <div className="chat-input-preview" aria-hidden="true">
        <span>{t('Ask anything about food...')}</span>
        <span className="chat-send"><Sparkles size={16} /></span>
      </div>
      <div className="chat-footnote"><Check size={12} aria-hidden="true" /> {t('An example conversation, not a live chat')}</div>
    </div>
  )
}
