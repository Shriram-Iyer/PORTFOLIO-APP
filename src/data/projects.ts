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
      "Flagship product delivering Google-Docs style editing for customs teams with Node.js and Spring Boot services feeding a responsive Next.js client.",
    highlights: [
      "Built a Node.js collaboration gateway on top of Socket.IO and Redis streams while Spring Boot microservices handled compliance rules and Kafka event sourcing.",
      "Delivered conflict-free editing with operational transforms across React clients, slashing duplicate filings by 35% and unlocking live co-authoring.",
      "Stretched MongoDB change streams to hydrate React server components instantly, pairing them with Java CQRS projections for audit trails."
    ],
    stack: ["Node.js", "Socket.IO", "Next.js", "React", "Spring Boot", "Kafka", "MongoDB", "Redis", "AWS"]
  },
  {
    name: "Ops Insight Dashboard",
    description:
      "Companion analytics hub that visualises workspace telemetry using Next.js, Node.js, and MongoDB while federating metrics from Java services.",
    highlights: [
      "Aggregated activity feeds and SLA metrics through Node.js ingestion jobs and exposed them via Next.js server actions for near real-time dashboards.",
      "Embedded Playwright-driven smoke suites and Spring Boot health endpoints into CI so releases to the analytics tier stayed below a 30-minute MTTR.",
      "Implemented role-aware widgets and exports that reconciled data from MongoDB, Postgres, and Java gRPC services into a unified view."
    ],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Spring Boot", "PostgreSQL", "Playwright", "GitHub Actions"]
  }
];
