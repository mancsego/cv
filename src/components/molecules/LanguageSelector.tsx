import { useState } from 'react'
import './LanguageSelector.css'

const LANGUAGES = ['en', 'de', 'hu']

const LanguageSelector = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  const options = LANGUAGES.map((lang) => {
    const label = lang.toUpperCase()
    const elem = location.search.includes(lang) ? (
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
        className={open ? 'open language' : 'language'}
        rel="noreferrer"
        key={lang}
      >
        {label}
      </a>
    )

    return elem
  })
  return (
    <div className="absolute top-14 left-8 md:top-28 md:left-14">{options}</div>
  )
}

export default LanguageSelector
