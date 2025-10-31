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

  return (
    <section className="relative w-full bg-white py-20 px-6 text-[#0f172a]">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1e3a8a] tracking-tight">
          Global Education Destinations
        </h2>

        {/* Animated Gradient Line */}
        <div className="relative mx-auto w-60 h-1 mb-6 rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#60a5fa] to-[#1e3a8a] overflow-hidden">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer"></div>
        </div>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Discover the culture, lifestyle, and educational excellence of top
          study-abroad countries through these inspiring snapshots.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Overlay text on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-5">
              <p className="text-white text-lg font-semibold drop-shadow-md">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
