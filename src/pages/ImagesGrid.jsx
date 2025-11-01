import React from "react";
import {
  GraduationCap,
  Globe2,
  Briefcase,
  FlaskConical,
  University,
  Users,
  Sparkles,
  GlobeLock,
  Rocket,
} from "lucide-react";
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
        Explore Global Education
        </h2>

        <div className="relative mx-auto w-60 h-1 mb-6 rounded-full bg-linear-to-r from-[#1e3a8a] via-[#60a5fa] to-[#1e3a8a] overflow-hidden">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer"></div>
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
    Why Study Overseas
  </h3>
  <ul className="space-y-3 text-gray-700">
    <li className="flex items-center gap-2">
      <GraduationCap className="w-6 h-6 text-yellow-500" />
      <span>High-quality, globally recognized education.</span>
    </li>
    <li className="flex items-center gap-2">
      <Globe2 className="w-6 h-6 text-yellow-500" />
      <span>Diverse and inclusive cultural experience.</span>
    </li>
    <li className="flex items-center gap-2">
      <Briefcase className="w-6 h-6 text-yellow-500" />
      <span>Strong career and internship opportunities.</span>
    </li>
    <li className="flex items-center gap-2">
      <FlaskConical className="w-6 h-6 text-yellow-500" />
      <span>Leading research and innovation environment.</span>
    </li>
    <li className="flex items-center gap-2">
      <University className="w-6 h-6 text-yellow-500" />
      <span>Home to some of the world’s best universities.</span>
    </li>
    <li className="flex items-center gap-2">
      <Users className="w-6 h-6 text-yellow-500" />
      <span>Expand your global network and lifelong friendships.</span>
    </li>
    <li className="flex items-center gap-2">
      <Sparkles className="w-6 h-6 text-yellow-500" />
      <span>Boost personal growth, independence, and confidence.</span>
    </li>
    <li className="flex items-center gap-2">
      <GlobeLock className="w-6 h-6 text-yellow-500" />
      <span>Access post-study work and migration opportunities.</span>
    </li>
    <li className="flex items-center gap-2">
      <Rocket className="w-6 h-6 text-yellow-500" />
      <span>Accelerate your global career with an international degree.</span>
    </li>
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
  

      {/* Popular Courses */}
    

      {/* Scholarships */}
  

      {/* Support Section */}
 
    </section>
  );
};

export default ImageGrid;
