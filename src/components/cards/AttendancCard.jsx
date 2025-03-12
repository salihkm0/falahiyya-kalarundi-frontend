import React from "react";

export const AttendanceCard = ({ attendance }) => {
  // Calculate attendance percentage
  const attendancePercentage = (
    (attendance?.presentDays / attendance?.totalDays) *
      100 || 0
  ).toFixed(2);

  // Calculate progress ring parameters
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (circumference * (100 - attendancePercentage)) / 100;

  return (
    <div className="w-auto mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-102 hover:shadow-3xl border border-gray-100">
      {/* Header with Progress Ring */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Attendance Details
          </h3>
          <p className="text-gray-500 text-sm mt-1">Academic Year 2023-24</p>
        </div>
        <div className="relative w-24 h-24 ">
          <svg className="transform -rotate-90 w-24 h-24">
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="48"
              cy="48"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={progress}
              className={`${
                attendancePercentage >= 75
                  ? "text-emerald-500"
                  : "text-rose-500"
              } transition-all duration-1000 ease-out`}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-md font-bold text-gray-800">
              {attendancePercentage}%
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
          <div className="text-sm text-gray-500 mb-1">Present Days</div>
          <div className="text-2xl font-bold text-gray-800">
            {attendance?.presentDays || "00"}
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
          <div className="text-sm text-gray-500 mb-1">Total Days</div>
          <div className="text-2xl font-bold text-gray-800">
            {attendance?.totalDays || "00"}
          </div>
        </div>
      </div>

      {/* Class Rank Card */}
      <div className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-2xl shadow-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm opacity-80">Class Rank</div>
            <div className="text-3xl font-bold mt-1">
              #{attendance?.rank || "00"}
            </div>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mt-6 flex justify-center">
        <span
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            attendancePercentage >= 75
              ? "bg-emerald-100 text-emerald-800"
              : "bg-rose-100 text-rose-800"
          }`}
        >
          {attendancePercentage >= 75 ? "Good Standing" : "Needs Improvement"}
        </span>
      </div>
    </div>
  );
};