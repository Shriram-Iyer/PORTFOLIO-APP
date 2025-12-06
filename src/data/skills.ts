export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Node.js", "Python", "Java (Kafka Integration)"]
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Microservices", "Mongoose", "JWT", "MongoDB Aggregation", "REST APIs", "AsyncAPI"]
  },
  {
    title: "Frontend Development",
    items: ["React.js", "Redux", "Material-UI", "Bootstrap", "HTML", "CSS", "Next.js", "Zustand", "Tailwind CSS"]
  },
  {
    title: "Event Streaming & Real-Time",
    items: ["Apache Kafka", "Kafka Streams", "Kafka Connect", "Schema Registry", "Avro", "WebSockets", "Apache Flink"]
  },
  {
    title: "Databases",
    items: ["MongoDB", "Redis", "MySQL", "PostgreSQL"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS Lambda", "API Gateway", "Cognito", "S3", "MSK", "ElastiCache", "ECS", "ALB", "CloudWatch", "Docker", "GitHub Actions"]
  },
  {
    title: "API Development & Tools",
    items: ["REST APIs", "Swagger", "Postman", "AsyncAPI", "JSON", "AJV"]
  },
  {
    title: "Testing & Quality",
    items: ["Playwright", "End-to-End Testing", "Test Automation", "CI/CD"]
  },
  {
    title: "Version Control & Project Management",
    items: ["Git", "Jira", "Zoho Projects"]
  },
  {
    title: "IDEs & Operating Systems",
    items: ["VS Code", "IntelliJ IDEA", "Windows", "Linux"]
  }
];
