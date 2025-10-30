import React from "react";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
          src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80"
        alt="Students Abroad"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center animate-fadeUp">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Your Journey to <span className="text-[#60a5fa]">Global Education</span> Begins Here
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
          Explore top universities across the world with expert guidance, end-to-end
          support, and complete transparency. Let’s make your dream of studying abroad
          a reality.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-3 bg-[#60a5fa] hover:bg-[#1e3a8a] text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-[#60a5fa]/50 transition-all duration-300">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Floating Accent Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#60a5fa]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#1e3a8a]/20 rounded-full blur-2xl animate-pulse"></div>
    </section>
  );
};

export default HomePage;
