import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

const Theme = () => {
  const [theme, setTheme] = useState("Change Theme");

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  useEffect(() => {
    switch (theme) {
      case "Change Theme":
        document.body.classList.add("bg-slate-300");
        document.body.style.color = "black";
        break;
      case "dark":
        document.body.style.backgroundColor = "#1a202c";
        document.body.style.color = "black";
        break;
      case "system":
        document.body.style.backgroundColor = "#f7fafc"; // Smoke-white background
        document.body.style.color = "black";
        break;
      default:
        break;
    }
  }, [theme]);

  const getButtonStyle = () => {
    switch (theme) {
      case "light":
        return "bg-yellow-200 text-black";
      case "dark":
        return "bg-gray-400 text-white";
      case "system":
        return "bg-gray-400 text-white";
      default:
        return "";
    }
  };

  const getIcon = () => {
    switch (theme) {
      case "Change Theme":
        return <FaSun />;
      case "dark":
        return <FaMoon />;
      case "system":
        return <FaDesktop />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 rounded-2xl shadow-md w-full mx-auto">
      <div className="text-gray-800 font-semibold text-2xl font-serif">
        Theme
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>

        <select
          value={theme}
          onChange={handleThemeChange}
          className="mr-4 p-2 bg-white border border-gray-300 rounded-2xl text-black cursor-pointer"
        >
          <option value="Change Theme">Change Theme</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
        {/* <button
          className={`flex items-center px-4 py-2 rounded-2xl shadow hover:opacity-75 focus:outline-none  ${getButtonStyle()}`}
        >
          {getIcon()}
          <span className="ml-2 capitalize">{theme}</span>
        </button> */}
      </div>
    </div>
  );
};

export default Theme;
