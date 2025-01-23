import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Signup() {
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

    // Get the existing users from the cookies
    let existingUsers = Cookies.get("users");
    existingUsers = existingUsers ? JSON.parse(existingUsers) : [];

    // Check if the email already exists
    if (existingUsers.some(user => user.email === formData.email)) {
      setError("This email is already registered!");
      return;
    }

    // Add new user to the list of users
    const newUser = { email: formData.email, password: formData.password };
    existingUsers.push(newUser);

    // Store the updated list of users in cookies (7-day expiry)
    Cookies.set("users", JSON.stringify(existingUsers), { expires: 7 });

    console.log("Signup Successful!");
    navigate("/"); // Redirect to login page
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
          Signup
        </Button>
      </form>
    </Box>
  );
}

export default Signup;
