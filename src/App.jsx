import React from "react";
import { StudentResultCard } from "./components/cards/StudentCard-1";
import { StudentCard_2 } from "./components/cards/StudentCard-2";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
// import { School, EmojiEvents, Person } from '@mui/icons-material';
export const App = () => {
  
  return (
    <RouterProvider router={router} />
  );
};
