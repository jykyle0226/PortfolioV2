import React from "react";
import Folders from "../Component/Folders";
import Navbar from "../Component/Navbar";
import About from "../Component/About";
import Projects from "../Component/Projects";
import Projects2Folder from "../Component/Project2Folder";

import "../style/About.css";

const Project2Page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Project1Page">
      <Projects2Folder></Projects2Folder>
        <Folders></Folders>
      </div>
    </div>
  );
};

export default Project2Page;
