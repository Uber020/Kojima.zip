import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ThemeToggle  from './components/ThemeToggle';
import Home         from './pages/Home';
import About        from './pages/About';
import Professional from './pages/Professional';
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ThemeToggle />
                <Routes>
                    <Route path="/"             element={<Navigate to="/home" />} />
                    <Route path="/home"         element={<Home />} />
                    <Route path="/about"        element={<About />} />
                    <Route path="/professional" element={<Professional />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
