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

export default function SkillsSection() {

	const ref = useRef(null);
	const isInView = useInView(ref, {once: true, margin: '-100px'})

	const items = [
		'',
		<img src={cloudflare} key='cloudflare-icon' className="row__item-img" />,
		<img src={arch} key='arch-icon' className="row__item-img" />,
	
		<img src={amplify} key='amplify-icon' className="row__item-img"/>,
		<img src={ec2} key='ec2-icon' className="row__item-img" />,
		<img src={nodejs} key='node-icon' className="row__item-img" />,
		'',
		<img src={amplify} key='amplify-icon-2' className="row__item-img" />,
		<img src={nodejs} key='node-icon-2' className="row__item-img" />,
		<img src={postgres} key='postgres-icon' className="row__item-img"/>,
		<img src={apigw} key='apigw-icon' className="row__item-img"/>,
		<img src={sns} key='sns-icon' className="row__item-img"/>,
		<img src={reactLogo} key='react-icon' className="row__item-img"/>,
		'',
		'',
		<img src={mongodb} key='mongo-icon' className="row__item-img" />,
		<img src={nginx} key='nginx-icon' className="row__item-img" />,
		<img src={lambda} key='lambda-icon' className="row__item-img"/>,
		<img src={nextLogo} key='next-icon' className="row__item-img" />,
		<img src={mysql} key='mysql-icon' className="row__item-img" />,
		'',
		'',
		'',
		<img src={rds} key='rds-icon' className="row__item-img" />,
		<img src={redisLogo} key='redis-icon' className="row__item-img" />,
		<img src={ses} key='azure-icon' className="row__item-img" />,
		<img src={typescriptLogo} key='ts-icon' className="row__item-img" />
	];

	return (
		<section id="skills" className="relative md:py-16 px-4 flex flex-col items-center justify-center overflow-hidden" ref={ref}>
			<motion.div
				key={"experienceTitle"}
				initial={{opacity: 0.01, y: 30}}
				animate={isInView ? {opacity: 1, y: 0}:{}}
				transition={{duration: 0.6}}
				className="text-center md:mb-16"
			>
				<SectionTitle>
					<GradText>Modern</GradText> Tech Stack
				</SectionTitle>
				<div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
			</motion.div>
			
			<div>		
			<GridMotion items={items} /> 
			</div>
		</section>
	);
}

