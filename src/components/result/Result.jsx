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
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 >= 35
      );
      const anyBelow30 = res.exams.some(
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 < 35
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10 px-1 md:px-6 lg:px-8 pt-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 border ">
          <h1 className="text-4xl text-center font-bold text-gray-900 mb-2">
            AL Madrassathul Falahiyya Kalarundi 
          </h1>
          <p className="text-lg text-gray-600">Exam Result Board</p>
        </div>

        {/* Result Summary Card */}
        <div className="bg-white rounded-xl shadow-2xl p-6 mb-10 transform transition-all">
          <p
            className={`text-2xl font-semibold text-center ${
              isFailed ? "text-red-600" : "text-green-600"
            }`}
          >
            {isFailed
              ? `Sorry, ${studentData.name}. You have failed the exam. Better luck next time!`
              : `Congratulations, ${studentData.name}! You Passed The Exam`}
          </p>
          <div className="flex justify-center items-center my-6">
            <div className="text-6xl font-bold text-gray-900">
              {studentData.totalObtained}
              <span className="text-3xl text-gray-500">
                /{studentData.totalMarks}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg text-gray-700 font-semibold">Percentage</p>
              <p className="text-2xl font-bold text-blue-600">
                {studentData.percentage}%
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-lg text-gray-700 font-semibold">Rank</p>
              <p
                className={`text-2xl font-bold ${
                  isFailed ? "text-red-600" : "text-purple-600"
                }`}
              >
                {studentData.rank}
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg text-gray-700 font-semibold">
              Class: <span className="text-blue-600">{studentData.class}</span>
            </p>
          </div>
        </div>

        {/* Student Result Card */}
        <div className="md:bg-white rounded-xl shadow-2xl md:p-6">
          <StudentResultCard student={studentData} isFailed={isFailed} />
        </div>
      </div>
    </div>
  );
};
