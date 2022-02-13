import React from 'react';

export const Footer = () => {
	return (
		<div className='absolute bottom-0 w-full'>
			<div className='flex justify-center pb-7'>
				<div className='text-xs lg:text-base'>
					Made with 💜 by <span className='font-bold'>Ivy Gozarin</span>
				</div>
			</div>
			<div className='w-full h-2 bg-gradient-to-r from-primary to-accent'></div>
		</div>
	);
};
