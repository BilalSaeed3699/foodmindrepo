import { Languages } from 'lucide-react'
import { useLanguage } from '../../language'

export default function LanguageSelect() {
  const { language, setLanguage, t } = useLanguage()
  return (
    <label className="language-control">
      <Languages size={17} aria-hidden="true" />
      <span className="sr-only">{t('Language')}</span>
      <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label={t('Language')}>
        <option value="en" lang="en">English</option>
        <option value="ar" lang="ar">العربية</option>
        <option value="ur" lang="ur">اردو</option>
      </select>
    </label>
  )
}
