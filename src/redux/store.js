import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

import subjectReducer from "./slice/subjectSlice";
import authReducer from "./slice/authSlice";
import classReducer from "./slice/classSlice";
import examReducer from "./slice/examSlice";
import studentReducer from "./slice/studentSclice";
import studentMark from "./slice/markSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["mark"], // Persist only markSlice (You can add other slices as needed)
};

const rootReducer = combineReducers({
  subjects: subjectReducer,
  auth: authReducer,
  class: classReducer,
  exam: examReducer,
  student: studentReducer,
  mark: studentMark,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable warnings
    }),
});

export const persistor = persistStore(store);
