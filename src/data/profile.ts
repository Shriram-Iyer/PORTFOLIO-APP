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
    id: "mern",
    label: "Full-Stack Developer Resume",
    summary: "Node.js, React.js, MongoDB, Kafka, AWS, Real-Time Systems expertise.",
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
    "Senior Software Engineer | Full-Stack Development | Node.js, React.js, MongoDB, Kafka, AWS, Real-Time Systems",
  summary:
    "Detail-oriented Senior Software Engineer with 3.2 years of experience in Full-Stack Development in a fast-paced startup environment. Proficient in Node.js, React.js, MongoDB, Kafka, WebSocket, and AWS. Expertise in designing scalable, event-driven architectures and building real-time applications with high throughput. Proven track record in leading small teams, mentoring junior developers, and owning end-to-end delivery of a real-time collaborative logistics webapp. Skilled in microservices, CI/CD, performance optimization, and cloud infrastructure.",
  email: "shriramvi99@gmail.com",
  phone,
  availability: "Open to senior full-stack roles in Node.js, React.js, and real-time systems development.",
  whatsapp: {
    number: whatsappNumber,
    message: whatsappMessage,
    url: whatsappUrl
  },
  social: socialLinks,
  resumes
};
