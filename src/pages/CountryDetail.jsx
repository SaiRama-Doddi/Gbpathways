import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, DollarSign, Briefcase, FileCheck, ArrowLeft } from "lucide-react";
import { countries } from "../data/countries";

export default function CountryDetail({ countryId, onBack }) {
  const country = countries.find((c) => c.id === countryId);

  if (!country) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-700">Country not found</h2>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-24 pb-20 bg-linear-to-b from-blue-50 via-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-all focus:outline-none focus:ring-0 active:outline-none"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </button>

        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-linear-to-r from-[#0f172a] via-[#1e3a8a] to-[#60a5fa] text-white rounded-3xl p-10 md:p-16 shadow-2xl mb-10"
        >
          <div className="flex items-center space-x-5 mb-5">
            <span className="text-7xl drop-shadow-lg">{country.flag}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
              {country.name}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
            {country.description}
          </p>
        </motion.div>

        {/* Why Study & Top Universities */}
        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-8 transition-all"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              Why Study in {country.name}?
            </h2>
            <ul className="space-y-3 text-gray-700">
              {country.whyStudy.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start"
                >
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  {reason}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-8 transition-all"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Top Universities
            </h2>
            <ul className="space-y-3 text-gray-700">
              {country.topUniversities.map((uni, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start"
                >
                  <span className="text-blue-600 font-semibold mr-3">{i + 1}.</span>
                  {uni}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

           {/* Image Gallery Section */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {country.images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {img.caption}
            </div>
          </motion.div>
        ))}
      </div>

{/* Show Flags if Current Country is Europe */}
{country.name === "Europe" && (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="bg-white/80 backdrop-blur-md rounded-2xl   p-8 mb-10"
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
      Explore 20+ Study Destinations in Europe
    </h2>
    <p className="text-gray-600 text-center mb-6">
      Discover top countries across Europe offering world-class education,
      rich culture, and endless opportunities.
    </p>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
      {[
        { name: "United Kingdom", code: "gb" },
        { name: "Germany", code: "de" },
        { name: "France", code: "fr" },
        { name: "Italy", code: "it" },
        { name: "Spain", code: "es" },
        { name: "Netherlands", code: "nl" },
        { name: "Sweden", code: "se" },
        { name: "Norway", code: "no" },
        { name: "Denmark", code: "dk" },
        { name: "Finland", code: "fi" },
        { name: "Ireland", code: "ie" },
        { name: "Belgium", code: "be" },
        { name: "Switzerland", code: "ch" },
        { name: "Austria", code: "at" },
        { name: "Poland", code: "pl" },
        { name: "Czech Republic", code: "cz" },
        { name: "Portugal", code: "pt" },
        { name: "Hungary", code: "hu" },
        { name: "Greece", code: "gr" },
        { name: "Malta", code: "mt" },
        { name: "Estonia", code: "ee" },
        { name: "Latvia", code: "lv" },
        { name: "Lithuania", code: "lt" },
      ].map((country) => (
        <motion.div
          key={country.code}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center transition-transform"
        >
          <img
            src={`https://flagcdn.com/w80/${country.code}.png`}
            alt={country.name}
            className="w-14 h-10 object-cover rounded-md shadow-md border border-gray-200"
          />
          <p className="text-sm text-gray-700 mt-2">{country.name}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
)}


        {/* Intakes Section */}
<motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="bg-white/80 backdrop-blur-md rounded-2xl mt-2 "
>
  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
    Intakes
  </h2>
  <div className="flex flex-wrap gap-3">
    {country.intakes.map((intake, index) => (
      <span
        key={index}
        className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full border border-blue-200 shadow-sm"
      >
        {intake}
      </span>
    ))}
  </div>
</motion.div>

        {/* Popular Courses */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-8 mb-10 transition-all"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Popular Courses
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {country.popularCourses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-linear-to-br from-blue-100 via-white to-blue-50 border border-blue-200 rounded-xl px-5 py-4 text-center font-semibold text-gray-800 shadow-sm hover:shadow-lg transition-all"
              >
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cost, Work, Visa Info */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {[
            {
              icon: <DollarSign className="w-7 h-7 text-green-600" />,
              title: "Cost of Living",
              text: country.costOfLiving,
              bg: "bg-green-100",
            },
            {
              icon: <Briefcase className="w-7 h-7 text-purple-600" />,
              title: "Work Opportunities",
              text: country.workOpportunities,
              bg: "bg-purple-100",
            },
            {
              icon: <FileCheck className="w-7 h-7 text-orange-600" />,
              title: "Visa Information",
              text: country.visaInfo,
              bg: "bg-orange-100",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-8 transition-all"
            >
              <div className={`${card.bg} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
              <p className="text-gray-700 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Admission Requirements */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-8 transition-all"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Admission Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            {country.admissionRequirements.map((req, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 * i }}
                className="flex items-start bg-blue-50 border border-blue-100 rounded-lg p-3"
              >
                <span className="text-blue-600 mr-3 mt-1">●</span>
                {req}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
