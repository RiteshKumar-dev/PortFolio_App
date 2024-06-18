import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

const Theme = () => {
  const [theme, setTheme] = useState("Change Theme");
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsOptionsVisible(false); // Hide options after selection
  };

  useEffect(() => {
    switch (theme) {
      case "Change Theme":
        document.body.classList.add("bg-slate-300");
        document.body.style.color = "black";
        break;
      case "dark":
        document.body.style.backgroundColor = "#1a202c";
        document.body.style.color = "white";
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
      case "Change Theme":
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

  const toggleOptionsVisibility = () => {
    setIsOptionsVisible((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 rounded-2xl shadow-md w-full mx-auto">
      <div className="text-gray-800 font-semibold text-2xl font-serif">
        Theme
      </div>
      <div className="flex items-center relative">
        <button
          className={`flex items-center px-4 py-2 rounded-2xl shadow hover:opacity-75 focus:outline-none ${getButtonStyle()}`}
          onClick={toggleOptionsVisibility}
        >
          {getIcon()}
          <span className="ml-2 capitalize">{theme}</span>
        </button>
        {isOptionsVisible && (
          <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-300 rounded-xl shadow-lg max-h-48 overflow-y-auto z-10">
            <div
              className={`p-2 cursor-pointer hover:bg-gray-100 ${
                theme === "Change Theme" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleThemeChange("Change Theme")}
            >
              Change Theme
            </div>
            <div
              className={`p-2 cursor-pointer hover:bg-gray-100 ${
                theme === "dark" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleThemeChange("dark")}
            >
              Dark
            </div>
            <div
              className={`p-2 cursor-pointer hover:bg-gray-100 ${
                theme === "system" ? "bg-gray-200" : ""
              }`}
              onClick={() => handleThemeChange("system")}
            >
              System
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Theme;
