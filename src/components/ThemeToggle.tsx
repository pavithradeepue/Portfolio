import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full glass-card flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-lavender" />
      ) : (
        <Sun className="w-5 h-5 text-pink" />
      )}
    </button>
  );
};

export default ThemeToggle;
