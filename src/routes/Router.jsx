import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/authPages/LoginPage";
import { RegisterPage } from "../pages/authPages/RegisterPage";
import { StudentLayout } from "../layout/StudentLayout";
import { HomePage } from "../pages/HomePage";
import { ResultPage } from "../pages/ResultPage";
import { LoadingPage } from "../pages/LoadingPage";
import { ResultHome } from "../components/result/ResutlHome";
import { AttendancePage } from "../pages/AttendancePage";
import { CountdownPage } from "../pages/CountdownPage";
import { AdminResult } from "../components/result/AdminResult";
import { AdmissionPage } from "../pages/AdmissionPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <CountdownPage />,
  },
  {
    element: <StudentLayout />,
    children: [
      {
        path: "/result",
        element: <ResultHome />,
      },
      {
        path: "/10610/result",
        element: <AdminResult />,
      },
      {
        path: "/result/:studId",
        element: <ResultPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/attendance",
        element: <AttendancePage />,
      },
      {
        path: "/admission",
        element: <AdmissionPage />,
      },

      // {
      //   path: "/home",
      //   element: <HomePage />,
      // },
    ],
  },
]);
