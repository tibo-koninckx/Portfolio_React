import {useState} from "react";
import {AppBar, Drawer, IconButton, List, ListItem, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

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
                        sx={{mr: 2, display: {xs: 'block', md: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div style={{flexGrow: 1}}></div>
                    {/* Add this line to push menu items to the right */}
                    <div className="desktop-menu" style={{display: {xs: 'none', md: 'flex'}}}>
                        <Link to="/" style={{textDecoration: 'none', color: 'inherit', margin: '0 10px'}}>
                            Home
                        </Link>
                        <Link to="/about" style={{textDecoration: 'none', color: 'inherit', margin: '0 10px'}}>
                            About
                        </Link>
                        <Link to="https://drive.google.com/file/d/1ZcUIGm7GHuWhyhfnpdCv-Xe66H4zCltT/view?usp=drive_link" target="_blank" style={{textDecoration: 'none', color: 'inherit', margin: '0 10px'}}>
                            cv
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
                <List>
                    <ListItem onClick={handleDrawerClose}>
                        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                            Home
                        </Link>
                        <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>
                            About
                        </Link>
                        <Link to="https://drive.google.com/file/d/1ZcUIGm7GHuWhyhfnpdCv-Xe66H4zCltT/view?usp=drive_link" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>
                            cv
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    </>
}