import React from "react";
import Folders from "../Component/Folders";
import Navbar from "../Component/Navbar";
import About from "../Component/About";
import Projects from "../Component/Projects";
import Projects4Folder from "../Component/Project4Folder";

const Project4Page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Project1Page">
      <Projects4Folder></Projects4Folder>
        <Folders></Folders>
      </div>
    </div>
  );
};

export default Project4Page;
