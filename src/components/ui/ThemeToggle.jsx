import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import "./ui.css";

const STORAGE_KEY = "rws-theme";

function getInitialTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  }, [theme]);

  /* Keep every toggle on the page in sync (desktop nav + mobile drawer) */
  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(getInitialTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="theme-toggle-icon"
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
