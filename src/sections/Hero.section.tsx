import { GithubIcon, MailIcon } from "lucide-react";
import { GradText, PageTitle } from "../components/Typography.component";
import { motion } from 'motion/react'

export default function HeroSection() {

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<motion.div
        			className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        			animate={{
          				scale: [1, 1.2, 1],
          				opacity: [0.3, 0.5, 0.3],
        			}}
        			transition={{
          				duration: 8,
          				repeat: Infinity,
        				ease: "easeInOut",
        			}}
      			/>
      			<motion.div
        			className="absolute bottom-24 right-24 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
        			animate={{
          				scale: [1.2, 1, 1.2],
          				opacity: [0.3, 0.5, 0.3],
        			}}
        			transition={{
          			duration: 8,
          			repeat: Infinity,
          			ease: "easeInOut",
        			}}
      			/>
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
			<motion.div 
				className="relative z-10 text-center px-4 max-w-5xl mx-auto"
				initial={{opacity: 0, y:20}}
				animate={{opacity: 1, y:0}}
				transition={{duration: 0.8}}
			>
				<motion.div
					className="inline-block mr-2  mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
					initial={{opacity: 0, scale: 0.8}}
					animate={{opacity: 1, scale: 1}}
					transition={{delay: 0.2}}
				>
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
						Available for opportunities
					</span>

				</motion.div>
				<PageTitle>
					<span className="block">Jared Reyes</span>
					<GradText>
						Web Developer
					</GradText>
				</PageTitle>
				<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
					Crafting elegant solutions with modern technologies.
					Full-stack developer specializing in React, Node.js, and cloud architecture. Ask me about my Linux config!
				</p>
				<div className="flex gap-4 justify-center mb-12">
					<motion.a 
						href="https://www.github.com/jaredreyes039" 
						className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all"
						initial={{scale: 0}}
						animate={{scale: 1}}
						transition={{delay: 0.25}}
					>
						<GithubIcon />
					</motion.a>
					<motion.a 
						href="mailto:jaredreyes039@gmail.com" 
						className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all"
						initial={{scale: 0}}
						animate={{scale: 1}}
						transition={{delay: 0.3}}
					>
						<MailIcon />
					</motion.a>
				</div>
			</motion.div>
		</section >
	)
}
