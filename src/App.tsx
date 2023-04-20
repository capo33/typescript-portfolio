import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import About from "./pages/About/About";
import Sidebar from "./components/Sidebar/Index";
import Navbar from "./components/Navbar/Index";
import Projects from "./pages/Projects/Index";
import ScrollToTop from "./components/ScrollToTop/Index";
import Contact from "./pages/Contact/Index";
import Footer from "./components/Footer/Index";
import Header from "./components/Header/Index";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <ScrollToTop />
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
