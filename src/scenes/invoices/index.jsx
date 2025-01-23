import { Box, useTheme, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header"; // Ensure this path is correct
import Sidebar from "../global/Sidebar"; // Ensure this path is correct
import Topbar from "../global/Topbar";

const Invoice = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]); // State to store fetched data
  const [filteredData, setFilteredData] = useState([]); // State to store filtered data
  const [genderFilter, setGenderFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");

  // Fetch data automatically when the component mounts
  useEffect(() => {
    axios
      .get("https://api.sheetbest.com/sheets/a53759cb-7c12-40a2-a169-a3a799ee036c")
      .then((response) => {
        console.log(response.data);
        setData(response.data); // Save fetched data to state
        setFilteredData(response.data); // Initialize filtered data with full data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this runs only once

  // Filter function
  const handleFilter = () => {
    let filtered = data;

    if (genderFilter) {
      filtered = filtered.filter((item) => item.Gender === genderFilter);
    }

    if (ageFilter) {
      filtered = filtered.filter((item) => item.Age === ageFilter);
    }

    setFilteredData(filtered); // Update filtered data state
  };

  return (
    <Box display="flex" width="100vw" height="100vh" overflow="hidden">
      <Sidebar style={{ position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 100 }} />
      <Box flexGrow={1} m="20px" ml="25px">
        <Topbar style={{ position: "fixed", top: "0", left: "20px", width: "calc(100% - 240px)", zIndex: 100 }} />

        <Header title="INVOICES" subtitle="List of Invoice Balances" />

        {/* Filters for Gender and Age */}
        <Box m="20px">
          <Box display="flex" justifyContent="space-between" mt="20px">
            <FormControl variant="outlined" style={{ width: "200px" }}>
              <InputLabel>Gender</InputLabel>
              <Select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                label="Gender"
                onClose={handleFilter}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" style={{ width: "200px" }}>
              <InputLabel>Age</InputLabel>
              <Select
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
                label="Age"
                onClose={handleFilter}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value=">25">25</MenuItem>
                <MenuItem value="15-25">15-25</MenuItem>
                {/* <MenuItem value="35">35</MenuItem> */}
              </Select>
            </FormControl>
          </Box>

          <br />

          {/* Table to display fetched data */}
          <h2>Fetched Data:</h2>
          {filteredData.length > 0 ? (
            <Box sx={{ overflow: "auto", height: "60vh" }}>
              <table border="1" className="data-table" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                    <th>E</th>
                    <th>F</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Day || "N/A"}</td>
                      <td>{item.Age || "N/A"}</td>
                      <td>{item.Gender || "N/A"}</td>
                      <td>{item.A || "N/A"}</td>
                      <td>{item.B || "N/A"}</td>
                      <td>{item.C || "N/A"}</td>
                      <td>{item.D || "N/A"}</td>
                      <td>{item.E || "N/A"}</td>
                      <td>{item.F || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          ) : (
            <p>No data available. Please wait for data to load.</p>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Invoice;
