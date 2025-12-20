import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
// import About from "./pages/About"; 
// import Treatments from "./pages/Treatments";
import Contact from "./pages/ContactUs";
// import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/treatments" element={<Treatments />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
