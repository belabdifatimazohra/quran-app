import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Surats from "./Components/Surats";
import Ayats from "./Components/Ayats"
import quran from "./images/quran.png"

function App() {
  return (
    <div className="app">
      <img src= {quran} alt="quran" className = "quranImage"/>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        {/* Surats page */}
        <Route path="/surats/:edition" element={<Surats />} />
        {/* Ayats of a Surat page */}
        <Route path="/:edition/surat/:surat" element={<Ayats />} />
      </Routes>
    </div>
  );
}

export default App;
