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
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
        English Proficiency & Entrance Exams
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Prepare for globally recognized tests that open pathways to international education and career opportunities.
      </p>

      <div className="space-y-10">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {/* Left Content */}
            <div className="p-6 md:w-1/2">
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">{exam.title}</h3>
              <p className="text-gray-600 mb-4">{exam.description}</p>
              <ul className="text-gray-500 text-sm space-y-1">
                {exam.highlights.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 w-full h-60 md:h-64 overflow-hidden">
              <img
                src={exam.image}
                alt={exam.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exams;
