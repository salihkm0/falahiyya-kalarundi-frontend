import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Box,
} from "@mui/material";
import { Search, X, Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setStudentMarks } from "../../redux/slice/markSlice";

export const MarkPopupForm = ({ exams }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadClasses();
  }, []);

  const loadClasses = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://falahiyya-kalarundi-backend.onrender.com/api/class/`
      );

      // Filter out class "5 A" and sort the classes numerically
      const filteredAndSortedClasses = res.data
        .filter((cls) => cls.classNumber !== "5 A") // Remove "5 A"
        .sort((a, b) => parseInt(a.classNumber) - parseInt(b.classNumber)); // Sort numerically

      setClasses(filteredAndSortedClasses);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    console.log("Form submission : " + JSON.stringify(data));
    setLoading(true);
    try {
      if (!data.phone || !data.class) {
        toast.error("Please fill all fields");
        setLoading(false);
        return;
      }

      const res = await axios.post(
        `https://falahiyya-kalarundi-backend.onrender.com/api/exams/marks-by-phone`,
        {
          phone: data.phone,
          classId: data.class,
        }
      );
      setLoading(false);
      console.log("success : ", res.data);

      dispatch(setStudentMarks(res.data));
      navigate(`/result/${res.data.student._id}`);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Button to Open Popup */}
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:scale-105 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2"
      >
        <Search size={20} /> View Your Mark
      </button>

      {/* Popup Form */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            padding: "24px",
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          📖 Search for Your Exam Marks
        </DialogTitle>
        <DialogContent sx={{ padding: "24px" }}>
          <Typography
            variant="body1"
            textAlign="center"
            color="textSecondary"
            sx={{ mb: 3 }}
          >
            Enter your details below to check your exam results.
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Phone Number Input */}
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              margin="normal"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e0e0e0",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#007BFF",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#007BFF",
                  borderWidth: "2px",
                },
              }}
            />

            {/* Class Selection Dropdown */}
            <FormControl
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ minWidth: 120 }}
            >
              <InputLabel>Select Your Class</InputLabel>
              <Select
                {...register("class", { required: "Class is required" })}
                defaultValue=""
                onChange={(e) => setValue("class", e.target.value)}
                sx={{
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e0e0e0",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#007BFF",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#007BFF",
                    borderWidth: "2px",
                  },
                }}
              >
                {classes?.map((cls) => (
                  <MenuItem key={cls._id} value={cls._id}>
                    {cls.classNumber}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Error Message for Class */}
            {errors.class && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {errors.class.message}
              </Typography>
            )}

            {/* Buttons */}
            <DialogActions
              sx={{
                justifyContent: "center",
                marginTop: "24px",
                padding: "16px",
              }}
            >
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:scale-105 transition duration-200 flex items-center gap-2 shadow-lg"
              >
                <X size={20} /> Cancel
              </button>
              <button
                type="submit"
                disabled={loading || exams.length === 0}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:scale-105 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Processing...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};