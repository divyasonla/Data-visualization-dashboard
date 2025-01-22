import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Sidebar from "../global/Sidebar";
const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Box display="flex" width="100vw" height="100vh" overflow="hidden">
        <Sidebar />
        <Box flexGrow={1} m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Question Page" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Importan question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        how you make dashboard? and which language used for this Dashboard
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        how you make dashboard? and which language used for this Dashboard
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your Favorite Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        how you make dashboard? and which language used for this Dashboard
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Same Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        how you make dashboard? and which language used for this Dashboard
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Some Random Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        how you make dashboard? and which language used for this Dashboard
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    The Final Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        how you make dashboard? and which language used for this Dashboard
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
        </Box>
    )
}

export default FAQ