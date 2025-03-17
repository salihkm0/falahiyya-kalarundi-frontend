import axios from "axios";
import React, { useEffect, useState } from "react";

const AdmissionTable = () => {
  const [admissions, setAdmission] = useState([]);

  const fetchStudent = async () => {
    try {
      const res = await axios.get(
        `https://falahiyya-kalarundi-backend.onrender.com/api/admission`
      );
      console.log("res", res.data);
      setAdmission(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  return (
    <div className="rounded-lg shadow-lg bg-white p-6 mx-10 my-10">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-blue-800 text-center">
          AL Madrassathul Falahiyya Kalarundi
        </h1>
        <p className="text-gray-600 text-center mt-2">
          New Admission Student List
        </p>
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-y-auto max-h-[500px] border rounded-lg">
        <table className="min-w-full bg-white">
          {/* Sticky Table Header */}
          <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white sticky top-0">
            <tr>
              {[
                "#",
                "Student Name",
                "Aadhaar",
                "DOB",
                "Gender",
                "Phone",
                "Father Name",
                "Guardian Name",
                "Relation",
                "Guardian Occupation",
                "Class Admitted",
                "Former Madrasa",
                "Certificate Number",
                "TC Number",
              ].map((heading, index) => (
                <th key={index} className="py-4 px-6 text-left text-sm uppercase font-semibold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {admissions.length > 0 ? (
              admissions.map((admission, index) => (
                <tr key={admission._id} className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6 text-sm text-gray-700">{index + 1}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.studentName}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.aadhaar}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{new Date(admission.dob).toLocaleDateString()}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.gender}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.phone}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.fatherName}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.guardianName}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.relation}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.guardianOccupation}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.classAdmitted}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.formerMadrasa || "--"}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.certificateNumber || "--"}</td>
                  <td className="py-4 px-6 text-sm text-gray-700">{admission.tcNumber || "--"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="14" className="py-4 px-6 text-sm text-gray-700 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionTable;
