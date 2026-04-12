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
            download
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
    </div>

    {/* Event Participations */}
    {portfolioData.eventParticipations && portfolioData.eventParticipations.length > 0 && (
      <div className="glass-card rounded-2xl p-6 sm:p-8 mt-8">
        <SectionHeader eyebrow="Community" title="Event Participations" />
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {portfolioData.eventParticipations.map((e) => (
            <a
              key={e.name}
              href={e.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group flex items-start gap-3 rounded-xl bg-secondary/50 p-5 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
                <Award className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-sm font-bold">{e.name}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{e.role} · {e.year}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    )}

    {/* Other Documents */}
    {portfolioData.otherDocuments && portfolioData.otherDocuments.length > 0 && (
      <div className="glass-card rounded-2xl p-6 sm:p-8 mt-8">
        <SectionHeader eyebrow="Credentials" title="Awards & Academic Records" />
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {portfolioData.otherDocuments.map((doc) => (
            <a
              key={doc.name}
              href={doc.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group flex items-start gap-3 rounded-xl bg-secondary/50 p-5 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-accent)" }}>
                <Award className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-sm font-bold">{doc.name}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{doc.issuer} · {doc.year}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    )}
  </section>
);

export default CertificationsSection;
