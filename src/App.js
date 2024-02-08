import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {MessageProvoider} from "./contexts/messageContext";
import {AnimatedRoutes} from "./components/AnimatedRoutes";


function App() {
    // eslint-disable-next-line no-undef
    tsParticles.load({
        id: "tsparticles",
        options: {
            preset: "triangles",
            background: {
                opacity: 0
            },
            particles: {
                move: {
                    speed: 2
                },
            },
            responsive: [
                {
                    options: {
                        particles: {
                            number: {
                                value: 50
                            },
                        },
                    },
                    maxWidth: 800
                },
            ]
        },
    });
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
