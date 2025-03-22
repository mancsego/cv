import { useTranslations } from '@/hooks/translator'

function NavItem({ link, title, onClick }: { link: string; title: string; onClick: () => void }) {
  const translate = useTranslations()

  return (
    <a
      href={link}
      className="py-2 link"
      onClick={() => {
        onClick()
      }}>
      {translate(title)}
    </a>
  )
}

export default NavItem
