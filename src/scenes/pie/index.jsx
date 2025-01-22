import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import Sidebar from "../global/Sidebar";

const Pie = () => {
  return (
    <Box display="flex" width="100vw" height="100vh" overflow="hidden">
        <Sidebar />
    <Box flexGrow={1} m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
    </Box>
  );
};

export default Pie;