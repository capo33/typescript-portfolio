import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import About from "./pages/About/About";
import Sidebar from "./components/Sidebar/Index";
import Navbar from "./components/Navbar/Index";
import { Projects } from "./pages/Projects/Index";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
