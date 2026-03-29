import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./AboutSection";

const SkillsSection = () => (
  <section id="skills" className="container mx-auto max-w-5xl px-4 mt-16">
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Capability" title="Skills" />
      <div className="grid sm:grid-cols-2 gap-5 mt-6">
        {portfolioData.skills.map((group) => (
          <div key={group.title} className="rounded-xl bg-secondary/50 p-5 hover:bg-secondary transition-colors">
            <h3 className="font-display text-base font-bold mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
