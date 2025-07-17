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
  useParams,
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
import { links } from "./Services/Date/Header/links";

function App() {
  const location = useLocation();

  const validPaths = ["/", ...links.map((item) => item.link), "/sign","/expert"];
  const isValidPath = validPaths.includes(
    "/" + location.pathname.split("/")[1]
  );

  return (
    <div className="App">
      {isValidPath && <Header />}

      <Scroll />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/expert" element={<ExpertsPage />} />
        <Route path="/expert/:id" element={<ExpertsDetalis />} />
        <Route path="/sign" element={<SignIn />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {isValidPath && <Footer />}
    </div>
  );
}

export default App;
