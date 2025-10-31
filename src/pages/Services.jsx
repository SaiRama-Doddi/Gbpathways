import React, { useState } from "react";
import {
  Users,
  GraduationCap,
  FileText,
  Briefcase,
  FileCheck,
  Plane,
} from "lucide-react";

const visaServices = [
  {
    title: "Profile Analysis",
    description:
      "Personalized guidance aligning your background, goals, and academic interests with the best study destinations.",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "University Shortlisting",
    description:
      "We evaluate universities based on academics, finances, and preferences to shortlist your ideal institutions.",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
  },
  {
    title: "Visa Assistance",
    description:
      "End-to-end support with documentation, applications, and interviews to maximize visa success chances.",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921490.png",
  },
  {
    title: "Mock Interviews",
    description:
      "Simulated university and visa interviews to help you gain confidence and perform your best.",
    icon: <FileCheck className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
  },
  {
    title: "Travel & Pre-Departure",
    description:
      "Support with booking flights, insurance, accommodation, and preparation for a smooth transition abroad.",
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },
  {
    title: "Post-Arrival & Job Support",
    description:
      "Guidance for part-time work, accommodation, and continued career growth after your arrival.",
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-white text-gray-900 py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Our Premium Services
          </h2>

          {/* Animated Gradient Line */}
          <div className="relative mx-auto w-40 h-1 mb-6 rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#60a5fa] to-[#1e3a8a] overflow-hidden">
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer"></div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide complete guidance and personalized support to make your
            overseas education dream come true — every step of the way.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-20">
       

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-20 object-contain mb-4"
                />
                <div className="mb-2">{service.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Orbs */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#60a5fa]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default Services;
