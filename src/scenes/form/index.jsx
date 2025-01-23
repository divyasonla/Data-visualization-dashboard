import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const isNonMobile = useMediaQuery("(min-width:600px)");

  // Renamed handleSubmit to handleCustomSubmit
  const handleCustomSubmit = (e) => {
    e.preventDefault();
    const data = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Contact: contact,
      Address1: address1,
      Address2: address2,
    };
    axios
      .post(
        "https://api.sheetbest.com/sheets/031b67af-4019-44ae-9e6f-1aee0e5e1ff8",
        data
      )
      .then((response) => {
        console.log(response);
        // Clear form fields
        setFirstName("");
        setLastName("");
        setContact("");
        setEmail("");
        setAddress1("");
        setAddress2("");
      });
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      width="100vw"
      height="100vh"
      overflow="hidden"
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box flex={1} m="20px" overflow="auto">
        <Topbar />

        {/* Header */}
        <Header title="CREATE USER" subtitle="Create a New User Profile" />

        {/* Form */}
        <Formik
  initialValues={{
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  }}
  onSubmit={handleCustomSubmit}
>
  {({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  }) => (
    <form onSubmit={handleSubmit}>
      {/* Form Fields */}
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="FirstName"
          onBlur={handleBlur}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          name="firstName"
          error={!!touched.firstName && !!errors.firstName}
          helperText={touched.firstName && errors.firstName}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="LastName"
          onBlur={handleBlur}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          name="lastName"
          error={!!touched.lastName && !!errors.lastName}
          helperText={touched.lastName && errors.lastName}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Contact"
          onBlur={handleBlur}
          onChange={(e) => setContact(e.target.value)}
          value={contact}
          name="contact"
          error={!!touched.contact && !!errors.contact}
          helperText={touched.contact && errors.contact}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Address 1"
          onBlur={handleBlur}
          onChange={(e) => setAddress1(e.target.value)}
          value={address1}
          name="address1"
          error={!!touched.address1 && !!errors.address1}
          helperText={touched.address1 && errors.address1}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Address 2"
          onBlur={handleBlur}
          onChange={(e) => setAddress2(e.target.value)}
          value={address2}
          name="address2"
          error={!!touched.address2 && !!errors.address2}
          helperText={touched.address2 && errors.address2}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>

      {/* Submit Button */}
      <Box display="flex" justifyContent="end" mt="20px">
        <Button type="submit" color="secondary" variant="contained">
          Create New User
        </Button>
      </Box>
    </form>
  )}
</Formik>
      </Box>
    </Box>
  );
};

export default Form;
