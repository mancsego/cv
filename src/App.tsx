import LazyComponent from '@/common/LazyComponent'
import IconSet from '@/components/molecules/IconSet.tsx'
import LanguageSelector from '@/components/molecules/LanguageSelector'
import AboutMe from '@/components/organisms/AboutMe'
import Header from '@/components/organisms/Header'
import Introduction from '@/components/organisms/Introduction'
import Overlay from '@/components/organisms/Overlay'
import { useCmsStore } from '@/store/cms'

const Contact = () => import('@/components/organisms/Contact')
const Social = () => import('@/components/organisms/Social')

function App() {
  const fetchData = useCmsStore((state) => state.fetch)

  void fetchData()

  return (
    <div className="container mx-auto md:px-10 relative">
      <IconSet />
      <LanguageSelector />
      <div>
        <Header />
        <main className="pb-8">
          <Introduction />
          <div className="px-2">
            <AboutMe />
            <LazyComponent factory={Contact} id="contact" delay={500} minHeight={650} />
            <LazyComponent factory={Social} id="social" delay={500} minHeight={160} />
          </div>
        </main>
        <Overlay />
      </div>
    </div>
  )
}

export default App
