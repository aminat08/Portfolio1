import React from "react";
import { FaClock, FaRunning, FaDumbbell } from "react-icons/fa";
import Man from "../assets/Man.jpg";
import Sidebar from "./Sidebar";
import Shoulder from '../assets/Shoulder.png.png';
import back from '../assets/back.png'
import chest from '../assets/chest.jpg'
import leg from '../assets/leg.jpg'
// 1) IMPORT CHART LIBRARIES
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// 2) REGISTER CHART.JS COMPONENTS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Dashboard = () => {
  // 3) DEFINE CHART DATA
  const lineData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "Weekly Points",
        data: [600, 800, 750, 900, 1200, 1600, 1500], // example data
        fill: true,
        borderColor: "#3B82F6", // Tailwind blue-500
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    scales: {
      x: { display: true },
      y: { display: true, suggestedMin: 0 },
    },
    plugins: {
      legend: { display: false },
    },
  };

  // For the middle panel circular progress
  const weeklyGoalValue = 64; // 64%

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="sticky ">
        <Sidebar  />
      </div>

      {/* Main dashboard container */}
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800 w-full px-3">
        {/* ============ Top Header ============ */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-8 py-4">
          <div>
            <h1 className="text-2xl font-semibold">
              Hello, <span className="text-gray-700">Sophia</span>
            </h1>
            <p className="text-gray-500">Wednesday, Feb 2025</p>
          </div>

          {/* Right-side controls: search and notification */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-white border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.35 4.35a7.5 7.5 0 0012.3 12.3z"
                />
              </svg>
            </div>

            {/* Notification Icon */}
            <button className="relative p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* ============ Main Content ============ */}
        <main className="px-4 md:px-8 pb-8 flex flex-col md:flex-row gap-6">
          {/* --------- Challenge Section --------- */}
          <section
            className="flex-1 bg-white rounded-xl shadow-md flex flex-row items-center relative"
            style={{
              background: "linear-gradient(to right, #f0f4f8 50%, #ffffff 50%)",
            }}
          >
            {/* Text & Button */}
            <div className="w-[300px] px-5 p-2">
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                Challenge
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Challenge With Pro Coach
              </h2>
              <p className="text-gray-500 mb-4">
                Train with our professional coaches to get the best out of your
                routine.
              </p>
              <button
                style={{ backgroundColor: "blue" }}
                className="text-white px-4 py-2 rounded-md"
              >
                Get Started
              </button>
            </div>

            {/* Image */}
            <div className="h-full">
              <img
                src={Man}
                alt="Man"
                className="h-[350px] w-[330px] md:w-[350px] rounded-r-xl object-cover"
              />
            </div>
          </section>

          {/* --------- TODAY'S ACTIVITY SECTION --------- */}
          <section className="w-full md:w-1/3 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FaClock className="text-blue-500" /> Today’s Activity
            </h3>

            {/* Activity List */}
            <div className="flex flex-col space-y-6">
              {/* Time */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaClock className="text-green-500 text-2xl" />
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="text-lg font-semibold">1:30 Hours</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
                  10 th
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Today’s Routine */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaRunning className="text-orange-500 text-2xl" />
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500">Today’s Routine</p>
                    <p className="text-lg font-semibold">28m 45s</p>
                  </div>
                </div>
                <div className="bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full">
                  10 min
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Exercises */}
              <div className="flex items-center gap-3">
                <FaDumbbell className="text-purple-500 text-2xl" />
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500">Exercises</p>
                  <p className="text-lg font-semibold">12/8 Tasks</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ============ NEW SECTION: Fitness Panels ============ */}
        <section className="px-4 md:px-8 pb-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
            {/* LEFT PANEL: Running Stats */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Exercise</h2>
                  <p className="text-xs text-gray-400">1/8</p>
                </div>
                <div className="text-gray-800 text-lg font-semibold">
                  1:29:59
                </div>
              </div>

              {/* Circular progress with text in the center */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-32 h-32 mb-4">
                  <CircularProgressbar
                    value={75} // example progress
                    text="Running\n10km"
                    styles={buildStyles({
                      pathColor: "#10B981", // green-500
                      trailColor: "#E5E7EB", // gray-200
                      textColor: "#000000",
                      textSize: "8px",
                    })}
                  />
                </div>

                {/* VO2 & Heart Rate */}
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-center">
                    <p className="text-sm font-semibold">VO₂</p>
                    <p className="text-xl font-bold">29</p>
                  </div>
                  <div className="w-px h-6 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-sm font-semibold">❤️</p>
                    <p className="text-xl font-bold">98</p>
                  </div>
                </div>

                {/* Stop Button */}
                <button className="w-full rounded-md bg-pink-200 py-2 text-pink-700 font-semibold hover:bg-pink-300 transition">
                  STOP
                </button>
              </div>
            </div>

            {/* MIDDLE PANEL: Weekly Points & Line Chart */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="flex items-center justify-between mb-6">
                {/* Circular progress for weekly goal */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16">
                    <CircularProgressbar
                      value={weeklyGoalValue}
                      text={`${weeklyGoalValue}%`}
                      styles={buildStyles({
                        pathColor: "#84CC16", // green-500
                        trailColor: "#E5E7EB",
                        textColor: "#000000",
                        textSize: "12px",
                      })}
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm">Weekly points</p>
                    <h3 className="text-xl font-bold">1544</h3>
                    <p className="text-sm text-green-600 font-medium">+6%</p>
                  </div>
                </div>
              </div>

              {/* Line Chart */}
              <div className="h-48">
                <Line data={lineData} options={lineOptions} />
              </div>
            </div>

            {/* RIGHT PANEL: Muscles Workload */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-2 text-lg font-semibold text-gray-700">
                Muscles workload
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Select muscles type you want to make strong
              </p>

              {/* Muscle Groups Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Shoulders */}
                <div className="flex flex-col items-center justify-center border rounded-lg p-4 hover:border-blue-500 transition cursor-pointer">
                  <img
                    src={Shoulder}
                    alt="Shoulders"
                    className="w-16 h-24 object-cover mb-2"
                  />
                  <p className="text-sm font-medium text-gray-700">Shoulders</p>
                </div>

                {/* Back */}
                <div className="flex flex-col items-center justify-center border rounded-lg p-4 hover:border-blue-500 transition cursor-pointer">
                  <img
                    src={back}
                    alt="Back"
                    className="w-16 h-24 object-cover mb-2"
                  />
                  <p className="text-sm font-medium text-gray-700">Back</p>
                </div>

                {/* Chest */}
                <div className="flex flex-col items-center justify-center border rounded-lg p-4 hover:border-blue-500 transition cursor-pointer">
                  <img
                    src={chest}
                    alt="Chest"
                    className="w-16 h-24 object-cover mb-2"
                  />
                  <p className="text-sm font-medium text-gray-700">Chest</p>
                </div>

                {/* Legs */}
                <div className="flex flex-col items-center justify-center border rounded-lg p-4 hover:border-blue-500 transition cursor-pointer">
                  <img
                    src={leg}
                    alt="Legs"
                    className="w-16 h-24 object-cover mb-2"
                  />
                  <p className="text-sm font-medium text-gray-700">Legs</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============ END NEW SECTION ============ */}
      </div>
    </div>
  );
};

export default Dashboard;
