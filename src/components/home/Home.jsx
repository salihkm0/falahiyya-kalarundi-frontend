import React from "react";
import { Link } from "react-router-dom"; // Import Link
import {
  Calendar,
  Clock,
  FileText,
  GraduationCap,
  HelpCircle,
  Images,
  Layout,
  LogOut,
  PenTool,
  School,
  User2,
  Wallet,
} from "lucide-react";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="p-4 md:p-6">
        <div className="flex justify-between items-center text-white">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Muhammed Salih Km</h2>
            <div className="flex items-center gap-2 text-sm md:text-base opacity-90">
              <span>Class 5 A</span>
              <span>|</span>
              <span>Roll no: 04</span>
            </div>
            <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs mt-2">
              2024-2025
            </div>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="md:px-6 grid grid-cols-2 gap-4 mt-4">
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-gray-600">Attendance</span>
          </div>
          <p className="text-2xl font-bold mt-2">80.39%</p>
        </div>
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center gap-2">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Wallet className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-gray-600">Fees Due</span>
          </div>
          <p className="text-2xl font-bold mt-2">₹6400</p>
        </div>
      </div>

      {/* Grid Menu */}
      <div className="bg-gray-50 rounded-t-[2rem] mt-4 md:mt-6 p-6 flex-1">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { icon: Layout, label: "Play Quiz", to: "/play-quiz" },
            { icon: PenTool, label: "Assignment", to: "/assignment" },
            { icon: School, label: "Attendance Table", to: "/attendance" },
            { icon: Clock, label: "Time Table", to: "/time-table" },
            { icon: FileText, label: "Result", to: "/result" },
            // { icon: Calendar, label: "Date Sheet", to: "/date" },
            // { icon: HelpCircle, label: "Ask Doubts", to: "/ask" },
            { icon: Images, label: "School Gallery", to: "/gallery" },
            { icon: FileText, label: "Leave Application", to: "/leave-application" },
            { icon: User2, label: "Change Password", to: "/change-password" },
            { icon: Calendar, label: "Events", to: "/events" },
            { icon: LogOut, label: "Logout", to: "/logout" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <div className="bg-blue-100 p-3 rounded-lg">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-700 text-center">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
