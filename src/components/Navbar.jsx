import React, { useState } from "react";
import {
    AppBar, Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { storage } from "../services/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { motion } from "framer-motion";
import {NavbarHover} from "./NavbarHover";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faHouse, faBriefcase, faAddressCard, faFile, faUser} from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
    const [url, setUrl] = useState(null);
    const cvRef = ref(storage, "cv/cv.pdf");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const isMobile = useMediaQuery("(max-width:600px)");

    getDownloadURL(cvRef)
        .then((url) => {
            setUrl(url);
        })
        .catch(() => {
            setUrl(null);
            console.error("Cv kan niet worden geladen");
        });

    return (
        <>
            <div>
                <AppBar position="sticky" sx={{background: '#444444'}}>
                    <Toolbar>
                        {isMobile && (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                                sx={{ mr: 2, display: { xs: "block", md: "none" } }}
                            >
                                <FontAwesomeIcon icon={faBars} />
                            </IconButton>
                        )}
                        <div style={{ flexGrow: 1 }}></div>
                        {!isMobile && (
                            // Add this line to push menu items to the right
                            <div>
                                {/* Your desktop version content goes here */}
                                <List sx={{display: 'flex'}}>
                                    <ListItem onClick={handleDrawerClose}>
                                        <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                                            <ListItemButton>
                                                <NavbarHover>
                                                    <ListItemText>
                                                        Home
                                                    </ListItemText>
                                                </NavbarHover>
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                    <ListItem onClick={handleDrawerClose}>
                                        <Link to="/about" style={{textDecoration: "none", color: "inherit"}}>
                                            <ListItemButton>
                                                <NavbarHover>
                                                    <ListItemText>
                                                        About
                                                    </ListItemText>
                                                </NavbarHover>
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                    <ListItem onClick={handleDrawerClose}>
                                        <Link
                                            to={url}
                                            target="_blank" style={{textDecoration: "none", color: "inherit"}}>
                                            <ListItemButton>
                                                <NavbarHover>
                                                    <ListItemText>
                                                        CV
                                                    </ListItemText>
                                                </NavbarHover>
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                    <ListItem onClick={handleDrawerClose}>
                                        <Link to="/projects" style={{textDecoration: "none", color: "inherit"}}>
                                            <ListItemButton>
                                                <NavbarHover>
                                                    <ListItemText>
                                                        Projects
                                                    </ListItemText>
                                                </NavbarHover>
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                    <ListItem onClick={handleDrawerClose}>
                                        <Link to="/contact" style={{textDecoration: "none", color: "inherit"}}>
                                            <ListItemButton>
                                                <NavbarHover>
                                                    <ListItemText>
                                                        Contact
                                                    </ListItemText>
                                                </NavbarHover>
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                </List>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>

                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                >
                    <motion.div
                        initial={{ x: -500 }}
                        animate={{ x: drawerOpen ? 0 : -500 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    >
                        <List>
                            <ListItem onClick={handleDrawerClose}>
                                <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FontAwesomeIcon icon={faHouse} size="lg"/>
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
                                            <FontAwesomeIcon icon={faUser} size="lg"/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            About
                                        </ListItemText>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem onClick={handleDrawerClose}>
                                <Link
                                    to={url}
                                    target="_blank" style={{textDecoration: "none", color: "inherit"}}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FontAwesomeIcon icon={faFile} size="lg"/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            CV
                                        </ListItemText>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem onClick={handleDrawerClose}>
                                <Link to="/projects" style={{textDecoration: "none", color: "inherit"}}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FontAwesomeIcon icon={faBriefcase} />
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
                                            <FontAwesomeIcon icon={faAddressCard} size="lg"/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            Contact
                                        </ListItemText>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        </List>
                    </motion.div>
                </Drawer>
            </div>
        </>
    );
}
