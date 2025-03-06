import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://falahiyya-kalarundi-backend.onrender.com/api/class/";

// Async thunks
export const fetchClasses = createAsyncThunk(
  "class/fetchClasses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchClassById = createAsyncThunk(
  "class/fetchClassById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addClass = createAsyncThunk(
  "class/addClass",
  async (classData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, classData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateClass = createAsyncThunk(
  "class/updateClass",
  async ({ id, classData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, classData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteClass = createAsyncThunk(
  "class/deleteClass",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const classSlice = createSlice({
  name: "class",
  initialState: {
    classes: [],
    selectedClass: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.loading = false;
        state.classes = action.payload;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchClassById.fulfilled, (state, action) => {
        state.selectedClass = action.payload;
      })
      .addCase(addClass.fulfilled, (state, action) => {
        state.classes.push(action.payload.class);
      })
      .addCase(updateClass.fulfilled, (state, action) => {
        const index = state.classes.findIndex(
          (cls) => cls._id === action.payload.class._id
        );
        if (index !== -1) {
          state.classes[index] = action.payload.class;
        }
      })
      .addCase(deleteClass.fulfilled, (state, action) => {
        state.classes = state.classes.filter(
          (cls) => cls._id !== action.payload
        );
      });
  },
});

export default classSlice.reducer;
