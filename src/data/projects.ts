export type Project = {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Realtime Collaboration Workspace",
    description:
      "A real-time collaborative form with field autopopulations where filling one field automatically populates all related fields, built with Node.js and Spring Boot services feeding a responsive Next.js client.",
    highlights: [
      "Developed a real-time collaborative form with intelligent field autopopulation using WebSockets and Node.js, reducing manual data entry by 60%.",
      "Integrated Spring Boot microservices for backend validation and Kafka for event-driven updates, ensuring data consistency across multiple users.",
      "Leveraged MongoDB change streams and React server components for instant UI updates, enabling seamless co-editing experiences."
    ],
    stack: ["Node.js", "Websocket", "Next.js", "React", "Spring Boot", "Kafka", "MongoDB", "Redis", "AWS"]
  },
  {
    name: "Sentinel Dashboard",
    description:
      "Dashboard for our webapp that helps customs brokers file paperwork in the ICEGATE portal, providing analysis of jobs created in the app.",
    highlights: [
      "Built a comprehensive dashboard using Next.js and Node.js to analyze job creation and filing statuses for customs brokers in the ICEGATE portal.",
      "Implemented real-time data aggregation from MongoDB to provide insights on paperwork efficiency and SLA metrics.",
      "Created role-based widgets and export functionalities for better user experience and operational visibility."
    ],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"]
  }
];
