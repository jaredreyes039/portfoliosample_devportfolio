import { motion } from 'motion/react';
import { Github, Mail, Heart } from 'lucide-react';

export default function FooterSection() {
	const socialLinks = [
		{ icon: Github, href: '#', label: 'GitHub' },
		{ icon: Mail, href: '#contact', label: 'Email' },
	];

	return (
		<footer className="relative py-12 px-4 border-t border-white/10">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-black to-purple-950/20" />

			<div className="max-w-6xl mx-auto relative z-10">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					{/* Logo/Name */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center md:text-left"
					>
						<h3 className="text-2xl mb-2">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
								Jared Reyes
							</span>
						</h3>
						<p className="text-gray-400 text-sm">Passionate Web Developer</p>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="flex gap-4"
					>
						{socialLinks.map((social) => (
							<motion.a
								key={social.label}
								href={social.href}
								className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all"
								whileHover={{ scale: 1.1, y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								<social.icon className="w-5 h-5 text-gray-300" />
							</motion.a>
						))}
					</motion.div>

					{/* Copyright */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-center md:text-right"
					>
						<p className="text-gray-400 text-sm flex items-center gap-2">
							Made with <Heart className="w-4 h-4 text-purple-400 fill-purple-400" /> in 2026
						</p>
						<p className="text-gray-500 text-xs mt-1">
							© 2026 Jared Reyes. All rights reserved.
						</p>
					</motion.div>
				</div>

				{/* Bottom decoration */}
				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="mt-8 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
				/>
			</div>
		</footer>
	);
}

