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
import { delay, motion } from "framer-motion";

const App = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 360,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const sectionVariants = {
    // hidden: { opacity: 0, scale: 0.9 },
    // visible: {
    //   opacity: 1,
    //   scale: 1,
    //   transition: { type: "spring", stiffness: 120, damping: 20, delay: 0.5 },
    // },
  };
  return (
    <div className="lg:p-8 p-4 grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="col-span-1 lg:col-span-1 bg-gray p-4 rounded-2xl"
      >
        <motion.div variants={sectionVariants}>
          <Theme />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Intro />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <TechStack />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Experience />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Certification />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Education />
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="col-span-1 lg:col-span-2 p-4 rounded-2xl"
      >
        <motion.div variants={sectionVariants}>
          <Projects />
        </motion.div>
        <MyProjects />
        <About />
        <Skills />
      </motion.div>
      <InforBtn />
    </div>
  );
};

export default App;
