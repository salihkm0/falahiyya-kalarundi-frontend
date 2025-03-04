import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { useDispatch, useSelector } from "react-redux";
import { fetchExams } from "./redux/slice/examSlice";
import { fetchClasses } from "./redux/slice/classSlice";

export const App = () => {
  const dispatch = useDispatch();
  const { exams } = useSelector((state) => state.exam);
  const { classes } = useSelector((state) => state.class);

  useEffect(() => {
    dispatch(fetchExams());
    dispatch(fetchClasses());
  }, [dispatch]);

  console.log("Fetching classes:", classes, "Exams:", exams);

  return <RouterProvider router={router} />;
};
