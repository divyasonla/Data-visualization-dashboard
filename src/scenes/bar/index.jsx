import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const Bar = () => {
    return (
      <Box display="flex" width="100vw" height="100vh">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <Box flexGrow={1} display="flex" flexDirection="column">
        <Topbar />

          <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple bar Chart" />
          </Box>
          <Box flexGrow={1} overflow="hidden" m="20px">
            {/* Ensure the chart can scroll if needed */}
            <BarChart />
          </Box>
        </Box>
      </Box>
    );
};

export default Bar;
