import {motion, useInView} from 'motion/react'
import Counter from '../components/Counter.component';	
import { useRef } from 'react';
import ScrollVelocity from '../components/ScrollVelocity.component';

export default function SkillsSection() {

	const ref = useRef(null);
	let isInView = useInView(ref, {once: true, margin: "-100px"});

	const TOOLS_ARR = ['Git', 'Linux', 'Jest', 'Redux', 'Scripting', 'Python', 'Microservices', 'GraphQL', 'OAuth', 'REST APIs', 'Figma', 'Gatsby', 'Storybook'];
	const SKILLS_ARR = [
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
				{ name: 'Microservice Architecture', level: 87 },
				{ name: 'Cloud Services (AWS/Azure)', level: 83 },
				{ name: 'Docker & Kubernetes', level: 65 },
			],
			gradient: 'from-green-500 to-emerald-500',
		},
	];

	return (
		<section id="skills" className="relative py-16 px-4 flex items-center justify-center overflow-hidden">
				<ScrollVelocity
				texts={["Frontend Frameworks", "Microservice Architecture", "Cloud Infrastructure", "RESTful APIs"]}
				velocity={25}
				className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-[0.1]"
				numCopies={4}
				damping={500}
				stiffness={300}
			/>
			<div className="max-w-6xl mx-auto relative z-10" ref={ref}>
			
				<motion.div
					key={"skillsTitle"}
					initial={{opacity: 0.01, y: 30}}
					animate={isInView? {opacity: 1, y:0} : {}}
					transition={{duration: 0.6}}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl mb-4 text-white">
						Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Stack</span>
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{SKILLS_ARR.map((category) => (
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
											{isInView ? <span className="text-gray-400">
												<Counter
													to={skill.level}
													from={0}
													separator=','
													direction='up'
													duration={1}
													delay={0}
												></Counter>%
											</span> : <></>}
										</div>
										<div className="h-2 bg-white/5 rounded-full overflow-hidden">
											<div
												style={{ "width": skill.level + '%' } as React.CSSProperties}
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
						{TOOLS_ARR.map((tool, idx) => (
							<motion.span
								key={tool}
								initial={{opacity: 0.01}}
								animate={isInView? {opacity: 1}:{}}
								transition={{duration: 0.6, delay: idx/10}}
								className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-purple-400/50 hover:bg-white/10 "
							>
								{tool}
							</motion.span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

