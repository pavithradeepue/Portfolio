import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  const { basics, stats } = portfolioData;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-120px] right-[-80px] w-80 h-80 rounded-full bg-pink-light opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-72 h-72 rounded-full bg-lavender-light opacity-60 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl px-4 pt-20 pb-12 text-center relative z-10">
        {/* Profile image */}
        <div className="mx-auto mb-6 w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-lg animate-fade-up">
          <img src={profileImg} alt={basics.name} className="w-full h-full object-cover" />
        </div>

        <p className="text-xs font-extrabold uppercase tracking-[3px] text-primary mb-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Portfolio 2026
        </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="gradient-text">{basics.name}</span>
        </h1>

        <p className="mt-3 text-lg sm:text-xl font-bold text-accent animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {basics.role}
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {basics.summary}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
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
        <div className="mt-6 flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a href={basics.linkedin} target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={basics.github} target="_blank" rel="noopener" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={`mailto:${basics.contact}`} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto animate-fade-up" style={{ animationDelay: "0.7s" }}>
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
