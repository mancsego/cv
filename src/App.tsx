import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/sections/Header'
import Introduction from './components/sections/Introduction'
import AboutMe from './components/sections/AboutMe'
import Contact from './components/sections/Contact'
import Social from './components/sections/Social'

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <AboutMe/>
      <Contact/>
      <Social/>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='pt-10 rte'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
