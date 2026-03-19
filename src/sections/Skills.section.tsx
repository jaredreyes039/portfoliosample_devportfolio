export default function SkillsSection() {

	const skillCategories = [
		{
			category: 'Frontend',
			skills: [
				{ name: 'Tanstack React w/ Vite', level: 100 },
				{ name: 'TypeScript', level: 90 },
				{ name: 'Next.js', level: 88 },
				{ name: 'Tailwind CSS', level: 92 },
			],
			gradient: 'from-purple-500 to-pink-500',
		},
		{
			category: 'Backend',
			skills: [
				{ name: 'Node.js', level: 90 },
				{ name: 'PostgreSQL', level: 85 },
				{ name: 'ExpressJS', level: 82 },
				{ name: 'MongoDB', level: 80 },
			],
			gradient: 'from-cyan-500 to-blue-500',
		},
		{
			category: 'CI/CD & Cloud',
			skills: [
				{ name: 'Docker', level: 87 },
				{ name: 'Azure (IaaS & SaaS)', level: 83 },
				{ name: 'AWS (IaaS & SaaS)', level: 15 },
				{ name: 'Kubernetes', level: 25 },
			],
			gradient: 'from-green-500 to-emerald-500',
		},
	];

	return (
		<section id="skills" className="py-32 px-4 relative overflow-hidden">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
				<div className="absolute inset-0 opacity-10" style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
					backgroundSize: '50px 50px',
				}} />
			</div>

			<div className="max-w-6xl mx-auto relative z-10" >
				<div
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl mb-4 text-white">
						Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Stack</span>
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{skillCategories.map((category) => (
						<div
							key={category.category}
							className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
						>
							<h3 className={`text-2xl mb-6 text-transparent bg-clip-text bg-gradient-to-r ${category.gradient}`}>
								{category.category}
							</h3>
							<div className="space-y-6">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between mb-2">
											<span className="text-gray-300">{skill.name}</span>
											<span className="text-gray-400">{skill.level}%</span>
										</div>
										<div className="h-2 bg-white/5 rounded-full overflow-hidden">
											<div
												style={{ "--custom-width": skill.level + '%' } as React.CSSProperties}
												className={`h-full w-(--custom-width) bg-gradient-to-r ${category.gradient} rounded-full`}
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Additional tools */}
				<div
					className="mt-12 text-center"
				>
					<p className="text-gray-400 mb-4">Also experienced with:</p>
					<div className="flex flex-wrap justify-center gap-3">
						{['Git', 'Linux', 'Jest', 'Redux', 'Webpack', 'Yup', 'Scripting', 'Python', 'Microservices', 'GraphQL', 'OAuth', 'REST APIs', 'Figma', 'Gatsby', 'Storybook'].map((tool) => (
							<span
								key={tool}
								className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-purple-400/50 hover:bg-white/10 transition-all"
							>
								{tool}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

