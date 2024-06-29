import React, { useState } from "react";
import {
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaJs,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
} from "react-icons/si";

const TechStack = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const techStacks = [
    { icon: <SiMongodb className="text-green-600 text-xl" />, name: "MongoDB" },
    { icon: <SiExpress className="text-black text-xl" />, name: "Express.js" },
    { icon: <FaReact className="text-blue-500 text-xl" />, name: "React.js" },
    { icon: <FaNodeJs className="text-green-500 text-xl" />, name: "Node.js" },
    { icon: <FaJs className="text-yellow-500 text-xl" />, name: "JavaScript" },
    { icon: <SiMysql className="text-blue-600 text-xl" />, name: "MySQL" },
    { icon: <FaGitAlt className="text-orange-600 text-xl" />, name: "Git" },
    { icon: <FaJava className="text-orange-600 text-xl" />, name: "JAVA" },
    {
      icon: <FaBootstrap className="text-orange-600 text-xl" />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss className="text-blue-400 text-xl" />,
      name: "Tailwind",
    },
    {
      icon: <SiFirebase className="text-blue-400 text-xl" />,
      name: "Firebase",
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-start items-center gap-4 p-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded-2xl shadow-md mx-auto mt-2">
      <h1 className="text-2xl font-bold text-gray-800 font-serif">
        Tech Stack
      </h1>
      <hr className="w-full border-t-2 border-gray-300" />
      {showAll
        ? techStacks.map((stack, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full md:w-auto p-2 bg-white rounded-full shadow-lg"
            >
              {stack.icon}
              <span className="ml-1 text-gray-800 font-medium">
                {stack.name}
              </span>
            </div>
          ))
        : techStacks.slice(0, 4).map((stack, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full md:w-auto p-2 bg-white rounded-full shadow-lg"
            >
              {stack.icon}
              <span className="ml-1 text-gray-800 font-medium">
                {stack.name}
              </span>
            </div>
          ))}
      <button
        className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-2xl"
        onClick={toggleShowAll}
      >
        {showAll ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default TechStack;
