import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
	return (
		<div className='flex items-center h-screen'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2, delay: 1.5 }}
				className='px-10 text-4xl leading-normal text-center lg:text-5xl lg:leading-tight lg:px-20 tracking-loose xl:text-7xl font-display'
			>
				I’m Ivy, a Front-end Web Developer & UI/UX Designer with 2.5 years of
				experience and I’m currently looking for work
			</motion.div>
		</div>
	);
};
