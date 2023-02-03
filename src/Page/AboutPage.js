import React from 'react'
import Folders from '../Component/Folders'
import Navbar from '../Component/Navbar'
import About from '../Component/About'
const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='AboutPage'>
        <About></About>
        <Folders></Folders>
      </div>
      
    </div>
  )
}


export default HomePage