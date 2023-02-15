import React from "react";
import "../style/Projects.css";
import { useState } from 'react';


const Projects = () => {

  const [ isIcon1Active, setIsIcon1Active ] = useState(false)

  const changeIcon1Style = () => {
    setIsIcon1Active(current => !current) 
  }

  const [ isIcon2Active, setIsIcon2Active ] = useState(false)

  const changeIcon2Style = () => {
    setIsIcon2Active(current => !current) 
  }

  const [ isIcon3Active, setIsIcon3Active ] = useState(false)

  const changeIcon3Style = () => {
    setIsIcon3Active(current => !current) 
  }

  const [ isIcon4Active, setIsIcon4Active ] = useState(false)

  const changeIcon4Style = () => {
    setIsIcon4Active(current => !current) 
  }

  const [ isIcon5Active, setIsIcon5Active ] = useState(false)

  const changeIcon5Style = () => {
    setIsIcon5Active(current => !current) 
  }

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
                <h1 className="Folder-tab">Projects</h1>
              </div>
            </div>
          </div>
          <div className="Folder-URLtab"></div>
        </div>
        <div className="folder-naeyong">
          <div className="project-folders">
            <div className="project-yo"
            style={{
              backgroundColor: isIcon1Active ? 'grey' : '',
              width: isIcon1Active ? '80px' : '',
              height: isIcon1Active ? '130px' : '',
              border: isIcon1Active ? 'solid 1px' : '',
            }} onClick={changeIcon1Style} 
              onDoubleClick={
              ()=>{
                window.location.href = "/Project1"
              }
            }>
              <img id="project-folder" src="chrome.svg"></img>
              <h3 id="prj-font" className="GCCK">GCCK Audio Engineer Website</h3>
            </div>
            <div style={{
              backgroundColor: isIcon2Active ? 'grey' : '',
              width: isIcon2Active ? '80px' : '',
              height: isIcon2Active ? '130px' : '',
              border: isIcon2Active ? 'solid 1px' : '',
            }} onClick={changeIcon2Style} className="project-yo" 
            
            // onDoubleClick={
            //   ()=>{
            //     window.location.href = "/Project2"
            //   }
            // }
            
            >
              <img id="project-folder" src="fix.png"></img>
              <h3 id="prj-font" className="CN">CaffeNova</h3>
            </div>{" "}
            <div
            style={{
              backgroundColor: isIcon3Active ? 'grey' : '',
              width: isIcon3Active ? '80px' : '',
              height: isIcon3Active ? '130px' : '',
              border: isIcon3Active ? 'solid 1px' : '',
            }} onClick={changeIcon3Style}  className="project-yo" onDoubleClick={
              ()=>{
                window.location.href = "/Project3"
              }
            }>
              <img id="project-folder" src="chrome.svg"></img>
              <h3 id="prj-font" className="BI">BuckIt</h3>
            </div>{" "}
            <div
            style={{
              backgroundColor: isIcon4Active ? 'grey' : '',
              width: isIcon4Active ? '80px' : '',
              height: isIcon4Active ? '130px' : '',
              border: isIcon4Active ? 'solid 1px' : '',
            }} onClick={changeIcon4Style}  className="project-yo" onDoubleClick={
              ()=>{
                window.location.href = "/Project4"
              }
            }>
              <img id="project-folder" src="chrome.svg"></img>
              <h3 id="prj-font" className="MDAD">My Divo and Diary</h3>
            </div>
            <div
            style={{
              backgroundColor: isIcon5Active ? 'grey' : '',
              width: isIcon5Active ? '90px' : '',
              height: isIcon5Active ? '130px' : '',
              border: isIcon5Active ? 'solid 1px' : '',
            }} onClick={changeIcon5Style}  className="project-yo" onDoubleClick={
              ()=>{
                window.location.href = "/Project5"
              }
            }>
              <img id="project-folder" src="chrome.svg"></img>
              <h3 id="prj-font" className="GN">Gif Generator</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
