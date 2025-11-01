import React, { useState } from "react";
import {
  Users,
  GraduationCap,
  FileText,
  Briefcase,
  FileCheck,
  Plane,
  Banknote,
  BookOpen,
  Globe,
  MapPin,
  HeartHandshake,
  Layers,
  ShieldCheck,
} from "lucide-react";

const visaServices = [
  {
    title: "Profile Analysis",
    description:
      "We evaluate your academic background, goals, and interests to recommend the best study destinations and courses suited for your career path.",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Career Counseling",
    description:
      "Expert advice to align your education with long-term career goals, covering course options, job trends, and skills needed for success.",
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
  },
  {
    title: "University Shortlisting",
    description:
      "We shortlist universities based on your academic profile, finances, and preferences to help you make informed application decisions.",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
  },
  {
    title: "Scholarship Guidance",
    description:
      "We identify scholarships you qualify for and guide you through document preparation to increase your chances of securing financial aid.",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921490.png",
  },
  {
    title: "Loan Assistance",
    description:
      "Our experts help you find suitable education loans, prepare documentation, and choose repayment plans that fit your financial needs.",
    icon: <Banknote className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135833.png",
  },
  {
    title: "Financial Assistance (Funds)",
    description:
      "We offer guidance on budgeting, funding sources, and financial documentation to ensure smooth visa and admission processes.",
    icon: <Layers className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921512.png",
  },
  {
    title: "Mock Interviews",
    description:
      "Practice sessions tailored to your university or visa interviews with personalized feedback to boost confidence and clarity.",
    icon: <FileCheck className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
  },
  {
    title: "Visa Assistance",
    description:
      "Comprehensive visa guidance including documentation, form filling, and interview preparation for higher approval success.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921490.png",
  },
  {
    title: "Travel Guidance",
    description:
      "We help plan your travel with support for flight booking, insurance, luggage prep, and destination-specific travel tips.",
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },
  {
    title: "Pre-Departure Guidance",
    description:
      "We prepare you for life abroad with sessions on packing, cultural tips, safety advice, and essential preparations.",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135794.png",
  },
  {
    title: "Post-Arrival Guidance",
    description:
      "Get assistance settling abroad with help in accommodation, banking, and local transportation setup for a smooth start.",
    icon: <MapPin className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
  },
  {
    title: "Part-Time Job Assistance",
    description:
      "We guide you in finding part-time jobs abroad, preparing resumes, and understanding work regulations for students.",
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135722.png",
  },
  {
    title: "Ongoing Support",
    description:
      "Continuous guidance throughout your study abroad journey — from academic help to post-study career assistance.",
    icon: <HeartHandshake className="w-8 h-8 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135731.png",
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-white text-gray-900 py-17 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl pt-4 font-bold text-[#0f172a] mb-4">
            Our Premium Services
          </h2>

          {/* Animated Gradient Line */}
          <div className="relative mx-auto w-40 h-1 mb-6 rounded-full bg-linear-to-r from-[#1e3a8a] via-[#60a5fa] to-[#1e3a8a] overflow-hidden">
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer"></div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide complete end-to-end support for every step of your
            overseas education journey — from planning to landing and beyond.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visaServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 object-contain mb-4"
              />
           
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

      {/* Background Orbs */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#60a5fa]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default Services;
