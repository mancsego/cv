import { useTranslations } from '@/hooks/translator'

function Header() {
  const translate = useTranslations()

  return (
    <header className="hidden md:flex justify-around py-5 text-2xl">
      <hr className="divider" />
      <a className="mx-2 link" href="#about-me">
        {translate('about me')}
      </a>
      <a className="mx-2 link" href="#contact">
        {translate('contact')}
      </a>
      <a className="mx-2 link" href="#social">
        {translate('social')}
      </a>
    </header>
  )
}

export default Header
