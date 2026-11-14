import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Clock3, MessageCircle, Plus, Sparkles, Trash2 } from 'lucide-react'
import { useLanguage } from '../../language'

const STORAGE_KEY = 'foodmind-demo-conversations'
const prompts = ['What can I cook with the ingredients I have?', 'Suggest a quick weeknight dinner.', 'Give me a budget-friendly meal idea.']
const ideas = ['Herby chicken rice bowl', 'Creamy yogurt chicken', 'Spiced chicken & rice']

function createConversation(prompt = '') {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    title: prompt || 'New conversation',
    messages: prompt ? [{ role: 'user', text: prompt }, { role: 'assistant' }] : [],
  }
}

function readConversations() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed) || !parsed.every((item) => typeof item.id === 'string' && typeof item.title === 'string' && Array.isArray(item.messages) && item.messages.every((message) => message.role === 'assistant' || (message.role === 'user' && typeof message.text === 'string')))) {
      throw new Error('Invalid conversation history')
    }
    return parsed
  } catch (error) {
    console.error('Unable to read demo conversation history.', error)
    return null
  }
}

export default function Assistant() {
  const { t } = useLanguage()
  const [initial] = useState(() => {
    const saved = readConversations()
    let prompt = new URLSearchParams(window.location.search).get('prompt')
    try {
      prompt = sessionStorage.getItem('foodmind-demo-prompt') || prompt
    } catch (error) {
      console.error('Unable to read the demo prompt.', error)
    }
    prompt = prompt?.trim().slice(0, 1000)
    const newChat = prompt ? createConversation(prompt) : null
    const conversations = newChat ? [newChat, ...(saved || [])] : saved?.length ? saved : [createConversation()]
    return { conversations, error: saved === null, hadPrompt: Boolean(prompt) }
  })
  const [conversations, setConversations] = useState(initial.conversations)
  const [activeId, setActiveId] = useState(initial.conversations[0].id)
  const [input, setInput] = useState('')
  const [storageError, setStorageError] = useState(initial.error)
  const inputRef = useRef(null)
  const messagesRef = useRef(null)
  const active = conversations.find((conversation) => conversation.id === activeId)

  useEffect(() => {
    if (initial.hadPrompt) {
      window.history.replaceState(null, '', '/app/assistant')
      try {
        sessionStorage.removeItem('foodmind-demo-prompt')
      } catch (error) {
        console.error('Unable to clear the demo prompt.', error)
      }
    }
  }, [initial.hadPrompt])

  useEffect(() => {
    if (initial.error) return
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(conversations))
    } catch (error) {
      console.error('Unable to save demo conversation history.', error)
      // Storage errors must be visible to the user.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStorageError(true)
    }
  }, [conversations, initial.error])

  useEffect(() => {
    const container = messagesRef.current
    if (container) container.scrollTop = container.scrollHeight
  }, [active])

  function newChat() {
    const conversation = createConversation()
    setConversations((previous) => [conversation, ...previous])
    setActiveId(conversation.id)
    setInput('')
    inputRef.current?.focus()
  }

  function submit(event) {
    event.preventDefault()
    const message = input.trim()
    if (!message) return
    setConversations((previous) => previous.map((conversation) => conversation.id === activeId ? {
      ...conversation,
      title: conversation.messages.length ? conversation.title : message,
      messages: [...conversation.messages, { role: 'user', text: message }, { role: 'assistant' }],
    } : conversation))
    setInput('')
  }

  function deleteChat(id) {
    const remaining = conversations.filter((item) => item.id !== id)
    if (!remaining.length) remaining.push(createConversation())
    setConversations(remaining)
    if (id === activeId) setActiveId(remaining[0].id)
  }

  return (
    <div className="workspace-content assistant-workspace">
      <div className="assistant-page-heading"><div><p className="workspace-overline">{t('YOUR FOOD COMPANION')}</p><h1>{t('AI Food Assistant')}</h1><p>{t('A little inspiration for whatever is on your mind.')}</p></div><span className="demo-pill">{t('Demo workspace')}</span></div>
      {storageError && <p className="form-error" role="alert">{t('Conversation history could not be saved or loaded in this browser.')}</p>}
      <div className="assistant-layout">
        <aside className="conversation-sidebar">
          <button className="new-chat" onClick={newChat}><Plus size={17} />{t('New conversation')}</button>
          <p className="sidebar-label">{t('CONVERSATION HISTORY')}</p>
          <div className="conversation-list">{conversations.map((conversation) => <div className={`conversation-row${conversation.id === activeId ? ' selected' : ''}`} key={conversation.id}><button className="conversation-select" aria-current={conversation.id === activeId ? 'true' : undefined} onClick={() => { setActiveId(conversation.id); setInput('') }}><MessageCircle size={16} /><span>{conversation.title === 'New conversation' ? t(conversation.title) : conversation.title}</span></button><button className="delete-chat" aria-label={`${t('Delete conversation')}: ${conversation.title === 'New conversation' ? t(conversation.title) : conversation.title}`} onClick={() => deleteChat(conversation.id)}><Trash2 size={15} /></button></div>)}</div>
          <p className="history-note">{t('History is stored in this browser tab for this demo session.')}</p>
        </aside>
        <section className="chat-workspace" aria-label={t('AI Food Assistant')}>
          <div className="chat-workspace-header"><span className="assistant-avatar"><Sparkles size={17} /></span><div><strong>{t('FoodMind Assistant')}</strong><span>{t('Demo responses')}</span></div><span className="preview-label">{t('Preview')}</span></div>
          <div className="chat-messages" aria-live="polite" ref={messagesRef}>
            <div className="chat-greeting"><span className="assistant-avatar"><Sparkles size={16} /></span><div><strong>{t('Hello! What can I help you with?')}</strong><p>{t('Tell me what you’re craving or what’s in your kitchen.')}</p><small>{t('Illustrative responses only. This is not a live AI service.')}</small></div></div>
            {active.messages.map((message, index) => message.role === 'user' ? <div className="workspace-user-message" key={index}><bdi>{message.text}</bdi></div> : <div className="workspace-assistant-message" key={index}><span className="assistant-avatar"><Sparkles size={16} /></span><div><p>{t('Here are some sample ideas to inspire your next meal. These are not personalized AI results.')}</p><div className="response-cards">{ideas.map((idea) => <div className="response-card" key={idea}><span className="recipe-card-icon"><Sparkles size={16} /></span><strong>{t(idea)}</strong><span><Clock3 size={13} />{t('30 min')}</span></div>)}</div></div></div>)}
          </div>
          <div className="chat-composer">
            <div className="suggested-prompts" aria-label={t('Suggested prompts')}>{prompts.map((prompt) => <button key={prompt} onClick={() => { setInput(t(prompt)); inputRef.current?.focus() }}>{t(prompt)}</button>)}</div>
            <form className="prompt-form composer-form" onSubmit={submit}><label className="sr-only" htmlFor="assistant-input">{t('Ask about food')}</label><input ref={inputRef} id="assistant-input" value={input} onChange={(event) => setInput(event.target.value)} placeholder={t('Ask anything about food...')} maxLength={1000} /><button type="submit" disabled={!input.trim()} aria-label={t('Send message')}><ArrowUp size={19} /></button></form>
            <p>{t('Demo responses are examples, not dietary or medical advice.')}</p>
          </div>
        </section>
      </div>
    </div>
  )
}
