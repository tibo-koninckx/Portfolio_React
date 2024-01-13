import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {MessageProvoider} from "./contexts/messageContext";
import {AnimatedRoutes} from "./components/AnimatedRoutes";


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
            <AnimatedRoutes/>
        </BrowserRouter>
    </>
}

export default App;
