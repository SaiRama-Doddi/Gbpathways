import React, { useState } from "react";
import {
  Video,
  FileText,
  Compass,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  Mail,
  X,
} from "lucide-react";
import emailjs from "emailjs-com";

export default function Exams({ subSection }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const examCategories = [
    {
      id: "mock-interviews",
      title: "Mock Interviews",
      icon: Video,
      color: "blue",
      description:
        "Practice real interview scenarios with expert feedback and personalized mentoring.",
      features: [
        "One-on-one video sessions with experienced mentors",
        "University-specific interview preparation",
        "Personalized feedback and improvement suggestions",
      ],
    },
    {
      id: "model-tests",
      title: "Model Tests",
      icon: FileText,
      color: "green",
      description:
        "Comprehensive practice tests and performance tracking for standardized exams.",
      features: [
        "IELTS, TOEFL, PTE practice tests",
        "GRE, GMAT preparation materials",
        "Timed test simulations",
      ],
    },
    {
      id: "guidance",
      title: "Expert Guidance",
      icon: Compass,
      color: "purple",
      description:
        "Get personalized counseling and step-by-step guidance from education experts.",
      features: [
        "Course and university selection guidance",
        "Career path counseling",
        "Application strategy development",
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        border: "border-blue-100",
        hover: "hover:bg-blue-100",
      },
      green: {
        bg: "bg-green-50",
        icon: "text-green-600",
        border: "border-green-100",
        hover: "hover:bg-green-100",
      },
      purple: {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        border: "border-purple-100",
        hover: "hover:bg-purple-100",
      },
    };
    return colors[color] || colors.blue;
  };

  const selectedCategory = subSection
    ? examCategories.find((cat) => cat.id === subSection)
    : null;

  // Handle form submit
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Replace with EmailJS Service ID
        "your_template_id", // Replace with EmailJS Template ID
        formData,
        "your_user_id" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setShowModal(false);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

const Modal = () => (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-96 relative border border-gray-200">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
      >
        <X className="w-5 h-5" />
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <Mail className="w-5 h-5 text-blue-600 mr-2" /> Contact Us
      </h2>

      <form onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="w-full border border-gray-300 rounded-lg p-2 h-24 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);


  if (selectedCategory) {
    const Icon = selectedCategory.icon;
    const colors = getColorClasses(selectedCategory.color);

    return (
      <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white animate-fadeIn">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className={`${colors.bg} border ${colors.border} rounded-3xl p-10 md:p-14 mb-10 shadow-lg hover:shadow-2xl transition-all duration-300`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div
                className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center border-2 ${colors.border}`}
              >
                <Icon className={`w-8 h-8 ${colors.icon}`} />
              </div>
              <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                {selectedCategory.title}
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {selectedCategory.description}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 transition-all hover:shadow-2xl duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />
              What We Offer
            </h2>
            <div className="space-y-4">
              {selectedCategory.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-all duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us today to learn more about our{" "}
                <span className="font-semibold">
                  {selectedCategory.title.toLowerCase()}
                </span>{" "}
                services.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-3 px-8 rounded-lg shadow-lg font-semibold hover:opacity-90 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {showModal && <Modal />}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Exam Preparation
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master your study abroad exams with interactive sessions, expert
            guidance, and powerful analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examCategories.map((category) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);

            return (
              <div
                key={category.id}
                className={`bg-white rounded-2xl shadow-md p-8 border ${colors.border} ${colors.hover} transition-all transform hover:-translate-y-1 hover:shadow-xl cursor-pointer`}
              >
                <div
                  className={`${colors.bg} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 flex items-start"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {showModal && <Modal />}
    </div>
  );
}
