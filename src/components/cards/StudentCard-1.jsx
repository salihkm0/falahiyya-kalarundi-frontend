import React, { useRef } from "react";
import styled from "styled-components";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";

// Main Card Container
const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  border: 1px solid #ddd;
  padding: 20px;
  position: relative;
`;

// Header Section
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #4b5563;
  border: 2px solid #dc2626;
  color: white;
  padding: 14px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-weight: bold;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 6px;
  }
`;

// Student Info Section
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

// Student Image
const StudentImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #3b82f6;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

// Student Details
const StudentDetails = styled.div`
  text-align: center;
  font-size: 16px;

  p {
    margin: 4px 0;
  }

  span {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    text-align: left;
    font-size: 18px;
  }
`;

// Marks Section
const MarksSection = styled.div`
  border-top: 1px solid #ddd;
  margin-top: 16px;
  padding-top: 16px;
`;

// Marks Grid
const MarksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

// Subject Card
const SubjectCard = styled.div`
  background: #f9fafb;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// Download Button
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

export const StudentResultCard = ({ student }) => {
  // const pdfRef = useRef();

  // const handleDownloadPdf = async () => {
  //   const element = pdfRef.current;
  //   const canvas = await html2canvas(element);
  //   const imgData = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF("p", "mm", "a4");
  //   pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
  //   pdf.save(`${student.name}_Result.pdf`);
  // };

  return (
    <div>
      {/* Student Card */}
      <CardContainer>
        {/* Header Section */}
        <Header>
          <span>Rank: {student.rank}</span>
          <span>
            Total: {student.totalObtained} / {student.totalMarks}
          </span>
        </Header>

        {/* Student Info */}
        <InfoSection>
          <StudentImage src={student.image} alt="Student" />
          <StudentDetails>
            <p>
              <span>Name:</span> {student.name}
            </p>
            <p>
              <span>Father's Name:</span> {student.fatherName}
            </p>
            <p>
              <span>Place:</span> {student.place}
            </p>
          </StudentDetails>
        </InfoSection>

        {/* Marks Section */}
        <MarksSection>
          {/* <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
            Total Marks: {student.totalObtained} / {student.totalMarks}
          </h3> */}
          <MarksGrid>
            {student.marks.map((subject, index) => (
              <SubjectCard key={index}>
                <p>
                  <strong>{subject.name}</strong>
                </p>
                <p>
                  Marks: {subject.obtained} / {subject.total}
                </p>
              </SubjectCard>
            ))}
          </MarksGrid>
        </MarksSection>
      </CardContainer>

      {/* Download PDF Button */}
      {/* <DownloadButton onClick={handleDownloadPdf}>
        ⬇ Download PDF
      </DownloadButton> */}
    </div>
  );
};
