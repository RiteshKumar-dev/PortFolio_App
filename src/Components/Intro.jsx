import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
const Intro = () => {
  return (
    <div className="flex justify-center items-center p-4 w-full">
      <div className="w-full  bg-white rounded-2xl shadow-md overflow-hidden mt-2">
        <div className="flex justify-center p-6 bg-gray-200">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLuPNp8MTXFeQfjYgkTp90VXp67j0zhHjR6wU7JapLEQ0cslDgM=s96-c"
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 border-gray-300"
          />
        </div>
        <div className="text-center p-6 bg-smoke-white">
          <h2 className="text-xl font-semibold text-gray-800 font-serif">
            Ritesh Kumar Sah
          </h2>
          <p className="text-gray-600 mt-2">MERN Stack Developer</p>
          <div className="mt-4">
            <p className="font-semibold">
              ⚡MongoDB | Express.js | React.js | Node.js⚡
            </p>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <a
              href="https://www.linkedin.com/search/results/all/?keywords=Ritesh%20Kumar%20Sah"
              className="text-2xl text-gray-600 hover:text-gray-900 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=riteshkumar555sah@gmail.com"
              className=" text-2xl text-gray-600 hover:text-gray-900 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=9267988110&text=Hello%20Ritesh%20Kumar%20Sah"
              className="text-2xl text-gray-600 hover:text-gray-900 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://github.com/RiteshKumar-dev"
              className="text-2xl text-gray-600 hover:text-gray-900 mx-2"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
