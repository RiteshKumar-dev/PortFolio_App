import React, { useEffect, useState } from "react";
import ProfilePic from "../assets/profilepic.jpeg";
import { motion } from "framer-motion";

import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
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
  const imageVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };
  // ${
  //   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  // } transition-opacity transition-transform duration-700 ease-out
  return (
    <div className="flex justify-center items-center p-4 w-full">
      <motion.div
        className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-2xl shadow-lg overflow-hidden mt-2 transform transition-transform duration-500 ease-in-out"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        // variants={containerVariants}
      >
        <div className="flex justify-center p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
          <motion.img
            src={ProfilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover cursor-pointer"
            variants={imageVariants}
            whileHover="hover"
          />
        </div>
        <div className="text-center p-6 bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg">
          <h2 className="text-2xl font-semibold text-gray-900 font-serif">
            Ritesh Kumar Sah
          </h2>
          <p className="text-gray-700 mt-2">MERN Stack Developer</p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              ⚡MongoDB | Express.js | React.js | Node.js⚡
            </p>
          </div>
          <div className="mt-6 flex justify-center items-center space-x-4">
            {[
              {
                href: "https://www.linkedin.com/search/results/all/?keywords=Ritesh%20Kumar%20Sah",
                icon: <FaLinkedin />,
                color: "text-blue-600",
              },
              {
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=riteshkumar555sah@gmail.com",
                icon: <FaEnvelope />,
                color: "text-red-600",
              },
              {
                href: "https://api.whatsapp.com/send?phone=9267988110&text=Hello%20Ritesh%20Kumar%20Sah",
                icon: <FaWhatsapp />,
                color: "text-green-600",
              },
              {
                href: "https://github.com/RiteshKumar-dev",
                icon: <FaGithub />,
                color: "text-gray-900",
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`text-2xl text-gray-600 hover:${link.color} mx-2 transition-colors duration-300 ease-in-out`}
                target="_blank"
                rel="noopener noreferrer"
                variants={linkVariants}
                whileHover="hover"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <div className="mt-6">
            <motion.a
              href="https://drive.google.com/file/d/1wv4bQOjCcgKfMNTiKCTRuZN5rx5RKDy6/view"
              download
              className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-700 py-2 px-4 rounded-full transition-colors duration-300 ease-in-out shadow-md"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
