import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
      <nav className="glass-nav rounded-2xl px-5 py-3 flex items-center justify-between">
        <a href="#home" className="font-display text-lg font-extrabold gradient-text">
          Pavithra Deepu E
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 glass-nav rounded-2xl p-4 animate-fade-up">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
