import {Route, Routes, useLocation} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {AboutPage} from "../pages/AboutPage";
import {ContactPage} from "../pages/ContactPage";
import {ProjectPage} from "../pages/ProjectPage";
import React from "react";
import {AnimatePresence} from "framer-motion"
import {ProjectArticle} from "./ProjectArticle";

export function AnimatedRoutes() {
    const location = useLocation();
    return <>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index path={"/"} element={<HomePage/>}/>
                <Route path={"/about"} element={<AboutPage/>}/>
                <Route path={"/contact"} element={<ContactPage/>}/>
                <Route path={"/projects"} element={<ProjectPage/>}/>
                <Route path={"/projects/:slug"} element={<ProjectArticle/>}/>
                <Route path={"*"} element={<HomePage/>}/>
            </Routes>
        </AnimatePresence>
    </>
}