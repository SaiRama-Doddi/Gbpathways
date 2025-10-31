import React from "react";
import { BookOpen, Globe, GraduationCap, PenTool, FileCheck } from "lucide-react";

const exams = [
  {
    title: "IELTS (International English Language Testing System)",
    description:
      "IELTS is one of the most popular English proficiency tests worldwide. It assesses your reading, writing, listening, and speaking skills for study, work, and migration.",
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    highlights: [
      "Score range: 0–9 bands",
      "Test types: Academic & General",
      "Duration: 2 hrs 45 mins",
    ],
    image:
      "https://cdn-icons-png.flaticon.com/512/4443/4443019.png",
  },
  {
    title: "TOEFL (Test of English as a Foreign Language)",
    description:
      "TOEFL measures your ability to use and understand English at the university level. It’s widely accepted across U.S., Canada, and many global institutions.",
    icon: <BookOpen className="w-10 h-10 text-green-600" />,
    highlights: [
      "Score range: 0–120",
      "Accepted by 160+ countries",
      "Duration: ~3 hours",
    ],
    image:
      "https://cdn-icons-png.flaticon.com/512/4370/4370141.png",
  },
  {
    title: "GRE (Graduate Record Examination)",
    description:
      "GRE evaluates analytical writing, quantitative reasoning, and verbal skills — a key requirement for most graduate programs worldwide.",
    icon: <GraduationCap className="w-10 h-10 text-purple-600" />,
    highlights: [
      "Score range: 260–340",
      "Sections: Verbal, Quant, Writing",
      "Duration: ~3 hrs 45 mins",
    ],
    image:
      "https://cdn-icons-png.flaticon.com/512/3813/3813036.png",
  },
  {
    title: "PTE (Pearson Test of English)",
    description:
      "PTE is a fully computer-based English test that provides fast and accurate results using AI technology. Widely accepted for study and migration purposes.",
    icon: <PenTool className="w-10 h-10 text-orange-500" />,
    highlights: [
      "Score range: 10–90",
      "Computer-based and unbiased scoring",
      "Duration: ~2 hours",
    ],
    image:
      "https://cdn-icons-png.flaticon.com/512/5141/5141534.png",
  },
  {
    title: "Duolingo English Test",
    description:
      "The Duolingo English Test is a convenient, affordable, and fast alternative that evaluates all English skills — done completely online from home.",
    icon: <FileCheck className="w-10 h-10 text-pink-500" />,
    highlights: [
      "Score range: 10–160",
      "Takes less than 1 hour",
      "Results within 48 hours",
    ],
    image:
      "https://cdn-icons-png.flaticon.com/512/9958/9958184.png",
  },
];

const Exams = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            English Proficiency & Entrance Exams
          </h2>
          <div className="relative mx-auto w-40 h-1 mb-6 rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 overflow-hidden">
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shimmer"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore the top exams required for studying abroad. Prepare effectively with our expert guidance for each test.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {exams.map((exam, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300`}
            >
              {/* Left Section */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  {exam.icon}
                  <h3 className="text-2xl font-semibold text-gray-800 ml-3">{exam.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">{exam.description}</p>
                <ul className="text-gray-500 text-sm space-y-1">
                  {exam.highlights.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

              {/* Right Section (Image) */}
              <div className="md:w-1/2 bg-blue-50 flex items-center justify-center p-8">
                <img
                  src={exam.image}
                  alt={exam.title}
                  className="w-64 h-64 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exams;
