import './App.css'
import Header from './components/organisms/Header'
import Introduction from './components/organisms/Introduction'
import AboutMe from './components/organisms/AboutMe'
import Contact from './components/organisms/Contact'
import Social from './components/organisms/Social'
import Iconset from './components/molecules/Iconset'
import { useAppDispatch } from './store'
import { fetchData } from './store/features/cmsSlice'
import { useEffect } from 'react'

const App = (): JSX.Element => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(fetchData())
  }, [])

  return (
    <div className="container mx-auto px-2 md:px-10">
      <div></div>
      <Iconset />
      <Header />
      <Introduction />
      <AboutMe />
      <Contact />
      <Social />
    </div>
  )
}

export default App
