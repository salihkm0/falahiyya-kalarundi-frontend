import React from 'react'
import { StudentCard_2 } from '../cards/StudentCard-2';
import { MarkPopupForm } from '../result/Popup';


const studentData = {
    rank: "Top Plus",
    name: "Salih",
    fatherName: "Abdulla",
    place: "Kottappuram",
    image:
      "https://png.pngtree.com/png-clipart/20240321/original/pngtree-avatar-job-student-flat-portrait-of-man-png-image_14639685.png", // Replace with actual image URL
    totalObtained: 545,
    totalMarks: 560,
    marks: [
      { name: "Subject 1", obtained: 97, total: 100 },
      { name: "Subject 2", obtained: 99, total: 100 },
      { name: "Subject 3", obtained: 96, total: 100 },
      { name: "Subject 4", obtained: 96, total: 100 },
      { name: "Subject 5", obtained: 99, total: 100 },
      { name: "Subject 6", obtained: 100, total: 100 },
    ],
  };

export const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 ">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Welcome to AL Madrassathul Falahiyya Kalarundi
        </h1>
        <p className="text-lg text-gray-600">Exam Result Board</p>

        {/* Result Section */}
        <div className="rounded-xl px-3 py-2 mt-6 text-center ">
          <MarkPopupForm />
        </div>

        {/* Toppers Section */}
        <div className="mt-10 w-full">
          <h2 className="text-2xl font-bold text-gray-800">
            Pothu Pareeksha Toppers
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="">
                {/* <StudentResultCard student={studentData} /> */}
                <StudentCard_2 student={studentData} />
              </div>
            ))}
          </div>
        </div>

        {/* Exam Toppers by Class */}
        <div className="mt-10 w-full">
          <h2 className="text-2xl font-bold text-gray-800">Class Toppers</h2>
          {[1, 2].map((cls) => (
            <div key={cls} className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700">
                Class - {cls}
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="">
                    {/* <StudentResultCard student={studentData} /> */}
                    <StudentCard_2 student={studentData} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
