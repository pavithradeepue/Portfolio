import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./AboutSection";
import { Trophy } from "lucide-react";

const AchievementsSection = () => (
  <section id="achievements" className="container mx-auto max-w-5xl px-4 mt-16">
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Milestones" title="Achievements & Hackathons" />
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {portfolioData.achievements.map((a) => (
          <div
            key={a.title}
            className="rounded-xl bg-secondary/50 p-5 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--gradient-accent)" }} />
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-accent/20">
                <Trophy className="w-4 h-4 text-accent" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-primary">{a.date}</span>
                <h3 className="font-display text-sm font-bold mt-0.5">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{a.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
