import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ThemeToggle  from "./components/themeToggle/ThemeToggle";
import Navbar       from "./components/Navbar";
import Home         from "./pages/Home";
import Info        from "./pages/Info";
import Projetos     from "./pages/Projetos";
import "./App.css";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <ThemeToggle />
                <Routes>
                    <Route path="/"          element={<Navigate to="/home"/>} />
                    <Route path="/home"      element={<Home/>} />
                    <Route path="/projetos"  element={<Projetos/>} />
                    <Route path="/info"      element={<Info/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
