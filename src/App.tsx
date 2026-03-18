import HeroSection from "./sections/Hero.section"
import Nav from "./sections/Nav.section"

function App() {

	return (
		<>
			<div className="min-h-screen bg-black text-white">
				<Nav />
				<main>
					<HeroSection />
				</main>
			</div>
		</>
	)
}

export default App
