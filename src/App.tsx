import { useAppDispatch, useAppSelector } from './store'
import { fetchData, selectLoaded } from './store/features/cmsSlice'
import { useEffect } from 'react'

import Header from './components/organisms/Header'
import Introduction from './components/organisms/Introduction'
import Iconset from './components/molecules/Iconset'
import Overlay from './components/organisms/Overlay'
import LazyComponent from './common/LazyComponent'
import AboutMe from './components/organisms/AboutMe'
import LanguageSelector from './components/molecules/LanguageSelector'

const Contact = () => import('./components/organisms/Contact')
const Social = () => import('./components/organisms/Social')

const App = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const loaded = useAppSelector(selectLoaded)
  useEffect(() => {
    void dispatch(fetchData())
  }, [])

  return (
    <div className="container mx-auto px-2 md:px-10 relative">
      <Iconset />
      <LanguageSelector />
      {loaded ? (
        <div>
          <Header />
          <main>
            <Introduction />
            <AboutMe />
          </main>
          <LazyComponent factory={Contact} id="contact" delay={500} />
          <LazyComponent factory={Social} id="social" delay={2000} />
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
