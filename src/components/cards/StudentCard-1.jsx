import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

export const StudentResultCard = ({ student, isFailed }) => {
  const pdfRef = useRef();

  const convertImageToBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };
  const handleDownloadPdf = async () => {
    const element = pdfRef.current;

    const scale = 3;
    const canvas = await html2canvas(element, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210 - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

    pdf.save(`${student?.name}_Result.pdf`);
  };
  console.log("Student :", student.marks);

  return (
    <>
      <div
        className="max-w-[500px] sm:w-[600px] md:min-w-[700px] lg:min-w-[800px] mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-200"
        ref={pdfRef}
      >
        <div className="bg-blue-600 text-white flex justify-center items-center flex-col py-3 rounded-t-lg">
          <h2 className="text-lg font-bold">AL MADRASSATHUL FALAHIYYA</h2>
          <p>Kalarundi ,Valiyaparamba P.O , SKIMV Board: Reg No: 10610</p>
          <p className="text-sm">Public Examination Result</p>
        </div>
        <div className="p-4 border-b">
          <h3 className="text-center text-lg font-semibold">
            Examination Result 2024-25
          </h3>
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-1 gap-4 mt-4 text-sm">
              <p>
                <strong>Student's Name:</strong> {student.name}
              </p>
              <p>
                <strong>Class:</strong> {student.class}
              </p>
              <p>
                <strong>Roll No.:</strong> {student.rollNo}
              </p>
              <p>
                <strong>Father's Name:</strong> {student.guardian}
              </p>
            </div>
            {/* {student?.image && ( */}
            <div className="flex w-full justify-end items-center">
              {student.image ? (
                <StudentImage src={student.image} alt="Student" />
              ) : (
                ""
              )}
            </div>
            {/* )} */}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">Mark List</h3>
          <table className="w-full mt-2 border border-gray-300">
            <tbody>
              {student?.marks.map((sub) => (
                <tr className="border-b bg-gray-100" key={sub.name}>
                  <td className="p-2">{sub.name}</td>
                  <td className="p-2 text-right">{sub.obtained}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-6 mb-2">
            <div className="text-lg font-bold ">
              Rank:{" "}
              <span
                className={`${
                  isFailed ? "text-red-600" : "text-blue-600"
                } font-bold`}
              >
                {student.rank}
              </span>
            </div>
            <div className="text-lg font-bold">
              Total: {student.totalObtained} / {student.totalMarks}
            </div>
          </div>
        </div>
        <div className="bg-blue-600 text-white flex justify-center items-center py-2 rounded-b-lg text-sm">
          All Rights © Reserved for Falahiyyakalarundi
        </div>
      </div>
      <div className="bg-white p-4 text-center text-sm">
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-1 rounded flex items-center justify-center gap-2 mx-auto"
          onClick={handleDownloadPdf}
        >
          <DownloadForOfflineIcon />
          Download PDF
        </button>
      </div>
    </>
  );
};
