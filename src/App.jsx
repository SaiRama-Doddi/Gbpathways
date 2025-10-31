import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Exams from "./pages/Exams";
import FreeConsultation from "./pages/FreeConsultation";
import ImageGrid from "./pages/ImagesGrid";
import VisaGuide from "./pages/VisaGuide";
import WhyChooseUs from "./pages/WhyChooseUs";
import Services from "./pages/Services";
import HomePage from "./pages/HomePage";
import CountryDetail from "./pages/CountryDetail";
import ScrollAndContactButtons from "./pages/ScrollAndContactButtons";


function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [subSection, setSubSection] = useState(null);

  // ✅ Handles navigation from Navbar
  const handleNavigation = (section, subSection = null) => {
    setCurrentSection(section);
    setSubSection(subSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar onNavigate={handleNavigation} currentSection={currentSection} />

      {/* ✅ Home Section */}
      {currentSection === "home" && (
        <>
          <HomePage onNavigate={handleNavigation} />
          <VisaGuide />
          <FreeConsultation  onNavigate={handleNavigation}/>
          <WhyChooseUs />
    
          <ImageGrid />
        </>
      )}

      {/* ✅ Visa Guide */}
      {currentSection === "visa-guide" && <VisaGuide />}

      {/* ✅ Services */}
        {currentSection === "services" && <Services />}

      {/* ✅ About */}
      {currentSection === "about" && <WhyChooseUs />}

      {/* ✅ Country Details */}
      {currentSection === "country" && subSection && (
        <CountryDetail countryId={subSection} />
      )}

      {/* ✅ Exams Page (Main or Subsection) */}
      {currentSection === "exam" && <Exams subSection={subSection} />}

      <Footer />
       <ScrollAndContactButtons />
    </>
  );
}

export default App;
