import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import {
	About,
	Contact,
	Footer,
	Hero,
	NavBar,
	PastWorks,
	Socials,
	Technologies,
	WorkExperience,
} from '../components';
import '../styles/index.css';
import { useScroll } from 'react-use';

const IndexPage = () => {
	return (
		<div className='relative'>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				src='static/bg1.png'
				className='absolute object-cover object-left-bottom h-screen md:h-auto -z-10'
			/>
			<NavBar />
			<Socials />
			<Hero />
			<About />
			<div className='relative'>
				<motion.img
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					src='static/bg2.png'
					className='absolute hidden -z-10 lg:block'
				/>
				<Technologies />
				<WorkExperience />
			</div>
			<PastWorks />
			<div className='relative flex items-center justify-center h-screen'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
					className='absolute w-full h-screen -z-10'
				>
					<img
						src='static/bg3.png'
						className='object-cover object-center w-full h-screen lg:object-contain'
					/>
				</motion.div>
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default IndexPage;
