import React from 'react'
import Folders from '../Component/Folders'
import Navbar from '../Component/Navbar'
import About from '../Component/About'
import Projects from '../Component/Projects'
import { Route } from "react-router-dom";

import Project1Page from "../Page/Project1Page"
import Project2Page from "../Page/Project2Page"
import Project3Page from "../Page/Project3Page"
import Project4Page from "../Page/Project4Page"


const ProjectPage = () => {
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


export default ProjectPage