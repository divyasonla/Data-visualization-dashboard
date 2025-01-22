// import React, { useState } from "react";
// import { Box, Button, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie"; 

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Hardcoded credentials for demo purpose
//     if (formData.email === "user@example.com" && formData.password === "password") {
//       console.log("Login Successful!");
      
//       // Store email in cookies upon successful login
//       Cookies.set("email", formData.email, { expires: 7 });  // Stores email in cookie for 7 days
//       navigate("/dash"); // Navigate to dashboard
//     } else {
//       setError("Invalid credentials.");
//     }
//   };
  

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       width="100vw"
//       height="100vh"
//       p={2}
//     >
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           variant="filled"
//           label="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           sx={{ marginBottom: "20px" }}
//         />
//         <TextField
//           fullWidth
//           variant="filled"
//           label="Password"
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           sx={{ marginBottom: "20px" }}
//         />
//         {error && <div style={{ color: "red" }}>{error}</div>}
//         <Button type="submit" color="secondary" variant="contained">
//           Login
//         </Button>
//       </form>
//       <Box mt={2}>
//         <Button
//           color="primary[200]"
//           onClick={() => navigate("/signup")}
//           variant="text"
//         >
//           Don't have an account? Signup
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default Login;


// import React, { useState } from "react";
// import { Box, Button, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";  

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.email === "user@example.com" && formData.password === "password") {
//       console.log("Login Successful!");
      
//       Cookies.set("email", formData.email, { expires: 7 });  
//       Cookies.set("password", formData.password, { expires: 7 });  

//       navigate("/dash"); 
//     } else {
//       setError("Invalid credentials.");
//     }
//   };

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       width="100vw"
//       height="100vh"
//       p={2}
//     >
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           variant="filled"
//           label="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           sx={{ marginBottom: "20px" }}
//         />
//         <TextField
//           fullWidth
//           variant="filled"
//           label="Password"
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           sx={{ marginBottom: "20px" }}
//         />
//         {error && <div style={{ color: "red" }}>{error}</div>}
//         <Button type="submit" color="secondary" variant="contained">
//           Login
//         </Button>
//       </form>
//       <Box mt={2}>
//         <Button
//           color="primary[400]"
//           onClick={() => navigate("/signup")}
//           variant="text"
//         >
//           Don't have an account? Signup
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default Login;


import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [randomPassword, setRandomPassword] = useState(""); // To store the random password
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const generateRandomPassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    const length = 8; 
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  };

  useEffect(() => {
    const password = generateRandomPassword();
    setRandomPassword(password);
    console.log("Generated Random Password:", password); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === randomPassword) {
      console.log("Login Successful!");

      Cookies.set("email", formData.email, { expires: 7 });
      Cookies.set("password", formData.password, { expires: 7 });

      navigate("/dash"); // Navigate to dashboard
    } else {
      setError("Invalid password. Please try again.");
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
      <p>Generated Password: <b>{randomPassword}</b></p> {/* Display the random password */}
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
