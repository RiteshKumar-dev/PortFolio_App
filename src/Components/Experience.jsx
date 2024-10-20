import React from "react";

const Experience = () => {
  return (
    <div className="w-full flex flex-col justify-start gap-4 p-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded-2xl shadow-md mx-auto mt-6">
      <h1 className="text-2xl font-bold text-gray-800 font-serif">
        Experience
      </h1>
      <hr className="w-full border-t-2 border-gray-300 " />
      <div className="relative pl-6">
        <span className="absolute left-0 top-0 bg-gray-800 rounded-full h-2 w-2 mt-2"></span>
        <p>June 2024 - October 2024</p>
        <p className="font-semibold">Junior Developer (MERN Stack)</p>
        <p className="text-lg">WebMobril Technologies</p>
        <p className="text-lg truncate">
          . Experience working with MERN (MongoDB, Express.js, React, Node.js)
          stack for developing web applications
        </p>
        <p className="text-lg truncate">
          . Implementing responsive design and ensuring optimal performance of
          applications
        </p>
        <p className="text-lg truncate">
          . Writing clean, reusable, and efficient code
        </p>
        <p className="text-lg truncate">
          . Developing APIs for seamless integration between frontend and
          backend systemsg
        </p>
        <p className="text-lg truncate">
          . Staying uptodate with the latest technologies and best practices in
          MERN stack development.
        </p>
      </div>
      {/* <div className="relative pl-6">
        <span className="absolute left-0 top-0 bg-gray-800 rounded-full h-2 w-2 mt-2"></span>
        <p>July 2019 - August 2021</p>
        <p className="font-semibold">Position</p>
        <p className="text-lg">Company Name</p>
      </div> */}
    </div>
  );
};

export default Experience;
