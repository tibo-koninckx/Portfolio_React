import React from 'react';
import './App.css';
import {HomePage} from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Biogrphy, Frameworks, FullStack, Interests, Projects, Tools} from "./data/data";
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";
import {MessageProvoider} from "./contexts/messageContext";
import {ProjectPage} from "./pages/ProjectPage";


function App() {
    return <>
        <MessageProvoider>
        <ProvidedApp/>
        </MessageProvoider>
    </>
}

function ProvidedApp() {
    return <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index path={"/"} element={<HomePage/>}/>
                <Route path={"/about"} element={<AboutPage fullStack={FullStack} frameworks={Frameworks} tools={Tools} bio={Biogrphy} interests={Interests}/>}/>
                <Route path={"/contact"} element={<ContactPage/>}/>
                <Route path={"/projects"} element={<ProjectPage projects={Projects}/>}/>
                <Route path={"*"} element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    </>
}

export default App;
