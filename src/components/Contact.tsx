import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
	return (
		<>
			<div className='flex justify-center' id='contact'>
				<div className='w-5/6 text-center lg:w-3/6'>
					<motion.div
						initial={{ opacity: 0, translateY: -20 }}
						whileInView={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 1.8, delay: 1 }}
						viewport={{ once: true }}
						className='mb-1 text-xl font-bold text-center text-primary'
					>
						Contact
					</motion.div>
					<div>
						<div className='mt-1 text-4xl text-center font-display'>
							I’m looking for Front-end Web Developer & UI/UX Designer positions
						</div>
						<p className='my-5 text-lg lg:my-10'>
							Do you think that I would perfectly fit into your team? or just
							want to know more about me? Send me an email, I’ll try my best to
							get back to you!
						</p>
						<a href='mailto:iggozarin@gmail.com'>
							<button className='cursor-pointer py-2.5 border-0 btn bg-accent text-night transition duration-300 ease-in-out hover:scale-110 hover:bg-accent'>
								Send an email
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
