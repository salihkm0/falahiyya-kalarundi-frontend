import React, { useState, useEffect } from "react";
import { StudentResultCard } from "../cards/StudentCard-1";
import { useSelector } from "react-redux";

export const Result = () => {
  const [studentData, setStudentData] = useState(null);
  const res = useSelector((state) => state.mark.studentMarks);
  const { classes } = useSelector((state) => state.class);

  useEffect(() => {
    if (res && classes.length > 0) {
      const studentClass = classes.find(
        (cls) => cls._id === res.student.classNumber
      );
      const className = studentClass ? studentClass.classNumber : "Unknown";

      let totalObtained = 0;
      let totalMarks = 0;

      const marksData = res.exams.map((exam) => {
        const subjectNames = exam.subjects
          .map((sub) => sub.subjectName)
          .join("/");
        totalObtained += exam.marks.obtainedMark;
        totalMarks += exam.marks.totalMark;

        return {
          name: subjectNames,
          obtained: exam.marks.obtainedMark,
          total: exam.marks.totalMark,
          percentage: (
            (exam.marks.obtainedMark / exam.marks.totalMark) *
            100
          ).toFixed(2),
        };
      });

      const percentage = (totalObtained / totalMarks) * 100;

      // Determine Rank
      let rank = "Failed";
      const allAbove97 = res.exams.every(
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 >= 97
      );
      const allAbove80 = res.exams.every(
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 >= 80
      );
      const allAbove70 = res.exams.every(
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 >= 60
      );
      const allAbove50 = res.exams.every(
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 >= 40
      );
      const allAbove30 = res.exams.every(
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 >= 18
      );
      const anyBelow30 = res.exams.some(
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 < 18
      );

      if (allAbove97) rank = "Top Plus";
      else if (allAbove80) rank = "Distinction";
      else if (allAbove70) rank = "First Class";
      else if (allAbove50) rank = "Second Class";
      else if (allAbove30) rank = "Third Class";
      if (anyBelow30) rank = "Failed";

      const formattedData = {
        name: res.student.name,
        rollNo: res.student.rollNo,
        guardian: res.student.guardian,
        regNo: res.student.regNo,
        mobile: res.student.mobile,
        class: className,
        totalObtained,
        totalMarks,
        percentage: percentage.toFixed(2),
        rank,
        marks: marksData,
      };
      setStudentData(formattedData);
    }
  }, [res, classes]);

  if (!studentData) return <p>Loading...</p>;

  const isFailed = studentData.rank === "Failed";

  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          AL Madrassathul Falahiyya Kalarundi
        </h1>
        <p className="text-lg text-gray-600">Exam Result Board</p>

        <div className="bg-white shadow-lg rounded-xl p-6 mt-6 text-center w-full max-w-md">
          <p
            className={`text-xl font-semibold ${
              isFailed ? "text-red-600" : "text-green-600"
            }`}
          >
            {isFailed
              ? `Sorry, ${studentData.name}. You have failed the exam. Better luck next time!`
              : `Congratulations, ${studentData.name}! You Passed The Exam`}
          </p>
          <div className="text-4xl font-bold text-gray-800 my-4">
            {studentData.totalObtained}/{studentData.totalMarks}
          </div>
          <p className="text-lg text-gray-700 font-semibold">
            Percentage: {studentData.percentage}%
          </p>
          <p className="text-lg text-gray-700 font-semibold">
            Rank:{" "}
            <span
              className={`${
                isFailed ? "text-red-600" : "text-blue-600"
              } font-bold`}
            >
              {studentData.rank}
            </span>
          </p>
          <p className="text-lg text-gray-700 font-semibold">
            Class: <span className="text-blue-600">{studentData.class}</span>
          </p>
        </div>

        <div className="mt-10 w-full">
          <div className="grid grid-cols-1 gap-4 mt-4">
            <StudentResultCard student={studentData} isFailed = {isFailed}/>
          </div>
        </div>
      </div>
    </>
  );
};
