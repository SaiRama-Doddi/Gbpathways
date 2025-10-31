import React from "react";
import image1 from "../assets/images/e-1.jpg";
import image2 from "../assets/images/e-2.jpg";
import image3 from "../assets/images/e-3.jpg";
import image4 from "../assets/images/e-4.jpg";
import image5 from "../assets/images/e-5.jpg";

const exams = [
  {
    title: "IELTS",
    image: image1,
    description:
      "The IELTS test measures English proficiency for study, migration, or work. Accepted by 11,000+ institutions worldwide.",
    highlights: ["Score range: 0–9 bands", "Test types: Academic & General", "Duration: 2 hrs 45 mins"],
  },
  {
    title: "TOEFL",
    image: image2,
    description:
      "TOEFL assesses academic English skills for university admission, focusing on reading, listening, speaking, and writing.",
    highlights: ["Score range: 0–120", "Accepted by 160+ countries", "Duration: ~3 hours"],
  },
  {
    title: "GRE",
    image: image3,
    description:
      "GRE evaluates analytical writing, quantitative, and verbal reasoning — essential for graduate and business schools.",
    highlights: ["Score range: 260–340", "Sections: Verbal, Quant, Writing", "Duration: ~3 hrs 45 mins"],
  },
  {
    title: "PTE",
    image: image4,
    description:
      "The PTE Academic test uses AI scoring for accurate results, widely accepted for study and migration worldwide.",
    highlights: ["Score range: 10–90", "Fully computer-based test", "Duration: 2 hrs"],
  },
  {
    title: "Duolingo",
    image: image5,
    description:
      "A quick, affordable online English test that evaluates reading, writing, listening, and speaking — anytime, anywhere.",
    highlights: ["Score range: 10–160", "Takes less than 1 hour", "Results in 48 hours"],
  },
];

const Exams = () => {
  return (
    <section className="bg-linear-to-b from-white to-blue-50 py-16 px-6 md:px-20">
      <h2 className="mt-16 text-3xl md:text-4xl font-bold text-center mb-6 text-[#1e3a8a]">
        English Proficiency & Entrance Exams
      </h2>
      
        <div className="relative mx-auto w-60 h-1 mb-6 rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#60a5fa] to-[#1e3a8a] overflow-hidden">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer"></div>
        </div>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Prepare for globally recognized tests that open pathways to international education and career opportunities.
      </p>

      {/* Grid Layout – 2 Cards per Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border-l-4 border-[#1e3a8a] transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold text-[#3d91f8] mb-2">{exam.title}</h3>
            <p className="text-gray-600 mb-3">{exam.description}</p>
            <ul className="text-gray-500 text-sm space-y-1">
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
