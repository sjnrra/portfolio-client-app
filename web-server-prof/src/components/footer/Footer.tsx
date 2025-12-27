/******************************************************************************
 * Footer.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import 'css/footer.css'

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/*************************************************
 * Footer
 *************************************************/
const Footer: React.FC = () => {
    return (
        <>
            <AppBar className="footer" component="footer" position="static" sx={{ backgroundColor: '#282828dd' }}>
            {/* <AppBar component="footer" position="static" color="secondary"> */}
                <Container maxWidth="md">
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="caption">
                            ©2025 Shinya Watanabe @painting_portfolio
                        </Typography>
                    </Box>
                </Container>
            </AppBar>
        </>
    );
};

export default Footer;