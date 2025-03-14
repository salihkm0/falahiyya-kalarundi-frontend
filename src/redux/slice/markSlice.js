import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch marks
export const fetchStudentMarksByPhone = createAsyncThunk(
  "exams/fetchStudentMarksByPhone",
  async ({ phone, classId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://falahiyya-kalarundi-backend.onrender.com/api/exams/marks-by-phone`,
        { phone, classId }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const markSlice = createSlice({
  name: "exams",
  initialState: {
    studentMarks: null,
    loading: false,
    error: null,
  },
  reducers: {
    setStudentMarks: (state, action) => {
      state.studentMarks = action.payload; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentMarksByPhone.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudentMarksByPhone.fulfilled, (state, action) => {
        state.loading = false;
        state.studentMarks = action.payload;
      })
      .addCase(fetchStudentMarksByPhone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setStudentMarks } = markSlice.actions; 
export default markSlice.reducer;
