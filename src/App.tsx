import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Index";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Index";
import Projects from "./pages/Projects/Index";
import Footer from "./components/Footer/Index";
import Header from "./components/Header/Index";
import ScrollToTop from "./components/ScrollToTop/Index";

import "./App.css";
function App() {
  return (
    <Router>
      <ScrollToTop />
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
