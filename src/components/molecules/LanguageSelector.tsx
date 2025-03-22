import { useState } from 'react'

const LANGUAGES = ['en', 'de', 'hu']

function Languages({ isOpen, handler }: { isOpen: boolean; handler: () => void }) {
  const searchParams = new URLSearchParams(location.search)
  const currentLanguage = searchParams.get('lang') ?? 'en'

  return LANGUAGES.map((lang) => {
    const label = lang.toUpperCase()

    if (currentLanguage === lang)
      return (
        <button className="btn-rounded absolute active" onClick={handler} key={lang}>
          {label}
        </button>
      )

    return (
      <a
        href={`?lang=${lang}`}
        className={
          isOpen
            ? 'absolute translate-x-10 first-of-type:-translate-y-8 last-of-type:translate-y-8 btn-rounded'
            : 'absolute btn-rounded'
        }
        rel="noreferrer"
        key={lang}>
        {label}
      </a>
    )
  })
}

function LanguageSelector() {
  const [open, setOpen] = useState(false)
  const handler = () => {
    setOpen(!open)
  }

  return (
    <div className="absolute top-14 left-8 md:top-28 md:left-14">
      <Languages handler={handler} isOpen={open} />
    </div>
  )
}

export default LanguageSelector
