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

const visaTypes = [
  {
    name: "Student Visa",
    description:
      "For students pursuing education abroad in universities, colleges, or institutions.",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    countries: "USA, UK, Canada, Australia, Europe",
  },
  {
    name: "Work Visa",
    description:
      "For professionals seeking overseas employment with verified sponsorship and job offers.",
    icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
    countries: "USA, UK, Germany, Canada, UAE",
  },
  {
    name: "Tourist Visa",
    description:
      "For short-term leisure trips or visiting friends and family abroad.",
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    countries: "Schengen, USA, UK, Canada",
  },
  {
    name: "Dependent Visa",
    description:
      "For family members joining a primary visa holder during their stay abroad.",
    icon: <Handshake className="w-8 h-8 text-blue-600" />,
    countries: "UK, USA, Canada, Australia",
  },
  {
    name: "H-1B Visa",
    description:
      "U.S. work visa for skilled professionals in specialized occupations.",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    countries: "USA",
  },
  {
    name: "UK Sponsorship Visa",
    description:
      "For professionals seeking UK employer-sponsored jobs and work authorization.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    countries: "UK",
  },
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

        {/* Visa Services Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Our Visa Services
          </h3>

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

        {/* Visa Types Section */}
        <div className="bg-white rounded-2xl  p-10 ">
          <h3 className="text-3xl font-bold text-[#1e3a8a] mb-10 text-center">
            Visa Types We Handle
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-3">{visa.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {visa.name}
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  {visa.description}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium text-gray-800">Countries:</span>{" "}
                  {visa.countries}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaGuide;
