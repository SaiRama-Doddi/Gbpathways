import React from "react";
import {
  Globe2,
  FileCheck2,
  UserCheck,
  PlaneTakeoff,
  MessageSquare,
  ClipboardList,
} from "lucide-react";


import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Plane,
  FileCheck,
  FileText,
  MapPin,
  Wallet,
  Users,
  CheckCircle,
  BookOpen,

  Target,
  Building2,
  ClipboardCheck,
  Handshake,
  Layers,
  ShieldCheck,
  Compass,
  Star,
} from "lucide-react";

const extendedServices = [
  {
    title: "Profile Analysis",
    description:
      "Tailored guidance to align study options with your academic background, goals, and interests. We ensure all admission, visa, and scholarship requirements are met.",
    icon: <Users className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "University Shortlisting",
    description:
      "We help you evaluate universities based on academics, finances, and location to make informed application decisions.",
    icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
  },
  {
    title: "Loan Assistance",
    description:
      "Expert advice on education loans, eligibility, documentation, and repayment planning through top financial institutions.",
    icon: <Wallet className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/684/684831.png",
  },
  {
    title: "Financial Assistance (Funds)",
    description:
      "Get advice on funding sources, budgeting, and proving financial stability for visa applications.",
    icon: <Wallet className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
  },
  {
    title: "Mock Interviews",
    description:
      "Personalized mock sessions to prepare for university and visa interviews, boosting confidence and performance.",
    icon: <FileCheck className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
  },
  {
    title: "Visa Assistance",
    description:
      "End-to-end guidance on visa documentation, applications, and interview preparation for higher approval chances.",
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921490.png",
  },
  {
    title: "Travel Guidance",
    description:
      "Comprehensive support for booking flights, travel insurance, luggage requirements, and customs preparation.",
    icon: <Plane className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
  },
  {
    title: "Pre-Departure Guidance",
    description:
      "Cultural orientation, packing tips, safety measures, and readiness sessions for your academic journey abroad.",
    icon: <MapPin className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },
  {
    title: "Post-Arrival Guidance",
    description:
      "Assistance with accommodation, transportation, and essential services like banking once you arrive.",
    icon: <Globe2 className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
  },
  {
    title: "Part-Time Job Assistance",
    description:
      "Help finding part-time jobs abroad, resume building, and understanding student visa work rules.",
    icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Ongoing Support Throughout Your Journey",
    description:
      "Continuous help during and after your studies, ensuring your growth, internships, and global career opportunities.",
    icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
  },
  {
    title: "Student Visa",
    description:
      "End-to-end student visa support — from documentation to interview preparation — ensuring a smooth approval process.",
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921490.png",
  },
  {
    title: "Work Visa",
    description:
      "Assistance with job offers, visa applications, interview prep, and sponsorship requirements for working abroad.",
    icon: <ClipboardCheck className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/941/941528.png",
  },
  {
    title: "Tourist Visa",
    description:
      "Guidance on tourist visa requirements, documentation, and form submissions for smooth travel experiences.",
    icon: <Plane className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/1476/1476803.png",
  },
  {
    title: "H-1B Visa",
    description:
      "Full support for professionals applying for the U.S. H-1B visa — from eligibility to application and interview prep.",
    icon: <Building2 className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/609/609361.png",
  },
  {
    title: "B1/B2 Visa",
    description:
      "Support for U.S. business/tourist visas including slot booking, documentation, and interview preparation.",
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/1244/1244269.png",
  },
  {
    title: "Visiting Visa",
    description:
      "Visa assistance for tourism, family, or business visits, covering eligibility checks and interview scheduling.",
    icon: <Handshake className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
  {
    title: "UK Sponsorship Visa",
    description:
      "Support in securing a UK Certificate of Sponsorship, completing forms, and meeting official sponsor requirements.",
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/743/743131.png",
  },
  {
    title: "Job Placement Support",
    description:
      "Resume building, interview prep, and connecting with potential employers after course completion.",
    icon: <Target className="w-10 h-10 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
  },
];



const visaTypes = [
  { name: "Student Visa", countries: "USA, UK, Canada, Australia, Europe" },
  { name: "Work Visa", countries: "USA, UK, Canada, Germany, UAE" },
  { name: "Tourist Visa", countries: "Schengen, USA, UK, Canada" },
  { name: "Dependent Visa", countries: "UK, USA, Canada, Australia" },
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
            {/* Animated Gradient Line */}
          <div className="relative mx-auto w-40 h-1 mb-6 rounded-full bg-linear-to-r from-[#1e3a8a] via-[#60a5fa] to-[#1e3a8a] overflow-hidden">
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From profile evaluation to pre-departure, our experts assist you
            throughout the entire visa process with precision and care.
          </p>
        </div>


<section className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-12">
          Explore All Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {extendedServices.map((service, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-md border border-gray-100 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              {/* Background image always visible */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-contain p-6 z-10 relative transition-all duration-700 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-700 z-20"></div>

              {/* Content section */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 z-30 text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
     

        {/* Visa Types */}
        <div className="bg-white rounded-2xl shadow-md p-10 border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center">
            Visa Types We Handle
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {visaTypes.map((visa, index) => (
              <div
                key={index}
                className="border border-gray-200 hover:border-blue-300 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {visa.name}
                </h3>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-700">Countries:</span>{" "}
                  {visa.countries}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Rate */}
        <div className="bg-linear-to-r from-green-600 to-green-400 text-white rounded-2xl p-10 md:p-14 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-4">
              Our Visa Success Rate
            </h2>
            <p className="text-blue-50 mb-8 text-lg leading-relaxed">
              With our expert guidance and meticulous attention to detail, we’ve
              helped thousands of students secure their visas successfully.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <div>
                <div className="text-5xl font-extrabold mb-1">98%</div>
                <div className="text-blue-100 text-lg">Success Rate</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold mb-1">5000+</div>
                <div className="text-blue-100 text-lg">Visas Approved</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold mb-1">15+</div>
                <div className="text-blue-100 text-lg">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
       
      </div>
    </section>
  );
};

export default VisaGuide;
