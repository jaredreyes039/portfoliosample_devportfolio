import { Briefcase, Calendar } from 'lucide-react';
import { GradText, SectionTitle } from '../components/Typography.component';
import {motion, useInView} from 'motion/react'
import { useRef } from 'react';

export default function ExperienceSection() {

	const ref = useRef(null);
	const isInView = useInView(ref, {once: true, margin: '-100px'})

	const WORK_EXPERIENCE = [
		{
			company: 'Freelance',
			role: 'Full Stack Developer',
			period: '2022 - Present',
			description: 'Built MVP and core features for a SaaS platform, constructed the front end for a now defunct fasion site, and interfaced code with third-party software to assist users with transitioning into the software.',
			highlights: [
				"Led the recovery and modernization of an abandoned startup MVP, successfully migrating the application from Angular 13 to Angular 15 and helping secure a six-figure investment following the platform overhaul.",
"Designed, deployed, and maintained secure backend infrastructure and server environments across multiple frameworks, languages, and cloud platforms for startups, small businesses, and independent clients.",
"Configured, administered, and optimized Linux-based systems for both client environments and personal development infrastructure.",
"Built and managed a complete DevOps pipeline using Azure DevOps, including CI/CD workflows, release management, and collaborative development processes.",
"Conducted technical interviews, coordinated development efforts, and led a team of engineers to continue long-term MVP development beyond the initial contract engagement.",
"Configured and orchestrated Azure services including Azure Virtual Machines, SQL Server, App Services, Web Apps, Private Endpoints, Cosmos DB, MariaDB, and Azure DevOps integrations.",
"Implemented responsive, pixel-perfect user interfaces across multiple platforms while maintaining strong usability, accessibility, and performance standards.",
"Collaborated with internal UI/UX teams to accurately translate design systems and mockups into production-ready frontend implementations.",
"Developed custom plugins, templates, and workflow enhancements for productivity and note-taking platforms to improve user efficiency and experience."
			],
		}
	];

	return (
		<section id="experience" className="py-16 px-4 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

			<div className="max-w-4xl mx-auto relative z-10" ref={ref}>
				<motion.div
					key={"experienceTitle"}
					initial={{opacity: 0.01, y: 30}}
					animate={isInView ? {opacity: 1, y: 0}:{}}
					transition={{duration: 0.6}}
					className="text-center mb-16"
				>
					<SectionTitle>
						Work <GradText>Experience</GradText>
					</SectionTitle>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
				</motion.div>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 hidden md:block" />

					<div className="space-y-12">
						{WORK_EXPERIENCE.map((exp, idx) => (
							<motion.div
								key={exp.company + idx}
								initial={{opacity: 0.01, y: 30}}
								animate={isInView? {opacity: 1, y:0} : {}}
								transition={{duration: 0.6}}
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
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

