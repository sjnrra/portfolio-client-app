/******************************************************************************
 * Header.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
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
import ColorLensIcon from '@mui/icons-material/ColorLens';

//css
import styles from "css/Header.module.css";

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
    { text: "Top", url: "/" },
    { text: "Art works", url: "/artworks" },
    { text: "Otherworks", url: "/otherworks" },
    { text: "About", url: "/production" },
    // { text: "Blog", url: "/blog" },
    { text: "Contact", url: "/contact" }
];

/*************************************************
 * function DrawerAppBar
 *************************************************/
export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    /***************************************
     * Window縮小時のヘッダーバー
     ***************************************/
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ my: 2 }}>
                Portforio site
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
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar className={styles.appbar} component="nav" style={{ color: "#ffffffff", backgroundColor: "#363535ff" }}>
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

                    <ColorLensIcon />

                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Portforio site
                    </Typography>

                    <Box
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
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
                                                "& .MuiListItemText-primary": { fontSize: "1.4rem" },
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
    );
}