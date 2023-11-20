import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import ProjectsContainer from './components/projectsContainer'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

// import Home from './components/Home'




function App() {

  const [count, setCount] = useState(0);


  // setCount(5)


  return (
    <>
      <Header />
      <About/>
      <ProjectsContainer/>
      <Contact/>
      <Resume />
      <Footer/>
    </>
  )
}

export default App
