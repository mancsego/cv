import Divider from '../atoms/Divider'

const Header = (): JSX.Element => {
  return (
    <div className="hidden md:flex justify-around py-5 text-2xl">
      <Divider />
      <a className="mx-2 link" href="#about-me">
        about me
      </a>
      <a className="mx-2 link" href="contact">
        contact
      </a>
      <a className="mx-2 link" href="social">
        social
      </a>
    </div>
  )
}

export default Header
