import { portfolioData } from "@/data/portfolio";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="container mx-auto max-w-5xl px-4 mt-20 mb-8">
    <div className="glass-card rounded-2xl p-8 text-center">
      <h2 className="font-display text-2xl font-extrabold gradient-text">Let's Connect</h2>
      <p className="mt-2 text-muted-foreground">{portfolioData.basics.contact}</p>
      <div className="mt-6 flex justify-center gap-4">
        <a href={portfolioData.basics.linkedin} target="_blank" rel="noopener" className="px-5 py-2 rounded-full text-sm font-bold border border-border hover:bg-secondary transition-colors">
          LinkedIn
        </a>
        <a href={portfolioData.basics.github} target="_blank" rel="noopener" className="px-5 py-2 rounded-full text-sm font-bold border border-border hover:bg-secondary transition-colors">
          GitHub
        </a>
        <a href={`mailto:${portfolioData.basics.contact}`} className="px-5 py-2 rounded-full text-sm font-bold text-primary-foreground transition-colors" style={{ background: "var(--gradient-primary)" }}>
          Email Me
        </a>
      </div>
      <p className="mt-8 text-xs text-muted-foreground flex items-center justify-center gap-1">
        © {new Date().getFullYear()} {portfolioData.basics.name}. Made with <Heart className="w-3 h-3 text-primary" /> All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
