import { NavItemProps } from '../../common/types'

const NavItem = ({ link, title }: NavItemProps) => {
  return (
    <a href={link} className="py-2">
      {title}
    </a>
  )
}

export default NavItem
