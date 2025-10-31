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
    { number: "5000+", label: "Students Placed" },
    { number: "50+", label: "Partner Universities" },
    { number: "15+", label: "Countries" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80"
          alt="Students Abroad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl px-6 text-center animate-fadeUp">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Your Journey to{" "}
            <span className="text-[#60a5fa]">Global Education</span> Begins Here
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
      <section className="py-20 bg-linear-to-r from-[#0f172a] via-[#1e3a8a] to-[#60a5fa] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get personalized guidance from our expert counselors
          </p>
          <button
            onClick={() => onNavigate && onNavigate("contact")}
            className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
