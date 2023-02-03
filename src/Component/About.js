import React from "react";
import "../style/About.css";
import Window from "./Window";
import Folders from "./Folders";

const About = () => {
  return (
    <div className="AboutPage">
      <div className="About">
        <div className="tab-tab">
          <div className="close-bar">
            <a id="x" href="/">
              <button id="x-btn">x</button>
            </a>
            <div id="tab">
              <div id="img-div">
                <img id="mk" src="mk.png" alt=""></img>
              </div>

              <div id="tab-div">
                <h1 className="tab">About</h1>
              </div>
            </div>
          </div>
          <div className="URLtab">
            <div className="URLtab-1">
              <img id="arrow" src="left.png" alt=""></img>
              <img id="arrow" src="right.png" alt=""></img>
            </div>
            <div id="url">
              <h1 id="url-h1">www.biography.com/MinYongKim</h1>
            </div>
          </div>
        </div>

        <div className="Naeyong">
          <div className="intro-div">

            <h4 className="intro">
              I am a full-stack developer with a focus in JavaScript, React,
              Express, MongoDB, and Node.
            </h4>
            <h4 className="intro">
              As a recent graduate from General Assembly, I am equipped with
              self-teaching abilities, and am flexible to work individually and
              collaboratively
            </h4>
            <h4 className="intro">
              With 4 years of experience in audio engineering, I possess strong
              foundations in problem solving and result-oriented work ethic.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
