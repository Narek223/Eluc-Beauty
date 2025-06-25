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
import Blog from "./Components/Blog/Blog";
import BlogDetails from "./Components/Blog/BlogDetails/BlogDetails";
import ExpertsPage from "./Components/Experts/ExpertsPage";
import ExpertsDetalis from "./Components/HomePage/Experts/ExpertsDetalis/ExpertsDetalis";
import SignIn from "./Components/SignInSignUp/SignIn";

function App() {
  const location = useLocation();
  const validPaths = ["/", "/About", "/ContactUs", "/Blog", "/Expert","/SignIn"];

  const isValidPath =
    validPaths.includes(location.pathname) ||
    /^\/Blog\/[0-9]+/.test(location.pathname) ||
    /^\/Expert\/[0-9]+/.test(location.pathname);

  return (
    <div className="App">
      {isValidPath && <Header />}

      <Scroll />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/:id" element={<BlogDetails />} />
        <Route path="/Expert" element={<ExpertsPage />} />
        <Route path="/Expert/:id" element={<ExpertsDetalis />} />
        <Route path="/SignIn" element={<SignIn />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {isValidPath && <Footer />}
    </div>
  );
}

export default App;
