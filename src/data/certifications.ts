export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  skills: string[];
};

export const certifications: Certification[] = [
  {
    name: "Data Streaming Engineer",
    issuer: "Confluent",
    issued: "Aug 2025",
    expires: "Aug 2027",
    credentialId: "157911088",
    skills: ["Apache Kafka", "Event Streaming", "Schema Registry"]
  },
  {
    name: "Confluent Fundamentals Accreditation",
    issuer: "Confluent",
    issued: "Feb 2025",
    credentialId: "133790505",
    skills: ["Apache Kafka", "Confluent Cloud"]
  },
  {
    name: "Apache Kafka Streams",
    issuer: "Udemy",
    issued: "Nov 2023",
    skills: ["Kafka Streams", "Stream Processing"]
  },
  {
    name: "Apache Kafka",
    issuer: "Udemy",
    issued: "Aug 2023",
    skills: ["Kafka Architecture", "Producers & Consumers"]
  },
  {
    name: "C# Masterclass",
    issuer: "Udemy",
    issued: "May 2023",
    skills: ["C#", ".NET Fundamentals"]
  },
  {
    name: "Web Development",
    issuer: "Udemy",
    issued: "Sep 2022",
    skills: ["JavaScript", "Frontend Foundations"]
  }
];
