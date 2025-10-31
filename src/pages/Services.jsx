import React, { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Headphones,
  FileText,
  Users,
  Compass,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const mainServices = [
  {
    title: "Career Counseling",
    description:
      "Get expert guidance to select the perfect course and university that matches your academic goals and future career path.",
    icon: Compass,
  },
  {
    title: "Admission Assistance",
    description:
      "We simplify your application process with complete support — from filling out forms to preparing required documents.",
    icon: FileText,
  },
  {
    title: "Scholarship Guidance",
    description:
      "Find and apply for the best scholarships available for your profile to make studying abroad more affordable.",
    icon: GraduationCap,
  },
  {
    title: "Internship Support",
    description:
      "We connect you with global internship opportunities to gain real-world experience while studying abroad.",
    icon: Briefcase,
  },
  {
    title: "Student Mentorship",
    description:
      "Our mentors guide you through every stage — from choosing a course to settling abroad successfully.",
    icon: Users,
  },
  {
    title: "24/7 Student Support",
    description:
      "Round-the-clock assistance for students regarding admission, travel, and any concerns before or after departure.",
    icon: Headphones,
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#60a5fa]/5 to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#e0f2fe] group-hover:bg-[#60a5fa] transition duration-300 mb-6">
                    <Icon className="w-8 h-8 text-[#3b82f6] group-hover:text-white transition duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      

      
      </div>

      {/* Background Orbs */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#60a5fa]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default Services;
