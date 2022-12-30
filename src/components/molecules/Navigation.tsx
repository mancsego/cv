import { useState } from 'react'
import NavItem from '../atoms/NavItem'

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const items = [
    {
      title: 'about me',
      link: '#about-me',
    },
    {
      title: 'contact',
      link: '#contact',
    },
    {
      title: 'social',
      link: '#social',
    },
  ]
  const content = items.map(({ link, title }) => (
    <NavItem
      title={title}
      link={link}
      key={link}
      onClick={() => setOpen(false)}
    />
  ))
  return (
    <div className="md:hidden absolute bottom-0 left-0 right-0 bg-react-gray text-center">
      {open && <div className="flex flex-col items-center">{content}</div>}
      <button
        onClick={() => setOpen(!open)}
        className="active:animate-spin py-2"
      >
        <img className="" src="/src/assets/react.svg" />
      </button>
    </div>
  )
}

export default Navigation
