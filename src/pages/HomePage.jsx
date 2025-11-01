import React from "react";
import {
  Globe,
  BookOpen,
  FileText,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import { Target,  UserCheck } from "lucide-react";

const HomePage = ({ onNavigate }) => {
  const features = [
    {
      icon: Globe,
      title: "Global Universities",
      description:
        "Access to top-ranked universities across UK, USA, Canada, Europe, and Ireland",
    },
    {
      icon: BookOpen,
      title: "Expert Guidance",
      description:
        "Personalized counseling from experienced education consultants",
    },
    {
      icon: FileText,
      title: "Visa Assistance",
      description: "Complete support for visa applications and documentation",
    },
    {
      icon: Users,
      title: "Mock Interviews",
      description: "Practice with real interview scenarios and expert feedback",
    },
    {
      icon: Award,
      title: "Scholarship Support",
      description: "Guidance on scholarships and financial aid opportunities",
    },
    {
      icon: TrendingUp,
      title: "Career Support",
      description: "Post-study work guidance and career counseling",
    },
  ];

  const stats = [
    { number: "700+", label: "Students Placed" },
    { number: "50+", label: "Partner Universities" },
    { number: "15+", label: "Countries" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://abroadstudy.in/wp-content/uploads/2024/11/desktop-wallpaper-study-abroad-abroad.jpg"
          alt="Students Abroad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl px-6 text-center animate-fadeUp">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Your Journey to{" "}
            <span className="text-[#1e3a8a]">Global Education</span> Begins Here
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
            Explore top universities across the world with expert guidance,
            end-to-end support, and complete transparency. Let’s make your dream
            of studying abroad a reality.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => onNavigate && onNavigate("services")}
              className="flex items-center gap-3 bg-[#60a5fa] hover:bg-[#1e3a8a] text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-[#60a5fa]/50 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Floating Blur Lights */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#60a5fa]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#1e3a8a]/20 rounded-full blur-2xl animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* CTA Section */}
   

<section className="py-20 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#60a5fa] text-white text-center">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-6">
      Ready to Start Your Journey?
    </h2>
    <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-12">
      Discover the path that fits your dreams — explore, plan, and achieve your study or career goals with expert guidance.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-white/20 transition-all duration-300">
        <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Personalized Planning</h3>
        <p className="text-blue-100">
          Tailor-made guidance aligning your goals and skills with the most suitable study or career path.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-white/20 transition-all duration-300">
        <Globe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Global Opportunities</h3>
        <p className="text-blue-100">
          Access world-class universities and destinations that open new horizons for your future.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-white/20 transition-all duration-300">
        <UserCheck className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
        <p className="text-blue-100">
          Work with experienced mentors who guide you every step toward achieving your dream goal.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;
