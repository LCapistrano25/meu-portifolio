import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection birthDate="2005-02-25" />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  );
}

export default App;
