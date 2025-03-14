import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { StudentCard_2 } from "../cards/StudentCard-2";
import { MarkPopupForm } from "./Popup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountdownTimer from "../CountdownTimer";
import { PublicResult } from "./PublicResult";
import { publicResult } from "../../data/publicResult.js";

export const AdminResult = () => {
  const { exams } = useSelector((state) => state.exam);
  const { classes } = useSelector((state) => state.class);
  const [topStudents, setTopStudents] = useState({});

  useEffect(() => {
    const getClassTopStudents = () => {
      const studentsByClass = {};

      exams.forEach((exam) => {
        const classId = exam.studentId.classNumber;
        if (!studentsByClass[classId]) {
          studentsByClass[classId] = {};
        }

        const studentId = exam.studentId._id;

        if (!studentsByClass[classId][studentId]) {
          studentsByClass[classId][studentId] = {
            student: { ...exam.studentId },
            totalObtained: 0,
            totalMarks: 0,
            failed: false,
          };
        }

        const obtainedMark = exam.marks.obtainedMark;
        const totalMark = exam.marks.totalMark;

        if (totalMark === 50 && obtainedMark < 17.5) {
          studentsByClass[classId][studentId].failed = true;
        }

        studentsByClass[classId][studentId].totalObtained += obtainedMark;
        studentsByClass[classId][studentId].totalMarks += totalMark;
      });

      const topStudentsByClass = {};

      Object.keys(studentsByClass).forEach((classId) => {
        const students = Object.values(studentsByClass[classId]);

        const passedStudents = students.filter((student) => !student.failed);

        passedStudents.sort((a, b) => b.totalObtained - a.totalObtained);

        let currentRank = 1;
        let previousMark = null;
        let actualRank = 1;

        const rankedPassedStudents = passedStudents.map((student) => {
          if (previousMark !== null && student.totalObtained !== previousMark) {
            currentRank = actualRank;
          }
          previousMark = student.totalObtained;
          actualRank++;
          return {
            ...student.student,
            rank: currentRank,
            totalObtained: student.totalObtained,
            totalMarks: student.totalMarks,
          };
        });

        topStudentsByClass[classId] = rankedPassedStudents.slice(0, 3);
      });

      setTopStudents(topStudentsByClass);
    };

    if (exams.length > 0) {
      getClassTopStudents();
    }
  }, [exams]);

  const sortedClasses = classes
    .filter((cls) => cls.classNumber !== "5 A")
    .sort((a, b) => parseInt(a.classNumber) - parseInt(b.classNumber));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 sm:px-6">
      <>
        <div className="mt-10 p-5 border shadow-md flex flex-col items-center bg-white rounded-md w-full">
          <h1 className="text-xl sm:text-3xl font-bold text-gray-800 text-center uppercase">
            Welcome to AL Madrassathul Falahiyya Kalarundi
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 text-center">
            Exam Result Board
          </p>
          <div className="mt-6">
            <MarkPopupForm exams={exams} />
          </div>
        </div>

        {!exams ||
          (exams.length === 0 && (
            <div className="container min-h-[50vh] flex justify-center items-center">
              <h1 className="text-center">Please Wait...</h1>
            </div>
          ))}

        {/* <div className="my-5 w-full flex flex-col justify-between items-center">
          <h1 className="my-3 text-[24px] md:text-[30px] font-bold text-gray-800 text-center uppercase">
            Samastha Public Exam Result
          </h1>
          <div className="flex justify-between items-center w-full overflow-x-scroll gap-3 overscroll-none">
            {publicResult.map((result) => (
              <PublicResult key={result.id} result={result} />
            ))}
          </div>
        </div> */}

        <div className="mt-10 w-full">
          {!exams ||
            (exams.length !== 0 && (
              <h2 className="text-[24px] md:text-[30px] font-bold text-gray-800 text-center">
                Class Toppers
              </h2>
            ))}

          {sortedClasses.map((cls) => (
            <div key={cls._id} className="mt-6 pt-3 pb-8">
              <h3 className="text-base text-[22px] md:text-[26px] font-semibold text-gray-700 text-center pb-2">
                Class - {cls.classNumber}
              </h3>
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {topStudents[cls._id]?.map((student) => (
                  <StudentCard_2 key={student.rollNo} student={student} />
                ))}
              </div>

              {/* Slider for Mobile */}
              <div className="sm:hidden mt-4">
                <Slider {...sliderSettings}>
                  {topStudents[cls._id]?.map((student) => (
                    <StudentCard_2 key={student.rollNo} student={student} />
                  ))}
                </Slider>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};
