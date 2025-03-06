import React from "react";
import { Attendance } from "../components/attendance/Attendance";

export const AttendancePage = () => {
  return (
    <div className="px-2 md:px-10 lg:px-20 pt-10 bg-gray-100 bg-gradient-to-r from-[#2855AE] to-[#7292CF] min-h-[100vh]">
      {/* <ResultHome /> */}
      <Attendance />
    </div>
  );
};
