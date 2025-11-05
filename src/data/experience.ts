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
      "Led a cross-functional squad shipping a real-time logistics workspace by pairing Spring Boot event services with an Express/Node BFF and React front-end, streaming 500K+ events/sec and cutting latency by 20%.",
      "Directed WebSocket-enabled collaboration features across Java and MERN services for digital signing and request locking, boosting multi-user efficiency by 30%.",
      "Mentored engineers on Java, Express/TypeScript, and React best practices, lifting sprint velocity by 25% while rolling out Playwright automation coverage."
    ],
    technologies: ["Java", "Spring Boot", "Apache Kafka", "React", "Node.js", "Express", "AWS", "Playwright", "MongoDB"]
  },
  {
    title: "Software Engineer",
    company: "Unifo Private Limited",
    period: "Aug 2022 — Mar 2024",
    location: "Chennai, India",
    bullets: [
      "Built event-driven workflows in Java/Spring Boot while exposing REST APIs through Express/Node adapters and MongoDB change streams, removing manual save flows and eliminating concurrency errors.",
      "Integrated remote digital signing, WebSocket notifications, and collaborative editing across Spring Boot services and a MERN collaboration layer, reducing document turnaround time by 40%.",
      "Delivered React + Material UI and Next.js dashboards powered by Node aggregation pipelines, improving transparency and trimming operations overhead by 5 hours weekly."
    ],
    technologies: ["Java", "Spring Boot", "Node.js", "Express", "React", "Next.js", "WebSocket", "MongoDB", "MySQL"]
  }
];
