import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
           <div
  className="text-4xl font-bold tracking-wide flex items-center select-none"
  style={{ fontFamily: "Dancing Script, cursive" }}
>
  <span className="text-[#60a5fa] drop-shadow-md">Gb</span>
  <span className="text-white ml-1">Pathways</span>
</div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering students to pursue global education through trusted
            guidance, expert visa assistance, and personalized support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Countries", "Exams", "Services"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-[#60a5fa] transition duration-300 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Student Visa Assistance",
              "Career Counseling",
              "University Selection",
              "Application Guidance",
            ].map((service) => (
              <li
                key={service}
                className="hover:text-[#60a5fa] transition duration-300 cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

    {/* Contact */}
<div>
  <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
  <ul className="space-y-3 text-sm">
    {/* Addresses */}
    {["Brighton, UK", "Kandukur, AP", "Guntur, AP"].map((location) => (
      <li key={location} className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-[#60a5fa]" />
        <span>{location}</span>
      </li>
    ))}

    {/* Phone */}
    <li className="flex items-center gap-2">
      <Phone className="w-4 h-4 text-[#60a5fa]" />
      <span>+91 7995557371</span>
    </li>

    {/* Email */}
    <li className="flex items-center gap-2">
      <Mail className="w-4 h-4 text-[#60a5fa]" />
      <span>info@gbpathways.com</span>
    </li>
  </ul>

  {/* Social Icons */}
<div className="flex gap-4 mt-5">
  {[
    { Icon: Facebook, link: "https://www.facebook.com/people/GB-Pathways/pfbid02gaP15mUmTcwjPeNRqKWcoo15A13AsapZoTXWJHHqoAPXDpg2QXALzBaBPjW84Loel/" },
    { Icon: Twitter, link: "https://x.com/GbPathways" },
    { Icon: Instagram, link: "https://www.instagram.com/gb_pathways/?next=%2F" },
    { Icon: Linkedin, link: "https://www.linkedin.com/company/yuva-overseas/" },
  ].map(({ Icon, link }, index) => (
    <a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-[#1e293b] hover:bg-[#60a5fa] transition duration-300 shadow-md hover:shadow-[#60a5fa]/50"
    >
      <Icon className="w-5 h-5 text-gray-200 hover:text-white transition" />
    </a>
  ))}
</div>

</div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 mb-4 opacity-50"></div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} <span className="text-[#60a5fa]">GbPathways</span>. 
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
