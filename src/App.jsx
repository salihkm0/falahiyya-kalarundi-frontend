import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { useDispatch, useSelector } from "react-redux";
import { fetchExams } from "./redux/slice/examSlice";
import { fetchClasses } from "./redux/slice/classSlice";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExams());
    dispatch(fetchClasses());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};
