import "./App.css";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import Folders from "./Component/Folders";
import Clock from "./Component/Clock";
import Navbar from "./Component/Navbar";
import About from "./Component/About";

import "./style/About.css";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import ProjectPage from "./Page/ProjectPage"
import Project1Page from "./Page/Project1Page"
import Project2Page from "./Page/Project2Page"
import Project3Page from "./Page/Project3Page"
import Project4Page from "./Page/Project4Page"
import Project5Page from "./Page/Project5Page"


function App() {
  useEffect(() => {
    document.title = "Min Yong Kim";
  });
  return (
    <div>
      <Route exact path="/">
        <HomePage></HomePage>
      </Route>

      <Route exact path="/About">
        <AboutPage></AboutPage>
      </Route>

      <Route path="/Projects">
        <ProjectPage></ProjectPage>
      </Route>

      <Route path="/Project1">
        <Project1Page></Project1Page>
      </Route>
      <Route path="/Project2">
        <Project2Page></Project2Page>
      </Route>
      <Route path="/Project3">
        <Project3Page></Project3Page>
      </Route>
      <Route path="/Project4">
        <Project4Page></Project4Page>
      </Route>
      <Route path="/Project5">
        <Project5Page></Project5Page>
      </Route>

    </div>
  );
}

export default App;
