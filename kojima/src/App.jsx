import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ThemeToggle  from "./components/themeToggle/ThemeToggle";
import Navbar       from "./components/Navbar";
import Home         from "./pages/Home";
import About        from "./pages/About";
import Professional from "./pages/Professional";
import "./App.css";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <ThemeToggle />
                <Routes>
                    <Route path="/"             element={<Navigate to="/home"/>} />
                    <Route path="/home"         element={<Home/>} />
                    <Route path="/about"        element={<About/>} />
                    <Route path="/professional" element={<Professional/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
