import './App.css'
import Header from './components/organisms/Header'
import Introduction from './components/organisms/Introduction'
import AboutMe from './components/organisms/AboutMe'
import Contact from './components/organisms/Contact'
import Social from './components/organisms/Social'

const App = (): JSX.Element => {
  return (
    <div className="container mx-auto px-2 md:px-10">
      <Header />
      <Introduction />
      <AboutMe />
      <Contact />
      <Social />
    </div>
  )
}

export default App
