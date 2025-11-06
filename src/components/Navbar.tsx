import { useState, type ReactElement } from "react";
import { profile } from "../data/profile";
import { useTheme } from "../hooks/useTheme";
import { ResumeMenu } from "./ResumeMenu";

const iconClass = "h-5 w-5";

type NavLink = {
  href: string;
  label: string;
  icon: ReactElement;
};

const links: NavLink[] = [
  {
    href: "#about",
    label: "About",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <circle cx={12} cy={8.5} r={3.5} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 19c0-3.314 3.358-6 7-6s7 2.686 7 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    href: "#experience",
    label: "Experience",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path d="M9 7V6a3 3 0 013-3h0a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={4} y={7} width={16} height={11} rx={2} />
        <path d="M4 12h16" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12v2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    href: "#projects",
    label: "Projects",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <rect x={3.5} y={3.5} width={7} height={7} rx={1.5} />
        <rect x={13.5} y={3.5} width={7} height={7} rx={1.5} />
        <rect x={3.5} y={13.5} width={7} height={7} rx={1.5} />
        <rect x={13.5} y={13.5} width={7} height={7} rx={1.5} />
      </svg>
    )
  },
  {
    href: "#personal-projects",
    label: "Personal Projects",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          d="M12 3v4m0 10v4m-6.4-14.4l2.8 2.8m7.2 7.2l2.8 2.8M3 12h4m10 0h4m-14.4 6.4l2.8-2.8m7.2-7.2l2.8-2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    href: "#certifications",
    label: "Certifications",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <circle cx={12} cy={9} r={4} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 13.5L8 20l4-2 4 2-1.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    href: "#skills",
    label: "Skills",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path d="M4 7h11M4 12h6M4 17h11" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={17} cy={7} r={1.75} />
        <circle cx={12} cy={12} r={1.75} />
        <circle cx={17} cy={17} r={1.75} />
      </svg>
    )
  },
  {
    href: "#contact",
    label: "Contact",
    icon: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path d="M4.5 6h15a1 1 0 011 1v10a1 1 0 01-1 1h-15a1 1 0 01-1-1V7a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 8l7 5 7-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-white/40 shadow-lg shadow-primary-500/10 backdrop-blur-2xl transition-colors duration-500 supports-[backdrop-filter]:bg-white/30 dark:bg-slate-950/50 dark:shadow-primary-900/20">
      <nav className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
        <a
          href="#top"
          className="flex-1 whitespace-nowrap text-lg font-semibold text-transparent transition-colors duration-300"
          style={{
            backgroundImage: "linear-gradient(90deg, #3a64ff, #5a86ff, #ff7f50)",
            WebkitBackgroundClip: "text"
          }}
        >
          {profile.shortName}
        </a>

        <div className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1 rounded-full border border-white/60 bg-white/60 p-1 text-sm font-medium text-slate-600 shadow-inner shadow-primary-500/5 transition-colors duration-300 dark:border-slate-800/60 dark:bg-slate-900/50 dark:text-slate-300">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary-600 hover:shadow-neon-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-primary-200"
                  aria-label={link.label}
                  title={link.label}
                >
                  <span aria-hidden="true">{link.icon}</span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-[calc(100%+0.65rem)] -translate-x-1/2 translate-y-0 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition duration-200 group-hover:translate-y-1 group-hover:opacity-100 group-focus-visible:translate-y-1 group-focus-visible:opacity-100 dark:bg-slate-700"
                  >
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 lg:flex">
            <ResumeMenu
              buttonLabel="Download resume"
              buttonClassName="rounded-full border border-primary-500 bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-neon-subtle transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-500 hover:shadow-neon"
              chevronClassName="ml-1 h-3.5 w-3.5"
              menuClassName="border-primary-500/40 bg-white/95 dark:border-primary-400/30"
              align="right"
            />
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 text-base text-slate-700 shadow-neon-subtle backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-600 hover:shadow-neon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-200"
            title={isDark ? "Use light mode" : "Use dark mode"}
          >
            <span aria-hidden="true">{isDark ? "🌙" : "☀️"}</span>
          </button>
          <button
            className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/60 px-3 py-2 text-sm text-slate-700 shadow-neon-subtle transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-600 hover:shadow-neon dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-200 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-transparent bg-white/80 px-6 py-5 shadow-inner shadow-primary-500/10 backdrop-blur-xl transition-colors duration-300 dark:bg-slate-950/80 lg:hidden">
          <div className="mb-4 space-y-3">
            <ResumeMenu
              buttonLabel="Download resume"
              buttonClassName="w-full rounded-full border border-primary-500 bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-neon-subtle transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-500 hover:shadow-neon"
              chevronClassName="ml-2 h-4 w-4"
              menuClassName="border-primary-500/40 bg-white/95 dark:border-primary-400/40"
              optionClassName="hover:bg-primary-50/70 dark:hover:bg-slate-800/80"
              align="left"
              onSelect={() => setIsOpen(false)}
            />
            <button
              type="button"
              onClick={() => {
                toggleTheme();
              }}
              aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-lg text-slate-700 shadow-neon-subtle backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-600 hover:shadow-neon dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-200"
              title={isDark ? "Use light mode" : "Use dark mode"}
            >
              <span aria-hidden="true">{isDark ? "🌙" : "☀️"}</span>
            </button>
          </div>
          <ul className="flex flex-wrap gap-3 text-sm font-medium text-slate-700 transition-colors duration-300 dark:text-slate-200">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center justify-start gap-2 rounded-full border border-slate-200/70 bg-white/60 px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/60 hover:bg-white hover:text-primary-600 hover:shadow-neon-subtle dark:border-slate-700/60 dark:bg-slate-900/60 dark:hover:border-primary-400/60 dark:hover:bg-slate-800/70 dark:hover:text-primary-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span aria-hidden="true" className="text-primary-500 dark:text-primary-200">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
