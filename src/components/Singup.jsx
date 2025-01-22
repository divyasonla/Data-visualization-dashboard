import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.username && formData.email && formData.password) {
      console.log("Signup Successful!", formData);
      Cookies.set("email", formData.email, { expires: 7 });
      Cookies.set("password", formData.password, { expires: 7 });

      navigate("/dash"); 
    } else {
      setError("Please fill all fields.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      p={2}
    >
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="filled"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          variant="filled"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          sx={{ marginBottom: "20px" }}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Button type="submit" color="secondary" variant="contained">
          Signup
        </Button>
      </form>
      <Box mt={2}>
        <Button
          color="primary[400]"
          onClick={() => navigate("/login")}
          variant="text"
        >
          Already have an account? Login
        </Button>
      </Box>
    </Box>
  );
}

export default Signup;
