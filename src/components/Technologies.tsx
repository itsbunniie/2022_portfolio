import React, { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';

import {
	FeaturedTechnologies,
	TechnologiesData,
	TechnologyStack,
} from '../data';

export const Technologies = () => {
	const [visibleItem, setVisibleItem] = useState(null);

	const animation = {
		viewport: { once: true },
	};

	return (
		<div className='flex justify-center w-full my-40'>
			<div>
				<motion.div
					{...animation}
					initial={{ translateY: -50, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{ duration: 1.8, delay: 0.8, bounce: 0 }}
					className='mb-1 text-xl font-bold text-center text-primary'
				>
					Technology stack
				</motion.div>
				<div className='mt-1 text-4xl text-center font-display'>
					These are what I currently use in development
				</div>
				<div className='flex flex-wrap justify-center gap-5 mt-10 text-5xl text-white lg:gap-8'>
					{FeaturedTechnologies.map((technology, index) => (
						<div key={index}>
							<motion.div
								{...animation}
								initial={{ translateX: -32, opacity: 0 }}
								whileInView={{ translateX: 0, opacity: 1 }}
								transition={{ duration: 1.8, delay: index * 0.2, bounce: 0 }}
								className='flex justify-center'
								onMouseEnter={() => {
									setVisibleItem(index);
								}}
								onMouseLeave={() => {
									setVisibleItem(null);
								}}
							>
								<Icon
									icon={technology.icon}
									className={`transition-colors duration-300 ease-in-out cursor-pointer hover:text-${technology.color}-500`}
								/>
							</motion.div>
							<div
								className={`${
									visibleItem === index ? 'text-white' : 'text-night'
								} mt-5 text-xs text-center transition duration-500 ease-in-out`}
							>
								{technology.name}
							</div>
						</div>
					))}
				</div>
				<motion.div
					{...animation}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.8, delay: 2.5, bounce: 0 }}
					className='flex justify-center mt-8'
				>
					<AllTechnologies />
				</motion.div>
			</div>
		</div>
	);
};

const AllTechnologies = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className='py-1.5 uppercase border border-white px-7 hover:bg-white/30 transition ease-in-out duration-300'
			>
				See more
			</button>
			<Transition show={isOpen} as={Fragment}>
				<Dialog
					onClose={() => setIsOpen(false)}
					className='fixed inset-0 z-30 overflow-y-auto'
				>
					<div className='flex items-center justify-center min-h-screen'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Dialog.Overlay className='fixed inset-0 bg-black/80' />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<div className='relative max-w-xl p-6 mx-5 text-white rounded lg:mx-auto bg-night'>
								<div className='flex items-start justify-between'>
									<div>
										<Dialog.Title className='font-bold'>
											Technology stack
										</Dialog.Title>
										<p className='text-xs'>
											I also have experience in working with the following:
										</p>
									</div>
									<button onClick={() => setIsOpen(false)}>
										<Icon icon='radix-icons:cross-1' />
									</button>
								</div>
								<Dialog.Description className='py-4'>
									<div className='grid grid-cols-2 gap-5'>
										{TechnologyStack.map((group, index) => (
											<TechnologyGroup
												category={group.category}
												stack={group.stack}
												key={index}
											/>
										))}
									</div>
								</Dialog.Description>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

const TechnologyGroup = ({ category, stack }: TechnologiesData) => {
	return (
		<div>
			<div className='font-bold text-primary'>{category}</div>
			<ul>
				{stack.map((item, index) => (
					<li className='flex items-end text-sm' key={index}>
						<div>
							<Icon
								icon='akar-icons:triangle-right'
								className='inline mr-1 text-primary'
							/>
						</div>
						<div>{item}</div>
					</li>
				))}
			</ul>
		</div>
	);
};
