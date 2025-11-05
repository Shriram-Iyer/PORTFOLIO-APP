import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { personalProjects } from "../data/personalProjects";
import { experience } from "../data/experience";
import { ResumeMenu } from "./ResumeMenu";

const totalInitiatives = projects.length + personalProjects.length;

const heroHighlights = [
  {
    title: "500K+ events/sec",
    description: "Kafka-backed workflows kept filings realtime across Unifo.",
    accent: "#ff7f50"
  },
  {
    title: "MERN launches at scale",
    description: "React & Express product slices ship alongside Spring Boot releases without regressions.",
    accent: "#5a86ff"
  },
  {
    title: `${totalInitiatives}+ launch initiatives`,
    description: "From Spring Boot workflows to analytics dashboards and MERN portals.",
    accent: "#b4ceff"
  }
];

const missionPoints = [
  "Designing resilient, event-driven backends that remove manual ops friction.",
  "Coaching squads to ship faster with automation, observability, and focus.",
  experience[0]?.bullets[1] ?? profile.headline
].filter(Boolean);

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto mt-8 w-full max-w-6xl overflow-hidden rounded-[56px] border border-white/70 bg-white/90 px-8 pb-16 pt-20 shadow-[0_40px_160px_-80px_rgba(114,39,186,0.55)] backdrop-blur dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_40px_160px_-70px_rgba(114,39,186,0.85)]"
    >
      <div className="pointer-events-none absolute -left-48 top-0 h-[420px] w-[420px] rounded-full bg-[#7127ba]/18 blur-[160px] dark:bg-[#7127ba]/25" />
      <div className="pointer-events-none absolute -right-36 top-40 h-[320px] w-[320px] rounded-full bg-[#ff7f50]/18 blur-[140px] dark:bg-[#ff7f50]/25" />
      <div className="pointer-events-none absolute left-1/3 top-[380px] h-[360px] w-[360px] rounded-full bg-[#5a86ff]/14 blur-[150px] dark:bg-[#5a86ff]/20" />

      <div className="relative grid items-start gap-14 lg:grid-cols-[1.85fr_minmax(280px,1fr)]">
        <div className="space-y-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white px-4 py-1.5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#ff7f50]" />
              <span>{profile.location}</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white px-4 py-1.5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>{profile.availability}</span>
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.55em] text-slate-500 dark:text-white/40">Senior Software Engineer</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-[68px] dark:text-white">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-white/65">{profile.summary}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ResumeMenu
              buttonLabel="Download resume"
              buttonClassName="rounded-full border border-white/60 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white dark:border-white/20 dark:bg-white/[0.12] dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20"
              menuClassName="bg-white/95 dark:bg-slate-900/95"
            />
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5a86ff]/60 hover:text-[#5a86ff] dark:border-white/10 dark:bg-white/[0.05] dark:text-white/80 dark:hover:text-white"
            >
              Say hello
            </a>
            <a
              href={profile.whatsapp.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-500/20 dark:border-emerald-400/40 dark:bg-emerald-400/15 dark:text-emerald-200 dark:hover:border-emerald-300 dark:hover:bg-emerald-400/25"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500 dark:text-white/50">
            {profile.social.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 hover:text-[#5a86ff] dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="space-y-6 rounded-[36px] border border-white/70 bg-white p-8 text-slate-800 shadow-md backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
          {profile.photo ? (
            <div className="mx-auto flex w-full items-center justify-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-[28px] border border-[#5a86ff]/40 bg-gradient-to-br from-[#f8faff] via-white to-[#ffe4d6] shadow-[0_18px_60px_-30px_rgba(90,134,255,0.55)] dark:border-white/15 dark:from-white/[0.08] dark:via-white/[0.04] dark:to-[#ff7f50]/10">
                <img
                  src={profile.photo}
                  alt={`${profile.name} portrait`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ) : null}
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-white/40">Mission</p>
          <ul className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-white/70">
            {missionPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-[#5a86ff]/70" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4">
            {heroHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/70 bg-white px-6 py-4 shadow-[0_14px_40px_-24px_rgba(90,134,255,0.35)] dark:border-white/5 dark:bg-white/[0.08]"
                style={{ boxShadow: `0 20px 55px -30px ${item.accent}66` }}
              >
                <p className="text-lg font-semibold" style={{ color: item.accent }}>
                  {item.title}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/35">Outcome</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
