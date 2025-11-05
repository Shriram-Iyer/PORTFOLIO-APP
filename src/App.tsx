import { CertificationList } from "./components/CertificationList";
import { ContactCard } from "./components/ContactCard";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectGallery } from "./components/ProjectGallery";
import { Section } from "./components/Section";
import { SkillsGrid } from "./components/SkillsGrid";
import { ResumeMenu } from "./components/ResumeMenu";
import { experience } from "./data/experience";
import { personalProjects } from "./data/personalProjects";
import { profile } from "./data/profile";
import { projects } from "./data/projects";

function BackgroundGlow() {
  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 -z-30 opacity-70 bg-[radial-gradient(circle_at_12%_18%,rgba(114,39,186,0.16),transparent_55%),radial-gradient(circle_at_80%_5%,rgba(255,127,80,0.14),transparent_55%),radial-gradient(circle_at_70%_65%,rgba(114,39,186,0.12),transparent_60%)] dark:opacity-100" />
      <div className="absolute -left-32 top-64 -z-20 h-[420px] w-[420px] rounded-full bg-[#7127ba]/30 blur-[170px] dark:bg-[#7127ba]/35" />
      <div className="absolute -right-24 top-[38rem] -z-20 h-[360px] w-[360px] rounded-full bg-[#ff7f50]/18 blur-[160px] dark:bg-[#ff7f50]/25" />
      <div className="absolute left-1/3 top-[1100px] -z-20 h-[340px] w-[340px] rounded-full bg-[#5a86ff]/16 blur-[140px] dark:bg-[#7127ba]/20" />
      <div className="absolute right-1/4 top-[2200px] -z-20 h-[420px] w-[420px] rounded-full bg-[#5a86ff]/16 blur-[160px] dark:bg-[#5a86ff]/18" />
    </div>
  );
}

function AboutSectionContent() {
  const impactPoints = [
    experience[0]?.bullets[0],
    experience[0]?.bullets[1],
    experience[1]?.bullets[0]
  ].filter(Boolean) as string[];

  const quickFacts = [
    { label: "Availability", value: profile.availability },
    { label: "Location", value: profile.location },
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`
    }
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.75fr,1fr]">
  <article className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_35px_120px_-60px_rgba(58,100,255,0.35)] backdrop-blur dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_35px_120px_-60px_rgba(114,39,186,0.65)]">
        <div className="pointer-events-none absolute -top-32 right-12 h-64 w-64 rounded-full bg-[#ffb699]/40 blur-[120px] dark:bg-[#ff7f50]/25" />
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#5a86ff]/80 dark:text-[#cbb6ff]/80">Mission</p>
        <h3 className="mt-4 text-2xl font-semibold text-slate-900 lg:text-3xl dark:text-white">{profile.headline}</h3>
        <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-white/70">{profile.summary}</p>
        <ul className="mt-6 space-y-3 text-base leading-relaxed text-slate-600 dark:text-white/60">
          {impactPoints.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#ff7f50]/80" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
      <aside className="flex flex-col gap-4">
  <div className="rounded-[28px] border border-slate-200/70 bg-white/90 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#5a86ff]/80 dark:text-[#cbb6ff]/80">Quick facts</p>
          <ul className="mt-4 space-y-4">
            {quickFacts.map((fact) => (
              <li key={fact.label} className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-white/40">{fact.label}</span>
                {fact.href ? (
                  <a
                    href={fact.href}
                    className="mt-1 text-base font-medium text-slate-900 transition-all duration-300 hover:text-[#ff7f50] dark:text-white"
                  >
                    {fact.value}
                  </a>
                ) : (
                  <span className="mt-1 text-base font-medium text-slate-700 dark:text-white/80">{fact.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] border border-[#ff7f50]/35 bg-[#fff5ef] p-6 text-slate-800 shadow-[0_24px_80px_-40px_rgba(255,127,80,0.35)] backdrop-blur dark:border-[#ff7f50]/25 dark:bg-[#ff7f50]/10 dark:text-white/90">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Building resilient, collaborative platforms end-to-end.</p>
          <p className="mt-2 text-sm text-slate-700 dark:text-white/80">I partner with operations teams to combine Spring Boot and Kafka reliability with rapid MERN delivery so customs, finance, and compliance teams stay in sync.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ResumeMenu
              buttonLabel="Download resume"
              buttonClassName="rounded-full border border-[#ff7f50]/40 bg-[#ff7f50] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff7f50]/60 hover:bg-[#ff936a] dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20"
              menuClassName="bg-white/95 dark:bg-slate-900/95"
              align="left"
            />
          </div>
        </div>
      </aside>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-white/50">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built for high-impact logistics teams.
        </p>
        <p className="text-slate-400 dark:text-white/40">Crafted with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8faff] text-slate-900 antialiased transition-colors duration-500 dark:bg-[#11071f] dark:text-[#f8faff]">
      <BackgroundGlow />
      <Navbar />
      <main className="relative flex flex-col gap-24 pb-24 pt-16">
        <Hero />
        <Section
          id="about"
          eyebrow="About"
          title="Engineering partner with a systems mindset"
          description="I specialise in event-driven logistics platforms—pairing Spring Boot/Kafka microservices with MERN product layers to keep global operations teams in sync."
        >
          <AboutSectionContent />
        </Section>
        <Section
          id="experience"
          eyebrow="Experience"
          title="Impact through execution"
          description="Leading squads across Java backends, Express APIs, and React interfaces to unlock measurable gains for customs brokers and product teams alike."
        >
          <ExperienceTimeline />
        </Section>
        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected case studies"
          description="Enterprise initiatives that blended Spring Boot services and MERN experiences to deliver resilient collaboration, automation, and analytics."
        >
          <ProjectGallery items={projects} />
        </Section>
        <Section
          id="personal-projects"
          eyebrow="Personal"
          title="Python & React weekend builds"
          description="Side projects where I blend Flask, FastAPI, and React to prototype real-time chat, CV tooling, and front-end patterns that feed back into production systems."
        >
          <ProjectGallery items={personalProjects} />
        </Section>
        <Section
          id="certifications"
          eyebrow="Certifications"
          title="Continuous learning & accreditation"
          description="Accreditations that keep my Kafka, event-streaming, and platform fundamentals sharp."
        >
          <CertificationList />
        </Section>
        <Section
          id="skills"
          eyebrow="Expertise"
          title="Technologies & tooling"
        >
          <SkillsGrid />
        </Section>
        <Section
          id="contact"
          eyebrow="Connect"
          title="Let's build the next generation of logistics software"
        >
          <ContactCard />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
