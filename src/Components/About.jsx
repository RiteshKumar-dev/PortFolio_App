import React from "react";

const About = () => {
  return (
    <div className="relative w-full flex flex-wrap justify-start items-center gap-4 p-4 bg-gray-200 rounded-2xl shadow-md mx-auto mt-5">
      <h1 className="text-2xl font-bold text-gray-800 font-serif">Summary</h1>
      <hr className="w-full border-t-2 border-gray-300" />
      <div className="relative pl-6">
        <span className="absolute left-0 top-0 bg-gray-800 rounded-full h-2 w-2 mt-2"></span>

        <h3>
          Ambitious... Second-year BCA student with a strong foundation in web
          development, eager to enhance skills in designing and developing web
          applications. Good in front-end and back-end technologies, including
          HTML, CSS, JavaScript, with basic knowledge of React.js and Node.js
          frameworks. Good in responsive design and cross-browser compatibility.
          Committed to learning and delivering high-quality projects, with a
          collaborative and user-focused approach, aspiring to design scalable
          solutions.
        </h3>
      </div>
    </div>
  );
};

export default About;
