import { Briefcase, Calendar } from 'lucide-react';
import { GradText, SectionTitle } from '../components/Typography.component';

export default function ExperienceSection() {

	const experiences = [
		{
			company: 'Freelance',
			role: 'Full Stack Developer',
			period: '2023 - 2025 | Present',
			description: 'Built MVP and core features for a SaaS platform, constructed the front end for a now defunct fasion site, and interfaced code with third-party software to assist users with transitioning into the software.',
			highlights: [
				'Developed secure auth back-ends for various sites from user/pass to JSON web token',
				'Built front-ends with various degrees of interactivity and accessibility while meeting design requirements',
				'Consulted with clients on best approaches for architecture, deployment, management, and migration of various web projects',
			],
		},

		{
			company: 'Planning Synergies LLC',
			role: 'Lead Software Engineer',
			period: '2022 - 2023',
			description: 'Built MVP and core features for an SaaS platform startup that had just entered into the market. Worked across both the front and back end of an abandoned monolith to bring it back to a stable and marketable MVP.',
			highlights: [
				'Breakdown of a deprecated monolithic repository into an orchestrated series of stable microservices',
				'Led transition from a deprecated Angular version to the modern version for the time',
				'Implemented a full devops environment and eliminated communication barriers between developers and designer',
				'Interviewed developers and designers to build an efficient, motivated, and cooperative team to tackle the move from MVP to final product'
			],
		},
	];

	return (
		<section id="experience" className="py-32 px-4 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

			<div className="max-w-4xl mx-auto relative z-10">
				<div
					className="text-center mb-16"
				>
					<SectionTitle>
						Work <GradText>Experience</GradText>
					</SectionTitle>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
				</div>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 hidden md:block" />

					<div className="space-y-12">
						{experiences.map((exp) => (
							<div
								key={exp.company}
								className="relative"
							>
								<div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-4 border-black hidden md:block" />

								<div className="md:ml-20 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all group">
									<div className="flex flex-wrap items-start justify-between gap-4 mb-4">
										<div>
											<h3 className="text-2xl text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
												{exp.role}
											</h3>
											<div className="flex items-center gap-2 text-gray-400">
												<Briefcase className="w-4 h-4" />
												<span>{exp.company}</span>
											</div>
										</div>
										<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
											<Calendar className="w-4 h-4" />
											<span>{exp.period}</span>
										</div>
									</div>

									<p className="text-gray-300 mb-4 leading-relaxed">
										{exp.description}
									</p>

									<ul className="space-y-2">
										{exp.highlights.map((highlight, hIndex) => (
											<li key={hIndex} className="flex items-start gap-2 text-gray-400">
												<span className="text-purple-400 mt-1">▹</span>
												<span>{highlight}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

