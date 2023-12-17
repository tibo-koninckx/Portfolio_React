import React from 'react';
import './App.css';
import {HomePage} from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {About} from "./components/About";


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
                <Route path={"/about"} element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </>
}

export default App;
