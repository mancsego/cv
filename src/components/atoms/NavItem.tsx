import { NavItemProps } from '@/common/types'
import { useTranslations } from '@/hooks/translator'

function NavItem({ link, title, onClick }: NavItemProps) {
  const translate = useTranslations()

  console.log(link)
  return (
    <a
      href={link}
      className="py-2 link"
      onClick={() => {
        onClick()
      }}
    >
      {translate(title)}
    </a>
  )
}

export default NavItem
