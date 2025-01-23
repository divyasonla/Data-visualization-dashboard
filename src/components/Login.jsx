import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const storedUsers = Cookies.get("users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);

      const user = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (user) {
        console.log("Login Successful!");
        navigate("/dash"); 
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } else {
      setError("No user data found. Please sign up first.");
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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          sx={{ marginBottom: "20px" }}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Button type="submit" color="secondary" variant="contained">
          Login
        </Button>
      </form>
      <Box mt={2}>
        <Button
          color="primary[400]"
          onClick={() => navigate("/signup")}
          variant="text"
        >
          Don't have an account? Signup
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
