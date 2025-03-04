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

        if (!studentsByClass[classId][exam.studentId._id]) {
          studentsByClass[classId][exam.studentId._id] = {
            student: { ...exam.studentId },
            totalObtained: 0,
            totalMarks: 0,
          };
        }

        studentsByClass[classId][exam.studentId._id].totalObtained +=
          exam.marks.obtainedMark;
        studentsByClass[classId][exam.studentId._id].totalMarks +=
          exam.marks.totalMark;
      });

      const topStudentsByClass = {};
      Object.keys(studentsByClass).forEach((classId) => {
        const students = Object.values(studentsByClass[classId]);
        students.sort((a, b) => b.totalObtained - a.totalObtained);

        const rankedStudents = students.slice(0, 3).map((student, index) => ({
          ...student.student,
          rank: index + 1,
          totalObtained: student.totalObtained,
          totalMarks: student.totalMarks,
        }));

        topStudentsByClass[classId] = rankedStudents;
      });

      setTopStudents(topStudentsByClass);
    };

    if (exams.length > 0) {
      getClassTopStudents();
    }
  }, [exams]);

  // Filter out "5A" and sort remaining classes numerically
  const sortedClasses = classes
    .filter((cls) => cls.classNumber !== "5 A")
    .sort((a, b) => {
      const numA = parseInt(a.classNumber);
      const numB = parseInt(b.classNumber);
      return numA - numB;
    });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 sm:px-6">
      <h1 className="text-xl sm:text-3xl font-bold text-gray-800 text-center">
        Welcome to AL Madrassathul Falahiyya Kalarundi
      </h1>
      <p className="text-sm sm:text-lg text-gray-600 text-center">
        Exam Result Board
      </p>

      <div className="mt-6">
        <MarkPopupForm />
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
