import React from "react";
import {
  Globe2,
  FileCheck2,
  UserCheck,
  PlaneTakeoff,
  MessageSquare,
  ClipboardList,
} from "lucide-react";

const visaSteps = [
  {
    title: "Visa Consultation",
    description:
      "Get personalized counseling to select the right visa type and destination for your career goals.",
    icon: MessageSquare,
  },
  {
    title: "Profile Evaluation",
    description:
      "We review your academics, finances, and documents to enhance your visa approval chances.",
    icon: ClipboardList,
  },
  {
    title: "Document Preparation",
    description:
      "Detailed document checklist and professional verification ensure embassy-compliant applications.",
    icon: FileCheck2,
  },
  {
    title: "Visa Application Support",
    description:
      "Step-by-step help with online applications, DS-160 forms, and interview scheduling.",
    icon: UserCheck,
  },
  {
    title: "Mock Visa Interviews",
    description:
      "Practice real embassy scenarios with our experts and get feedback to improve confidence.",
    icon: Globe2,
  },
  {
    title: "Pre-Departure Guidance",
    description:
      "Assistance with travel planning, accommodation, and cultural orientation before you fly.",
    icon: PlaneTakeoff,
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

        {/* Visa Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visaSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 hover:border-blue-300 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#e0f2fe] group-hover:bg-[#60a5fa] transition duration-300 mb-6">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition duration-300"  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
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
