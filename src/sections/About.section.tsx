import { Code2, Sparkles, Zap } from "lucide-react";
import { GradText, SectionTitle } from "../components/Typography.component";
import portrait from "../assets/Portrait_Jay.jpg"
import {motion} from 'motion/react'
import { useInView } from "motion/react";	
import { useRef } from "react";	

export default function AboutSection() {

	const ref = useRef(null);
  	const isInView = useInView(ref, { once: true, margin: "-100px" });

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
		<section id="about" className="py-16 overflow-hidden relative px-4 ">
			<div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-cyan-900/20" />
			<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-purple-950/10 to-black/20" />
			<div className="max-w-6xl mx-auto relative z-10" ref={ref}>
			 <motion.div
				key={"aboutTitle"}
          			initial={{ opacity: 0.01, y: 30 }}
          			animate={isInView ? { opacity: 1, y: 0 } : {}}
          			transition={{ duration: 0.6 }}
          			className="text-center mb-16"
        			>
					<SectionTitle>
						About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"><GradText>Me</GradText></span>
					</SectionTitle>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center mb-20">
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
						<img
							src={portrait} alt="Workspace"
							className="filter grayscale relative rounded-2xl object-top w-full md:h-128 object-cover border border-white/10"
						/>
					</div>

					<div className="space-y-6">
						<p className="text-lg text-gray-300 leading-relaxed">
							Hi, I’m Jared, a full stack software engineer specializing in application modernization, cloud infrastructure, and DevOps. I build scalable web applications and backend systems using React, TypeScript, Node.js, Linux, and modern CI/CD workflows, with a focus on performance, maintainability, and developer experience.
						</p>
						<p className="text-lg text-gray-300 leading-relaxed">
							After stepping away from the industry to serve as a family caregiver, I returned with a renewed focus on modern web technologies, clean architecture, and efficient tooling. I’m driven by continuous learning, curiosity, and building scalable, maintainable systems.
						</p>
						
					</div>

				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{features.map((feature, idx) => (
						<motion.div
							key={feature.title + idx}
							initial={{ opacity: 0.01, y: 30 }}
              						animate={isInView ? { opacity: 1, y: 0 } : {}}
              						transition={{ duration: 1, delay: 0.4 + idx * 0.1 }}
							className="[clip-path:var(--card-clip)] p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 group"
						>
							<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110">
								<feature.icon className="w-6 h-6 text-purple-400" />
							</div>
							<h3 className="text-xl mb-2 text-white">{feature.title}</h3>
							<p className="text-gray-400">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
