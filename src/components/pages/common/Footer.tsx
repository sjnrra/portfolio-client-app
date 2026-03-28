/******************************************************************************
 * Footer.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

// common style
import customiseTypography from "components/pages/common/Customize_mui_typography";
export const theme = customiseTypography

/*************************************************
 * Footer
 *************************************************/
const Footer: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar className="footer" component="footer" position="static" sx={{ backgroundColor: "rgba(20, 6, 32, 0.85)" }}>
                    {/* <AppBar component="footer" position="static" color="secondary"> */}
                    <Container maxWidth="md">
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="caption">
                                ©2026 Shinya Watanabe Portfolio Site
                            </Typography>
                        </Box>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </>
    );
};

export default Footer;