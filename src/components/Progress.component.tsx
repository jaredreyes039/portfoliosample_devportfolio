import {motion} from 'motion/react'

export default function ProgressSpinner(){
	
	const MSG_STR = "Sending form..."
	const MSG_STR_ARR = [...MSG_STR]

	// BUG: For some reason the rendering for the NAME_STR_ARR is not including the space between "Jared" and "Reyes" despite doing so for "Web Developer" when rendering TITLE_STR_ARR, this seems to be a working solution for now, I've checked Typography.component.tsx and the current file but found no discernable cause
	MSG_STR_ARR.splice(8,0,`\u00A0`);
		
	return (
		<div className="flex items-center">
		<motion.div 
			key={'progressSpinner'}
			animate={{rotate: 360}}
			transition={{duration: 1, repeat: Infinity, delay: 0.5, ease: "backInOut"}}
			className="w-16 h-16 m-4 border-white content-[''] border-2"
		>
			
		</motion.div>
		{MSG_STR_ARR.map((char, idx)=>{
				return (
					<motion.span
						initial={{opacity: 0.01 }}
						animate={{opacity: 1}}
						transition={{delay: idx/15, repeat: Infinity, duration: 1}}
						key={char+'-name-'+idx}
					>
						{char}
					</motion.span>
				)	
			})}	
		</div>
	)
}
