import React from "react";

const Education = () => {
  return (
    <div className="w-full flex flex-col justify-start gap-4 p-4 bg-gray-200 rounded-2xl shadow-md mx-auto mt-6">
      <h1 className="text-2xl font-bold text-gray-800 font-serif">Education</h1>
      <hr className="w-full border-t-2 border-gray-300" />
      <div className="relative pl-6">
        <span className="absolute left-0 top-0 bg-gray-800 rounded-full h-2 w-2 mt-2"></span>
        <p>2023-2026</p>
        <p className="font-semibold">Bachelor of Computer Applications</p>
        <p className="text-lg">Hie-Rank Business School</p>
      </div>
      <div className="relative pl-6">
        <span className="absolute left-0 top-0 bg-gray-800 rounded-full h-2 w-2 mt-2"></span>
        <p>2022-2023</p>
        <p className="font-semibold">Senior Secondary (12th)</p>
        <p className="text-lg">Govt. School</p>
      </div>
    </div>
  );
};

export default Education;
