import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';

import { DesignData, Designs, WebApps, WorkData } from '../data';

export const PastWorks = () => {
	const [isWebApps, setIsWebApps] = useState(true);

	return (
		<div className='pt-52' id='works'>
			<motion.div
				initial={{ opacity: 0, translateY: -20 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				transition={{ duration: 1.8 }}
				viewport={{ once: true }}
				className='mb-1 text-xl font-bold text-center text-primary'
			>
				Past works
			</motion.div>
			<div className='mt-1 text-4xl text-center font-display'>
				Some of the things I’ve built
			</div>
			<div className='flex justify-center gap-5 mt-8 mb-20'>
				<button
					onClick={() => setIsWebApps(true)}
					className={`btn ${
						isWebApps ? 'bg-white text-night hover:text-white' : null
					}`}
				>
					Web Apps
				</button>
				<button
					onClick={() => setIsWebApps(false)}
					className={`btn ${
						isWebApps ? null : 'bg-white text-night hover:text-white'
					}`}
				>
					Designs
				</button>
			</div>
			<div className='flex flex-col px-10 lg:px-20 gap-y-20'>
				{isWebApps
					? WebApps.map((work, index) => (
							<Work
								type={work.type}
								name={work.name}
								description={work.description}
								tools={work.tools}
								image={work.image}
								externalLink={work.externalLink}
								github={work.github}
								key={index}
							/>
					  ))
					: Designs.map((design, index) => (
							<Design
								key={index}
								name={design.name}
								image={design.image}
								description={design.description}
								externalLink={design.externalLink}
							/>
					  ))}
			</div>
		</div>
	);
};

const Work = ({
	type,
	name,
	image,
	description,
	tools,
	externalLink,
	github,
}: WorkData) => {
	const [visibleBorder, setVisibleBorder] = useState(false);

	return (
		<div
			className='grid grid-cols-5 gap-10 px-0 xl:gap-20 xl:px-32'
			onMouseEnter={() => setVisibleBorder(true)}
			onMouseLeave={() => setVisibleBorder(false)}
		>
			<div className='relative col-span-5 lg:col-span-2'>
				<AnimatePresence>
					{visibleBorder && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='absolute w-full border border-white -z-10 h-60 top-5 right-5'
						></motion.div>
					)}
				</AnimatePresence>
				<div
					className='bg-white bg-cover cursor-pointer h-60'
					style={{ backgroundImage: `url('${image}')` }}
				></div>
			</div>
			<div className='col-span-5 lg:col-span-3'>
				<div className='mb-2 text-xs uppercase'>{type}</div>
				<div className='text-2xl font-bold'>{name}</div>
				<div className='my-7'>{description}</div>
				<div className='flex flex-wrap'>
					<span className='mr-2'>Made using</span>
					<div className='flex flex-wrap gap-x-2'>
						{tools.map((tool, index) => (
							<span className='font-bold text-accent' key={index}>
								{tool}
							</span>
						))}
					</div>
				</div>
				<div className='flex gap-5 text-2xl mt-7'>
					{externalLink ? (
						<a
							href={externalLink}
							target='_blank'
							className='transition duration-200 ease-in-out hover:text-primary'
						>
							<Icon icon='radix-icons:external-link' />
						</a>
					) : null}
					{github ? (
						<a
							href={github}
							target='_blank'
							className='transition duration-200 ease-in-out hover:text-primary'
						>
							<Icon icon='radix-icons:github-logo' />
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
};

const Design = ({ name, image, description, externalLink }: DesignData) => {
	const [visibleBorder, setVisibleBorder] = useState(false);

	return (
		<div
			className='grid grid-cols-5 gap-10 px-0 xl:gap-20 xl:px-32'
			onMouseEnter={() => setVisibleBorder(true)}
			onMouseLeave={() => setVisibleBorder(false)}
		>
			<div className='relative col-span-5 lg:col-span-2'>
				<AnimatePresence>
					{visibleBorder && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='absolute w-full border border-white -z-10 h-60 top-5 right-5'
						></motion.div>
					)}
				</AnimatePresence>
				<div
					className='bg-white bg-cover cursor-pointer h-60'
					style={{ backgroundImage: `url('${image}')` }}
				></div>
			</div>
			<div className='col-span-5 lg:col-span-3'>
				<div className='mb-2 text-xs uppercase'>Web design</div>
				<div className='text-2xl font-bold'>{name}</div>
				<div className='my-7'>{description}</div>
				<div className='flex gap-5 text-2xl mt-7'>
					{externalLink ? (
						<a
							href={externalLink}
							target='_blank'
							className='transition duration-200 ease-in-out hover:text-primary'
						>
							<Icon icon='radix-icons:external-link' />
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
};
