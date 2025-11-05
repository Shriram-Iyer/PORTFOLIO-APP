const phone = "+91 83693 20415";
const whatsappMessage = "Hi Shriram, I came across your portfolio and would love to connect.";
const whatsappNumber = phone.replace(/\D/g, "");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const socialLinks = [
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/shriram-iyer-046302189" },
  { id: "github", label: "GitHub", url: "https://github.com/Shriram-Iyer" },
];

const resumes = [
  {
    id: "java",
    label: "Java & Spring Boot CV",
    summary: "Backend leadership with Spring Boot, Kafka, and AWS.",
    url: `${import.meta.env.BASE_URL}assets/SHRIRAM_VENKATASUBRAMANIAN_IYER_CV.pdf`
  },
  {
    id: "mern",
    label: "MERN Stack CV",
    summary: "Full-stack delivery across MongoDB, Express, React, and Node.",
    url: `${import.meta.env.BASE_URL}assets/SHRIRAM_VENKATASUBRAMANIAN_IYER_CV_MERN.pdf`
  }
];

export const profile = {
  shortName: "Shriram V Iyer",
  name: "Shriram Venkatasubramanian Iyer",
  role: "Senior Software Engineer",
  location: "Chennai, India",
  photo: `${import.meta.env.BASE_URL}assets/photo1.jpg`,
  headline:
    "Senior engineer blending Java/Spring Boot backends with MERN experiences to ship reliable logistics and SaaS platforms.",
  summary:
    "Full-stack problem solver with 3+ years architecting Spring Boot and Kafka services alongside Express/Node APIs, React dashboards, and MongoDB pipelines. I bridge Java reliability with MERN speed to deliver real-time logistics tools, internal platforms, and customer-facing products end-to-end.",
  email: "shriramvi99@gmail.com",
  phone,
  availability: "Open to senior backend or full-stack roles across Java/Spring Boot and MERN ecosystems.",
  whatsapp: {
    number: whatsappNumber,
    message: whatsappMessage,
    url: whatsappUrl
  },
  social: socialLinks,
  resumes
};
