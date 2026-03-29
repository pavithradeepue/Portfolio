import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./AboutSection";
import {
  SiPython, SiJavascript, SiPhp, SiHtml5, SiCss, SiReact, SiFlutter,
  SiFastapi, SiMysql, SiMongodb, SiJupyter, SiGit,
  SiPycharm
} from "react-icons/si";
import { FaJava, FaC, FaDatabase } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { Brain, Globe, Wrench } from "lucide-react";

const skillIconMap: Record<string, React.ReactNode> = {
  Python: <SiPython className="w-3.5 h-3.5" />,
  Java: <FaJava className="w-3.5 h-3.5" />,
  C: <FaC className="w-3.5 h-3.5" />,
  PHP: <SiPhp className="w-3.5 h-3.5" />,
  JavaScript: <SiJavascript className="w-3.5 h-3.5" />,
  HTML: <SiHtml5 className="w-3.5 h-3.5" />,
  CSS: <SiCss className="w-3.5 h-3.5" />,
  React: <SiReact className="w-3.5 h-3.5" />,
  Flutter: <SiFlutter className="w-3.5 h-3.5" />,
  FastAPI: <SiFastapi className="w-3.5 h-3.5" />,
  Oracle: <FaDatabase className="w-3.5 h-3.5" />,
  MySQL: <SiMysql className="w-3.5 h-3.5" />,
  MongoDB: <SiMongodb className="w-3.5 h-3.5" />,
  "API Integration": <Globe className="w-3.5 h-3.5" />,
  "Machine Learning": <Brain className="w-3.5 h-3.5" />,
  "Web Scraping": <Globe className="w-3.5 h-3.5" />,
  Jupyter: <SiJupyter className="w-3.5 h-3.5" />,
  "Git/GitHub": <SiGit className="w-3.5 h-3.5" />,
  "VS Code": <VscVscode className="w-3.5 h-3.5" />,
  PyCharm: <SiPycharm className="w-3.5 h-3.5" />,
};

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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-primary/20 bg-primary/10 text-primary"
                >
                  {skillIconMap[item] || <Wrench className="w-3.5 h-3.5" />}
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
