import { useEffect, useState } from 'react'

const LANGUAGES = ['en', 'de', 'hu']

function Languages({
  isOpen,
  current,
  handler
}: {
  isOpen: boolean
  current: string
  handler: () => void
}) {
  return LANGUAGES.map((lang) => {
    if (current === lang)
      return (
        <button className="btn-rounded absolute active uppercase z-20" onClick={handler} key={lang}>
          {lang}
        </button>
      )

    return (
      <a
        href={`?lang=${lang}`}
        className={
          isOpen
            ? 'absolute translate-x-10 first-of-type:-translate-y-8 last-of-type:translate-y-8 btn-rounded uppercase'
            : 'absolute btn-rounded uppercase'
        }
        rel="noreferrer"
        key={lang}>
        {lang}
      </a>
    )
  })
}

function LanguageSelector() {
  const [open, setOpen] = useState<boolean>(false)
  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null)
  const handler = () => {
    setOpen(!open)
  }

  useEffect(() => {
    ;(async () => {
      const { getLang } = await import('@/common/backend')
      setCurrentLanguage(getLang())
    })()
  })

  const elem = currentLanguage ? (
    <Languages handler={handler} isOpen={open} current={currentLanguage!} />
  ) : (
    <div className="loading btn-rounded" />
  )
  return <div className="absolute top-14 left-8 md:top-28 md:left-14 z-10">{elem}</div>
}

export default LanguageSelector
