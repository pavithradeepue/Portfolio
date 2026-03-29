import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./AboutSection";

const ProjectsSection = () => (
  <section id="projects" className="container mx-auto max-w-5xl px-4 mt-16">
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Work" title="Projects" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {portfolioData.projects.map((p) => (
          <div
            key={p.name}
            className="group rounded-xl bg-secondary/50 p-5 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ background: "var(--gradient-primary)" }} />
            <h3 className="font-display text-sm font-bold mt-1">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.description}</p>
            <p className="mt-3 text-xs font-bold text-primary">{p.stack}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
