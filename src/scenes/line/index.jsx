import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import Sidebar from "../global/Sidebar";

const Line = () => {
    return (
      <Box display="flex" width="100vw" height="100vh" overflow="hidden">
        <Sidebar />
      <Box flexGrow={1} m="20px">
        <Header title="Line Chart" subtitle="Simple  Chart" />
        <Box height="75vh">
            <LineChart />
        </Box>
      </Box>
      </Box>
    )
}

export default Line;