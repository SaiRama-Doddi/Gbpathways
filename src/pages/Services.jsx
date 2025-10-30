import React from "react";
import {
  GraduationCap,
  Briefcase,
  Headphones,
  FileText,
  Users,
  Compass,
} from "lucide-react";

const services = [
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
  return (
    <section className="bg-white text-gray-900 py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-3">
            Our Premium Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide complete guidance and personalized support to make your
            overseas education dream come true — every step of the way.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-[#3b82f6] to-[#60a5fa] opacity-0 group-hover:opacity-10 transition duration-300"></div>

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

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-[#3b82f6] hover:bg-[#1e40af] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition duration-300">
            Explore All Services
          </button>
        </div>
      </div>

      {/* Background subtle animated shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#60a5fa]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default Services;
