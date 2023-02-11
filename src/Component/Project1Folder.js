import React from "react";
import "../style/Projects.css";
import { motion } from "framer-motion";

const Projects1Folder = () => {
  return (
    <div className="AboutPage">
      <div className="About">
        <div className="prj-tab-tab">
          <div className="prj-close-bar">
            <a id="prj-x" href="/Projects">
              <button id="prj-x-btn">x</button>
            </a>
            <div id="prj-tab">
              <div id="prj-img-div">
                <img id="prj-mk" src="mk.png" alt=""></img>
              </div>

              <div id="prj-tab-div">
                <h1 className="prj-tab">GCCK Audio Engineer Website</h1>
              </div>
            </div>
          </div>
          <div className="prj-URLtab">
            <div className="URLtab-1">
              <img id="prj-arrow" src="left.png" alt=""></img>
              <img id="prj-arrow" src="right.png" alt=""></img>
            </div>
            <div id="prj-url">
              <h1 id="prj-url-h1">
                https://iridescent-croquembouche-9e80f7.netlify.app
              </h1>
            </div>
          </div>
        </div>

        <div className="prj-Naeyong">
          <div className="prj-intro-div">
            <div className="leftside">
              <motion.img
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className="project-img"
                src="https://i.imgur.com/Td2GZ3f.png"
              ></motion.img>
              <div className="lg">
                <a
                  href="https://github.com/jykyle0226/Audio-Engineer-Guide-Website-FrontEnd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    className="github"
                    src="https://i.imgur.com/OekuFsO.png"
                    alt=""
                  ></motion.img>
                </a>
                <a
                  href="https://iridescent-croquembouche-9e80f7.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.img
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="live"
                    src="https://i.imgur.com/cGHJKG5.png"
                    alt=""
                  ></motion.img>
                </a>
              </div>
            </div>
            <div className="rightside">
              <h4 id="dscription" className="prj-intro">
                Developed a web application to provide my church members a
                website to store feedback data and find the worship band
              </h4>
              <h4 id="dscription" className="prj-intro">
                Utilized Mongoose/MongoDB, Express, React, and Node (MERN)
              </h4>
              <h4 id="dscription" className="prj-intro">
                Implemented Spotify API for users to find their worship band
                information on Youtube
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects1Folder;
