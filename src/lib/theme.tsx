"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export type Theme = "exuberant-orange" | "vintage" | "abstract" | "minimalist" | "maximalist";

export const THEMES: { id: Theme; label: string; bg: string; accent: string }[] = [
  { id: "exuberant-orange", label: "Current", bg: "#F0EDE5", accent: "#FF5C35" },
  { id: "vintage", label: "Artful Vintage", bg: "#F5F0E8", accent: "#B8860B" },
  { id: "abstract", label: "Abstract", bg: "#0A0A0F", accent: "#7B61FF" },
  { id: "minimalist", label: "Minimalist", bg: "#FFFFFF", accent: "#1A1A1A" },
  { id: "maximalist", label: "Maximalist", bg: "#FFE4F0", accent: "#FF00FF" },
];

// Full variable sets per theme — applied directly to document.documentElement.style
const THEME_VARS: Record<Theme, Record<string, string>> = {
  "exuberant-orange": {
    "--background": "#F0EDE5",
    "--foreground": "#3A3A3A",
    "--muted": "#6B6660",
    "--subtle": "#9E9890",
    "--accent": "#FF5C35",
    "--accent-light": "#FFF0EC",
    "--accent-dark": "#E04820",
    "--surface": "#E8E4DC",
  },
  vintage: {
    "--background": "#F5F0E8",
    "--foreground": "#2C2418",
    "--muted": "#7A6E5D",
    "--subtle": "#A89E8C",
    "--accent": "#B8860B",
    "--accent-light": "#F5EFE0",
    "--accent-dark": "#8B6508",
    "--surface": "#EDE6D6",
  },
  abstract: {
    "--background": "#0A0A0F",
    "--foreground": "#E8E4F0",
    "--muted": "#8888AA",
    "--subtle": "#555577",
    "--accent": "#7B61FF",
    "--accent-light": "#1A1530",
    "--accent-dark": "#5A3FE0",
    "--surface": "#14142A",
  },
  minimalist: {
    "--background": "#FFFFFF",
    "--foreground": "#1A1A1A",
    "--muted": "#999999",
    "--subtle": "#CCCCCC",
    "--accent": "#1A1A1A",
    "--accent-light": "#F5F5F5",
    "--accent-dark": "#000000",
    "--surface": "#F5F5F5",
  },
  maximalist: {
    "--background": "#FFE4F0",
    "--foreground": "#1A0033",
    "--muted": "#8B008B",
    "--subtle": "#CC44CC",
    "--accent": "#FF00FF",
    "--accent-light": "#FFF0FF",
    "--accent-dark": "#CC00CC",
    "--surface": "#FFF0B8",
  },
};

function applyThemeVars(theme: Theme) {
  const vars = THEME_VARS[theme];
  const el = document.documentElement;
  for (const [key, value] of Object.entries(vars)) {
    el.style.setProperty(key, value);
  }
  el.dataset.theme = theme;
}

type ThemeCtx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeCtx>({
  theme: "exuberant-orange",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("exuberant-orange");

  // Read persisted theme on mount and apply
  useEffect(() => {
    const saved = localStorage.getItem("w4w-theme") as Theme | null;
    if (saved && THEME_VARS[saved]) {
      setThemeState(saved);
      applyThemeVars(saved);
    }
  }, []);

  const setTheme = useCallback((t: Theme) => {
    document.documentElement.classList.add("theme-transitioning");
    applyThemeVars(t);
    setThemeState(t);
    localStorage.setItem("w4w-theme", t);

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 500);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
