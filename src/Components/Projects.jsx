import React, { useState } from "react";
import { FaNodeJs, FaReact, FaGitAlt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiMysql } from "react-icons/si";

const ProjectCard = ({
  projectName,
  description,
  forks,
  stars,
  language,
  icon,
}) => {
  return (
    <div className="w-full p-4 cursor-pointer">
      <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 shadow-lg rounded-lg overflow-hidden">
        <div className="text-gray-700 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              {projectName}
            </h2>
            <p className="mt-2">{description}</p>
          </div>
          <div className="flex mt-4 gap-2">
            <p className="mr-2 flex gap-2">
              {forks}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="green"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </p>
            <p className="mr-4 flex gap-2">
              {stars}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="red"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </p>
            <div className="ml-auto">{icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      projectName: "Shah Aparments",
      description:
        "🚀The Booking App frontend is a MERN stack web application for booking services like accommodations or appointments. It uses MongoDB for database management, Express.js for server-side logic, React for the frontend, and Node.js for the backend. Tailwind CSS is used for styling, providing a responsive user experience...",
      forks: 10,
      stars: 20,
      language: "ReactJs",
      icon: <FaReact className="text-blue-500 text-xl" />,
    },
    {
      projectName: "Weather App",
      description:
        "🚀I have developed a weather app using React that fetches real-time weather data through API calls. The app is fully responsive, ensuring it works seamlessly across various devices and screen sizes. This project demonstrates my ability to integrate external APIs and create dynamic, user-friendly interfaces while maintaining a consistent and adaptive design...",
      forks: 12,
      stars: 15,
      language: "ReactJs",
      icon: <FaReact className="text-blue-500 text-xl" />,
    },
    {
      projectName: "WanderLust",
      description:
        "🚀The Booking App frontend is a MERN stack web application for booking services like accommodations or appointments. It uses MongoDB for database management, Express.js for server-side logic, React for the frontend, and Node.js for the backend. Tailwind CSS is used for styling, providing a responsive user experience...",
      forks: 15,
      stars: 21,
      language: "ReactJs",
      icon: <FaNodeJs className="text-green-500 text-xl" />,
    },

    {
      projectName: "Airbnb Clone",
      description:
        "🚀The Airbnb clone is a MERN stack project that replicates the core features of the Airbnb website. It uses MongoDB for database management, Express.js for server-side logic, React for the frontend, and Node.js for the backend. The app includes features like property listings, user authentication, booking management, and a visually appealing UI...",
      forks: 8,
      stars: 20,
      language: "ReactJs",
      icon: <SiExpress className="text-black text-xl" />,
    },
    {
      projectName: "PortFolio",
      description:
        "🚀This portfolio website is a showcase of my skills and projects as a MERN Stack Developer. Built using React, the website is designed to be fully responsive and visually appealing. It features a professional introduction, a detailed display of my tech stack, educational background, work experience,...",
      forks: 19,
      stars: 20,
      language: "ReactJs",
      icon: <FaReact className="text-blue-500 text-xl" />,
    },
  ];
  const projectsToShow = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <div className="relative w-full flex flex-wrap justify-start items-center gap-4 p-4 bg-gray-200 rounded-2xl shadow-md mx-auto mt-2">
      <h1 className="text-2xl font-bold text-gray-800 font-serif">
        Github Projects
      </h1>
      <a
        className="font-semibold ml-auto underline text-red-500"
        href="https://github.com/RiteshKumar-dev"
      >
        See all
      </a>
      <hr className="w-full border-t-2 border-gray-300" />
      {projectsToShow.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}

      {!showAll && (
        <button
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-1 px-2 rounded-2xl shadow-md text-black hover:text-red-500 font-semibold"
          onClick={() => setShowAll(true)}
        >
          Show All Projects!
        </button>
      )}
    </div>
  );
};

export default Projects;
