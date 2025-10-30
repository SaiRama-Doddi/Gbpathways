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

const VisaGuide = () => {
  return (
    <section className="bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#60a5fa] mb-3">
            Visa Guidance & Support
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            From profile evaluation to pre-departure, our experts assist you
            throughout the entire visa process with complete clarity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group bg-[#1e293b]/70 hover:bg-[#60a5fa] transition duration-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.03]"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#60a5fa]/10 group-hover:bg-white transition duration-300 mb-6">
                  <Icon className="w-8 h-8 text-[#60a5fa] group-hover:text-[#0f172a]" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-100">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#60a5fa] hover:bg-[#1e40af] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition duration-300">
            Get Free Visa Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisaGuide;
