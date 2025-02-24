import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/authPages/LoginPage";
import { RegisterPage } from "../pages/authPages/RegisterPage";
import { AdminLayout } from "../layout/AdminLayout";
import { StudentLayout } from "../layout/StudentLayout";
import { HomePage } from "../pages/HomePage";
import { ResultPage } from "../pages/ResultPage";

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
    element: <HomePage />,
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
  // admin routes
  {
    element: <AdminLayout />,
    // children: [
    //   {
    //     path: "/admin/dashboard",
    //     element: <AdminDashboard />,
    //   },
    //   {
    //     path: "/products/add",
    //     element: <AddProductPage />,
    //   },
    // ],
  },
]);
