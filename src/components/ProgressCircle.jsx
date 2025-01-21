import { box, useTheme  } from "@mui/material";
import { tokens } from"../theme";
import { Box } from "@mui/system";


const ProgressCircle = ({ progress = "0.75",size="40"}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;

    return(
        <Box
        sx={{
            background:`radical-gradient(${colors.primary[400]} 55%, transparent 56%)`
        }}
        />
    )
}

export default ProgressCircle