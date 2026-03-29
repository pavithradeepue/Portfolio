import { MapPin, GraduationCap, Phone, Linkedin, Github, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const details = () => {
  const b = portfolioData.basics;
  return [
    { icon: MapPin, label: "Location", value: b.location },
    { icon: GraduationCap, label: "Education", value: b.education },
    { icon: Phone, label: "Phone", value: b.phone },
    { icon: Mail, label: "Email", value: b.contact },
    { icon: Linkedin, label: "LinkedIn", value: b.linkedin, link: b.linkedin },
    { icon: Github, label: "GitHub", value: b.github, link: b.github },
  ];
};

const AboutSection = () => (
  <section id="about" className="container mx-auto max-w-5xl px-4 mt-20">
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="About Me" title="Basic Details" />
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {details().map((d) => (
          <div key={d.label} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
              <d.icon className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">{d.label}</p>
              {d.link ? (
                <a href={d.link} target="_blank" rel="noopener" className="text-sm font-semibold text-foreground hover:text-primary transition-colors break-all">
                  {d.value}
                </a>
              ) : (
                <p className="text-sm font-semibold text-foreground">{d.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SectionHeader = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="border-l-4 border-primary pl-4">
    <p className="text-xs font-extrabold uppercase tracking-[2px] text-primary">{eyebrow}</p>
    <h2 className="font-display text-2xl sm:text-3xl font-extrabold mt-1">{title}</h2>
  </div>
);

export default AboutSection;
