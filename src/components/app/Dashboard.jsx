import { ArrowRight, CalendarDays, Clock3, CookingPot, MessageCircle, Plus, Salad, ShoppingBasket, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { readSession } from '../../demoSession'
import { useLanguage } from '../../language'

const cards = [
  { icon: Salad, name: 'Herby chicken rice bowl', tag: '25 min', detail: 'Fresh, satisfying & simple' },
  { icon: CookingPot, name: 'Creamy yogurt chicken', tag: '30 min', detail: 'A cozy one-pan favorite' },
  { icon: Sparkles, name: 'Spiced chicken & rice', tag: '30 min', detail: 'Big flavor, little fuss' },
]

export default function Dashboard() {
  const { t } = useLanguage()
  const session = readSession()
  const [prompt, setPrompt] = useState('')
  const [error, setError] = useState('')

  function submitPrompt(event) {
    event.preventDefault()
    const text = prompt.trim()
    if (!text) return
    try {
      sessionStorage.setItem('foodmind-demo-prompt', text)
      window.location.assign('/app/assistant')
    } catch (storageError) {
      console.error('Unable to open the assistant with the prompt.', storageError)
      setError(t('Unable to open the assistant. Please enable browser storage and try again.'))
    }
  }

  return (
    <div className="workspace-content dashboard">
      <div className="dashboard-welcome"><div><p className="workspace-overline">{t('YOUR FOOD, YOUR WAY')}</p><h1>{t('Welcome back')}, <bdi>{session.name}</bdi>.</h1><p>{t('Let’s make your next meal an easy decision.')}</p></div><span className="demo-pill">{t('Demo workspace')}</span></div>
      <section className="dashboard-prompt">
        <div><span className="workspace-icon light-icon"><Sparkles size={20} /></span><p className="workspace-overline">{t('YOUR FOOD COMPANION')}</p><h2>{t('What are you in the mood for?')}</h2><p>{t('Tell us what you have, what you love, or how much time you have.')}</p></div>
        <form className="prompt-form" onSubmit={submitPrompt}><label className="sr-only" htmlFor="dashboard-prompt">{t('Ask about food')}</label><input id="dashboard-prompt" value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder={t('Ask anything about food...')} maxLength={1000} /><button type="submit" disabled={!prompt.trim()} aria-label={t('Send message')}><ArrowRight size={19} /></button></form>
        {error && <p className="prompt-error" role="alert">{error}</p>}
        <span className="prompt-disclaimer">{t('Illustrative responses only. This is not a live AI service.')}</span>
      </section>
      <div className="dashboard-columns">
        <div className="dashboard-primary">
          <section><div className="workspace-section-heading"><div><p className="workspace-overline">{t('A LITTLE INSPIRATION')}</p><h2>{t("Today's recommendations")}</h2></div><span className="sample-label">{t('Sample ideas')}</span></div>
            <div className="dashboard-recipes">{cards.map(({ icon: Icon, name, tag, detail }) => <article className="dashboard-recipe" key={name}><span className="recipe-card-icon"><Icon size={22} /></span><span className="sample-label">{t(tag)}</span><h3>{t(name)}</h3><p>{t(detail)}</p><a href={`/app/assistant?${new URLSearchParams({ prompt: name })}`}>{t('Ask about this meal')} <ArrowRight size={15} /></a></article>)}</div>
          </section>
          <section className="recent-section"><div className="workspace-section-heading"><div><p className="workspace-overline">{t('PICK UP WHERE YOU LEFT OFF')}</p><h2>{t('Recent recipes')}</h2></div></div><div className="empty-card"><span className="empty-icon"><CookingPot size={20} /></span><div><strong>{t('No recent recipes yet')}</strong><p>{t('Your recently explored recipes will appear here when the feature is available.')}</p></div></div></section>
        </div>
        <div className="dashboard-aside">
          <section className="workspace-panel"><div className="workspace-section-heading"><h2>{t('Quick actions')}</h2></div><a className="quick-action" href="/app/assistant"><span><MessageCircle size={18} /></span><div><strong>{t('Ask FoodMind')}</strong><small>{t('Start a conversation')}</small></div><ArrowRight size={15} /></a><a className="quick-action" href={`/app/assistant?${new URLSearchParams({ prompt: 'What can I cook with the ingredients I have?' })}`}><span><ShoppingBasket size={18} /></span><div><strong>{t('Use my ingredients')}</strong><small>{t('Find ideas for your kitchen')}</small></div><ArrowRight size={15} /></a></section>
          <section className="workspace-panel meal-overview"><div className="workspace-section-heading"><h2>{t('Meal overview')}</h2><CalendarDays size={18} /></div><div className="meal-empty"><span className="empty-icon"><Clock3 size={20} /></span><strong>{t('A fresh start')}</strong><p>{t('Meal planning is coming soon. Your planned meals will appear here.')}</p><a href="/app/assistant"><Plus size={15} />{t('Explore meal ideas')}</a></div></section>
        </div>
      </div>
    </div>
  )
}
