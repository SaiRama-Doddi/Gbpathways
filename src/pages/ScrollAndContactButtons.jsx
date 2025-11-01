import React, { useEffect, useState } from "react";
import { ArrowUp, Mail, MessageCircle } from "lucide-react";

const ScrollAndContactButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp pre-filled message
  const whatsappMessage = encodeURIComponent(
    "Hello Sai Rama! 👋\nI'm interested in learning more about your study abroad services. Could you please guide me?"
  );

  // Mail pre-filled subject & body
  const mailSubject = encodeURIComponent("Inquiry about Study Abroad Services");
  const mailBody = encodeURIComponent(
    "Hi Sai Rama,\n\nI came across your services and would love to know more about how you can help me with my study abroad plans.\n\nBest regards,\n[Your Name]"
  );

  return (
    <div className="fixed right-5 bottom-6 flex flex-col items-center gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/917995557371?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Email Button */}
      <a
        href={`mailto:info@eduglobal.com?subject=${mailSubject}&body=${mailBody}`}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
        title="Send us an Email"
      >
        <Mail size={24} />
      </a>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="bg-gray-800 hover:bg-[#2563eb] text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 animate-fadeIn"
          title="Back to Top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollAndContactButtons;
