import React from "react";
import Folders from "../Component/Folders";
import Navbar from "../Component/Navbar";
import About from "../Component/About";
import Projects from "../Component/Projects";
import Projects3Folder from "../Component/Project3Folder";

const Project3Page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Project1Page">
      <Projects3Folder></Projects3Folder>
        <Folders></Folders>
      </div>
    </div>
  );
};

export default Project3Page;
