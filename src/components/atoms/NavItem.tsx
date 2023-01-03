import { translate } from '@/common/translator'
import { NavItemProps } from '../../common/types'

const NavItem = ({ link, title, onClick }: NavItemProps) => {
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
