import './App.css';
import {HomePage} from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return <>
        <ProvidedApp/>
    </>
}

function ProvidedApp() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route index path={"/"} element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    </>
}

export default App;
