import React from "react";
import {
  Users,
  GraduationCap,
  Wallet,
  FileCheck,
  FileText,
  Plane,
  MapPin,
  Globe2,
  Briefcase,
  CheckCircle,
  ClipboardCheck,
  Building2,
  BookOpen,
  Handshake,
  ShieldCheck,
  Target,
} from "lucide-react";

const extendedServices = [
  {
    title: "Profile Analysis",
    description:
      "Tailored guidance to align study options with your academic background, goals, and interests. We ensure all admission, visa, and scholarship requirements are met.",
    icon: <Users className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "University Shortlisting",
    description:
      "We help you evaluate universities based on academics, finances, and location to make informed application decisions.",
    icon: <GraduationCap className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
  },
  {
    title: "Loan Assistance",
    description:
      "Expert advice on education loans, eligibility, documentation, and repayment planning through top financial institutions.",
    icon: <Wallet className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/684/684831.png",
  },
  {
    title: "Financial Assistance (Funds)",
    description:
      "Get advice on funding sources, budgeting, and proving financial stability for visa applications.",
    icon: <Wallet className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
  },
  {
    title: "Mock Interviews",
    description:
      "Personalized mock sessions to prepare for university and visa interviews, boosting confidence and performance.",
    icon: <FileCheck className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
  },
  {
    title: "Visa Assistance",
    description:
      "End-to-end guidance on visa documentation, applications, and interview preparation for higher approval chances.",
    icon: <FileText className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/921/921490.png",
  },
  {
    title: "Travel Guidance",
    description:
      "Comprehensive support for booking flights, travel insurance, luggage requirements, and customs preparation.",
    icon: <Plane className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
  },
  {
    title: "Pre-Departure Guidance",
    description:
      "Cultural orientation, packing tips, safety measures, and readiness sessions for your academic journey abroad.",
    icon: <MapPin className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },
  {
    title: "Post-Arrival Guidance",
    description:
      "Assistance with accommodation, transportation, and essential services like banking once you arrive.",
    icon: <Globe2 className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
  },
  {
    title: "Part-Time Job Assistance",
    description:
      "Help finding part-time jobs abroad, resume building, and understanding student visa work rules.",
    icon: <Briefcase className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Ongoing Support Throughout Your Journey",
    description:
      "Continuous help during and after your studies, ensuring your growth, internships, and global career opportunities.",
    icon: <CheckCircle className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
  },
  {
    title: "Work Visa",
    description:
      "Assistance with job offers, visa applications, interview prep, and sponsorship requirements for working abroad.",
    icon: <ClipboardCheck className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/941/941528.png",
  },
  {
    title: "Tourist Visa",
    description:
      "Guidance on tourist visa requirements, documentation, and form submissions for smooth travel experiences.",
    icon: <Plane className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/1476/1476803.png",
  },
  {
    title: "H-1B Visa",
    description:
      "Full support for professionals applying for the U.S. H-1B visa — from eligibility to application and interview prep.",
    icon: <Building2 className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/609/609361.png",
  },
  {
    title: "B1/B2 Visa",
    description:
      "Support for U.S. business/tourist visas including slot booking, documentation, and interview preparation.",
    icon: <BookOpen className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/1244/1244269.png",
  },
  {
    title: "Visiting Visa",
    description:
      "Visa assistance for tourism, family, or business visits, covering eligibility checks and interview scheduling.",
    icon: <Handshake className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
  {
    title: "UK Sponsorship Visa",
    description:
      "Support in securing a UK Certificate of Sponsorship, completing forms, and meeting official sponsor requirements.",
    icon: <ShieldCheck className="w-9 h-9 text-blue-600" />,
    image: "https://cdn-icons-png.flaticon.com/512/743/743131.png",
  },
  {
    title: "Job Placement Support",
    description:
      "Resume building, interview prep, and connecting with potential employers after course completion.",
    icon: <Target className="w-9 h-9 text-blue-600" />,
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

          <div className="relative mx-auto w-40 h-1 mb-6 rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#60a5fa] to-[#1e3a8a] overflow-hidden">
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-pulse"></div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From profile evaluation to pre-departure, our experts assist you
            throughout the entire visa process with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="bg-white py-10 px-4 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Explore All Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {extendedServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 left-3 bg-white/80 p-2 rounded-full backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

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

        {/* Success Rate Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 text-white rounded-2xl p-10 md:p-14 shadow-xl text-center">
          <h2 className="text-3xl font-extrabold mb-4">Our Visa Success Rate</h2>
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
    </section>
  );
};

export default VisaGuide;
