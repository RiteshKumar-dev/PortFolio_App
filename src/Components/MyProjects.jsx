import React, { useState } from "react";
import BookingApp from "../assets/bookingApp.png";
import weatherApp from "../assets/weatherApp.png";
import portfolioApp from "../assets/portfolioApp.png";
import newsApp from "../assets/newsApp.png";
import airbnbApp from "../assets/airbnbApp.png";
import { motion, useScroll } from "framer-motion";

const MyProjects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { scrollYProgress } = useScroll();

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const projects = [
    {
      name: "Booking_App",
      description:
        "Built a comprehensive booking application with the MERN stack and Tailwind CSS, integrating features for user authentication, booking management, and responsive design...",
      link: "https://riteshdev-bookingapp.netlify.app",
      image: BookingApp,
    },
    {
      name: "Breaking_News_App",
      description:
        "Developed an end-to-end news application using Vite React, and Firebase for authentication and real-time database management...",
      link: "https://riteshnewsapp.netlify.app",
      image: newsApp,
    },
    {
      name: "Weather_App",
      description:
        "This project demonstrates my ability to integrate external APIs and create dynamic, user-friendly...",
      link: "https://riteshweatherapp.netlify.app",
      image: weatherApp,
    },
    {
      name: "AirBnb_App",
      description:
        "The Airbnb clone is a MERN stack project that replicates the core features of the Airbnb website. It uses MongoDB for database management...",
      link: "https://dev-ritesh-app.onrender.com/listings",
      image: airbnbApp,
    },
    {
      name: "PortFolio_App",
      description:
        "This portfolio website is a showcase of my skills and projects as a MERN Stack Developer. Built using React, the website is designed to be fully...",
      link: "https://riteshdevportfolio.netlify.app/",
      image: portfolioApp,
    },
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <motion.div className="relative w-full flex flex-wrap justify-start items-center gap-4 p-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded-2xl shadow-md mx-auto mt-5">
      <h1 className="text-2xl font-bold text-gray-800 font-serif">
        My Projects
      </h1>
      <hr className="w-full border-t-2 border-gray-300" />

      {visibleProjects.map((project, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover object-center cursor-pointer"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="mt-2">{project.description}</p>
              <hr className="w-full border-t-2 border-gray-300 mt-2" />
              <a
                className="font-semibold text-red-500 underline"
                href={project.link}
              >
                Check out!...
              </a>
            </div>
          </div>
        </div>
      ))}

      {!showAllProjects && (
        <button
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-1 px-2 rounded-2xl shadow-md text-black hover:text-red-500 font-semibold"
          onClick={() => setShowAllProjects(true)}
        >
          Show more!
        </button>
      )}
    </motion.div>
  );
};

export default MyProjects;
