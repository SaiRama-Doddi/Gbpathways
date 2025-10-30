import React from "react";
import { ArrowRight } from "lucide-react";

const FreeConsultation = () => {
  return (
    <section className="relative w-full bg-linear-to-r from-[#0f172a] via-[#1e3a8a] to-[#60a5fa] text-white py-10 overflow-hidden">
      {/* Background image with shade */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80"
          alt="world map"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left content */}
        <div className="text-center md:text-left max-w-xl animate-fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-snug drop-shadow-md">
            Plan Your Study Abroad Journey Today
          </h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            Get personalized guidance from our experts to make your global
            education dream a reality. It’s completely free!
          </p>
        </div>

        {/* Right side button */}
        <div className="animate-fadeIn">
          <button className="flex items-center justify-center gap-2 px-8 md:px-12 py-4 md:py-5 text-lg font-semibold bg-white text-[#0f172a] rounded-full shadow-xl hover:shadow-[#60a5fa]/50 hover:scale-105 transition-all duration-300">
            Book Free Consultation
            <span className="bg-[#60a5fa] p-2 rounded-full text-white">
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
