import { skills } from "../data/skills";

export function SkillsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {skills.map((category) => (
        <div key={category.title} className="card group p-6">
          <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary-500/15 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
          <h3 className="text-lg font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary-600 dark:text-slate-100 dark:group-hover:text-primary-200">
            {category.title}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 transition-colors duration-300 dark:text-slate-300">
            {category.items.map((item) => (
              <li key={item} className="rounded-lg border border-transparent px-2 py-1 transition-all duration-300 group-hover:border-primary-400/40 group-hover:text-primary-600 dark:group-hover:border-primary-400/40 dark:group-hover:text-primary-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
