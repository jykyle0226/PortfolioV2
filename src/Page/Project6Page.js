import React from "react";
import Folders from "../Component/Folders";
import Navbar from "../Component/Navbar";
import About from "../Component/About";
import Project6Folder from '../Component/Project6Folder'


const Project6Page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Project1Page">
        <Project6Folder></Project6Folder>
        <Folders></Folders>
        
      </div>
    </div>
  );
};

export default Project6Page;
