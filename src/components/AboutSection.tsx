import { MapPin, GraduationCap, Phone, Mail, Linkedin, Github, Facebook } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor" className={className}>
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.68,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
);

const AboutSection = () => {
  const b = portfolioData.basics;

  const infoItems = [
    { icon: MapPin, label: "Location", value: b.location },
    { icon: GraduationCap, label: "Education", value: b.education },
    { icon: Phone, label: "Phone", value: b.phone },
    { icon: Mail, label: "Email", value: b.contact },
  ];

  const socialItems = [];
  if (b.linkedin) socialItems.push({ icon: Linkedin, label: "LinkedIn", href: b.linkedin });
  if (b.github) socialItems.push({ icon: Github, label: "GitHub", href: b.github });
  if (b.facebook) socialItems.push({ icon: Facebook, label: "Facebook", href: b.facebook });
  if (b.discord) socialItems.push({ icon: DiscordIcon, label: `Discord: ${b.discord}`, href: "https://discordapp.com/users/" + b.discord });

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
              title={s.label}
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
