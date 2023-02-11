import React from "react";
import "../style/Projects.css";
import { motion } from "framer-motion";

const Projects2Folder = () => {
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
                <h1 className="prj-tab">CaffeNova</h1>
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
              https://caffenova.herokuapp.com/
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
                src="CaffeNova.png"
              ></motion.img>
              <div className="lg">
                <a
                  href="https://github.com/jykyle0226/CaffeNova"
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
                  href="https://caffenova.herokuapp.com/"
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
              - Full stack web application developed in Django
              </h4>
              <h4 id="dscription" className="prj-intro">
              - Used PostgreSQL to store and query user and cafe information
              </h4>
              <h4 id="dscription" className="prj-intro">
              - Implemented user authentication to limit functionalities to
                non-users
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects2Folder;
