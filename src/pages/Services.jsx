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

// Long list of detailed services shown on "Explore All"
const extendedServices = [
  {
    title: "Profile Analysis",
    description:
      "Tailored guidance to align study options with your academic background, goals, and interests. We ensure all admission, visa, and scholarship requirements are met.",
  },
  {
    title: "University Shortlisting",
    description:
      "We help you evaluate universities based on academics, finances, and location to make informed application decisions.",
  },
  {
    title: "Loan Assistance",
    description:
      "Expert advice on education loans, eligibility, documentation, and repayment planning through top financial institutions.",
  },
  {
    title: "Financial Assistance (Funds)",
    description:
      "Get advice on funding sources, budgeting, and proving financial stability for visa applications.",
  },
  {
    title: "Mock Interviews",
    description:
      "Personalized mock sessions to prepare for university and visa interviews, boosting confidence and performance.",
  },
  {
    title: "Visa Assistance",
    description:
      "End-to-end guidance on visa documentation, applications, and interview preparation for higher approval chances.",
  },
  {
    title: "Travel Guidance",
    description:
      "Comprehensive support for booking flights, travel insurance, luggage requirements, and customs preparation.",
  },
  {
    title: "Pre-Departure Guidance",
    description:
      "Cultural orientation, packing tips, safety measures, and readiness sessions for your academic journey abroad.",
  },
  {
    title: "Post-Arrival Guidance",
    description:
      "Assistance with accommodation, transportation, and essential services like banking once you arrive.",
  },
  {
    title: "Part-Time Job Assistance",
    description:
      "Help finding part-time jobs abroad, resume building, and understanding student visa work rules.",
  },
  {
    title: "Ongoing Support Throughout Your Journey",
    description:
      "Continuous help during and after your studies, ensuring your growth, internships, and global career opportunities.",
  },
  {
    title: "Student Visa",
    description:
      "End-to-end student visa support — from documentation to interview preparation — ensuring a smooth approval process.",
  },
  {
    title: "Work Visa",
    description:
      "Assistance with job offers, visa applications, interview prep, and sponsorship requirements for working abroad.",
  },
  {
    title: "Tourist Visa",
    description:
      "Guidance on tourist visa requirements, documentation, and form submissions for smooth travel experiences.",
  },
  {
    title: "H-1B Visa",
    description:
      "Full support for professionals applying for the U.S. H-1B visa — from eligibility to application and interview prep.",
  },
  {
    title: "B1/B2 Visa",
    description:
      "Support for U.S. business/tourist visas including slot booking, documentation, and interview preparation.",
  },
  {
    title: "Visiting Visa",
    description:
      "Visa assistance for tourism, family, or business visits, covering eligibility checks and interview scheduling.",
  },
  {
    title: "UK Sponsorship Visa",
    description:
      "Support in securing a UK Certificate of Sponsorship, completing forms, and meeting official sponsor requirements.",
  },
  {
    title: "Job Placement Support",
    description:
      "Resume building, interview prep, and connecting with potential employers after course completion.",
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

        {/* Explore All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center mx-auto bg-[#1e3a8a] hover:bg-[#2563eb] text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition-all duration-300"
          >
            {showAll ? (
              <>
                Hide All Services <ChevronUp className="ml-2" />
              </>
            ) : (
              <>
                Explore All Services <ChevronDown className="ml-2" />
              </>
            )}
          </button>
        </div>

        {/* Extended Services (Collapsible Section) */}
        {showAll && (
          <div className="mt-14 space-y-6 transition-all duration-700 ease-in-out">
            {extendedServices.map((item, i) => (
              <div
                key={i}
                className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 bg-gray-50"
              >
                <h4 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Background Orbs */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#60a5fa]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default Services;
