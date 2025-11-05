export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python"]
  },
  {
    title: "Backend & APIs",
    items: ["Spring Boot", "Spring Cloud", "Spring Security", "Node.js", "REST", "AsyncAPI"]
  },
  {
    title: "Frontend",
    items: ["React", "Redux", "Material UI", "Bootstrap", "HTML", "CSS"]
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "Redis"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS Lambda", "ECS", "S3", "CloudWatch", "Docker", "GitHub Actions"]
  },
  {
    title: "Streaming & Real-Time",
    items: ["Apache Kafka", "Kafka Streams", "Kafka Connect", "Schema Registry", "WebSockets", "Apache Flink"]
  }
];
