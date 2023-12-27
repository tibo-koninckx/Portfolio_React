import React from 'react';
import './App.css';
import {HomePage} from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Biogrphy, Frameworks, FullStack, Interests, Tools} from "./data/data";
import {AboutPage} from "./pages/AboutPage";


function App() {
    return <>
        <ProvidedApp/>
    </>
}

function ProvidedApp() {
    return <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index path={"/"} element={<HomePage/>}/>
                <Route path={"/about"} element={<AboutPage FullStack={FullStack} Frameworks={Frameworks} Tools={Tools} Bio={Biogrphy} Interests={Interests}/>}/>
            </Routes>
        </BrowserRouter>
    </>
}

export default App;
