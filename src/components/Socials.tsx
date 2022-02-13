import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

import { SocialsData } from '../data';

export const Socials = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.8, delay: 2.5 }}
			className='fixed bottom-0 flex-col hidden gap-5 mb-10 ml-10 text-2xl lg:flex'
		>
			{SocialsData.map((data, index) => (
				<a
					key={index}
					href={data.link}
					target='_blank'
					className='transition duration-300 ease-in-out hover:text-primary'
				>
					<Icon icon={data.icon} />
				</a>
			))}
		</motion.div>
	);
};
