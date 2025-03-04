import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/authPages/LoginPage";
import { RegisterPage } from "../pages/authPages/RegisterPage";
import { StudentLayout } from "../layout/StudentLayout";
import { HomePage } from "../pages/HomePage";
import { ResultPage } from "../pages/ResultPage";
import { LoadingPage } from "../pages/LoadingPage";

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
    element: <LoadingPage />,
  },
  {
    element: <StudentLayout />,
    children: [
      {
        path: "/result/:studId",
        element: <ResultPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);
