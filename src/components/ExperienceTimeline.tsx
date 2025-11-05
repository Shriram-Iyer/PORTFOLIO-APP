import { experience } from "../data/experience";

export function ExperienceTimeline() {
  return (
  <ol className="relative space-y-10 border-s-l border-transparent transition-colors duration-300 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:-translate-x-1/2 before:bg-gradient-to-b before:from-primary-500/25 before:via-primary-500/10 before:to-accent/25 before:content-['']">
      {experience.map((item) => (
        <li key={`${item.company}-${item.period}`} className="group relative pl-10">
          <div className="absolute -ms-[11px] mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-neon-subtle transition-all duration-300 group-hover:scale-110 dark:bg-slate-950">
            <span className="block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary-500 via-primary-400 to-accent shadow-neon group-hover:animate-pulse-glow" />
          </div>
          <div className="card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-slate-400">
                  {item.company} · {item.location}
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-600 transition-colors duration-300 dark:text-primary-200">
                {item.period}
              </span>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 transition-colors duration-300 dark:text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-500 transition-colors duration-300 dark:text-slate-400">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 font-medium shadow-neon-subtle transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
