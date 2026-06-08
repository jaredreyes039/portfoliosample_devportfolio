import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import clientStackMicroserviceSampleThumbnail from '../assets/thumbnails/clientStack_microserviceSample_thumbnail.png';
import clientStackProductSiteThumbnail from '../assets/thumbnails/clientStack_productsite_thumbnail.png';
import clientStackSassSampleThumbnail from '../assets/thumbnails/clientStack_SASS_sample_thumbnail.png';
import clientstackLogo from '../assets/stack_icons/logo512.png';


export default function ProjectsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const projects = [
		{
			title: 'Auth Service Sample: ClientStack Auth',
			description: 'Full-stack sample OAuth Signup/Signin page following OpenID standard, implementing a user notification pipeline as well as an auth proxy gateway ready for integration with a larger microservice or microkernel architecture.',
			image: clientStackMicroserviceSampleThumbnail,
			logo: clientstackLogo,
			tags: ['Microservice', 'Vite w/ Tanstack Router', 'Node.js', 'PostgreSQL', 'ExpressJS', 'PassportJS', 'OIDC', 'JWT', 'AWS API Gateway', 'AWS EC2', 'Swagger API Docs', 'OpenAPI', 'Nginx', 'Redis', 'Log Aggregation'],
			github: 'https://github.com/jaredreyes039/ClientStack',
			live: 'https://clientstack.org',
		},
		{
			title: 'UI/UX Design Sample: ClientStack SASS Product [Coming Soon...]',
			description: '',
			image: clientStackProductSiteThumbnail,
			tags: ['UI/UX Design', 'Vite', 'Landing Page', 'TailwindCSS', 'AWS Amplify', 'SEO Optimization'],
			github: '#',
			live: '#',
		},
		{
			title: 'SASS Product w/ Microservice Backend: [Coming Soon...]',
			description: '',
			image: clientStackSassSampleThumbnail,
			tags: ['NodeJS', 'ExpressJS', '', ''],
			github: '#',
			live: '#',
		},
	];

	return (
		<section id="projects" className="py-16 px-4 relative overflow-hidden">
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
					<div className="w-20 mb-6 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
					<p className="text-xl text-gray-300 max-w-2xl mx-auto">
						Check out these prebuilt samples demonstrating my experience with various infrastructures, challenges,and technologies.	
					</p>

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
								{project.logo ?
									<img className="absolute bottom-2 right-2 w-8 h-8" src={project.logo} />
									:
									<></>
								}
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
									>
										<Github className="w-5 h-5 text-white" />
									</a>
									<a
										href={project.live}
										className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
									>
										<ExternalLink className="w-5 h-5 text-white" />
									</a>
								</motion.div>
							</div>

							{/* Project info */}
							<div className="p-6">
								<a href={project.live}>
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
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

