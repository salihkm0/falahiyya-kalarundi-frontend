import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-03-18T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      setTimeLeft(targetDate - now);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const getFormattedTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getFormattedTime(timeLeft);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center mb-5 border bg-white rounded-xl shadow-2xl p-5">
        <h1 className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 text-center mb-3">
          AL Madrassathul Falahiyya Kalarundi
        </h1>
        <div className="relative">
          <p className="text-md md:text-xl text-gray-600 font-medium">
            Result Announcement Countdown (Date : <strong> 18th March 2025</strong> Time : <strong> 10:00 AM</strong>)
          </p>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
        </div>
      </div>

      <div className="flex space-x-4 text-center text-white text-2xl font-bold">
        <div className="p-4 bg-indigo-600 rounded-lg shadow-lg w-20">
          {days}
          <span className="block text-sm">Days Left</span>
        </div>
        <div className="p-4 bg-blue-600 rounded-lg shadow-lg w-20">
          {hours}
          <span className="block text-sm">Hours Left</span>
        </div>
        <div className="p-4 bg-indigo-500 rounded-lg shadow-lg w-20">
          {minutes}
          <span className="block text-sm">Minutes Left</span>
        </div>
        <div className="p-4 bg-blue-500 rounded-lg shadow-lg w-20">
          {seconds}
          <span className="block text-sm">Seconds Left</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
