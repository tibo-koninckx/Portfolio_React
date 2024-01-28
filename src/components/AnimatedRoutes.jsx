import {Route, Routes, useLocation} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {AboutPage} from "../pages/AboutPage";
import {Biogrphy, Frameworks, FullStack, Interests, Projects, Tools} from "../data/data";
import {ContactPage} from "../pages/ContactPage";
import {ProjectPage} from "../pages/ProjectPage";
import React from "react";
import {AnimatePresence} from "framer-motion"

export function AnimatedRoutes() {
    const location = useLocation();
    return <>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index path={"/"} element={<HomePage/>}/>
                <Route path={"/about"} element={<AboutPage fullStack={FullStack} frameworks={Frameworks} tools={Tools} bio={Biogrphy} interests={Interests}/>}/>
                <Route path={"/contact"} element={<ContactPage/>}/>
                <Route path={"/projects"} element={<ProjectPage projects={Projects}/>}/>
                <Route path={"*"} element={<HomePage/>}/>
            </Routes>
        </AnimatePresence>
    </>
}