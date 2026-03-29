import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./AboutSection";
import { Award, ExternalLink } from "lucide-react";

const CertificationsSection = () => (
  <section id="certifications" className="container mx-auto max-w-5xl px-4 mt-16">
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Learning" title="Certifications" />
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {portfolioData.certifications.map((c) => (
          <a
            key={c.name}
            href={c.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 rounded-xl bg-secondary/50 p-5 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-accent)" }}>
              <Award className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-sm font-bold">{c.name}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{c.issuer} · {c.year}</p>
            </div>
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4 text-center">Click on any certification to view the certificate</p>
    </div>
  </section>
);

export default CertificationsSection;
