import './App.css'
import Header from './components/sections/Header'
import Introduction from './components/sections/Introduction'
import AboutMe from './components/sections/AboutMe'
import Contact from './components/sections/Contact'
import Social from './components/sections/Social'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <div className="my-5">
        <a href="/">test</a>
      </div>
      <Header />
      <Introduction />
      <AboutMe />
      <Contact />
      <Social />
    </div>
  )
}

export default App
