import React from "react";
import Folders from "../Component/Folders";
import Navbar from "../Component/Navbar";
import Projects1Folder from "../Component/Project1Folder";


const Project1Page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Project1Page">
        <Projects1Folder></Projects1Folder>
        <Folders></Folders>
        
      </div>
    </div>
  );
};

export default Project1Page;
