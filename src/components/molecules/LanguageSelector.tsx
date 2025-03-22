import { useState } from 'react'
import './LanguageSelector.css'

const LANGUAGES = ['en', 'de', 'hu']

function LanguageSelector() {
  const [open, setOpen] = useState(false)

  let currentLanguage = location.search.includes('lang') ? null : 'en'

  const options = LANGUAGES.map((lang) => {
    const label = lang.toUpperCase()
    currentLanguage ||= location.search.includes(lang) ? lang : null
    const active = currentLanguage === lang

    const elem = active ? (
      <button
        className="language active"
        onClick={() => {
          setOpen(!open)
        }}
        key={lang}
      >
        {label}
      </button>
    ) : (
      <a
        href={`?lang=${lang}`}
        className={open ? 'show language' : 'language'}
        rel="noreferrer"
        key={lang}
      >
        {label}
      </a>
    )

    return elem
  })
  return <div className="absolute top-14 left-8 md:top-28 md:left-14">{options}</div>
}

export default LanguageSelector
