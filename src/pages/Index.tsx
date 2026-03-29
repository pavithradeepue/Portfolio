import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
};

export default Index;
