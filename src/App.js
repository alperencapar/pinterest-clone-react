import "./App.css";
import Navbar from "./components/Navbar";
import Pins from "./components/Pins";
import ThePin from "./components/ThePin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Pins />} />
                    <Route path="/pin/:pinId" element={<ThePin />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
