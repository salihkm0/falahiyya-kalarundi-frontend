// import React from "react";
// import styled from "styled-components";

// const CardContainer = styled.div`
//   width: 100%;
//   max-width: 500px;
//   margin: 20px auto;
//   background: white;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   border-radius: 12px;
//   overflow: hidden;
//   border: 1px solid #ddd;

//   @media (max-width: 480px) {
//     max-width: 90%;
//   }
// `;

// const Header = styled.div`
//   background: #d32f2f;
//   color: white;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
//   padding: 12px;
//   font-weight: bold;
//   text-align: center;
//   gap: 2px;

//   div {
//     flex: 1;
//     min-width: 120px;
//     text-align: center;
//     font-size: 14px;
//   }

//   @media (max-width: 480px) {
//     flex-direction: column;
//     div {
//       padding: 4px 0;
//     }
//   }
// `;

// const InfoSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   gap: 16px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     align-items: flex-start;
//   }
// `;

// const StudentImage = styled.img`
//   width: 120px;
//   height: 120px;
//   border-radius: 50%;
//   border: 3px solid #1976d2;
//   object-fit: cover;

//   @media (min-width: 768px) {
//     width: 150px;
//     height: 150px;
//   }
// `;

// const StudentDetails = styled.div`
//   color: #333;
//   font-size: 16px;
//   text-align: center;

//   p {
//     margin: 4px 0;
//   }

//   span {
//     font-weight: bold;
//   }

//   @media (min-width: 768px) {
//     text-align: left;
//     font-size: 18px;
//   }
// `;

// export const StudentCard_2 = ({ student }) => {
//   console.log("Student card : ", student);
//   return (
//     <CardContainer>
//       {/* Header Section */}
//       <Header>
//         <div>
//           Rank: <span>{student.rank}</span>
//         </div>
//         <div>
//           Total Marks: {student.totalObtained} / {student.totalMarks}
//         </div>
//         <div>🎉 Congratulations 🎉</div>
//       </Header>

//       {/* Student Info Section */}
//       <InfoSection>
//         {student.image ? (
//           <StudentImage src={student.image} alt="Student" />
//         ) : (
//           ""
//         )}

//         <StudentDetails>
//           <p>
//             <span>Name:</span> {student.name}
//           </p>
//           <p>
//             <span>Father's Name:</span> {student.fatherName}
//           </p>
//           <p>
//             <span>Place:</span> {student.place}
//           </p>
//         </StudentDetails>
//       </InfoSection>
//     </CardContainer>
//   );
// };

// import React from "react";
// import styled from "styled-components";

// const CardContainer = styled.div`
//   width: 100%;
//   max-width: 400px;
//   margin: 20px auto;
//   background: white;
//   box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
//   border-radius: 16px;
//   overflow: hidden;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
//   }

//   @media (max-width: 480px) {
//     max-width: 90%;
//   }
// `;

// const Header = styled.div`
//   background: ${({ rank }) =>
//     rank === 1
//       ? "linear-gradient(135deg, #ffd700, #ffcc00)" // Gold for rank 1
//       : rank === 2
//       ? "linear-gradient(135deg, #c0c0c0, #a9a9a9)" // Silver for rank 2
//       : "linear-gradient(135deg, #cd7f32, #b87333)"}; // Bronze for rank 3
//   color: ${({ rank }) => (rank === 1 ? "#000" : "#fff")};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   text-align: center;
// `;

// const RankBadge = styled.div`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   background: ${({ rank }) =>
//     rank === 1 ? "#ffd700" : rank === 2 ? "#c0c0c0" : "#cd7f32"};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 20px;
//   font-weight: bold;
//   color: ${({ rank }) => (rank === 1 ? "#000" : "#fff")};
//   margin-bottom: 10px;
// `;

// const InfoSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   gap: 16px;
// `;

// const StudentImage = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   border: 3px solid #1976d2;
//   object-fit: cover;

//   @media (min-width: 768px) {
//     width: 120px;
//     height: 120px;
//   }
// `;

// const StudentDetails = styled.div`
//   color: #333;
//   font-size: 16px;
//   text-align: center;

//   p {
//     margin: 8px 0;
//   }

//   span {
//     font-weight: bold;
//     color: #1976d2;
//   }

//   @media (min-width: 768px) {
//     font-size: 18px;
//   }
// `;

// const CongratulationsMessage = styled.div`
//   font-size: 14px;
//   color: #4caf50;
//   font-weight: bold;
//   margin-top: 10px;
// `;

// export const StudentCard_2 = ({ student }) => {
//   console.log("Student card : ", student);
//   return (
//     <CardContainer>
//       {/* Header Section */}
//       <Header rank={student.rank}>
//         <RankBadge rank={student.rank}>{student.rank}</RankBadge>
//         <div>
//           Total Marks: {student.totalObtained} / {student.totalMarks}
//         </div>
//         <CongratulationsMessage>🎉 Congratulations 🎉</CongratulationsMessage>
//       </Header>

//       {/* Student Info Section */}
//       <InfoSection>
//         {student.image && (
//           <StudentImage src={student.image} alt="Student" />
//         )}
//         <StudentDetails>
//           <p>
//             <span>Name:</span> {student.name}
//           </p>
//           <p>
//             <span>Father's Name:</span> {student.guardian}
//           </p>
//           <p>
//             <span>Place:</span> {student.place}
//           </p>
//         </StudentDetails>
//       </InfoSection>
//     </CardContainer>
//   );
// };

import React from "react";
import PropTypes from "prop-types";
import { Trophy, Medal, Award, XCircle } from "lucide-react";

export const StudentCard_2 = ({ student }) => {
  console.log(student)
  const getRankStyles = () => {
    if (student.rank === "Failed") {
      return {
        bgGradient: "bg-gradient-to-r from-red-500 to-red-700",
        borderColor: "border-red-600",
        icon: <XCircle className="h-8 w-8 text-red-100" />,
        shadowColor: "shadow-red-300",
        badgeColor: "bg-red-800",
        message: "Better Luck Next Time 💪",
      };
    }

    switch (student.rank) {
      case 1:
        return {
          bgGradient: "bg-gradient-to-r from-yellow-500 to-amber-500",
          borderColor: "border-yellow-400",
          icon: <Trophy className="h-8 w-8 text-yellow-100" />,
          shadowColor: "shadow-yellow-200",
          badgeColor: "bg-yellow-600",
          message: "🎉 Outstanding Achievement! 🎉",
        };
      case 2:
        return {
          bgGradient: "bg-gradient-to-r from-slate-400 to-slate-500",
          borderColor: "border-slate-300",
          icon: <Medal className="h-8 w-8 text-slate-100" />,
          shadowColor: "shadow-slate-200",
          badgeColor: "bg-slate-600",
          message: "🎉 Well Done 🎉",
        };
      case 3:
        return {
          bgGradient: "bg-gradient-to-r from-amber-700 to-amber-800",
          borderColor: "border-amber-600",
          icon: <Award className="h-8 w-8 text-amber-100" />,
          shadowColor: "shadow-amber-200",
          badgeColor: "bg-amber-900",
          message: "🎉 Great Effort 🎉",
        };
      default:
        return {
          bgGradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
          borderColor: "border-blue-400",
          icon: null,
          shadowColor: "shadow-blue-200",
          badgeColor: "bg-blue-600",
          message: "🎉 Congratulations 🎉",
        };
    }
  };

  const styles = getRankStyles();
  const percentage = Math.round(
    (student.totalObtained / student.totalMarks) * 100
  );

  return (
    <div
      className={`w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg ${styles.shadowColor} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
    >
      <div className={`${styles.bgGradient} p-4 text-white relative`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {styles.icon}
            <span
              className={`${styles.badgeColor} text-white text-sm font-bold px-3 py-1 rounded-full`}
            >
              {student.rank === "failed" ? "Failed" : `Rank #${student.rank}`}
            </span>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-80">Score</div>
            <div className="text-xl font-bold">
              {student.totalObtained}/{student.totalMarks}
            </div>
          </div>
        </div>

        {styles.message && (
          <div className="mt-3 text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
              {styles.message}
            </div>
          </div>
        )}
      </div>

      <div className="bg-white p-5">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          {student.image ? (
            <div className={`relative flex-shrink-0`}>
              <div
                className={`absolute inset-0 rounded-full ${styles.borderColor} border-4 opacity-50 `}
              ></div>
              <img
                src={student.image}
                alt={student.name}
                className={`w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 ${styles.borderColor}`}
              />
            </div>
          ) : (
            <div
              className={`w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-200 flex items-center justify-center border-4 ${styles.borderColor}`}
            >
              <span className="text-gray-400 text-2xl font-bold">
                {student.name.charAt(0)}
              </span>
            </div>
          )}

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Guardian:</span> {student.guardian}
            </p>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${styles.bgGradient}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {percentage}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StudentCard_2.propTypes = {
  student: PropTypes.shape({
    rank: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    totalObtained: PropTypes.number.isRequired,
    totalMarks: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    guardian: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};
