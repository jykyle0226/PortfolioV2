import React from "react";
import "../style/Projects.css";

const Projects3Folder = () => {
  return (
    <div>
      <div className="Folder">
        <div className="Folder-tab-tab">
          <div className="Folder-close-bar">
            <a id="x" href="/">
              <button id="Folder-x-btn">x</button>
            </a>
            <div id="folder-tab">
              <div id="Folder-tab-div">
                <div className="Folder-URLtab-1">
                  <img id="folder-leftarrow" src="left.png" alt=""></img>
                  <img id="folder-rightarrow" src="right.png" alt=""></img>
                </div>
                <h1 className="Folder-tab">BuckIt</h1>
              </div>
            </div>
          </div>
          <div className="Folder-URLtab"></div>
        </div>
        <div className="folder-naeyong">
          <div className="project-folders">
            <div onDoubleClick={
              ()=>{
                window.location.href = "/Project1"
              }
            }>
              <img id="project-folder" src="file.svg"></img>
              <h3 id="prj-font">About</h3>
            </div>
            <div onDoubleClick={
              ()=>{
                window.location.href = "/Project2"
              }
            }>
              <img id="project-folder" src="github.svg"></img>
              <h3 id="prj-font">Github</h3>
            </div>{" "}
            <div onDoubleClick={
              ()=>{
                window.location.href = "/Project3"
              }
            }>
              <img id="project-folder" src="chrome.svg"></img>
              <h3 id="prj-font">Live</h3>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects3Folder;
