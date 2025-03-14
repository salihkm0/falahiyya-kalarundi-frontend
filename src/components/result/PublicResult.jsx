import React from "react";
import { Medal, User, GraduationCap, Users, Trophy } from 'lucide-react';
export const PublicResult = ({result}) => {

    const percentage = result.mark * 100 / 600
  return (
    <div className="">
      <div className="w-80 bg-gradient-to-b from-[#16213e] to-[#0f3460] rounded-2xl shadow-xl overflow-hidden border border-[#e94560]/20">
        <div className="relative">
          {/* Top Achievement Banner */}
          <div className="absolute top-0 left-0 right-0 bg-[#e94560] text-white text-xs py-1 px-4 flex items-center justify-center gap-1">
            <Trophy className="h-3 w-3" />
            <span>Top Achiever 2025</span>
          </div>

          {/* Profile Section */}
          <div className="pt-8 pb-4 px-4 text-center">
            <div className="h-24 w-24 mx-auto rounded-full border-4 border-[#e94560] p-1 mb-3">
              <img
                src={result.image}
                alt="Student"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <h2 className="text-white font-bold">{result.student_name}</h2>
            <div className="flex items-center justify-center gap-1 text-[#e94560] text-sm mt-1">
              <Medal className="h-4 w-4" />
              <span>TOP PLUS</span>
            </div>
          </div>

          {/* Score Card */}
          <div className="bg-[#e94560] -skew-y-2 transform py-3 px-4 mb-4">
            <div className="skew-y-2 transform text-center text-white">
              <p className="text-xs opacity-80">Total Score</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <span className="text-3xl font-bold">{result.mark}</span>
                <span className="text-sm opacity-80">/600</span>
              </div>
              <p className="text-xs mt-1">{percentage.toFixed(2)}%</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="px-4 pb-4 space-y-2">
            <div className="flex items-center gap-3 text-white/80">
              <User className="h-4 w-4 text-[#e94560]" />
              <div>
                <p className="text-xs opacity-60">Father's Name</p>
                <p className="text-sm">{result.father_name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <GraduationCap className="h-4 w-4 text-[#e94560]" />
              <div>
                <p className="text-xs opacity-60">Class</p>
                <p className="text-sm">5 A</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
