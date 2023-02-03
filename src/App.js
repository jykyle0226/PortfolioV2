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
    </div>
  );
}

export default App;
