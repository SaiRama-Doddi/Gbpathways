import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const countries = ["USA", "UK", "Canada", "Australia", "Ireland", "Europe"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-white shadow-xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-4xl font-bold tracking-wide flex items-center select-none"
          style={{ fontFamily: "Dancing Script, cursive" }}
        >
          <span className="text-[#60a5fa] drop-shadow-md">Gb</span>
          <span className="text-white ml-1">Pathways</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-[16px]">
          <li className="hover:text-[#60a5fa] transition duration-300 cursor-pointer">
            Home
          </li>

          {/* Countries Dropdown */}
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center hover:text-[#60a5fa] transition duration-300">
              Countries
              <ChevronDown
                className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isDropdownOpen && (
              <ul className="absolute left-0 mt-3 w-44 bg-white text-gray-800 rounded-xl shadow-xl animate-fadeIn">
                {countries.map((country) => (
                  <li
                    key={country}
                    className="px-4 py-2 hover:bg-[#60a5fa] hover:text-white rounded-lg cursor-pointer transition duration-200"
                  >
                    {country}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="hover:text-[#60a5fa] transition duration-300 cursor-pointer">
            Exams
          </li>
          <li className="hover:text-[#60a5fa] transition duration-300 cursor-pointer">
            Services
          </li>
          <li className="hover:text-[#60a5fa] transition duration-300 cursor-pointer">
            Visa Guide
          </li>
          <li className="hover:text-[#60a5fa] transition duration-300 cursor-pointer">
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
            <li className="hover:text-[#60a5fa] transition duration-300">
              Home
            </li>
            <li>
              <div
                className="flex items-center justify-between cursor-pointer hover:text-[#60a5fa]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Countries
                <ChevronDown
                  className={`ml-1 w-5 h-5 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {isDropdownOpen && (
                <ul className="mt-2 pl-4 space-y-2">
                  {countries.map((country) => (
                    <li
                      key={country}
                      className="hover:text-[#60a5fa] transition duration-300 cursor-pointer"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="hover:text-[#60a5fa] transition duration-300">
              Exams
            </li>
            <li className="hover:text-[#60a5fa] transition duration-300">
              Services
            </li>
            <li className="hover:text-[#60a5fa] transition duration-300">
              Visa Guide
            </li>
            <li className="hover:text-[#60a5fa] transition duration-300">
              About Us
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
