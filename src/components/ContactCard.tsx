import type { JSX } from "react";
import { profile } from "../data/profile";

type ContactIconProps = {
  label: string;
  href: string;
  className: string;
  icon: JSX.Element;
  external?: boolean;
};

function ContactIconButton({ label, href, className, icon, external }: ContactIconProps) {
  return (
    <a
      href={href}
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full shadow-neon-subtle transition-all duration-300 hover:-translate-y-0.5 hover:shadow-neon ${className}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  );
}

function EnvelopeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2a9.96 9.96 0 0 0-8.57 15.1L2 22l5.08-1.48A9.96 9.96 0 1 0 12.04 2Zm5.92 9.66c-.08 1.74-1.14 3.45-2.88 3.98-1.52.46-2.9-.21-4.29-.9-1.08-.55-1.9-1.31-2.58-2.32-.42-.62-.23-1.07.28-1.55.36-.34.7-.73.54-1.28-.22-.77-.7-1.35-1.44-1.67-.28-.12-.57-.1-.85 0-1.06.38-1.6 1.18-1.62 2.29-.01.64.18 1.23.45 1.8 1.03 2.17 2.7 3.69 4.95 4.49 1.07.38 2.18.55 3.31.45 1.37-.12 2.54-.67 3.46-1.66.73-.77 1.1-1.72 1.12-2.81 0-.34-.09-.63-.34-.87-.26-.26-.57-.31-.89-.09l-.66.43c-.25.17-.51.34-.76.52-.26.18-.52.21-.79.03-.4-.27-.82-.53-1.2-.82-.53-.4-.57-.64-.18-1.15.21-.28.44-.55.64-.83.23-.33.21-.63-.04-.96-.14-.17-.31-.3-.48-.43-.63-.49-1.27-.49-1.88 0-.83.65-1.06 1.53-.68 2.51.32.83.94 1.43 1.66 1.94.74.52 1.55.88 2.43 1.09.61.15 1.18.08 1.71-.26.46-.3.91-.6 1.35-.92.21-.16.44-.23.7-.17.26.05.46.21.5.47Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55a.55.55 0 0 0-.55-.55ZM8.3 18.45H5.77V9.6H8.3v8.85ZM7.04 8.39c-.8 0-1.45-.66-1.45-1.47 0-.81.65-1.47 1.45-1.47.8 0 1.45.66 1.45 1.47 0 .81-.65 1.47-1.45 1.47Zm11.41 10.06h-2.53v-4.59c0-1.09-.02-2.49-1.52-2.49-1.53 0-1.76 1.2-1.76 2.41v4.67h-2.53V9.6h2.43v1.2h.03c.34-.64 1.17-1.32 2.41-1.32 2.58 0 3.06 1.7 3.06 3.9v5.07Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.64.5 12a11.5 11.5 0 0 0 7.85 10.91c.57.11.78-.25.78-.55v-1.88c-3.19.69-3.86-1.54-3.86-1.54-.52-1.32-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.46-2.27 1.2-3.07-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.19 1.17a10.93 10.93 0 0 1 5.81 0c2.22-1.48 3.19-1.17 3.19-1.17.63 1.6.23 2.78.11 3.07.75.8 1.2 1.82 1.2 3.07 0 4.39-2.69 5.34-5.25 5.63.41.35.77 1.05.77 2.13v3.15c0 .3.21.67.78.55A11.5 11.5 0 0 0 23.5 12C23.5 5.64 18.35.5 12 .5Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M6.62 3.5 8.96 3a2 2 0 0 1 2.32 1.43l.7 2.79a2 2 0 0 1-.57 1.95L9.6 10.9a12.05 12.05 0 0 0 3.5 3.5l1.73-1.76a2 2 0 0 1 1.95-.57l2.79.7A2 2 0 0 1 21 15.1l-.5 2.34a2 2 0 0 1-1.95 1.56A15.5 15.5 0 0 1 3 5.49 2 2 0 0 1 4.56 3.5l2.06-.5Z" />
    </svg>
  );
}

export function ContactCard() {
  const linkedin = profile.social.find((item) => item.id === "linkedin");
  const github = profile.social.find((item) => item.id === "github");
  const telHref = `tel:${profile.phone.replace(/\s+/g, "")}`;

  const actions: ContactIconProps[] = [
    {
      href: `mailto:${profile.email}`,
      label: `Email ${profile.email}`,
      className: "border border-primary-500 bg-primary-500/90 text-white hover:bg-primary-400",
      icon: <EnvelopeIcon />
    },
    {
      href: telHref,
      label: `Call ${profile.phone}`,
      className: "border border-slate-300/80 bg-white/40 text-slate-700 hover:border-primary-400 hover:text-primary-600 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-primary-400/60 dark:hover:text-primary-200",
      icon: <PhoneIcon />
    },
    {
      href: profile.whatsapp.url,
      label: "Start WhatsApp chat",
      className: "border border-emerald-500/80 bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/25 dark:text-emerald-200",
      icon: <WhatsAppIcon />,
      external: true
    }
  ];

  if (linkedin) {
    actions.push({
      href: linkedin.url,
      label: "View LinkedIn profile",
      className:
        "border border-slate-300/80 bg-white/40 text-slate-700 hover:border-primary-400 hover:text-primary-600 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-primary-400/60 dark:hover:text-primary-200",
      icon: <LinkedInIcon />,
      external: true
    });
  }

  if (github) {
    actions.push({
      href: github.url,
      label: "View GitHub projects",
      className:
        "border border-slate-300/80 bg-white/40 text-slate-700 hover:border-primary-400 hover:text-primary-600 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-primary-400/60 dark:hover:text-primary-200",
      icon: <GitHubIcon />,
      external: true
    });
  }

  return (
    <div className="card group flex flex-col gap-6 overflow-hidden rounded-3xl p-8 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
        background: "radial-gradient(circle at center, rgba(90,134,255,0.2), transparent 70%)"
      }} />
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary-600 dark:text-slate-100 dark:group-hover:text-primary-200">
        Let's collaborate
      </h3>
      <p className="text-slate-600 transition-colors duration-300 dark:text-slate-300">
        I'm open to senior backend or full-stack roles that blend resilient Java/Spring Boot pipelines with
        MERN product layers powered by React, NodeJs, Kafka, and AWS.
      </p>
      <div className="flex flex-col items-center gap-1 text-sm text-slate-600 transition-colors duration-300 dark:text-slate-300">
        <a href={`mailto:${profile.email}`} className="font-medium text-slate-800 hover:text-primary-600 dark:text-slate-100 dark:hover:text-primary-200">
          {profile.email}
        </a>
        <a href={telHref} className="font-semibold tracking-wide text-slate-900 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-200">
          {profile.phone}
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {actions.map((action) => (
          <ContactIconButton key={action.href} {...action} />
        ))}
      </div>
    </div>
  );
}
