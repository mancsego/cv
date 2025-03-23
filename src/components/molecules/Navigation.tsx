import { useState } from 'react'
import NavItem from '../atoms/NavItem'

import menuIcon from '@/assets/react.svg'

const NAV_ITEMS = [
  {
    title: 'introduction',
    link: '#root'
  },
  {
    title: 'about me',
    link: '#about-me'
  },
  {
    title: 'contact',
    link: '#contact'
  },
  {
    title: 'social',
    link: '#social'
  }
]

function Navigation() {
  const [open, setOpen] = useState(false)
  const handler = (open: boolean) => () => {
    setOpen(open)
  }

  const content = NAV_ITEMS.map(({ link, title }) => (
    <NavItem title={title} link={link} key={link} onClick={handler(false)} />
  ))
  return (
    <div className="md:hidden absolute bottom-0 left-0 right-0 bg-react-gray text-center border-t-2 border-secondary pointer-events-auto">
      {open && <div className="flex flex-col items-center">{content}</div>}
      <button onClick={handler(!open)} className="active:animate-spin py-2">
        <img src={menuIcon} alt="menu" width={36} height={34} />
      </button>
    </div>
  )
}

export default Navigation
