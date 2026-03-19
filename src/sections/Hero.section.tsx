import { GithubIcon, MailIcon } from "lucide-react";
import { GradText, PageTitle } from "../components/Typography.component";


export default function HeroSection() {

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
			<div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
				<div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
						Available for opportunities
					</span>
				</div>
				<PageTitle>
					<span className="block">Jared Reyes</span>
					<GradText>
						Software Engineer
					</GradText>
				</PageTitle>
				<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
					Crafting elegant solutions with modern technologies.
					Full-stack developer specializing in React, Node.js, and cloud architecture.
				</p>
				<div className="flex gap-4 justify-center mb-12">
					<a href="https://www.github.com/jaredreyes039" className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all">
						<GithubIcon />
					</a>
					<a href="mailto:jaredreyes039@gmail.com" className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all">
						<MailIcon />
					</a>
				</div>
			</div>
		</section >
	)
}
