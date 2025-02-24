import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #ddd;

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const Header = styled.div`
  background: #d32f2f;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  font-weight: bold;
  text-align: center;
  gap: 2px;

  div {
    flex: 1;
    min-width: 120px;
    text-align: center;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    div {
      padding: 4px 0;
    }
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StudentImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #1976d2;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const StudentDetails = styled.div`
  color: #333;
  font-size: 16px;
  text-align: center;

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

export const StudentCard_2 = ({ student }) => {
  return (
    <CardContainer>
      {/* Header Section */}
      <Header>
        <div>Rank: <span>{student.rank}</span></div>
        <div>Total Marks: {student.totalObtained} / {student.totalMarks}</div>
        <div>🎉 Congratulations 🎉</div>
      </Header>

      {/* Student Info Section */}
      <InfoSection>
        <StudentImage src={student.image} alt="Student" />

        <StudentDetails>
          <p><span>Name:</span> {student.name}</p>
          <p><span>Father's Name:</span> {student.fatherName}</p>
          <p><span>Place:</span> {student.place}</p>
        </StudentDetails>
      </InfoSection>
    </CardContainer>
  );
};
