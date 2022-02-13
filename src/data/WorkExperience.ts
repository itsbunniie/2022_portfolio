export interface WorkExperienceData {
	delay?: any;
	position: string;
	company: string;
	duration: string;
	responsibilities: string[];
}

export const Experiences: WorkExperienceData[] = [
	{
		position: 'Front-end Programmer & Designer',
		company: 'New Comlogik Business Systems',
		duration: 'Jul 2019 — Present (2 yrs 8 mos)',
		responsibilities: [
			"Designed UI/UX wireframes in accordance with the client's specifications, and converted them into interactive prototypes for better visualization",
			'Developed websites and web applications working mainly in front-end using React JS, and assisted in REST API and back-end development using PHP',
			'Created graphic assets and illustrations using Photoshop, Illustrator, and Animate to be used in development',
		],
	},
	{
		position: 'IT Specialist Intern',
		company: 'Ban Toxics Inc.',
		duration: 'Nov 2018 — Mar 2019 (5 mos)',
		responsibilities: [
			'Maintained and monitored the computer systems, peripherals, and local network',
			'Provided technical assistance and resolved hardware & software issues within the organization',
		],
	},
];
