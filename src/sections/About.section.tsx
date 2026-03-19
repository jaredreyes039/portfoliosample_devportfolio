import { Code2, Sparkles, Zap } from "lucide-react";
import { GradText, SectionTitle } from "../components/Typography.component";

export default function AboutSection() {
	const features = [
		{
			icon: Code2,
			title: 'Clean Code',
			description: 'Writing maintainable, scalable solutions',
		},
		{
			icon: Sparkles,
			title: 'Modern Stack',
			description: 'Leveraging cutting-edge technologies',
		},
		{
			icon: Zap,
			title: 'Performance',
			description: 'Optimized for speed and efficiency',
		},
	];

	return (
		<section id="about" className="py-32 overflow-hidden relative px-4">
			<div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
			<div className="max-w-6xl mx-auto relative z-10">
				<div
					className="text-center mb-16"
				>
					<SectionTitle>
						About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"><GradText>Me</GradText></span>
					</SectionTitle>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center mb-20">
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
						<img
							src="https://images.unsplash.com/photo-1646153389640-958d7ba1a864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNDY2NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
							alt="Workspace"
							className="relative rounded-2xl w-full h-96 object-cover border border-white/10"
						/>
					</div>

					<div className="space-y-6">
						<p className="text-lg text-gray-300 leading-relaxed">
							Hey! I'm a software engineer with <strong className="text-white">4+ years</strong> of experience building
							web applications that go beyond user expectations. I specialize in creating performant, accessible,
							and stable web experiences.
						</p>
						<p className="text-lg text-gray-300 leading-relaxed">
							Currently focused on <strong className="text-white">React, TypeScript, and Node.js</strong>, I'm passionate
							about clean architecture, developer experience, and staying on the cutting edge
							of web technologies.
						</p>
						<p className="text-lg text-gray-300 leading-relaxed">
							When I'm not coding, you'll find me in my family caregiver role, working on my <strong className="text-white">linux</strong> homelab and embedded projects, or exploring new frameworks and tools.
						</p>
					</div>

				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all group"
						>
							<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
								<feature.icon className="w-6 h-6 text-purple-400" />
							</div>
							<h3 className="text-xl mb-2 text-white">{feature.title}</h3>
							<p className="text-gray-400">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
