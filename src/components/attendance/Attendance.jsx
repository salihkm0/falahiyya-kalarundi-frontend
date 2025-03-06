import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

// Dummy data
const dummyData = [
  {
    month: 2,
    year: 2025,
    days: [
      { date: "2025-02-08", status: "absent" },
      { date: "2025-02-23", status: "absent" },
      { date: "2025-02-20", status: "holiday", description: "Festival" },
      { date: "2025-02-04", status: "present" },
      { date: "2025-02-11", status: "present" },
      { date: "2025-02-18", status: "present" },
      { date: "2025-02-25", status: "present" },
    ],
  },
  {
    month: 1,
    year: 2025,
    days: [
      { date: "2025-01-08", status: "present" },
      { date: "2025-01-23", status: "present" },
      { date: "2025-01-20", status: "present" },
      { date: "2025-01-04", status: "present" },
      { date: "2025-01-11", status: "present" },
      { date: "2025-01-18", status: "present" },
      { date: "2025-01-25", status: "present" },
    ],
  },
];

export function Attendance({ initialDate = new Date() }) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [view, setView] = useState("attendance");

  // Get attendance data for the current month
  const currentMonthData = dummyData.find(
    (data) =>
      data.month === currentDate.getMonth() + 1 &&
      data.year === currentDate.getFullYear()
  );

  const getDayStatus = (date) => {
    return currentMonthData?.days.find((day) =>
      isSameDay(new Date(day.date), date)
    )?.status;
  };

  const getDayClass = (date) => {
    const status = getDayStatus(date);
    if (!isSameMonth(date, currentDate)) return "text-gray-400";
    if (status === "absent") return "bg-red-500 text-white rounded-full";
    if (status === "holiday") return "bg-green-500 text-white rounded-full";
    if (status === "present") return "bg-blue-100 text-blue-800 rounded-full";
    return "";
  };

  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const previousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const absentDays =
    currentMonthData?.days.filter((day) => day.status === "absent").length || 0;
  const holidayDays =
    currentMonthData?.days.filter((day) => day.status === "holiday").length ||
    0;

  return (
    <div className="p-4">
      {/* Back Button */}
      <button className="text-white mb-4">
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* View Toggle */}
      <div className="bg-white rounded-full p-1 mb-6 inline-flex">
        <button
          className={`px-6 py-2 rounded-full ${
            view === "attendance" ? "bg-blue-500 text-white" : "text-gray-600"
          }`}
          onClick={() => setView("attendance")}
        >
          ATTENDANCE
        </button>
        <button
          className={`px-6 py-2 rounded-full ${
            view === "holiday" ? "bg-blue-500 text-white" : "text-gray-600"
          }`}
          onClick={() => setView("holiday")}
        >
          HOLIDAY
        </button>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={previousMonth}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold">
            {format(currentDate, "MMMM yyyy")}
          </h2>
          <button onClick={nextMonth}>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-4">
          {WEEKDAYS.map((day) => (
            <div key={day} className="text-center text-sm text-gray-600">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-4">
          {days.map((day, index) => (
            <div
              key={index}
              className={`text-center p-2 text-sm ${getDayClass(day)}`}
            >
              {format(day, "d")}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between bg-red-100 p-4 rounded-xl">
            <span className="text-gray-800">Absent</span>
            <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full">
              {absentDays.toString().padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center justify-between bg-green-100 p-4 rounded-xl">
            <span className="text-gray-800">Festival & Holidays</span>
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
              {holidayDays.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
