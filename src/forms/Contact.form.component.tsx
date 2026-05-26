import { useState } from "react";
import {motion} from 'motion/react';
import { Send } from "lucide-react";	
import ProgressSpinner from "../components/Progress.component";

export default function ContactForm(){

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState<any|null>([]);
	const API_URL = import.meta.env.VITE_API_URL	

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			let res = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type':'application/json',
			},
			body: JSON.stringify(formData)
			})
			if(res.status === 200) {
				setIsLoading(false)
				setIsSubmitted(true)
				return;
			}
			else {
				setIsLoading(false)
				setErrors((prev:any)=>[...prev, "Status code failure"]);
				return;
			}
		}
		catch(err){
			setErrors((prev: any)=>[...prev, err])
			setIsSubmitted(false)
			setIsLoading(false)
			return;
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	if(isLoading) {
		return (
			<form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
			<div className="space-y-6 flex">
				<ProgressSpinner />
			</div>
			</form>
		)
	}

	if(isSubmitted){
		return (
			<form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
				<div className="space-y-6 flex">
					<p className="text-gray-400 text-sm leading-relaxed">
						Thank you for reaching out, I will be in contact with you in between 1-2 business days! Talk soon!
					</p>
				</div>
			</form>
		)
	
	}
	
	return (
		<form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
			{errors.length > 0 ? <span>
				There was an error submitting your information, please try again later.
			</span>: <></>}
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
	)

}
