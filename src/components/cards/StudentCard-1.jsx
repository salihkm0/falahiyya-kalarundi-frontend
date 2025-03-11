import React, { useRef } from "react";
import html2canvas from "html2canvas";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

export const StudentResultCard = ({ student, isFailed }) => {
  const pdfRef = useRef();

  const handleDownloadImage = async () => {
    const element = pdfRef.current;

    // Set a higher scale for better rendering on mobile
    const scale = window.innerWidth < 768 ? 4 : 3;

    const canvas = await html2canvas(element, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = imgData;
    link.download = `${student?.name}_Result.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  console.log("Student :", student.marks);

  return (
    <>
      <div
        className="max-w-[500px] sm:w-[600px] md:min-w-[700px] lg:min-w-[800px] mx-auto md:p-6 bg-white rounded-xl shadow-2xl transform transition-all"
        ref={pdfRef}
      >
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-center items-center flex-col px-1 py-2 md:py-4 rounded-t-xl">
          <h2 className="text-2xl font-bold text-center">AL MADRASSATHUL FALAHIYYA</h2>
          <p className="text-sm text-center mt-1 text-center">
            Kalarundi, Valiyaparamba P.O, SKIMV Board: Reg No: 10610
          </p>
          <p className="text-xs mt-1">Annual Examination Result</p>
        </div>

        {/* Student Details Section */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-center text-xl font-semibold text-gray-800">
            Examination Result 2024-25
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4 text-sm text-gray-700">
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
            {student.image && (
              <div className="flex justify-end items-center">
                <StudentImage src={student.image} alt="Student" />
              </div>
            )}
          </div>
        </div>

        {/* Marks Section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800">Mark List</h3>
          <table className="w-full mt-4 border-collapse">
            <tbody>
              {student?.marks.map((sub) => (
                <tr
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  key={sub.name}
                >
                  <td className="p-3 text-sm text-gray-700">{sub.name}</td>
                  <td className="p-3 text-sm text-gray-700 text-right">
                    {sub.obtained}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-8 mb-4">
            <div className="text-lg font-bold text-gray-800">
              Rank:{" "}
              <span
                className={`${
                  isFailed ? "text-red-600" : "text-blue-600"
                } font-bold`}
              >
                {student.rank}
              </span>
            </div>
            <div className="text-lg font-bold text-gray-800">
              Total: {student.totalObtained} / {student.totalMarks}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-center shadow-xl items-center py-3 md:rounded-b-xl text-sm">
          All Rights © Reserved for Falahiyyakalarundi
        </div>
      </div>

      {/* Download Button */}
      {/* <div className="md:bg-white p-6 text-center mt-10">
        <button
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 mx-auto transition-all transform hover:scale-105"
          onClick={handleDownloadImage}
        >
          <DownloadForOfflineIcon />
          Download Image
        </button>
      </div> */}
    </>
  );
};

const StudentImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
    />
  );
};