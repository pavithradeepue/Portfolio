import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./AboutSection";
import { Award } from "lucide-react";

const CertificationsSection = () => (
  <section id="certifications" className="container mx-auto max-w-5xl px-4 mt-16">
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Learning" title="Certifications" />
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {portfolioData.certifications.map((c) => (
          <div
            key={c.name}
            className="flex items-start gap-3 rounded-xl bg-secondary/50 p-5 hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-accent)" }}>
              <Award className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold">{c.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{c.issuer} · {c.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
