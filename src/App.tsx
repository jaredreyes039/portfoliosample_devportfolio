import AboutSection from "./sections/About.section"
import ExperienceSection from "./sections/Experience.section"
import HeroSection from "./sections/Hero.section"
import Nav from "./sections/Nav.section"
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
				</main>
			</div>
		</>
	)
}

export default App;
