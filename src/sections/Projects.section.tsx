import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const projects = [
		{
			title: 'OAuth Sign-in and Signup | Freelance Pro',
			description: 'Full-stack sample OAuth Signup/Signin page following OpenID standards in a secure NodeJS & ExpressJS backend environment connected to an SQL store.',
			image: 'https://images.unsplash.com/photo-1587522630593-3b9e5f3255f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwc2V0dXB8ZW58MXx8fHwxNzcxMzYzNzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
			tags: ['React w/ Tanstack Router', 'Node.js', 'PostgreSQL', 'ExpressJS', 'PassportJS & OAuth', 'JSWT'],
			github: '#',
			live: '#',
		},
		{
			title: 'Coming Soon...',
			description: '',
			image: 'https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTQ2NjU2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
			tags: ['', '', '', ''],
			github: '#',
			live: '#',
		},
		{
			title: 'Coming Soon...',
			description: '',
			image: 'https://images.unsplash.com/photo-1646153389640-958d7ba1a864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxNDY2NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
			tags: ['', '', '', ''],
			github: '#',
			live: '#',
		},
	];

	return (
		<section id="projects" className="py-32 px-4 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

			<div className="max-w-6xl mx-auto relative z-10" ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl mb-4 text-white">
						Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Samples</span>
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all"
						>
							{/* Project image */}
							<div className="relative h-48 overflow-hidden">
								<motion.img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover"
									animate={{
										scale: hoveredIndex === index ? 1.1 : 1,
									}}
									transition={{ duration: 0.4 }}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

								{/* Links overlay */}
								<motion.div
									className="absolute inset-0 flex items-center justify-center gap-4"
									initial={{ opacity: 0 }}
									animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<a
										href={project.github}
										className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
										onClick={(e) => e.preventDefault()}
									>
										<Github className="w-5 h-5 text-white" />
									</a>
									<a
										href={project.live}
										className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
										onClick={(e) => e.preventDefault()}
									>
										<ExternalLink className="w-5 h-5 text-white" />
									</a>
								</motion.div>
							</div>

							{/* Project info */}
							<div className="p-6">
								<h3 className="text-xl mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
									{project.title}
								</h3>
								<p className="text-gray-400 text-sm mb-4 leading-relaxed">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

