import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://falahiyya-kalarundi-backend.onrender.com/api/v1/subjects";

// Async Thunks
export const fetchSubjects = createAsyncThunk("subjects/fetchSubjects", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addSubject = createAsyncThunk("subjects/addSubject", async (subjectName) => {
  const response = await axios.post(API_URL, { subjectName });
  return response.data;
});

export const updateSubject = createAsyncThunk("subjects/updateSubject", async ({ id, subjectName }) => {
  const response = await axios.put(`${API_URL}/${id}`, { subjectName });
  return response.data;
});

export const deleteSubject = createAsyncThunk("subjects/deleteSubject", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Slice
const subjectsSlice = createSlice({
  name: "subjects",
  initialState: {
    subjects: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubjects.fulfilled, (state, action) => {
        state.loading = false;
        state.subjects = action.payload;
      })
      .addCase(fetchSubjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addSubject.fulfilled, (state, action) => {
        state.subjects.push(action.payload.subject);
      })
      .addCase(updateSubject.fulfilled, (state, action) => {
        const index = state.subjects.findIndex((subject) => subject._id === action.payload.subject._id);
        if (index !== -1) {
          state.subjects[index] = action.payload.subject;
        }
      })
      .addCase(deleteSubject.fulfilled, (state, action) => {
        state.subjects = state.subjects.filter((subject) => subject._id !== action.payload);
      });
  },
});

export default subjectsSlice.reducer;
