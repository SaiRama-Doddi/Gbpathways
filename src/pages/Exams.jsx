import React from "react";
import { BookOpen, Brain, Users, Award, ClipboardCheck } from "lucide-react";

const examFeatures = [
  {
    title: "Mock Interviews",
    description:
      "Experience real interview environments with personalized feedback from experts to boost your confidence.",
    icon: Users,
  },
  {
    title: "Exam Models",
    description:
      "Access exam-specific question banks and full-length practice tests to master time management and accuracy.",
    icon: ClipboardCheck,
  },
  {
    title: "Expert Guidance",
    description:
      "Get end-to-end mentoring from professionals with proven success in international exam preparation.",
    icon: Brain,
  },
  {
    title: "Study Material",
    description:
      "Curated content and notes designed for IELTS, GRE, TOEFL, and other international exams.",
    icon: BookOpen,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your growth, understand weak areas, and get personalized improvement plans for consistent success.",
    icon: Award,
  },
];

const Exams = () => {
  return (
    <section className="bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#60a5fa] mb-3">
            Exam Preparation & Guidance
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Prepare for success with structured mentoring, mock interviews, and detailed feedback designed to bring out your best performance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {examFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-[#1e293b]/70 hover:bg-[#60a5fa] transition duration-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.03]"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#60a5fa]/10 group-hover:bg-white transition duration-300 mb-6">
                  <Icon className="w-8 h-8 text-[#60a5fa] group-hover:text-[#0f172a]" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-100">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exams;
