import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/HomePage/Homepage";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/AboutUs/About";
import Scroll from "./Components/ScrollToTop/Scroll";
function App() {
  return (
    <div className="App">
      <Header />
      <Scroll />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
