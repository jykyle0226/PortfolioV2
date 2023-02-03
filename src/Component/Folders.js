import React from 'react'
import { useState } from 'react';
import "../style/Nav.css"

const Folders = () => {

  const [ isAboutActive, setIsAboutActive ] = useState(false)

  const changeAboutStyle = () => {
    changeAboutStyle(current => !current) 
  }

  const [ isFolderActive, setIsFolderActive ] = useState(false)

  const changeFolderStyle = () => {
    setIsFolderActive(current => !current) 
  }

  const [ isLinkedInActive, setIsLinkedInActive ] = useState(false)

  const changeLinkedInStyle = () => {
    setIsLinkedInActive(current => !current) 
  }

  const [ isResumeActive, setIsResumeActive ] = useState(false)

  const changeResumeStyle = () => {
    setIsResumeActive(current => !current) 
  }

  const [ isGithubActive, setIsGithubActive ] = useState(false)
  const changeGithubStyle = () => {
    setIsGithubActive(current => !current) 
  }

  
  return (
    <div className='Folders-Div'>
      <div className='sticky-note'>
      <h1 id='welcome'>Welcome to my portfoliOS!</h1>
        <ul id='sticky-ul'>
          <li>click the email/phone icon above to contact me!</li>
          <li>dobule click icons on the right to discover more about me!</li>
        </ul>
      </div>
      <div>
      <div className='folder-div'>
            <div className='About' onDoubleClick={
            () => {
              window.open('http://localhost:3000/About');
            }
          }>
            <img id='file' src='about.svg' alt=''></img>
            <h1 id='about'>About</h1>
          </div>
          <div className='Projects' onDoubleClick={
            () => {
              window.open('http://localhost:3000/Projects');
            }
          }>
          <img id='file' src='file.svg' alt=''></img>
            <h1 id='projects'>Projects</h1>
          </div>

          <div className='LinkedIn' style={{
            backgroundColor: isLinkedInActive ? 'grey' : '',
            width: isLinkedInActive ? '60px' : '',
          }} onClick={changeLinkedInStyle}
          onDoubleClick={
            () => {
              window.open('https://www.linkedin.com/in/min-yong-kim/', '_blank' );
            }
          }>
          <img id='file' src='linkedin.svg' alt=''></img>
            <h1 id='linkedin'>LinkedIn</h1>
          </div>
          <div className='Resume' style={{
            backgroundColor: isResumeActive ? 'grey' : '',
            width: isResumeActive ? '60px' : '',
          }} onClick={changeResumeStyle}
          onDoubleClick={
            () => {
              window.open('https://drive.google.com/file/d/1T1eK5DKdkmZ098xA0Kf9yfZ5uVLYronO/view?usp=sharing', '_blank' );

            }
          }>
          <img id='file' src='pdf.svg' alt=''></img>
            <h1 id='resume'>Resume</h1>
          </div>
          <div className='GitHub' style={{
            backgroundColor: isGithubActive ? 'grey' : '',
            width: isGithubActive ? '60px' : '',
          }} onClick={changeGithubStyle}
          onDoubleClick={
            () => {
              window.open('https://github.com/jykyle0226', '_blank' );
            }
          }>
          <img id='file' src='github.svg' alt=''></img>
            <h1 id='github'>GitHub</h1>
        </div>
    </div>
      </div>
      
    </div>
  )
  
      
  
}

export default Folders;
