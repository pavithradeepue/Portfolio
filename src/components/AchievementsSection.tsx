import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./AboutSection";
import { Trophy } from "lucide-react";

const AchievementsSection = () => (
  <section id="achievements" className="container mx-auto max-w-5xl px-4 mt-16">
    {/* Hackathons & Achievements */}
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

    {/* Leadership Roles */}
    <div className="glass-card rounded-2xl p-6 sm:p-8 mt-8">
      <SectionHeader eyebrow="Leadership" title="Roles & Responsibilities" />
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {portfolioData.leadershipRoles.map((role) => (
          <div
            key={role.title}
            className="rounded-xl bg-secondary/50 p-5 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--gradient-primary)" }} />
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-xl" style={{ background: "var(--gradient-primary)" }}>
                <span className="text-primary-foreground text-xs font-extrabold">{role.org.split(",")[0].slice(0, 4)}</span>
              </div>
              <div>
                <span className="text-xs font-extrabold text-primary">{role.period}</span>
                <h3 className="font-display text-sm font-bold mt-0.5">{role.title}</h3>
                <p className="text-xs font-semibold text-accent mt-0.5">{role.org}</p>
                <p className="text-sm text-muted-foreground mt-1">{role.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
