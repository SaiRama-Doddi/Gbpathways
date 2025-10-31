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
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-all"
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
