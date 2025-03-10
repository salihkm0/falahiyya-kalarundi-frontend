import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentMarksByPhone } from "../../redux/slice/examSlice"; // Adjust path if needed
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  CircularProgress,
} from "@mui/material";
import { fetchClasses } from "../../redux/slice/classSlice";
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
        .filter(cls => cls.classNumber !== "5 A") // Remove "5 A"
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
    // dispatch(fetchStudentMarksByPhone({ phone: data.phone, classId: data.class }));
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
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#4CAF50",
          "&:hover": { backgroundColor: "#388E3C" },
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        onClick={() => setOpen(true)}
      >
        View Your Mark
      </Button>

      {/* Popup Form */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" }}
        >
          📖 Search for Your Exam Marks
        </DialogTitle>
        <DialogContent sx={{ padding: "20px" }}>
          <Typography variant="body1" textAlign="center" color="textSecondary">
            Enter your details below to check your exam results.
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "20px" }}>
            {/* Phone Number Input */}
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              margin="dense"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />

            {/* Class Selection Dropdown */}
            <FormControl
              fullWidth
              margin="dense"
              variant="outlined"
              sx={{ minWidth: 120 }}
            >
              <InputLabel>Select Your Class</InputLabel>
              <Select
                {...register("class", { required: "Class is required" })}
                defaultValue=""
                onChange={(e) => setValue("class", e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.23)", // Default border color
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#007BFF", // Hover effect
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#007BFF", // Focus effect
                    borderWidth: "2px", // Emphasize focus
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
              <Typography color="error" variant="body2">
                {errors.class.message}
              </Typography>
            )}

            {/* Buttons */}
            <DialogActions sx={{ justifyContent: "center", marginTop: "15px" }}>
              <Button
                onClick={() => setOpen(false)}
                color="secondary"
                variant="outlined"
                sx={{ padding: "10px 20px", fontWeight: "bold" }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#007BFF",
                  "&:hover": { backgroundColor: "#0056b3" },
                  padding: "10px 20px",
                  fontWeight: "bold",
                }}
                disabled={exams.length === 0}
              >
                Submit
              </Button>
            </DialogActions>
          </form>

          {/* Display Loading */}
          {loading && (
            <Typography textAlign="center" sx={{ mt: 2 }}>
              <CircularProgress size={24} />
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
