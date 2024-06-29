import React from "react";

const Certification = () => {
  return (
    <div className="w-full flex flex-col justify-start gap-4 p-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded-2xl shadow-md mx-auto mt-6">
      <h1 className="text-2xl font-bold text-gray-800 font-serif">
        Certification
      </h1>
      <hr className="w-full border-t-2 border-gray-300 " />
      <div className="relative pl-6">
        <span className="absolute left-0 top-0 bg-gray-800 rounded-full h-2 w-2 mt-2"></span>
        <p>January 2024 - June 2024</p>
        <p className="font-semibold">Mern Stack</p>
        <p className="text-lg">Apna_College</p>
        <a
          className="font-semibold text-red-500 underline"
          href="https://drive.google.com/file/d/1ImBkwpxJ7Vm6sD__HhnFZIhsVcxolts9/view?usp=sharing"
        >
          Certificate...
        </a>
      </div>
    </div>
  );
};

export default Certification;
