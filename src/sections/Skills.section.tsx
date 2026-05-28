import {motion, useInView} from 'motion/react'
import { useRef } from 'react';
import GridMotion from '../components/GridMotion.component';
import lambda from '../assets/stack_icons/lambda320.png';
import amplify from '../assets/stack_icons/amplify320.png';
import ec2 from '../assets/stack_icons/ec2320.png';
import rds from '../assets/stack_icons/rds320.png';
import nodejs from '../assets/stack_icons/node610.png';
import postgres from '../assets/stack_icons/postgres510.png';
import apigw from '../assets/stack_icons/apigw320.png';
import sns from '../assets/stack_icons/sns320.png';
import reactLogo from '../assets/stack_icons/react.png';
import mongodb from '../assets/stack_icons/mongo240.png';
import nginx from '../assets/stack_icons/nginx240.png';
import arch from '../assets/stack_icons/arch1024.png';
import nextLogo from '../assets/stack_icons/next.png';
import mysql from '../assets/stack_icons/mysql.png';
import cloudflare from '../assets/stack_icons/cloudflare.png';
import redisLogo from '../assets/stack_icons/redis.png';
import ses from '../assets/stack_icons/ses320.png';
import typescriptLogo from '../assets/stack_icons/typescript.png';
import { GradText, SectionTitle } from '../components/Typography.component';
import Counter from '../components/Counter.component';

export default function SkillsSection() {

	const ref = useRef(null);
	const isInView = useInView(ref, {once: true, margin: '-100px'})

	const TOOLS_ARR = ['Git', 'Linux', 'Jest', 'Redux', 'Scripting', 'Python', 'Microservices', 'GraphQL', 'OAuth', 'REST APIs', 'Figma', 'Gatsby', 'Storybook', 'Swagger', 'Winston', 'AWS Lambda', 'Cloud Computing', 'AWS Amplify', 'AWS IAM', 'AWS SNS', 'Caddy', 'Nginx'];
	const SKILLS_ARR = [
		{
			category: 'Frontend',
			skills: [
				{ name: 'Tanstack React w/ Vite', level: 100 },
				{ name: 'TypeScript', level: 90 },
				{ name: 'Next.js & SSR', level: 88 },
				{ name: 'Tailwind CSS & UI Libraries', level: 92 },
			],
			gradient: 'from-purple-500 to-pink-500',
		},
		{
			category: 'Backend',
			skills: [
				{ name: 'Node.js', level: 90 },
				{ name: 'Databases and Data Design', level: 85 },
				{ name: 'RESTful APIs', level: 82 },
				{ name: 'Networking', level: 80 },
			],
			gradient: 'from-cyan-500 to-blue-500',
		},
		{
			category: 'CI/CD & Cloud',
			skills: [
				{ name: 'Observability', level: 87 },
				{ name: 'Cloud Services', level: 83 },
				{ name: 'Docker & Kubernetes', level: 65 },
			],
			gradient: 'from-green-500 to-emerald-500',
		},
	];

	const items = [
		<img src={cloudflare} key='cloudflare-icon' className="row__item-img" />,
		<img src={arch} key='arch-icon' className="row__item-img" />,
		<img src={amplify} key='amplify-icon' className="row__item-img"/>,
		<img src={ec2} key='ec2-icon' className="row__item-img" />,
		<img src={nodejs} key='node-icon' className="row__item-img" />,
		<img src={amplify} key='amplify-icon-2' className="row__item-img" />,
		<img src={nodejs} key='node-icon-2' className="row__item-img" />,
		<img src={postgres} key='postgres-icon' className="row__item-img"/>,
		<img src={apigw} key='apigw-icon' className="row__item-img"/>,
		<img src={sns} key='sns-icon' className="row__item-img"/>,
		<img src={reactLogo} key='react-icon' className="row__item-img"/>,
		<img src={mongodb} key='mongo-icon' className="row__item-img" />,
		<img src={nginx} key='nginx-icon' className="row__item-img" />,
		<img src={lambda} key='lambda-icon' className="row__item-img"/>,
		<img src={nextLogo} key='next-icon' className="row__item-img" />,
		<img src={mysql} key='mysql-icon' className="row__item-img" />,
		<img src={rds} key='rds-icon' className="row__item-img" />,
		<img src={redisLogo} key='redis-icon' className="row__item-img" />,
		<img src={ses} key='azure-icon' className="row__item-img" />,
		<img src={typescriptLogo} key='ts-icon' className="row__item-img" />,
		<img src={cloudflare} key='cloudflare-icon' className="row__item-img" />,
		<img src={arch} key='arch-icon' className="row__item-img" />,
		<img src={amplify} key='amplify-icon' className="row__item-img"/>,
		<img src={ec2} key='ec2-icon' className="row__item-img" />,
		<img src={nodejs} key='node-icon' className="row__item-img" />,
		<img src={amplify} key='amplify-icon-2' className="row__item-img" />,
		<img src={postgres} key='postgres-icon' className="row__item-img"/>,
		<img src={apigw} key='apigw-icon' className="row__item-img"/>,
	];

	return (
		<section id="skills" className="relative md:py-16 px-4 flex flex-col items-center justify-center overflow-hidden " ref={ref}>
			<div className="mx-auto max-w-6xl relative z-10 backdrop-blur">
				<motion.div
					key={"experienceTitle"}
					initial={{opacity: 0.01, y: 30}}
					animate={isInView ? {opacity: 1, y: 0}:{}}
					transition={{duration: 0.6}}
					className="text-center mb-8 md:mb-16"
				>
					<SectionTitle>
						<GradText>Modern</GradText> Technologies
					</SectionTitle>
					<div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
				</motion.div>
				<div className="grid md:grid-cols-3 gap-8  px-4 md:px-16 ">
					{SKILLS_ARR.map((category) => (
						<div
							key={category.category}
							className="p-8 rounded-2xl p-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 group"
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
				<div className="hidden md:block relative mt-12 text-center ">
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
			<div className="md:left-0 md:top-0 md:translate-x-0 md:translate-y-0 z-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<GridMotion items={items} /> 
			</div>
		</section>
	);
}

