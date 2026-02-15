/******************************************************************************
 * Header.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import * as React from 'react';
import { Link } from "react-router-dom";

// MUI
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
import { ThemeProvider } from "@mui/material/styles";

// common style
import customiseTypography from "components/pages/common/Customize_mui_typography";
export const theme = customiseTypography

/*************************************************
 * interface Props
 *************************************************/
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const setNavLinks: Array<{ text: string, url: string }> = [
    // { text: "Top", url: "/portfolio-client-app/" },
    // { text: "Art works", url: "/portfolio-client-app/artworks" },
    // { text: "Other works", url: "/portfolio-client-app/otherworks" },
    // { text: "About", url: "/portfolio-client-app/about" },
    // { text: "Contact", url: "/portfolio-client-app/contact" }
    { text: "Top", url: "/" },
    { text: "ArtWorks", url: "/artworks" },
    { text: "OtherWorks", url: "/otherworks" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" }
];
const setNavTop: Array<{ text: string, url: string }> = [
    { text: "Portfolio Site", url: "/" },
];


/*************************************************
 * function DrawerAppBar
 *************************************************/
const Header: React.FC<Props> = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    /***************************************
     * Window縮小時のヘッダーバー
     ***************************************/
    const drawer = (
        <Box 
        onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ my: 1 }}>
                Menu
            </Typography>
            <Divider />
            <List component="nav" sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: "column",
                alignItems: "flex-start"
            }}>
                {setNavLinks.map((navLink) => (
                    <ListItem key={navLink.url} disablePadding>
                        <ListItemButton sx={{
                            textAlign: 'left',
                        }}
                            component={Link}
                            to={navLink.url}>
                            <ListItemText primary={navLink.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    /***************************************
     * 通常のヘッダーバー
     ***************************************/
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar component="nav" style={{ color: "#ffffffff", backgroundColor: "rgba(20, 6, 32, 0.85)" }}>
                    {/* <AppBar component="nav" style={{ color: "#ffffffff", backgroundColor: "rgba(166, 68, 247, 0.95)" }}> */}
                        {/* <AppBar component="nav" style={{ color: "#ffffffff", backgroundColor: "#363535ff" }}> */}
                        <Toolbar>

                            {setNavTop.map((navLink) => (
                                <ListItem key={navLink.url} disablePadding>
                                    <ListItemButton
                                        sx={{
                                            whiteSpace: "nowrap", // 改行とスペースを保持
                                            textAlign: 'left',
                                            flexGrow: 1,
                                            display: { xs: 'block', sm: 'block' }
                                        }}
                                        component={Link}
                                        to={navLink.url}>
                                        <ListItemText primary={navLink.text}
                                            sx={{
                                                "& .MuiListItemText-primary": { fontSize: "2.0rem" },
                                                "& .MuiListItemText-secondary": { fontSize: "0.9rem" }
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}

                            <Box
                                sx={{
                                    alignItems: "center",
                                }}
                                display="flex"
                                flexDirection="column"
                            >
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    // edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        // mr: 2,
                                        display: { sm: 'none' }
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography
                                    variant="body2"
                                    component="div"
                                    sx={{
                                        flexGrow: 1,
                                        display: { sm: 'none' }
                                    }}
                                >
                                    Menu
                                </Typography>
                            </Box>

                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <List
                                    component="nav"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start'
                                    }}
                                >
                                    {setNavLinks.map((navLink) => (
                                        <ListItem key={navLink.url} disablePadding>
                                            <ListItemButton sx={{
                                                textAlign: 'center',
                                                whiteSpace: "nowrap" // 改行とスペースを保持
                                            }}
                                                component={Link}
                                                to={navLink.url}>
                                                <ListItemText primary={navLink.text}
                                                    sx={{
                                                        "& .MuiListItemText-primary": { fontSize: "1.3rem" },
                                                        "& .MuiListItemText-secondary": { fontSize: "0.9rem" }
                                                    }}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Toolbar>
                    </AppBar>

                    <nav>
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </nav>
                </Box>
            </ThemeProvider>
        </>
    );
}

export default Header;