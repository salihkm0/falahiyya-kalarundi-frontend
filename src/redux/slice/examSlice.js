import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5559/api";

// Fetch all exams
export const fetchExams = createAsyncThunk("exams/fetchExams", async () => {
  const response = await axios.get(`${API_URL}/exams`);
  return response.data;
});

// Fetch exams by student ID
export const fetchExamsByStudent = createAsyncThunk("exams/fetchExamsByStudent", async (studentId) => {
  const response = await axios.get(`${API_URL}/exams/student/${studentId}`);
  return response.data;
});

// Fetch exams by class ID
export const fetchExamsByClass = createAsyncThunk("exams/fetchExamsByClass", async (classId) => {
  const response = await axios.get(`${API_URL}/exams/class/${classId}`);
  return response.data;
});

// Fetch student marks using phone number and class
export const fetchStudentMarksByPhone = createAsyncThunk("exams/fetchStudentMarksByPhone", async ({ phone, classId }) => {
  const response = await axios.post(`${API_URL}/exams/marks-by-phone`, { phone, classId });
  return response.data;
});

// Add an exam record
export const addExam = createAsyncThunk("exams/addExam", async (examData) => {
  const response = await axios.post(`${API_URL}/exams`, examData);
  return response.data;
});

// Update an exam record
export const updateExam = createAsyncThunk("exams/updateExam", async ({ id, updatedData }) => {
  const response = await axios.put(`${API_URL}/exams/${id}`, updatedData);
  return response.data;
});

// Delete an exam record
export const deleteExam = createAsyncThunk("exams/deleteExam", async (id) => {
  await axios.delete(`${API_URL}/exams/${id}`);
  return id;
});

const examSlice = createSlice({
  name: "exams",
  initialState: {
    exams: [],
    studentExams: [],
    classExams: [],
    studentMarks: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExams.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        state.loading = false;
        state.exams = action.payload;
      })
      .addCase(fetchExams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchExamsByStudent.fulfilled, (state, action) => {
        state.studentExams = action.payload;
      })
      .addCase(fetchExamsByClass.fulfilled, (state, action) => {
        state.classExams = action.payload;
      })
      .addCase(fetchStudentMarksByPhone.fulfilled, (state, action) => {
        state.studentMarks = action.payload;
      })
      .addCase(addExam.fulfilled, (state, action) => {
        state.exams.push(action.payload.exam);
      })
      .addCase(updateExam.fulfilled, (state, action) => {
        const index = state.exams.findIndex((exam) => exam._id === action.payload.exam._id);
        if (index !== -1) {
          state.exams[index] = action.payload.exam;
        }
      })
      .addCase(deleteExam.fulfilled, (state, action) => {
        state.exams = state.exams.filter((exam) => exam._id !== action.payload);
      });
  },
});

export default examSlice.reducer;
