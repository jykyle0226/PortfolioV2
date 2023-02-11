import React from "react";
import Folders from "../Component/Folders";
import Navbar from "../Component/Navbar";
import About from "../Component/About";
import Projects from "../Component/Projects";
import Projects5Folder from "../Component/Project5Folder";

const Project5Page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Project1Page">
      <Projects5Folder></Projects5Folder>
        <Folders></Folders>
      </div>
    </div>
  );
};

export default Project5Page;
