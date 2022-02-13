import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMouseWheel, useWindowScroll } from 'react-use';

export const NavBar = () => {
	const scrollPos = useMouseWheel();
	const { y } = useWindowScroll();
	const [isVisible, setIsVisible] = useState(true);
	const [previousPos, setPreviousPos] = useState(0);
	const [triggered, setTriggered] = useState(false);

	useEffect(() => {
		if (triggered) {
			setPreviousPos(scrollPos);
			if (scrollPos > previousPos) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		}
	}, [scrollPos]);

	useEffect(() => {
		setTriggered(true);
	}, [previousPos]);

	useEffect(() => {
		if (y == 0) setIsVisible(true);
	}, [y]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={triggered ? null : { duration: 1.8, delay: 2.5 }}
					className={`fixed top-0 z-10 flex justify-between w-full border-b border-white backdrop-blur-sm ${
						triggered ? null : 'bg-night/70'
					}`}
				>
					<div className='px-10 py-4 text-xl uppercase border-r border-white lg:py-5 lg:text-2xl'>
						Ivy Gozarin
					</div>
					<div className='hidden lg:flex'>
						<a
							href='#about'
							className='px-10 py-5 text-xl transition duration-300 ease-in-out border-l border-white cursor-pointer hover:bg-white hover:text-night'
						>
							About
						</a>
						<a
							href='#works'
							className='px-10 py-5 text-xl transition duration-300 ease-in-out border-l border-white cursor-pointer hover:bg-white hover:text-night'
						>
							Works
						</a>
						<a
							href='#contact'
							className='px-10 py-5 text-xl transition duration-300 ease-in-out border-l border-white cursor-pointer hover:bg-white hover:text-night'
						>
							Contact
						</a>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
