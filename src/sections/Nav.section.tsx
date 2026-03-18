import { useState, useEffect } from 'react';
import { GradText } from '../components/Typography.component';
import { MenuIcon, XIcon } from 'lucide-react';

export default function Nav() {

	const SECTIONS: string[][] = [
		["About", "#about"],
		["Skills", "#skills"],
		["Experience", "#experience"],
		["Projects", "#projects"],
		["Contact", "#contact"]
	];
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<>
			<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
				? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
				: 'bg-transparent'
				}`}>
				<div className="max-w-7xl mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<a className="text-2xl text-white" href="#">
							<GradText>JR</GradText>
						</a>
						<div className="hidden md:flex items-center gap-8">
							{SECTIONS.map((section) => {
								return (
									<a href={section[1]} className="text-gray-300 hover:text-white cursor-pointer transition-colors relative group">
										{section[0]}
										<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />

									</a>
								)
							})}
							<a href="#contact" className="cursor-pointer px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 transition-all">
								Hire Me
							</a>
						</div>
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden p-2 text-white cursor-pointer"
						>
							{isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</nav>

			<div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden ${!isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}>
				<div className="flex flex-col items-center justify-center h-full gap-8">
					{SECTIONS.map((section) => {
						return (
							<a href={section[1]} className="text-gray-300 hover:text-white cursor-pointer transition-colors relative group">
								{section[0]}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />

							</a>
						)
					})}
					<a
						href="#contact"
						onClick={() => setIsMobileMenuOpen(false)}
						className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xl"
					>
						Hire Me
					</a>
				</div>
			</div>
		</>
	)
}
