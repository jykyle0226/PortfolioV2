import React from 'react'
import Folders from '../Component/Folders'
import Navbar from '../Component/Navbar'
import About from '../Component/About'
import Projects from '../Component/Projects'

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='ProjectPage'>
        <Projects></Projects>
        <Folders></Folders>
      </div>
      
    </div>
  )
}


export default HomePage