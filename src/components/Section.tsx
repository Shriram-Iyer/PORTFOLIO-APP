import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section
      id={id}
      className="group relative overflow-hidden scroll-mt-24 py-16 transition-colors duration-300 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-x-12 top-12 -z-10 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-20 h-full w-1/3 bg-gradient-to-bl from-primary-500/5 via-transparent to-transparent blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <header className="relative mb-12 space-y-4">
          {eyebrow ? <p className="section-subtitle">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          {description ? (
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-300">
              {description}
            </p>
          ) : null}
        </header>
        <div className="space-y-8 lg:space-y-10">{children}</div>
      </div>
    </section>
  );
}
