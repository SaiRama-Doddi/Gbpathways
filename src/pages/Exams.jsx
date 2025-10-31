import React from "react";
import { BookOpen, Globe, GraduationCap, PenTool, FileCheck } from "lucide-react";

const exams = [
  {
    title: "IELTS",
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    description:
      "The IELTS test measures English proficiency for study, migration, or work. Accepted by 11,000+ institutions worldwide.",
    highlights: ["Score range: 0–9 bands", "Test types: Academic & General", "Duration: 2 hrs 45 mins"],
  },
  {
    title: "TOEFL",
    icon: <BookOpen className="w-10 h-10 text-green-600" />,
    description:
      "TOEFL assesses academic English skills for university admission, focusing on reading, listening, speaking, and writing.",
    highlights: ["Score range: 0–120", "Accepted by 160+ countries", "Duration: ~3 hours"],
  },
  {
    title: "GRE",
    icon: <GraduationCap className="w-10 h-10 text-purple-600" />,
    description:
      "GRE evaluates analytical writing, quantitative, and verbal reasoning — essential for graduate and business schools.",
    highlights: ["Score range: 260–340", "Sections: Verbal, Quant, Writing", "Duration: ~3 hrs 45 mins"],
  },
  {
    title: "PTE",
    icon: <PenTool className="w-10 h-10 text-orange-500" />,
    description:
      "The PTE Academic test uses AI scoring for accurate results, widely accepted for study and migration worldwide.",
    highlights: ["Score range: 10–90", "Fully computer-based test", "Duration: 2 hrs"],
  },
  {
    title: "Duolingo",
    icon: <FileCheck className="w-10 h-10 text-pink-500" />,
    description:
      "A quick, affordable online English test that evaluates reading, writing, listening, and speaking — anytime, anywhere.",
    highlights: ["Score range: 10–160", "Takes less than 1 hour", "Results in 48 hours"],
  },
];

const Exams = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        English Proficiency & Entrance Exams
      </h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        Prepare for globally recognized tests that open pathways to international education and career opportunities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-200"
          >
            <div className="flex justify-center mb-4">{exam.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{exam.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{exam.description}</p>
            <ul className="text-sm text-gray-500 space-y-1">
              {exam.highlights.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exams;
