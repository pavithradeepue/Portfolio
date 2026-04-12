import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <RevealOnScroll direction="up" delay={60}>
        <AboutSection />
      </RevealOnScroll>
      <RevealOnScroll direction="left" delay={90}>
        <SkillsSection />
      </RevealOnScroll>
      <RevealOnScroll direction="right" delay={90}>
        <ProjectsSection />
      </RevealOnScroll>
      <RevealOnScroll direction="left" delay={90}>
        <AchievementsSection />
      </RevealOnScroll>
      <RevealOnScroll direction="right" delay={90}>
        <CertificationsSection />
      </RevealOnScroll>
      <RevealOnScroll direction="up" delay={120}>
        <Footer />
      </RevealOnScroll>
    </div>
  );
};

export default Index;
