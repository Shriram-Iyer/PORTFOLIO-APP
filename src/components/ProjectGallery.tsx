import type { Project } from "../data/projects";
import { projects as featuredProjects } from "../data/projects";

interface ProjectGalleryProps {
  items?: Project[];
}

export function ProjectGallery({ items = featuredProjects }: ProjectGalleryProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((project) => (
        <article key={project.name} className="card group flex h-full flex-col gap-4 overflow-hidden rounded-3xl p-6">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
            background: "radial-gradient(circle at top right, rgba(90,134,255,0.25), transparent 55%)"
          }} />
          <header className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary-600 dark:text-slate-100 dark:group-hover:text-primary-200">
              {project.name}
            </h3>
            <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-slate-400">
              {project.description}
            </p>
          </header>
          <ul className="space-y-2 text-sm text-slate-600 transition-colors duration-300 dark:text-slate-300">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3">
            <div className="flex flex-wrap gap-2 text-xs text-slate-500 transition-colors duration-300 dark:text-slate-400">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 font-medium text-slate-600 shadow-neon-subtle transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-primary-600 transition-colors duration-300 dark:text-primary-200">
              {project.repo ? (
                <a
                  className="inline-flex items-center gap-1 transition-all duration-300 hover:gap-2 hover:text-primary-700 dark:hover:text-primary-100"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source code
                  <span aria-hidden="true">→</span>
                </a>
              ) : null}
              {project.demo ? (
                <a
                  className="inline-flex items-center gap-1 transition-all duration-300 hover:gap-2 hover:text-primary-700 dark:hover:text-primary-100"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit demo
                  <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
