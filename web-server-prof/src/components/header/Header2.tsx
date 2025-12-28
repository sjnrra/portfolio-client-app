import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const setNavLinks: Array<{ text: string, url: string }> = [
    { text: "Top", url: "/" },
    { text: "Art works", url: "/artworks" },
    { text: "Other works", url: "/otherworks" },
    { text: "About", url: "/production" },
    { text: "Blog", url: "/blog" },
    { text: "Contact", url: "/contact" }
];

export default function DrawerAppBar(props: Props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" style={{ color: "#e0f2f1", backgroundColor: "#363535ff" }}>
                {/* <AppBar component="nav" sx={{ backgroundColor: '#282828dd' }}> */}
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Portfolio site
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                        <List component="nav" sx={{
                            display: 'flex',
                            justifyContent: 'flex-start'
                        }}>
                            {setNavLinks.map((navLink) => (
                                <ListItem disablePadding>
                                    <ListItemButton sx={{
                                        textAlign: 'center'
                                    }}
                                        component={Link}
                                        to={navLink.url}>
                                        <ListItemText primary={navLink.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}