/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState, type ReactNode } from "react";
import ThemeContext, { type Theme, type ThemeContextValue } from "./ThemeContext";

const STORAGE_KEY = "portfolio-theme";

type BrowserGlobals = typeof globalThis & {
  document?: any;
  matchMedia?: any;
  localStorage?: any;
};

function getBrowserGlobals() {
  if (typeof globalThis === "undefined") {
    return undefined;
  }

  const candidate = globalThis as BrowserGlobals;
  if (!candidate.document || !candidate.matchMedia) {
    return undefined;
  }

  return candidate;
}

function resolveTheme(): Theme {
  const browser = getBrowserGlobals();
  if (!browser) {
    return "dark";
  }

  const stored = browser.localStorage?.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return browser.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => resolveTheme());

  useEffect(() => {
    const browser = getBrowserGlobals();
    if (!browser) {
      return;
    }

    const root = browser.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    browser.localStorage?.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const browser = getBrowserGlobals();
    if (!browser) {
      return undefined;
    }

    const mediaQuery = browser.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: { matches: boolean }) => {
      const stored = browser.localStorage?.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") {
        return;
      }
      setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const value: ThemeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((prev) => (prev === "light" ? "dark" : "light")),
      setTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
