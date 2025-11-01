




import ireland1 from "../assets/images/ie-3.jpg";
import ireland2 from "../assets/images/ie-4.jpg";
import ireland3 from "../assets/images/ie-2.webp";

import aus1 from "../assets/images/au-1.webp";
import aus2 from "../assets/images/au-2.webp";
import aus3 from "../assets/images/au-3.jpg";



import usa1 from "../assets/images/us-1.jpg";
import usa2 from "../assets/images/us-2.webp";
import usa3 from "../assets/images/us-3.jpg";

import canada1 from "../assets/images/ca-1.jpg";
import canada2 from "../assets/images/ca-5.jpg";
import canada3 from "../assets/images/ca-4.jpg";

import europe1 from "../assets/images/eu.jpg";
import europe2 from "../assets/images/eu-2.webp";
import europe3 from "../assets/images/eu-3.jpg";

import uk1 from "../assets/images/gb.jpg";
import uk2 from "../assets/images/gb-2.jpg";
import uk3 from "../assets/images/gb-3.jpg";


export const countries = [
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    description:
      "The UK is home to some of the world's oldest and most prestigious universities, offering world-class education and rich cultural experiences.",
    intakes: ["January", "May", "September"],
   images: [
      { src: uk1, caption: "London - Big Ben" },
      { src: uk2, caption: "Cambridge University" },
      { src: uk3, caption: "Edinburgh Castle" },
    ],
    whyStudy: [
      "World-renowned universities with global recognition",
      "Shorter course duration compared to other countries",
      "Rich cultural heritage and diverse student community",
      "Post-study work visa opportunities for 2-3 years",
      "Gateway to European travel and experiences",
      "Strong research and innovation focus",
    ],
    topUniversities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London (UCL)",
      "London School of Economics (LSE)",
      "University of Edinburgh",
      "King's College London",
      "University of Manchester",
    ],
    popularCourses: [
      "Business and Management",
      "Engineering and Technology",
      "Computer Science and IT",
      "Medicine and Healthcare",
      "Law",
      "Arts and Humanities",
      "Finance and Accounting",
      "Data Science and AI",
    ],
    admissionRequirements: [
      "Bachelor's degree with good academic standing",
      "English proficiency test (IELTS/TOEFL/PTE)",
      "Statement of Purpose (SOP)",
      "Letters of Recommendation (LORs)",
      "Updated CV/Resume",
      "Passport copy",
      "Financial proof of funds",
    ],
    costOfLiving: "£12,000 - £15,000 per year (varies by city)",
    workOpportunities:
      "20 hours per week during studies, full-time during breaks. 2-year post-study work visa for graduates.",
    visaInfo:
      "Tier 4 (General) Student Visa required. Processing time: 3 weeks. Valid for course duration plus additional months.",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    description:
      "Canada offers high-quality education, affordable tuition, and excellent immigration opportunities in a safe and multicultural environment.",
    intakes: ["January", "May", "September"],
  images: [
      { src: canada1, caption: "London - Big Ben" },
      { src: canada2, caption: "Cambridge University" },
      { src: canada3, caption: "Edinburgh Castle" },
    ],
    whyStudy: [
      "High quality education at affordable costs",
      "Safe and welcoming multicultural society",
      "Excellent post-graduation work opportunities",
      "Pathway to permanent residency",
      "Beautiful natural landscapes and modern cities",
      "Strong economy with job opportunities",
    ],
    topUniversities: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "McMaster University",
      "University of Alberta",
      "University of Waterloo",
      "Western University",
      "University of Calgary",
    ],
    popularCourses: [
      "Computer Science and Engineering",
      "Business Administration",
      "Healthcare and Nursing",
      "Hospitality and Tourism",
      "Environmental Studies",
      "Data Analytics",
      "Mechanical Engineering",
      "Digital Marketing",
    ],
    admissionRequirements: [
      "Recognized bachelor's degree",
      "English language proficiency (IELTS/TOEFL)",
      "Statement of Purpose",
      "2-3 Letters of Recommendation",
      "Resume/CV",
      "Academic transcripts",
      "Proof of financial support",
    ],
    costOfLiving: "CAD 10,000 - 15,000 per year",
    workOpportunities:
      "20 hours per week during studies, full-time during breaks. 3-year post-graduation work permit available.",
    visaInfo:
      "Study Permit required. Processing time: 4-8 weeks. Can include work authorization.",
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    description:
      "The USA hosts the world's largest number of international students, offering unparalleled academic excellence and career opportunities.",
    intakes: ["January", "May", "August/September"],
  images: [
      { src: usa1, caption: "London - Big Ben" },
      { src: usa2, caption: "Cambridge University" },
      { src: usa3, caption: "Edinburgh Castle" },
    ],
    whyStudy: [
      "Home to top-ranked universities globally",
      "Cutting-edge research and innovation facilities",
      "Diverse range of programs and specializations",
      "Strong industry connections and internships",
      "Vibrant campus life and student activities",
      "Global networking opportunities",
    ],
    topUniversities: [
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "Harvard University",
      "California Institute of Technology (Caltech)",
      "University of California, Berkeley",
      "Princeton University",
      "Columbia University",
      "University of Chicago",
    ],
    popularCourses: [
      "Computer Science and AI",
      "Business Analytics",
      "Engineering disciplines",
      "Medicine and Public Health",
      "Finance and Economics",
      "Data Science",
      "Biotechnology",
      "Film and Media Studies",
    ],
    admissionRequirements: [
      "Bachelor's degree with strong GPA",
      "GRE/GMAT scores (for graduate programs)",
      "TOEFL/IELTS scores",
      "Statement of Purpose",
      "2-3 Letters of Recommendation",
      "Resume/CV",
      "Financial documentation",
      "Passport",
    ],
    costOfLiving: "$10,000 - $18,000 per year (varies significantly by location)",
    workOpportunities:
      "20 hours per week on-campus during studies. Optional Practical Training (OPT) for 12-36 months after graduation.",
    visaInfo:
      "F-1 Student Visa required. Processing time: 2-8 weeks. Attend visa interview at US Embassy.",
  },
  {
    id: "europe",
    name: "Europe",
    flag: "🇪🇺",
    description:
      "Europe offers diverse education systems, world-leading universities, and affordable tuition across multiple nations in a culturally rich environment.",
    intakes: ["February", "April", "September", "October"],
   images: [
      { src: europe1, caption: "London - Big Ben" },
      { src: europe2, caption: "Cambridge University" },
      { src: europe3, caption: "Edinburgh Castle" },
    ],
    subRegions: [
      { country: "🇩🇪 Germany" },
      { country: "🇫🇷 France" },
      { country: "🇮🇹 Italy" },
      { country: "🇪🇸 Spain" },
      { country: "🇳🇱 Netherlands" },
      { country: "🇸🇪 Sweden" },
      { country: "🇩🇰 Denmark" },
      { country: "🇳🇴 Norway" },
      { country: "🇫🇮 Finland" },
      { country: "🇨🇭 Switzerland" },
      { country: "🇧🇪 Belgium" },
      { country: "🇦🇹 Austria" },
      { country: "🇵🇱 Poland" },
      { country: "🇨🇿 Czech Republic" },
      { country: "🇭🇺 Hungary" },
      { country: "🇵🇹 Portugal" },
      { country: "🇬🇷 Greece" },
      { country: "🇮🇪 Ireland" },
      { country: "🇱🇺 Luxembourg" },
      { country: "🇲🇹 Malta" },
    ],
    whyStudy: [
      "Low or no tuition fees in many countries",
      "High quality education standards",
      "Rich cultural and historical experiences",
      "Learn new languages and cultures",
      "Easy travel across European countries",
      "Strong emphasis on research and innovation",
    ],
    topUniversities: [
      "ETH Zurich (Switzerland)",
      "Technical University of Munich (Germany)",
      "University of Amsterdam (Netherlands)",
      "Sorbonne University (France)",
      "KU Leuven (Belgium)",
      "University of Copenhagen (Denmark)",
      "Lund University (Sweden)",
      "Delft University of Technology (Netherlands)",
    ],
    popularCourses: [
      "Engineering and Technology",
      "Business and Economics",
      "Design and Architecture",
      "Environmental Sciences",
      "International Relations",
      "Renewable Energy",
      "Fashion and Arts",
      "Hospitality Management",
    ],
    admissionRequirements: [
      "Recognized bachelor's degree",
      "English proficiency (IELTS/TOEFL) or local language",
      "Motivation letter",
      "Academic transcripts",
      "CV/Resume",
      "Letters of Recommendation",
      "Passport",
      "Financial proof",
    ],
    costOfLiving: "€800 - €1,500 per month (varies by country)",
    workOpportunities:
      "15-20 hours per week during studies. Post-study work permits available in most countries (6-18 months).",
    visaInfo:
      "Student visa/permit required for non-EU students. Schengen visa for short stays. Processing time: 2-8 weeks.",
  },
  {
    id: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    description:
      "Ireland combines excellent education quality with a booming tech industry, offering international students great career prospects in a friendly English-speaking environment.",
    intakes: ["January", "May", "September"],
  images: [
      { src: ireland1, caption: "London - Big Ben" },
      { src: ireland2, caption: "Cambridge University" },
      { src: ireland3, caption: "Edinburgh Castle" },
    ],
    whyStudy: [
      "English-speaking country with welcoming culture",
      "Hub for global tech companies (Google, Facebook, Apple)",
      "High-quality education system",
      "Post-study work opportunities",
      "Safe and friendly environment",
      "Gateway to Europe with beautiful landscapes",
    ],
    topUniversities: [
      "Trinity College Dublin",
      "University College Dublin",
      "National University of Ireland, Galway",
      "University College Cork",
      "Dublin City University",
      "University of Limerick",
      "Maynooth University",
      "Technological University Dublin",
    ],
    popularCourses: [
      "Computer Science and IT",
      "Business and Finance",
      "Pharmaceutical Sciences",
      "Biotechnology",
      "Data Analytics",
      "Digital Marketing",
      "Engineering",
      "Hospitality Management",
    ],
    admissionRequirements: [
      "Bachelor's degree with good grades",
      "English language proficiency (IELTS/TOEFL/PTE)",
      "Personal statement",
      "Academic transcripts",
      "2 Letters of Recommendation",
      "CV/Resume",
      "Passport copy",
      "Financial evidence",
    ],
    costOfLiving: "€10,000 - €12,000 per year",
    workOpportunities:
      "20 hours per week during term, full-time during holidays. 2-year stay-back visa for graduates.",
    visaInfo:
      "Student visa (Stamp 2) required. Processing time: 4-8 weeks. Can be extended for post-study work.",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    description:
      "Australia is one of the most popular destinations for international students, known for its high academic standards, research excellence, and vibrant multicultural society.",
    intakes: ["February", "July", "November"],
  images: [
      { src: aus1, caption: "London - Big Ben" },
      { src: aus2, caption: "Cambridge University" },
      { src: aus3, caption: "Edinburgh Castle" },
    ],
    whyStudy: [
      "Globally recognized degrees and universities",
      "Safe and student-friendly environment",
      "Post-study work visa up to 4 years",
      "Strong industry links and internship options",
      "Diverse and multicultural student community",
      "High standard of living with work opportunities",
    ],
    topUniversities: [
      "University of Melbourne",
      "Australian National University",
      "University of Sydney",
      "University of Queensland",
      "Monash University",
      "University of New South Wales (UNSW)",
      "University of Western Australia",
      "RMIT University",
    ],
    popularCourses: [
      "Information Technology and Computer Science",
      "Business and Management",
      "Engineering and Architecture",
      "Health and Biomedical Sciences",
      "Environmental Science",
      "Accounting and Finance",
      "Hospitality and Tourism",
      "Education",
    ],
    admissionRequirements: [
      "Bachelor’s degree or equivalent qualification",
      "English proficiency test (IELTS/TOEFL/PTE)",
      "Statement of Purpose",
      "Letters of Recommendation",
      "Academic transcripts",
      "CV/Resume",
      "Passport and financial documents",
    ],
    costOfLiving: "AUD 18,000 - 25,000 per year (varies by city)",
    workOpportunities:
      "20 hours per week during study and unlimited during breaks. 2–4 years post-study work visa for graduates.",
    visaInfo:
      "Subclass 500 Student Visa required. Processing time: 4–8 weeks. Allows dependents and work rights.",
  },
];
