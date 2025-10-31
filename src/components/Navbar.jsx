import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, GraduationCap } from "lucide-react";
import { countries } from '../data/countries';

const Navbar = ({ onNavigate, currentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const countries = [
    { id: "usa", name: "USA", flag: "🇺🇸" },
    { id: "uk", name: "UK", flag: "🇬🇧" },
    { id: "canada", name: "Canada", flag: "🇨🇦" },
    { id: "australia", name: "Australia", flag: "🇦🇺" },
    { id: "ireland", name: "Ireland", flag: "🇮🇪" },
    { id: "europe", name: "Europe", flag: "🇪🇺" },
  ];

  const examCategories = [
    { id: "mock-interviews", name: "Mock Interviews" },
    { id: "model-tests", name: "Model Tests" },
    { id: "guidance", name: "Guidance" },
    { id: "study-material", name: "Study Material" },
    { id: "progress-tracking", name: "Progress Tracking" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (section, subSection) => {
    if (onNavigate) onNavigate(section, subSection);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-white shadow-xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNavigation("home")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <GraduationCap className="w-8 h-8 text-[#60a5fa]" />
          <div
            className="text-4xl font-bold tracking-wide flex items-center select-none"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            <span className="text-[#60a5fa] drop-shadow-md">Gb</span>
            <span className="text-white ml-1">Pathways</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul
          ref={dropdownRef}
          className="hidden md:flex space-x-8 font-medium text-[16px]"
        >
          <li
            onClick={() => handleNavigation("home")}
            className={`cursor-pointer hover:text-[#60a5fa] transition duration-300 ${
              currentSection === "home" ? "text-[#60a5fa]" : ""
            }`}
          >
            Home
          </li>

          {/* Services */}
          <li
            onClick={() => handleNavigation("services")}
            className={`cursor-pointer hover:text-[#60a5fa] transition duration-300 ${
              currentSection === "services" ? "text-[#60a5fa]" : ""
            }`}
          >
            Services
          </li>

          {/* Countries Dropdown */}
          <li className="relative cursor-pointer">
            <div
              onClick={() => toggleDropdown("countries")}
              className="flex items-center hover:text-[#60a5fa] transition duration-300"
            >
              Countries
              <ChevronDown
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === "countries" ? "rotate-180" : ""
                }`}
              />
            </div>

            {activeDropdown === "countries" && (
              <ul className="absolute left-0 mt-3 w-44 bg-white text-gray-800 rounded-xl shadow-xl animate-fadeIn">
                {countries.map((country) => (
                  <li
                    key={country.id}
                    onClick={() =>
                      handleNavigation("country", country.id)
                    }
                    className="px-4 py-2 hover:bg-[#60a5fa] hover:text-white rounded-lg transition duration-200 flex items-center space-x-2"
                  >
                    <span className="text-xl">{country.flag}</span>
                    <span>{country.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Exams Dropdown */}
          <li className="relative cursor-pointer">
            <div
              onClick={() => toggleDropdown("exams")}
              className="flex items-center hover:text-[#60a5fa] transition duration-300"
            >
              Exams
              <ChevronDown
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === "exams" ? "rotate-180" : ""
                }`}
              />
            </div>

            {activeDropdown === "exams" && (
              <ul className="absolute left-0 mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-xl animate-fadeIn">
                {examCategories.map((exam) => (
                  <li
                    key={exam.id}
                    onClick={() =>
                      handleNavigation("exams", exam.id)
                    }
                    className="px-4 py-2 hover:bg-[#60a5fa] hover:text-white rounded-lg transition duration-200"
                  >
                    {exam.name}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li
            onClick={() => handleNavigation("visa-guide")}
            className={`cursor-pointer hover:text-[#60a5fa] transition duration-300 ${
              currentSection === "visa-guide" ? "text-[#60a5fa]" : ""
            }`}
          >
            Visa Guide
          </li>

          <li
            onClick={() => handleNavigation("about")}
            className={`cursor-pointer hover:text-[#60a5fa] transition duration-300 ${
              currentSection === "about" ? "text-[#60a5fa]" : ""
            }`}
          >
            About Us
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-7 w-7 text-white" />
          ) : (
            <Menu className="h-7 w-7 text-white" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f172a]/95 text-white px-6 pb-6 animate-fadeIn">
          <ul className="flex flex-col space-y-4 mt-3 font-medium text-lg">
            <li
              onClick={() => handleNavigation("home")}
              className="hover:text-[#60a5fa] transition duration-300"
            >
              Home
            </li>
            <li
              onClick={() => handleNavigation("services")}
              className="hover:text-[#60a5fa] transition duration-300"
            >
              Services
            </li>

            {/* Mobile Countries */}
            <li>
              <div
                onClick={() => toggleDropdown("countries-mobile")}
                className="flex items-center justify-between cursor-pointer hover:text-[#60a5fa]"
              >
                Countries
                <ChevronDown
                  className={`ml-1 w-5 h-5 transition-transform duration-300 ${
                    activeDropdown === "countries-mobile" ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeDropdown === "countries-mobile" && (
                <ul className="mt-2 pl-4 space-y-2">
                  {countries.map((country) => (
                    <li
                      key={country.id}
                      onClick={() =>
                        handleNavigation("country", country.id)
                      }
                      className="hover:text-[#60a5fa] transition duration-300 cursor-pointer"
                    >
                      {country.flag} {country.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile Exams */}
            <li>
              <div
                onClick={() => toggleDropdown("exams-mobile")}
                className="flex items-center justify-between cursor-pointer hover:text-[#60a5fa]"
              >
                Exams
                <ChevronDown
                  className={`ml-1 w-5 h-5 transition-transform duration-300 ${
                    activeDropdown === "exams-mobile" ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeDropdown === "exams-mobile" && (
                <ul className="mt-2 pl-4 space-y-2">
                  {examCategories.map((exam) => (
                    <li
                      key={exam.id}
                      onClick={() =>
                        handleNavigation("exams", exam.id)
                      }
                      className="hover:text-[#60a5fa] transition duration-300 cursor-pointer"
                    >
                      {exam.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li
              onClick={() => handleNavigation("visa-guide")}
              className="hover:text-[#60a5fa] transition duration-300"
            >
              Visa Guide
            </li>
            <li
              onClick={() => handleNavigation("about")}
              className="hover:text-[#60a5fa] transition duration-300"
            >
              About Us
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
