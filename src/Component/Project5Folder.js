import React from "react";
import "../style/Projects.css";
import { motion } from "framer-motion";

const Projects5Folder = () => {
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
                <h1 className="prj-tab">GIF Generator</h1>
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
                https://main--astonishing-dieffenbachia-49841b.netlify.app
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
                src="https://i.imgur.com/QkpluYP.png"
              ></motion.img>
              <div className="lg">
                <a
                  href="https://github.com/jykyle0226/GIF-Generator"
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
                  href="https://main--astonishing-dieffenbachia-49841b.netlify.app/"
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
                A single-page web application integrated Giphy API
              </h4>
              <h4 id="dscription" className="prj-intro">
                Takes search requests and generates 3 gifs
              </h4>
              <h4 id="dscription" className="prj-intro">
                Developed with JavaScript, Ajax, jQuery, HTML and CSS
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects5Folder;
