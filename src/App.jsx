import React from 'react'
import "./app.scss"
import Navbar from './components/navbar/Navbar'
import Test from './Test'
import About from './components/About/About'
import Parallax from './components/parallax/Parallax'
import Skills from './components/skills/Skills'
import Internship from './components/internship/Internship'
import Projects_Info from './components/projects_info/Projects_Info'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'


const App = () => {
  return (
    <div>
{/* <Cursor/> */}
      <section id="About">
        <Navbar/>  
        <About/>
      </section>
       <section id='Skills'><Skills type="skills"/></section>
      
     <section id='Internship'><Internship type="internship"/></section>
     <section id='Projects' ><Parallax/></section>
      <Projects_Info id='Projects'/>
      
       {/* <section id="Projects">Project1</section>
    /  <section>Project2</section> */}
      <section id='Contact'>
        <Contact/>
      </section> 

    

    </div>
  )
}

export default App