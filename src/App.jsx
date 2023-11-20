import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import ProjectsContainer from './components/projectsContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About/>
      <ProjectsContainer/>
    </>
  )
}

export default App
