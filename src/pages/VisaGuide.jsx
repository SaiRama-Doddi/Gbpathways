import React from "react";
import {
  GraduationCap,
  ClipboardCheck,
  Plane,
  Building2,
  ShieldCheck,
  Briefcase,
  Globe2,
  Handshake,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const visaTypes = [
  {
    name: "Student Visa",
    description:
      "We guide students through the entire study visa process — from selecting the right type, preparing documents, and scheduling appointments to interview preparation, ensuring a smooth transition for international education.",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    countries: "USA, UK, Canada, Australia, Europe",
  },
  {
    name: "Work Visa",
    description:
      "Our team assists professionals in obtaining work visas by helping with eligibility checks, document preparation, employer sponsorship, and interview readiness for a seamless global career start.",
    icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
    countries: "USA, UK, Germany, Canada, UAE",
  },
  {
    name: "Tourist Visa",
    description:
      "We simplify the tourist visa process by helping you prepare travel documents, fill out forms correctly, and submit applications on time for a stress-free travel experience.",
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    countries: "Schengen, USA, UK, Canada",
  },
  {
    name: "H-1B Visa",
    description:
      "For skilled professionals aiming to work in the U.S., we assist with petition filing, document verification, and interview preparation to improve your visa approval chances.",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    countries: "USA",
  },
  {
    name: "B1 & B2 Visa",
    description:
      "We help book appointments, prepare documentation, and offer interview tips for B1 (business) and B2 (tourist) visas to ensure a successful application process.",
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    countries: "USA",
  },
  {
    name: "Visiting Visa",
    description:
      "We provide end-to-end support for visiting visa applications — from eligibility checks and document preparation to interview guidance for a smooth approval process.",
    icon: <Globe2 className="w-8 h-8 text-blue-600" />,
    countries: "USA, UK, Canada, Australia, Schengen",
  },
  {
    name: "UK Sponsorship Visa",
    description:
      "We assist in securing UK sponsorship visas by helping gather required documents, ensuring compliance with government standards, and preparing for interviews effectively.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    countries: "UK",
  },
  {
  name: "Job Placement Support",
  description:
    "We provide end-to-end support for graduates transitioning into the workforce, including career counseling, resume and cover letter assistance, and interview preparation.",
  icon: <Briefcase className="w-8 h-8 text-blue-600" />,
  countries: "Global",
}

];

const VisaGuide = () => {
  return (
    <section className="bg-white text-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#1e3a8a] mb-3">
            Visa Guidance & Support
          </h2>
          <div className="relative mx-auto w-40 h-1 mb-6 rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#60a5fa] to-[#1e3a8a]" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From visa selection to pre-departure orientation — we make your
            international journey seamless and stress-free.
          </p>
        </div>

        {/* Visa Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-10"
        >
         

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-center mb-4">{visa.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {visa.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {visa.description}
                  </p>
                </div>
                <p className="text-gray-700 text-sm mt-auto">
                  <span className="font-medium text-gray-800">Countries:</span>{" "}
                  {visa.countries}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisaGuide;
