import { useEffect, useState } from 'react'
import { messages } from './data/translations'
import { workspaceMessages } from './data/workspaceTranslations'
import { LanguageContext } from './language'

const supportedLanguages = ['en', 'ar', 'ur']

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('foodmind-language')
      return supportedLanguages.includes(saved) ? saved : 'en'
    } catch (error) {
      console.warn('Unable to read the saved language preference.', error)
      return 'en'
    }
  })

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl'
    const title = 'FoodMind | A smarter way to decide what to eat'
    const description = 'Meet FoodMind, your AI-powered companion for more thoughtful food decisions.'
    document.title = language === 'en' ? title : messages[language][title]
    document.querySelector('meta[name="description"]').content = language === 'en' ? description : messages[language][description]
    try {
      localStorage.setItem('foodmind-language', language)
    } catch (error) {
      console.warn('Unable to save the language preference.', error)
    }
  }, [language])

  function t(text) {
    return language === 'en' ? text : workspaceMessages[language][text] ?? messages[language][text] ?? text
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
