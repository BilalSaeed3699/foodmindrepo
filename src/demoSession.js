const SESSION_KEY = 'foodmind-demo-session'

export function readSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const session = JSON.parse(raw)
    return typeof session.name === 'string' && typeof session.email === 'string' ? session : null
  } catch (error) {
    console.error('Unable to read demo session.', error)
    return null
  }
}

export function startSession(name, email) {
  sessionStorage.removeItem('foodmind-demo-conversations')
  sessionStorage.removeItem('foodmind-demo-prompt')
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ name, email }))
}

export function endSession() {
  sessionStorage.removeItem(SESSION_KEY)
  sessionStorage.removeItem('foodmind-demo-conversations')
  sessionStorage.removeItem('foodmind-demo-prompt')
}
