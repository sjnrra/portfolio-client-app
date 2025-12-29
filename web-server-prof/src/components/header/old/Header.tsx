/******************************************************************************
 * Header.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import { Link } from "react-router-dom";

// css
import 'css/header.css'

// @mui
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

/*************************************************
 * setNavLinks
 *************************************************/
const setNavLinks: Array<{ text: string, url: string }> = [
    { text: "Top", url: "/" },
    { text: "Art works", url: "/artworks" },
    { text: "Other works", url: "/otherworks" },
    { text: "About", url: "/production" },
    { text: "Blog", url: "/blog" },
    { text: "Contact", url: "/contact" }
];

/*************************************************
 * Header
 *************************************************/
const Header: React.FC = () => {
    return (
        <>
            <AppBar className="header" position="static" sx={{ backgroundColor: '#282828dd'  }}>
            {/* <AppBar component="header" position="static" color="secondary"> */}
                <Container maxWidth="md">
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between' 
                        }}>
                        <Box>
                            <List component="nav" sx={{ 
                                display: 'flex', 
                                justifyContent: 'flex-start' 
                                }}>
                                {setNavLinks.map((navLink) => (
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{ 
                                            textAlign: 'center' }} 
                                            component={Link} 
                                            to={navLink.url}>
                                            <ListItemText primary={navLink.text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;