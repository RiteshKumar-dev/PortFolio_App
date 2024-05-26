import React from "react";

const Skills = () => {
  return (
    <div className="relative w-full flex flex-wrap justify-start items-center gap-4 p-4 bg-gray-200 rounded-2xl shadow-md mx-auto mt-5">
      <h1 className="text-2xl font-bold text-gray-800 font-serif">Skills</h1>
      <hr className="w-full border-t-2 border-gray-300" />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-800">Responsive Web Design</span>
            <span className="ml-2 text-gray-600">(Intermediate)</span>
          </div>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-800">
              Front-end Skills : HTML, CSS , JavaScript, React Js
            </span>
            <span className="ml-2 text-gray-600">(Intermediate)</span>
          </div>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-800">Backend & Database Skill :</span>
            <span className="ml-2 text-gray-600">(Intermediate)</span>
          </div>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-800">Analytical thinking</span>
            {/* <span className="ml-2 text-gray-600">(Intermediate)</span> */}
          </div>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-800">Communication Skills</span>
            {/* <span className="ml-2 text-gray-600">(Intermediate)</span> */}
          </div>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
