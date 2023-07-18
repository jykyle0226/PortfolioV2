import React from "react";
import "../style/Projects.css";
import { motion } from "framer-motion";

const Project6Folder = () => {
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
                <h1 className="prj-tab">PC to AE</h1>
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
                Not Deployed Yet
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
                src="https://i.imgur.com/AHfacNW.png"
              ></motion.img>
              <div className="lg">
                <a
                  href="https://github.com/jykyle0226/PCaudio"
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
               
              </div>
            </div>
            <div className="rightside">
              <h4 id="dscription" className="prj-intro">
                - Create a user-friendly web application in React, optimizing
                the audio engineering workflow for non-specialists.
              </h4>
              <h4 id="dscription" className="prj-intro">
                - Integrate the Planning Center API, enabling efficient
                retrieval of service, song, singer, instrumentalist, and dB
                data.
              </h4>
              <h4 id="dscription" className="prj-intro">
                - Implement a fader graph generation feature, visually
                representing song volumes (dB) by singers and instrumentalists,
                using data sourced from the Planning Center API.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project6Folder;
