import { ArrowDown, Download, Github, Linkedin, Mail, Facebook } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import profileImg from "@/assets/profile.jpg";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor" className={className}>
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.68,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
);

const HeroSection = () => {
  const { basics, stats } = portfolioData;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-120px] right-[-80px] w-80 h-80 rounded-full bg-pink-light opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-72 h-72 rounded-full bg-lavender-light opacity-60 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl px-4 pt-20 pb-12 text-center relative z-10">
        {/* Profile image */}
        <div className="mx-auto mb-6 w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-lg animate-fade-up">
          <img src={profileImg} alt={basics.name} className="w-full h-full object-cover" />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="gradient-text">{basics.name}</span>
        </h1>

        <p className="mt-3 text-lg sm:text-xl font-bold text-accent animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {basics.role}
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {basics.summary}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: "var(--gradient-primary)" }}
          >
            View Projects <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href={basics.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border border-border bg-card text-foreground hover:bg-secondary transition-all duration-300 hover:scale-105"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>

        {/* Social links */}
        <div className="mt-6 flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a href={basics.linkedin} target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={basics.github} target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
          </a>
          {basics.facebook && (
            <a href={basics.facebook} target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          )}
          {basics.discord && (
            <a href="https://discordapp.com/users/daenerys344" target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover-blink" title={`Discord: ${basics.discord}`}>
              <DiscordIcon className="w-4 h-4" />
            </a>
          )}
          <a href={`mailto:${basics.contact}`} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-4 text-center">
              <div className="text-2xl font-display font-extrabold gradient-text">{s.value}</div>
              <div className="text-xs font-semibold text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
