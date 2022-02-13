import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
	return (
		<div className='relative grid justify-between grid-cols-5 py-40' id='about'>
			<div className='col-span-5 pl-10 lg:pl-0 lg:col-span-2'>
				<MyImage />
			</div>
			<div className='col-span-5 pt-10 pl-10 pr-10 xl:pt-0 xl:pl-20 lg:col-span-3 xl:pr-28'>
				<Introduction />
			</div>
		</div>
	);
};

const MyImage = () => {
	const animation = {
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
		viewport: { once: true },
	};

	return (
		<div className='relative flex justify-start w-full pl-0 pr-10 lg:pr-20 lg:justify-end lg:pl-0 h-96'>
			<motion.div
				{...animation}
				transition={{ delay: 0.9, duration: 0.5 }}
				className='absolute z-0 w-64 border border-white h-[21rem] -mt-5 ml-10 mr:0 lg:-mr-10'
			></motion.div>
			<motion.img
				{...animation}
				transition={{ delay: 0.07 }}
				className='absolute ml-5 mr-0 lg:ml-0 lg:-mr-5'
				alt='ivy-selfie'
				src='static/my_photo.jpg'
			></motion.img>
			<motion.div
				{...animation}
				transition={{ delay: 0.4, duration: 0.5 }}
				className='absolute z-10 w-64 border border-white h-[21rem] mt-5'
			></motion.div>
		</div>
	);
};

const Introduction = () => {
	const animation = {
		transition: { delay: 1, duration: 1.8 },
		viewport: { once: true },
	};

	return (
		<>
			<motion.div
				{...animation}
				initial={{ opacity: 0, translateY: -50 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				className='mb-1 text-xl font-bold text-primary'
			>
				About me
			</motion.div>
			<div className='text-4xl font-display'>
				A Front-end Web Developer and Web Designer by heart
			</div>
			<div className='mt-10 leading-loose font-2xl'>
				I’m <span className='font-bold'>Ivy Gozarin</span>, currently based in
				Quezon City, Philippines. I graduated with a degree in Information
				Technology in Polytechnic University of the Philippines.
			</div>
			<div className='mt-5 leading-loose font-2xl'>
				I enjoy converting my designs into code thus becoming a Front-end web
				developer. My development goal is to create web applications that are
				<span className='mx-1 font-bold text-primary'>engaging</span>and make
				people feel
				<span className='mx-1 font-bold text-primary'>confident</span>to use.
			</div>
		</>
	);
};
