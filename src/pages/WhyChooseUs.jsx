import React from "react";
import { Users, Award, Globe2, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 transition-colors duration-300" />,
      title: "End-to-End Mentorship",
      desc: "Personalized guidance from application to arrival — our mentors walk every step with you.",
    },
    {
      icon: <Award className="w-8 h-8 transition-colors duration-300" />,
      title: "Student Success Stories",
      desc: "Thousands of students successfully placed in top universities worldwide.",
    },
    {
      icon: <Globe2 className="w-8 h-8 transition-colors duration-300" />,
      title: "Global Reach",
      desc: "Partnered with top institutions in the UK, USA, Canada, Australia, and more.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 transition-colors duration-300" />,
      title: "Trusted Guidance",
      desc: "Transparent process, reliable advice, and a commitment to your goals.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-linear-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-snug">
            Why Choose <span className="text-[#60a5fa]">Gbpathways?</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe in transforming dreams into reality through global
            education. Our expert team ensures that every student gets the
            right direction, mentorship, and support for a successful academic journey.
          </p>
          <div className="relative w-32 h-1 bg-linear-to-r from-[#1e3a8a] to-[#60a5fa] rounded-full animate-gradient-move">

  <div className="absolute inset-0 before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer"></div>


          </div>
        </div>

        {/* Right Features Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#eff6ff] mb-4 transition-all duration-300 group-hover:bg-[#0f172a]">
                {/* Icon */}
                <div className="text-[#60a5fa] group-hover:text-white">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#1e3a8a] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
