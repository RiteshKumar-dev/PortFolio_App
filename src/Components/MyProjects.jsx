import React, { useState } from "react";

const MyProjects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const projects = [
    {
      name: "Booking App",
      description:
        "This project demonstrates my proficiency in building scalable, full-stack web applications I have developed...",
      link: "https://riteshdev-bookingapp.netlify.app/",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-36774428/original/15110762-267f-4a08-88ae-2d9d3603284d.jpeg?im_w=720",
    },
    {
      name: "Weather App",
      description:
        "This project demonstrates my ability to integrate external APIs and create dynamic, user-friendly...",
      link: "https://riteshweatherapp.netlify.app/",
      image:
        "https://d7c2r9g9.rocketcdn.me/wp-content/uploads/1112-weather-forecast-powerpoint-template.jpg",
    },
    {
      name: "AirBnb Clone",
      description:
        "The Airbnb clone is a MERN stack project that replicates the core features of the Airbnb website. It uses MongoDB for database management...",
      link: "https://dev-ritesh-app.onrender.com/listings",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-668620215138733009/original/3a98d3df-4b4d-4e03-908c-1e719e46c98d.jpeg?im_w=720",
    },
    {
      name: "PortFolio App",
      description:
        "TThis portfolio website is a showcase of my skills and projects as a MERN Stack Developer. Built using React, the website is designed to be fully...",
      link: "https://dev-ritesh-app.onrender.com/listings",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/49f28e189617081.Y3JvcCwxMDA2LDc4NywxOTYsMA.jpg",
    },
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <div className="relative w-full flex flex-wrap justify-start items-center gap-4 p-4 bg-gray-200 rounded-2xl shadow-md mx-auto mt-5">
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
    </div>
  );
};

export default MyProjects;
