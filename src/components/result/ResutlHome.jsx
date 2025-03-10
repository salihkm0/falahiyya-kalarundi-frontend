import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StudentCard_2 } from "../cards/StudentCard-2";
import { MarkPopupForm } from "./Popup";

export const ResultHome = () => {
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

        // Initialize student record
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

        // Check if the student has failed (less than 17.5 out of 50)
        if (totalMark === 50 && obtainedMark < 17.5) {
          studentsByClass[classId][studentId].failed = true;
        }

        // Accumulate marks
        studentsByClass[classId][studentId].totalObtained += obtainedMark;
        studentsByClass[classId][studentId].totalMarks += totalMark;
      });

      const topStudentsByClass = {};

      Object.keys(studentsByClass).forEach((classId) => {
        const students = Object.values(studentsByClass[classId]);

        // Filter only passed students
        const passedStudents = students.filter((student) => !student.failed);

        // Sort passed students by total obtained marks (Descending order)
        passedStudents.sort((a, b) => b.totalObtained - a.totalObtained);

        let currentRank = 1;
        let previousMark = null;
        let actualRank = 1;

        // Assign ranks to passed students
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

        // Get only the top 3 students
        topStudentsByClass[classId] = rankedPassedStudents.slice(0, 3);
      });

      setTopStudents(topStudentsByClass);
    };

    if (exams.length > 0) {
      getClassTopStudents();
    }
  }, [exams]);

  console.log("top students:", topStudents);

  // Filter out "5A" and sort remaining classes numerically
  const sortedClasses = classes
    .filter((cls) => cls.classNumber !== "5 A")
    .sort((a, b) => parseInt(a.classNumber) - parseInt(b.classNumber));

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 sm:px-6 ">
      <div className="mt-10 p-5 border shadow-md flex flex-col items-center bg-white rounded-md w-full">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 text-center">
          Welcome to AL Madrassathul Falahiyya Kalarundi
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 text-center">
          Exam Result Board
        </p>
        <div className="mt-6">
          <MarkPopupForm />
        </div>
      </div>

      <div className="mt-10 w-full">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
          Class Toppers
        </h2>
        {sortedClasses.map((cls) => (
          <div key={cls._id} className="mt-6">
            <h3 className="text-base sm:text-xl font-semibold text-gray-700">
              Class - {cls.classNumber}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {topStudents[cls._id]?.map((student) => (
                <StudentCard_2 key={student.rollNo} student={student} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
