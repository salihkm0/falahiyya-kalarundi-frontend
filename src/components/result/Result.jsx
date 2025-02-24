import React, { useRef, useState, useEffect } from "react";
import { StudentResultCard } from "../cards/StudentCard-1";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import styled from "styled-components";
import { useSelector } from "react-redux";

const DownloadButton = styled.button`
  background: #10b981;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 20px;

  &:hover {
    background: #059669;
  }
`;

export const Result = () => {
  const pdfRef = useRef();
  const [studentData, setStudentData] = useState(null);
  const res = useSelector((state) => state.mark.studentMarks);

  useEffect(() => {
    if (res) {
      const totalObtained = res.exams.reduce(
        (sum, exam) => sum + exam.marks.obtainedMark,
        0
      );
      const totalMarks = res.exams.reduce(
        (sum, exam) => sum + exam.marks.totalMark,
        0
      );

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
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 >= 70
      );
      const allAbove50 = res.exams.every(
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 >= 50
      );
      const allAbove30 = res.exams.every(
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 >= 30
      );
      const anyBelow30 = res.exams.some(
        (exam) => (exam.marks.obtainedMark / exam.marks.totalMark) * 100 < 30
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
        regNo: res.student.regNo,
        mobile: res.student.mobile,
        totalObtained,
        totalMarks,
        percentage: percentage.toFixed(2),
        rank,
        marks: res.exams.map((exam) => ({
          name: exam.subject.subjectName,
          obtained: exam.marks.obtainedMark,
          total: exam.marks.totalMark,
          percentage: ((exam.marks.obtainedMark / exam.marks.totalMark) * 100).toFixed(2),
        })),
      };
      setStudentData(formattedData);
    }
  }, [res]);

  const handleDownloadPdf = async () => {
    const element = pdfRef.current;
    const scale = window.devicePixelRatio || 2;

    const canvas = await html2canvas(element, {
      scale: scale,
      useCORS: true,
      taintTest: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const margin = 10;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgWidth = pageWidth - 2 * margin;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", margin, 20, imgWidth, imgHeight);
    pdf.save(`${studentData?.name}_Result.pdf`);
  };

  if (!studentData) return <p>Loading...</p>;

  return (
    <>
      <div className="min-h-screen flex flex-col items-center" ref={pdfRef}>
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Welcome to AL Madrassathul Falahiyya Kalarundi
        </h1>
        <p className="text-lg text-gray-600">Exam Result Board</p>

        <div className="bg-white shadow-lg rounded-xl p-6 mt-6 text-center w-full max-w-md">
          <p className="text-xl text-green-600 font-semibold">
            Congratulations, {studentData.name}! You {studentData.rank === "Failed" ? "Failed" : "Passed"} The Exam
          </p>
          <div className="text-4xl font-bold text-gray-800 my-4">
            {studentData.totalObtained}/{studentData.totalMarks}
          </div>
          <p className="text-lg text-gray-700 font-semibold">
            Percentage: {studentData.percentage}%
          </p>
          <p className="text-lg text-gray-700 font-semibold">
            Rank: <span className="text-blue-600">{studentData.rank}</span>
          </p>
        </div>

        <div className="mt-10 w-full">
          <div className="grid grid-cols-1 gap-4 mt-4">
            <StudentResultCard student={studentData} />
          </div>
        </div>
      </div>

      <DownloadButton onClick={handleDownloadPdf}>
        ⬇ Download PDF
      </DownloadButton>
    </>
  );
};
