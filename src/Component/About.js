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
              Hi there, I'm Min Kim, and I'm a Full Stack Developer!
            </h4>
            <h4 className="intro">
              As a Full Stack Developer, I specialize in leveraging the power of
              JavaScript, React, Express, MongoDB, and Node to create dynamic
              and intuitive web applications.
            </h4>
            <h4 className="intro">
              Thanks to my solid education from General Assembly and a
              never-ending passion for learning, I am confident in tackling any
              challenge, whether working independently or collaboratively.
            </h4>
            <h4 className="intro">
              What sets me apart from others in my field is my unique
              perspective. With 4 years of experience in audio engineering, I
              have honed my problem-solving skills and developed a
              result-oriented work ethic that carries over to my development
              work.
            </h4>
            <h4 className="intro">
              I take pride in my attention to detail and unwavering drive for
              excellence, both of which are essential in creating innovative
              solutions that meet and exceed client expectations.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
