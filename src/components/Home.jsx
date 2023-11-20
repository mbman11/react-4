
// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import ProjectsContainer from './components/projectsContainer'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

function Home (){
  return(
  
  <div>
    <Header />
    <About/>
    <ProjectsContainer/>
    <Contact/>
    <Resume />
    <Footer/>
  </div>

  )
}


export default Home;