import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, MapPin } from 'lucide-react';
import ContactForm from '../forms/Contact.form.component';

// THIS IS WHERE AWS LAMBDA IS PLANNED TO BE USED FOR SERVERLESS FORM MANAGEMENT
// AWS LAMBDA + SNS FOR NOTIFICATIONS

export function ContactSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="contact" className="py-16 px-4 relative overflow-hidden">
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
						<ContactForm />						
					</motion.div>
				</div>
			</div>
		</section>
	);
}

