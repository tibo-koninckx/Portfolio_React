import {useState} from "react";
import {
    AppBar,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    return <>

        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                        sx={{mr: 2, display: {xs: 'block', md: 'block'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div style={{flexGrow: 1}}></div>
                    {/* Add this line to push menu items to the right */}
                    {/*                    <div className="desktop-menu" style={{display: {xs: 'none', md: 'flex'}}}>
                        <Link to="/" style={{textDecoration: 'none', color: 'inherit', margin: '0 10px'}}>
                            Home
                        </Link>
                        <Link to="/about" style={{textDecoration: 'none', color: 'inherit', margin: '0 10px'}}>
                            About
                        </Link>
                        <Link to="https://drive.google.com/file/d/1ZcUIGm7GHuWhyhfnpdCv-Xe66H4zCltT/view?usp=drive_link" target="_blank" style={{textDecoration: 'none', color: 'inherit', margin: '0 10px'}}>
                            cv
                        </Link>
                        <Link to="/contact" style={{textDecoration: 'none', color: 'inherit', margin: '0 10px'}}>
                            Contact
                        </Link>
                    </div>*/}
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}  sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '10%' },
            }}>
                <List>
                    <ListItem onClick={handleDrawerClose}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeOutlinedIcon fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>
                                <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                                    Home
                                </Link>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={handleDrawerClose}>
                        <Link
                            to="/about"
                            style={{textDecoration: "none", color: "inherit"}}
                        >
                            About
                        </Link>
                    </ListItem>
                    <ListItem onClick={handleDrawerClose}>
                        <Link
                            to="https://drive.google.com/file/d/1ZcUIGm7GHuWhyhfnpdCv-Xe66H4zCltT/view?usp=drive_link"
                            target="_blank"
                            style={{textDecoration: "none", color: "inherit"}}
                        >
                            CV
                        </Link>
                    </ListItem>
                    <ListItem onClick={handleDrawerClose}>
                        <Link
                            to="/contact"
                            style={{textDecoration: "none", color: "inherit"}}
                        >
                            Contact
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    </>
}