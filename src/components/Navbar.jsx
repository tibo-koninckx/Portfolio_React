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
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

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
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
                <List>
                    <ListItem onClick={handleDrawerClose}>
                        <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeOutlinedIcon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText>
                                    Home
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem onClick={handleDrawerClose}>
                        <Link to="/about" style={{textDecoration: "none", color: "inherit"}}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountCircleOutlinedIcon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText>
                                    About
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem onClick={handleDrawerClose}>
                        <Link
                            to="https://drive.google.com/file/d/1ZcUIGm7GHuWhyhfnpdCv-Xe66H4zCltT/view?usp=drive_link"
                            target="_blank" style={{textDecoration: "none", color: "inherit"}}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DescriptionOutlinedIcon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText>
                                    CV
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/projects" style={{textDecoration: "none", color: "inherit"}}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WorkOutlineOutlinedIcon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText>
                                    Projects
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem onClick={handleDrawerClose}>
                        <Link to="/contact" style={{textDecoration: "none", color: "inherit"}}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ContactPageOutlinedIcon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText>
                                    Contact
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    </>
}