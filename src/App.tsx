import Header from './components/organisms/Header'
import Introduction from './components/organisms/Introduction'
import AboutMe from './components/organisms/AboutMe'
import Contact from './components/organisms/Contact'
import Social from './components/organisms/Social'
import Iconset from './components/molecules/Iconset'
import { useAppDispatch, useAppSelector } from './store'
import { fetchData, selectLoaded } from './store/features/cmsSlice'
import { useEffect } from 'react'
import Overlay from './components/organisms/Overlay'

const App = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const loaded = useAppSelector(selectLoaded)
  useEffect(() => {
    void dispatch(fetchData())
  }, [])

  return (
    <div className="container mx-auto px-2 md:px-10 relative">
      <Iconset />
      {loaded ? (
        <div>
          <Header />
          <Introduction />
          <AboutMe />
          <Contact />
          <Social />
          <Overlay />
        </div>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="loader"></div>
          <h2 className="pt-5">Loading</h2>
        </div>
      )}
    </div>
  )
}

export default App
