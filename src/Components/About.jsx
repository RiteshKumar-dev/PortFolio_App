import React from "react";

const About = () => {
  return (
    <div className="relative w-full flex flex-wrap justify-start items-center gap-4 p-4 bg-gray-200 rounded-2xl shadow-md mx-auto mt-5">
      <h1 className="text-2xl font-bold text-gray-800 font-serif">Summary</h1>
      <hr className="w-full border-t-2 border-gray-300" />
      <div className="relative pl-6">
        <span className="absolute left-0 top-0 bg-gray-800 rounded-full h-2 w-2 mt-2"></span>

        <h3>
          Hi! I'm a second-year BCA student with a deep passion for web
          development. Currently, I'm honing my skills with the MERN stack,
          which includes MongoDB, Express.js, React.js, and Node.js. Building
          web applications and exploring new technologies to enhance my skills
          is something I genuinely enjoy. <hr />
          I'm currently interning at Webmobril Technology as a Full Stack
          Developer, where I am gaining hands-on experience and contributing to
          exciting projects. <hr />
          I'm eager to connect with fellow developers, learn from experienced
          professionals, and find opportunities to grow in the tech industry.
          <hr />
          Outside of tech, I'm a tea lover and an avid actor who has spent
          college days exploring theatre...
        </h3>
      </div>
    </div>
  );
};

export default About;
