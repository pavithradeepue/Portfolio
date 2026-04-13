import { portfolioData } from "@/data/portfolio";
import { Heart, Facebook } from "lucide-react";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor" className={className}>
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.68,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
);

const Footer = () => (
  <footer id="contact" className="container mx-auto max-w-5xl px-4 mt-20 mb-8">
    <div className="glass-card rounded-2xl p-8 text-center">
      <h2 className="font-display text-2xl font-extrabold gradient-text">Let's Connect</h2>
      <div className="mt-6 flex justify-center flex-wrap gap-4">
        <a href={portfolioData.basics.linkedin} target="_blank" rel="noopener" className="px-5 py-2 rounded-full text-sm font-bold border border-border hover:bg-secondary transition-colors">
          LinkedIn
        </a>
        <a href={portfolioData.basics.github} target="_blank" rel="noopener" className="px-5 py-2 rounded-full text-sm font-bold border border-border hover:bg-secondary transition-colors">
          GitHub
        </a>
        {portfolioData.basics.facebook && (
          <a href={portfolioData.basics.facebook} target="_blank" rel="noopener" className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold border border-border hover:bg-secondary transition-colors">
            <Facebook className="w-4 h-4" /> Facebook
          </a>
        )}
        {portfolioData.basics.discord && (
          <a href="https://discordapp.com/users/daenerys344" target="_blank" rel="noopener" className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold border border-border hover:bg-secondary transition-colors">
            <DiscordIcon className="w-4 h-4" /> {portfolioData.basics.discord}
          </a>
        )}
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
