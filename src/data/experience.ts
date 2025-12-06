export type TimelineItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  technologies: string[];
};

export const experience: TimelineItem[] = [
  {
    title: "Module Lead",
    company: "Unifo Private Limited",
    period: "Apr 2024 — Present",
    location: "Chennai, India",
    bullets: [
      "Led a cross-functional team to deliver a real-time web application using Node.js and Kafka, with Java/Spring Boot producing 500K+ events/sec, reducing processing latency by 20% and operational overhead by 5 hours/week.",
      "Directed integration of WebSocket-enabled features in Node.js backends, including advanced remote digital signing, job locking, and request signing workflows, improving collaborative efficiency by 30% in multi-user customs filing scenarios.",
      "Mentored junior developers in FullStack practices (Node.js, React.js, MongoDB), driving 25% faster feature delivery and promoting expertise in real-time logistics solutions.",
      "Deployed Node.js-based microservices on AWS (EC2, Lambda, ECS) to handle 40% user growth, reducing infrastructure costs by 15% via auto-scaling and optimizing cloud resources.",
      "Led the development of dashboard analytics for import/export documentation using Node.js APIs and React.js frontends, enabling real-time insights into logistics metrics.",
      "Ensured 99.9% uptime for 12+ Node.js services via CloudWatch monitoring and implemented Playwright automation for end-to-end FullStack testing, improving test coverage and reliability."
    ],
    technologies: ["Node.js", "React.js", "MongoDB", "Kafka", "Java", "Spring Boot", "WebSocket", "AWS", "Playwright", "Microservices"]
  },
  {
    title: "Software Engineer",
    company: "Unifo Private Limited",
    period: "Aug 2022 — Mar 2024",
    location: "Chennai, India",
    bullets: [
      "Developed and optimized React.js frontend features for a logistics webapp, utilizing Redux and Material-UI to enhance the user experience and streamline customs documentation workflows for ICEGATE site submissions.",
      "Contributed to backend development using Node.js for event-driven, real-time updates, eliminating save buttons by leveraging event-driven architecture for seamless database synchronization.",
      "Integrated WebSocket protocols with Node.js for collaborative features such as remote digital signatures, reducing document signing delays by 40% in multi-user logistics teams.",
      "Implemented Job Lock mechanism with Node.js backend logic and WebSocket notifications, ensuring data integrity and preventing concurrent edits on shared documents.",
      "Designed Request Sign feature using Node.js services and WebSocket channels, enabling secure, remote document approval processes and streamlining customs brokerage workflows.",
      "Achieved 90% test coverage with Playwright automation, reducing post-release defects by 25% and increasing overall test efficiency."
    ],
    technologies: ["React.js", "Redux", "Material-UI", "Node.js", "MongoDB", "WebSocket", "Playwright", "REST APIs"]
  }
];
