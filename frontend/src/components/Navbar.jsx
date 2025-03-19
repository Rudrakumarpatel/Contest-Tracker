import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white text-black flex justify-between dark:bg-gray-800 dark:text-white">
      <h1 className="text-lg font-bold">Contest Tracker</h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/admin">Admin</Link>
         <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
