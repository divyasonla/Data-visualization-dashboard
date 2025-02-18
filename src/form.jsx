// import { useState } from "react";
// import axios from "axios";
// import { Box } from "@mui/system";

// function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone_number, setPhoneNumber] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       Name: name,
//       Email: email,
//       PhoneNumber: phone_number,
//       Address1: address1,
//       Address2: address2,
//     };

//     axios
//       .post(
//         "https://api.sheetbest.com/sheets/9aa31314-8125-4a81-b6b1-da9b00c38f3b",
//         data
//       )
//       .then((response) => {
//         console.log(response);
//         setName("");
//         setEmail("");
//         setPhoneNumber("");
//         setAddress1("");
//         setAddress2("");
//         alert("Form submitted successfully!");
//       })
//       .catch((error) => {
//         console.error("Error submitting the form:", error);
//         alert("Failed to submit the form.");
//       });
//   };

//   return (
//     <Box
//       className="form-container"
//       style={{
//         maxWidth: "500px",
//         margin: "50px auto",
//         backgroundColor: "#fff",
//         padding: "20px 30px",
//         borderRadius: "10px",
//         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <h1
//         className="form-title"
//         style={{
//           fontSize: "24px",
//           color: "#333",
//           textAlign: "center",
//           marginBottom: "20px",
//         }}
//       >
//         Save Form Data in Google Sheets
//       </h1>

//       <form
//         autoComplete="off"
//         className="form"
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit}
//       >
//         <label style={{ fontSize: "16px", color: "#555", marginBottom: "5px" }}>
//           Name
//         </label>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           required
//           className="form-input"
//           style={{
//             padding: "10px",
//             fontSize: "14px",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             marginBottom: "15px",
//           }}
//           onFocus={(e) => (e.target.style.borderColor = "#007bff")}
//           onBlur={(e) => (e.target.style.borderColor = "#ccc")}
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//         />

//         <label style={{ fontSize: "16px", color: "#555", marginBottom: "5px" }}>
//           Email
//         </label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           required
//           className="form-input"
//           style={{
//             padding: "10px",
//             fontSize: "14px",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             marginBottom: "15px",
//           }}
//           onFocus={(e) => (e.target.style.borderColor = "#007bff")}
//           onBlur={(e) => (e.target.style.borderColor = "#ccc")}
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//         />

//         <label style={{ fontSize: "16px", color: "#555", marginBottom: "5px" }}>
//           Phone Number
//         </label>
//         <input
//           type="phone"
//           placeholder="Enter your number"
//           required
//           className="form-input"
//           style={{
//             padding: "10px",
//             fontSize: "14px",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             marginBottom: "15px",
//           }}
//           onFocus={(e) => (e.target.style.borderColor = "#007bff")}
//           onBlur={(e) => (e.target.style.borderColor = "#ccc")}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           value={phone_number}
//         />

//         <label style={{ fontSize: "16px", color: "#555", marginBottom: "5px" }}>
//           Address1
//         </label>
//         <input
//           type="text"
//           placeholder="Enter your address1"
//           required
//           className="form-input"
//           style={{
//             padding: "10px",
//             fontSize: "14px",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             marginBottom: "15px",
//           }}
//           onFocus={(e) => (e.target.style.borderColor = "#007bff")}
//           onBlur={(e) => (e.target.style.borderColor = "#ccc")}
//           onChange={(e) => setAddress1(e.target.value)}
//           value={address1}
//         />

//         <label style={{ fontSize: "16px", color: "#555", marginBottom: "5px" }}>
//           Address2
//         </label>
//         <input
//           type="text"
//           placeholder="Enter your address2"
//           required
//           className="form-input"
//           style={{
//             padding: "10px",
//             fontSize: "14px",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             marginBottom: "15px",
//           }}
//           onFocus={(e) => (e.target.style.borderColor = "#007bff")}
//           onBlur={(e) => (e.target.style.borderColor = "#ccc")}
//           onChange={(e) => setAddress2(e.target.value)}
//           value={address2}
//         />

//         <Box
//           display="flex"
//           justifyContent="flex-end"
//           style={{ marginTop: "20px" }}
//         >
//           <button
//             type="submit"
//             className="form-button"
//             style={{
//               padding: "10px 15px",
//               backgroundColor: "#007bff",
//               color: "#fff",
//               fontSize: "16px",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               transition: "background-color 0.3s ease-in-out",
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
//           >
//             Submit
//           </button>
//         </Box>
//       </form>
//     </Box>
//   );
// }

// export default Form;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Box } from "@mui/system";

// function Form() {
//   const [data, setData] = useState([]); // State to store fetched data

//   // Fetch data automatically when the component mounts
//   useEffect(() => {
//     axios
//       .get("https://api.sheetbest.com/sheets/a53759cb-7c12-40a2-a169-a3a799ee036c")
//       .then((response) => {
//         console.log(response.data);
//         setData(response.data); // Save fetched data to state
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // Empty dependency array ensures it runs only once when the component mounts

//   return (
//     <Box className="container">
//       <h1>Fetch Data and Display in a Table using React</h1>

//       {/* Table to display fetched data */}
//       <h2>Fetched Data:</h2>
//       {data.length > 0 ? (
//         <table border="1" className="data-table">
//           <thead>
//             <tr>
//               <th>Day</th>
//               <th>Age</th>
//               <th>Gender</th>
//               <th>A</th>
//               <th>B</th>
//               <th>C</th>
//               <th>D</th>
//               <th>E</th>
//               <th>F</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.Day}</td>
//                 <td>{item.Age}</td>
//                 <td>{item.Gender}</td>
//                 <td>{item.A}</td>
//                 <td>{item.B}</td>
//                 <td>{item.C}</td>
//                 <td>{item.D}</td>
//                 <td>{item.E}</td>
//                 <td>{item.F}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </Box>
//   );
// }

// export default Form;

// import React, { useState } from "react";
// import axios from "axios";
// import { Box, TextField, Button, Typography } from "@mui/material";

// function Form() {
//   // State hooks for form fields
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");

//   // Submit handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       Firstname: firstname,
//       Lastname: lastname,
//       Email: email,
//       ContactNumber: contactNumber,
//       Address1: address1,
//       Address2: address2,
//     };

//     // POST request using Axios
//     axios
//       .post(
//         "https://api.sheetbest.com/sheets/031b67af-4019-44ae-9e6f-1aee0e5e1ff8",
//         data
//       )
//       .then((response) => {
//         console.log("Response:", response);
//         alert("Data submitted successfully!");

//         // Clear the form fields
//         setFirstname("");
//         setLastname("");
//         setEmail("");
//         setContactNumber("");
//         setAddress1("");
//         setAddress2("");
//       })
//       .catch((error) => {
//         console.error("Error submitting data:", error);
//         alert("Failed to submit data.");
//       });
//   };

//   return (
//     <Box
//       className="container"
//       maxWidth="sm"
//       margin="auto"
//       mt={4}
//       padding={2}
//       boxShadow={3}
//       borderRadius={2}
//     >
//       <Typography variant="h5" textAlign="center" mb={3}>
//         Save Form Data in Google Sheets using React
//       </Typography>

//       <form autoComplete="off" onSubmit={handleSubmit}>
//         {/* First Name Field */}
//         <TextField
//           label="First Name"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           required
//           value={firstname}
//           onChange={(e) => setFirstname(e.target.value)}
//         />

//         {/* Last Name Field */}
//         <TextField
//           label="Last Name"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           required
//           value={lastname}
//           onChange={(e) => setLastname(e.target.value)}
//         />

//         {/* Email Field */}
//         <TextField
//           label="Email"
//           variant="outlined"
//           type="email"
//           fullWidth
//           margin="normal"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         {/* Contact Number Field */}
//         <TextField
//           label="Contact Number"
//           variant="outlined"
//           type="tel"
//           fullWidth
//           margin="normal"
//           required
//           value={contactNumber}
//           onChange={(e) => setContactNumber(e.target.value)}
//         />

//         {/* Address Line 1 Field */}
//         <TextField
//           label="Address Line 1"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           required
//           value={address1}
//           onChange={(e) => setAddress1(e.target.value)}
//         />

//         {/* Address Line 2 Field */}
//         <TextField
//           label="Address Line 2"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={address2}
//           onChange={(e) => setAddress2(e.target.value)}
//         />

//         {/* Submit Button */}
//         <Box display="flex" justifyContent="flex-end" mt={2}>
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// }

// export default Form;
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" width="100vw" height="100vh" overflow="hidden">
        <Sidebar />
      <Box flexGrow={1} m="20px" display="flex" flexDirection="column" overflow="hidden">
        <Topbar />

        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
          <Box />
        </Box>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 1 */}
          {/* <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box> */}
          {/* <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="431,225"
              subtitle="Sales Obtained"
              progress="0.50"
              increase="+21%"
              icon={
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box> */}
          {/* <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="32,441"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box> */}
          {/* <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="1,325,134"
              subtitle="Traffic Received"
              progress="0.80"
              increase="+43%"
              icon={
                <TrafficIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box> */}

          {/* ROW 2 */}
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            display="flex"
            flexDirection="column"
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  $59,342.32
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>

         
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            display="flex"
            flexDirection="column"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
