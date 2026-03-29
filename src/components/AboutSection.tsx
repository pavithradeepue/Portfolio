import { MapPin, GraduationCap, Phone, Mail, Linkedin, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const AboutSection = () => {
  const b = portfolioData.basics;

  const infoItems = [
    { icon: MapPin, label: "Location", value: b.location },
    { icon: GraduationCap, label: "Education", value: b.education },
    { icon: Phone, label: "Phone", value: b.phone },
    { icon: Mail, label: "Email", value: b.contact },
  ];

  const socialItems = [
    { icon: Linkedin, label: "LinkedIn", href: b.linkedin },
    { icon: Github, label: "GitHub", href: b.github },
  ];

  return (
    <section id="about" className="container mx-auto max-w-5xl px-4 mt-20">
      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <SectionHeader eyebrow="About Me" title="Basic Details" />
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {infoItems.map((d) => (
            <div key={d.label} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
                <d.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">{d.label}</p>
                <p className="text-sm font-semibold text-foreground">{d.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social icons row */}
        <div className="flex gap-3 mt-5">
          {socialItems.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              aria-label={s.label}
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SectionHeader = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="border-l-4 border-primary pl-4">
    <p className="text-xs font-extrabold uppercase tracking-[2px] text-primary">{eyebrow}</p>
    <h2 className="font-display text-2xl sm:text-3xl font-extrabold mt-1">{title}</h2>
  </div>
);

export default AboutSection;
