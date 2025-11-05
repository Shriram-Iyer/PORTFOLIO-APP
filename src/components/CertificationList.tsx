import { certifications } from "../data/certifications";

export function CertificationList() {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {certifications.map((certification) => (
        <li key={`${certification.name}-${certification.issued}`} className="card group h-full overflow-hidden rounded-3xl p-6 text-left">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
            background: "linear-gradient(135deg, rgba(58,100,255,0.18), rgba(255,127,80,0.15))"
          }} />
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary-600 dark:text-slate-100 dark:group-hover:text-primary-200">
                {certification.name}
              </h3>
              <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
                {certification.issuer}
              </p>
            </div>
            <div className="text-right text-xs font-semibold uppercase tracking-widest text-primary-600 transition-colors duration-300 dark:text-primary-200">
              <span>{certification.issued}</span>
              {certification.expires ? (
                <span className="block text-[0.65rem] text-slate-500 dark:text-slate-400">Exp. {certification.expires}</span>
              ) : null}
            </div>
          </div>
          {certification.credentialId ? (
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary-400/40 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-600 transition-colors duration-300 dark:border-primary-400/40 dark:bg-primary-400/10 dark:text-primary-100">
              Credential ID: {certification.credentialId}
            </p>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500 transition-colors duration-300 dark:text-slate-400">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 font-medium shadow-neon-subtle transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
