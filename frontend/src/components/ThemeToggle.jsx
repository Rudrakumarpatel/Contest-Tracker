import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const getInitialTheme = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="p-2 ml-5 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
