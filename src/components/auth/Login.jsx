import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser, logout } from "../../redux/slice/authSlice";

const AuthForm = () => {
  const dispatch = useDispatch();
  const { user, token, role, loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ mobile: "", password: "" });
  const [isRegistering, setIsRegistering] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      dispatch(registerUser(form));
    } else {
      dispatch(loginUser(form));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="mobile" placeholder="mobile" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : isRegistering ? "Register" : "Login"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {token && (
        <div>
          <p>Logged in as: {user?.mobile || "User"}</p>
          <p>Role: {role}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Switch to Login" : "Switch to Register"}
      </button>
    </div>
  );
};

export default AuthForm;
