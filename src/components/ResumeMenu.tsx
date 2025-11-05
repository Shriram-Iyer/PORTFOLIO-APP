import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";

type DOMDivElement = globalThis.HTMLDivElement;
type DOMMouseEvent = globalThis.MouseEvent;
type DOMTouchEvent = globalThis.TouchEvent;
type DOMKeyboardEvent = globalThis.KeyboardEvent;
type DOMNode = globalThis.Node;

type ResumeMenuProps = {
  buttonLabel?: string;
  buttonClassName: string;
  chevronClassName?: string;
  menuClassName?: string;
  optionClassName?: string;
  align?: "left" | "right";
  onSelect?: () => void;
  listTitle?: string;
};

export function ResumeMenu({
  buttonLabel = "Download resume",
  buttonClassName,
  chevronClassName = "ml-2 h-4 w-4 transition-transform duration-200",
  menuClassName = "",
  optionClassName = "",
  align = "left",
  onSelect,
  listTitle
}: ResumeMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<DOMDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: DOMMouseEvent | DOMTouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as DOMNode)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: DOMKeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleToggle() {
    setIsOpen((previous) => !previous);
  }

  function handleOptionSelect() {
    setIsOpen(false);
    onSelect?.();
  }

  const resumeOptions = profile.resumes ?? [];
  if (resumeOptions.length === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={handleToggle}
        className={`${buttonClassName} inline-flex items-center justify-center gap-2`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <span>{buttonLabel}</span>
        <svg
          className={`${chevronClassName} ${isOpen ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.129l3.71-2.9a.75.75 0 1 1 .92 1.18l-4.18 3.264a.75.75 0 0 1-.92 0L5.21 8.41a.75.75 0 0 1 .02-1.2z" />
        </svg>
      </button>

      {isOpen ? (
        <div
          role="menu"
          className={`absolute z-40 mt-2 min-w-[220px] rounded-2xl border border-white/70 bg-white/95 p-2 text-left shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/95 ${
            align === "right" ? "right-0" : "left-0"
          } ${menuClassName}`}
        >
          {listTitle ? (
            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500/80 dark:text-slate-300/70">
              {listTitle}
            </p>
          ) : null}
          <div className="space-y-1">
            {resumeOptions.map((resume) => (
              <a
                key={resume.id}
                href={resume.url}
                title={resume.summary}
                className={`flex items-start gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100/80 hover:text-[#5a86ff] dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-primary-200 ${optionClassName}`}
                onClick={handleOptionSelect}
              >
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#5a86ff] to-[#ff7f50]" />
                <span>
                  {resume.label}
                  <span className="block text-xs font-normal text-slate-500 dark:text-slate-400">{resume.summary}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
