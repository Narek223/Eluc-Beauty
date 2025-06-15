import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/HomePage/Homepage";
import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from "./Components/AboutUs/About";
import Scroll from "./Components/ScrollToTop/Scroll";
import ErrorPage from "./Components/404/ErrorPage";
import Contact from "./Components/ContactUs/Contact";

function App() {
  const location = useLocation();
  const is404 = location.pathname !== "/" && location.pathname !== "/About" && location.pathname !== "/ContactUs" ;

  return (
    <div className="App">
      {!is404 && <Header />}

      <Scroll />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {!is404 && <Footer />}
    </div>
  );
}

export default App;
