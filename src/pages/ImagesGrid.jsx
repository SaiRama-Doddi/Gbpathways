import React from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";

const ImageGrid = () => {
  const images = [
    { src: img1, alt: "Students in UK Campus" },
    { src: img2, alt: "London Bridge Skyline" },
    { src: img3, alt: "Student Group Discussion" },
    { src: img4, alt: "University Library" },
    { src: img5, alt: "Graduation Celebration" },
    { src: img6, alt: "Students Exploring City" },
  ];

  const universities = [
    "University of Oxford",
    "University of Cambridge",
    "Imperial College London",
    "London School of Economics (LSE)",
    "University College London (UCL)",
  ];

  const courses = [
    "Business Administration (MBA)",
    "Engineering (Electrical, Mechanical, Civil, Computer)",
    "Computer Science & IT",
    "Health Sciences (Medicine, Nursing, Public Health)",
    "Arts & Humanities (Literature, History, Philosophy)",
  ];

  const scholarships = [
    { name: "Chevening Scholarship", grant: "£18,000" },
    { name: "Commonwealth Scholarship", grant: "£1,000 - £10,000" },
    { name: "Oxford University Scholarship", grant: "£10,000 - £15,000" },
    { name: "Bristol International Scholarship", grant: "£5,000" },
  ];

  return (
    <section className="relative w-full bg-white text-[#0f172a]">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-4 tracking-tight">
          Study in the United Kingdom 🇬🇧
        </h2>

        <div className="relative mx-auto w-60 h-1 mb-6 rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#60a5fa] to-[#1e3a8a] overflow-hidden">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer"></div>
        </div>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore the world-class education, cultural diversity, and global
          opportunities that make the UK one of the top destinations for
          international students.
        </p>
      </div>

      {/* Why Study in the UK */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-16 items-center">
        <div>
          <h3 className="text-3xl font-bold text-[#1e3a8a] mb-4">
            Why Study in the UK
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>🎓 High-quality, globally recognized education.</li>
            <li>🌎 Diverse and inclusive cultural experience.</li>
            <li>💼 Strong career and internship opportunities.</li>
            <li>🔬 Leading research and innovation environment.</li>
            <li>🏛️ Home to some of the world’s best universities.</li>
          </ul>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-start p-3">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Universities */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#1e3a8a] mb-6">
            Top Universities in the UK (2025)
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {universities.map((uni, i) => (
              <div
                key={i}
                className="p-5 rounded-xl shadow-sm bg-white hover:shadow-lg transition duration-300"
              >
                <p className="font-semibold text-lg text-gray-800">{uni}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Courses */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-[#1e3a8a] mb-4 text-center">
          Popular Courses for International Students
        </h3>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-center">
          {courses.map((course, i) => (
            <li
              key={i}
              className="p-4 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition"
            >
              {course}
            </li>
          ))}
        </ul>
      </div>

      {/* Scholarships */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center">
            Scholarships in the UK
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {scholarships.map((s, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition"
              >
                <p className="font-semibold text-gray-800">{s.name}</p>
                <p className="text-blue-700 font-medium mt-2">{s.grant}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h3 className="text-3xl font-bold text-[#1e3a8a] mb-6">
          Our Support – Yuva Overseas
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
          From choosing the right university to settling in the UK, Yuva
          Overseas provides continuous guidance every step of the way.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "🎯 Post-arrival assistance",
            "🏫 University support",
            "📄 Visa & work permit help",
            "💼 Career and internship guidance",
            "🤝 Alumni networking",
            "📞 24/7 ongoing consultation",
          ].map((support, i) => (
            <div
              key={i}
              className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition border border-gray-100"
            >
              {support}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
