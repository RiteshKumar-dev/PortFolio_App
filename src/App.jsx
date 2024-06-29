import React from "react";
import Intro from "./Components/Intro";
import Theme from "./Components/Theme";
import TechStack from "./Components/TechStack";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Certification from "./Components/Certification";
import Projects from "./Components/Projects";
import MyProjects from "./Components/MyProjects";
import InforBtn from "./Components/InforBtn";
import About from "./Components/About";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <div className="lg:p-8 p-4 grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3">
      <div className="col-span-1 lg:col-span-1 bg-gray p-4 rounded-2xl">
        <Theme />
        <Intro />
        <TechStack />
        <Experience />
        <Certification />
        <Education />
      </div>
      <div className="col-span-1 lg:col-span-2 p-4 rounded-2xl">
        <Projects />
        <MyProjects />
        <About />
        <Skills />
      </div>
      <InforBtn />
    </div>
  );
};

export default App;
