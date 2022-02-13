import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

import { Experiences, WorkExperienceData } from '../data';

export const WorkExperience = () => {
	const animation = {
		viewport: { once: true },
	};

	return (
		<div className='grid grid-cols-2'>
			<div className='flex items-center col-span-2 pl-10 lg:pl-32 lg:col-span-1'>
				<div>
					<motion.div
						{...animation}
						initial={{ opacity: 0, translateX: 20 }}
						whileInView={{ opacity: 1, translateX: 0 }}
						transition={{ duration: 1.8, delay: 1 }}
						className='mb-1 text-xl font-bold text-primary'
					>
						Work experience
					</motion.div>
					<motion.div
						{...animation}
						initial={{ opacity: 0, translateX: 20 }}
						whileInView={{ opacity: 1, translateX: 0 }}
						transition={{ duration: 1.8 }}
						className='mt-1 text-4xl font-display'
					>
						Where I have worked before
					</motion.div>
				</div>
			</div>
			<div className='col-span-2 pt-10 pl-10 pr-10 lg:pt-0 lg:pr-20 lg:col-span-1 lg:pl-0'>
				<ul className='timeline'>
					{Experiences.map((experience, index) => (
						<WorkCard
							position={experience.position}
							company={experience.company}
							duration={experience.duration}
							responsibilities={experience.responsibilities}
							key={index}
							delay={index}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

const WorkCard = ({
	delay,
	position,
	company,
	duration,
	responsibilities,
}: WorkExperienceData) => {
	return (
		<li className='period'>
			<motion.div
				initial={{ translateX: 20, opacity: 0 }}
				animate={{ translateX: 0, opacity: 1 }}
				transition={{ duration: 1.8, delay: delay + 1.3 }}
				className='pt-10 pl-10'
			>
				<div className='mb-3 text-2xl font-semibold'>{position}</div>
				<div>{company}</div>
				<div>{duration}</div>
				<ul>
					{responsibilities.map((responsibility, index) => (
						<li className='flex mt-4' key={index}>
							<div>
								<Icon
									icon='akar-icons:triangle-right'
									className='inline mr-5 text-lg text-primary'
								/>
							</div>
							<div>{responsibility}</div>
						</li>
					))}
				</ul>
			</motion.div>
		</li>
	);
};
