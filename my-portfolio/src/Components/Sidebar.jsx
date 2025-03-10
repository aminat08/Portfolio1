import React from "react";
import { FiHome, FiActivity, FiBarChart2, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 flex flex-col items-center justify-start h-screen w-20 md:w-60 bg-white border-r border-gray-200 py-5">
      {/* Logo */}
      <div className="w-full px-4 mb-6">
        <h1 className="text-2xl font-bold hidden md:block">FitApp</h1>
        <h1 className="text-2xl font-bold text-center md:hidden">FA</h1>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col space-y-4 w-full px-4">
        <p className="flex items-center space-x-2 py-2 w-full hover:bg-gray-100 rounded-md px-3 cursor-pointer transition-colors duration-200">
          <FiHome className="text-xl" />
          <span className="hidden md:inline-block">Dashboard</span>
        </p>
        <p className="flex items-center space-x-2 py-2 w-full hover:bg-gray-100 rounded-md px-3 cursor-pointer transition-colors duration-200">
          <FiActivity className="text-xl" />
          <span className="hidden md:inline-block">Workouts</span>
        </p>
        <p className="flex items-center space-x-2 py-2 w-full hover:bg-gray-100 rounded-md px-3 cursor-pointer transition-colors duration-200">
          <FiBarChart2 className="text-xl" />
          <span className="hidden md:inline-block">Analytics</span>
        </p>
        <p className="flex items-center space-x-2 py-2 w-full hover:bg-gray-100 rounded-md px-3 cursor-pointer transition-colors duration-200">
          <FiSettings className="text-xl" />
          <span className="hidden md:inline-block">Settings</span>
        </p>
      </nav>
    </aside>
  );
};

export default Sidebar;
