import AboutSection from "./sections/About.section"
import { ContactSection } from "./sections/ContactMe.section"
import ExperienceSection from "./sections/Experience.section"
import FooterSection from "./sections/Footer.section"
import HeroSection from "./sections/Hero.section"
import Nav from "./sections/Nav.section"
import ProjectsSection from "./sections/Projects.section"
import SkillsSection from "./sections/Skills.section"

function App() {

	return (
		<>
			<div className="min-h-screen bg-black text-white">
				<Nav />
				<main>
					<HeroSection />
					<AboutSection />
					<SkillsSection />
					<ExperienceSection />
					<ProjectsSection />
					<ContactSection />
					<FooterSection />
				</main>
			</div>
		</>
	)
}

export default App;
