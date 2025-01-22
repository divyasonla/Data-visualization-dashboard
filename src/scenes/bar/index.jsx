import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Sidebar from "../global/Sidebar";

const Bar = () => {
    return (
      <Box display="flex" width="100vw" height="100vh" overflow="hidden">
        <Sidebar />
      <Box flexGrow={1} m="20px">
        <Header title="Bar Chart" subtitle="Simple bar Chart" />
        <Box height="100vh">
            <BarChart />
        </Box>
      </Box>
      </Box>
    )
}

export default Bar;