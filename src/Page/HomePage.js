import React from 'react'
import Folders from '../Component/Folders'
import Navbar from '../Component/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div id='body'>
        <Folders></Folders>
      </div>
      
    </div>
  )
}


export default HomePage