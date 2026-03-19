import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

// THIS IS WHERE AWS LAMBDA IS PLANNED TO BE USED FOR SERVERLESS FORM MANAGEMENT
// AWS LAMBDA + SNS FOR NOTIFICATIONS

export function ContactSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log('Form submitted:', formData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section id="contact" className="py-32 px-4 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
				<motion.div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.2, 0.3, 0.2],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="max-w-5xl mx-auto relative z-10" ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl mb-4 text-white">
						Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Touch</span>
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6" />
					<p className="text-xl text-gray-300 max-w-2xl mx-auto">
						Have a project in mind or want to collaborate? Let's create something amazing together.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Contact info */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="space-y-8"
					>
						<div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
							<h3 className="text-2xl mb-6 text-white">Let's Talk</h3>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
										<Mail className="w-6 h-6 text-purple-400" />
									</div>
									<div>
										<p className="text-gray-400 text-sm mb-1">Email</p>
										<a href="mailto:jaredreyes039@gmail.com" className="text-white hover:text-purple-400 transition-colors">
											jaredreyes039@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
										<MapPin className="w-6 h-6 text-cyan-400" />
									</div>
									<div>
										<p className="text-gray-400 text-sm mb-1">Location</p>
										<p className="text-white">Tucson, AZ</p>
									</div>
								</div>
							</div>

							<div className="mt-8 pt-8 border-t border-white/10">
								<p className="text-gray-400 text-sm leading-relaxed">
									I'm currently open to new opportunities and interesting projects.
									Whether you have a question or just want to say hi, I'll do my best to get back to you!
								</p>
							</div>
						</div>
					</motion.div>

					{/* Contact form */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
							<div className="space-y-6">
								<div>
									<label htmlFor="name" className="block text-sm mb-2 text-gray-300">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-500 transition-all"
										placeholder="Your name"
									/>
								</div>

								<div>
									<label htmlFor="email" className="block text-sm mb-2 text-gray-300">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-500 transition-all"
										placeholder="your.email@example.com"
									/>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm mb-2 text-gray-300">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={6}
										className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-500 transition-all resize-none"
										placeholder="Tell me about your project..."
									/>
								</div>

								<motion.button
									type="submit"
									className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 transition-all shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<span>Send Message</span>
									<Send className="w-5 h-5" />
								</motion.button>
							</div>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

