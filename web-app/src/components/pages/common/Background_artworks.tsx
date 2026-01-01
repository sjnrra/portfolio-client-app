import { Box } from "@mui/material";
import React from "react";

type BackgroundProps = {
    children: React.ReactNode;
    width?: string | number;
    bgcolor?: string;
    padding?: number | string;
    borderRadius?: number | string;
};

export const Background: React.FC <BackgroundProps> = ({ children }) => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "rgba(236, 236, 236, 1)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                justifyContent: "center", // 横中央 
                alignItems: "center", // 縦中央
                // display: "flex",
            }}
        >
             {children}
        </Box>
    );
};
export default Background;