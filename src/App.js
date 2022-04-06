import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Surats from "./Components/Surats";

function App() {
  return (
    <div>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        {/* Surats page */}
        <Route path="/Surats/:edition" element={<Surats />} />
      </Routes>
    </div>
  );
}

export default App;
