import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import About from "./pages/About";
// import Treatments from "./pages/Treatments";
import Contact from "./pages/ContactUs";
// import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Treatment Pages
import AyurvedicConsultation from "./components/AyurvedicConsultation";
import PhysiotherapyServices from "./components/PhysiotherapyServices";
import PanchkarmaTherapies from "./components/PanchkarmaTherapies";
import InfertilityTreatment from "./components/InfertilityTreatment";
import Chiropractor from "./components/Chiropractor";
import AnorectalDiseases from "./components/AnorectalDiseases";
import WellnessTherapies from "./components/WellnessTherapies";
import WeightManagement from "./components/WeightManagement";
import BodyDetoxification from "./components/BodyDetoxification";
import GroomingTherapies from "./components/GroomingTherapies";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const basename = import.meta.env.BASE_URL;

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/treatments" element={<Treatments />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}

        {/* Treatment Routes */}
        <Route path="/ayurvedic-consultation" element={<AyurvedicConsultation />} />
        <Route path="/physiotherapy-services" element={<PhysiotherapyServices />} />
        <Route path="/panchkarma-therapies" element={<PanchkarmaTherapies />} />
        <Route path="/infertility-treatment" element={<InfertilityTreatment />} />
        <Route path="/chiropractor" element={<Chiropractor />} />
        <Route path="/anorectal-diseases" element={<AnorectalDiseases />} />
        <Route path="/wellness-therapies" element={<WellnessTherapies />} />
        <Route path="/weight-management" element={<WeightManagement />} />
        <Route path="/body-detoxification" element={<BodyDetoxification />} />
        <Route path="/grooming-therapies" element={<GroomingTherapies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
