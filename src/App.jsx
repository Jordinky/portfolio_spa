import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Studies from './components/Studies'
import Contact from './components/Contact'
import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="app-container">
      <Nav />
      <button className="theme-toggle fixed-toggle sharp-corners" onClick={toggleTheme}>
        {theme === 'dark' ? '☀ Light' : '☾ Dark'}
      </button>
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Studies />
        <Contact />
      </main>
    </div>
  )
}

export default App
