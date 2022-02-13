export interface WorkData {
	key?: number;
	type: string;
	image: string;
	name: string;
	description: string;
	tools: string[];
	github?: string;
	externalLink?: string;
}

export const WebApps: WorkData[] = [
	{
		type: 'website',
		image: 'static/portfolio.jpg',
		name: 'My 2022 Portfolio',
		description:
			'My first and current porfolio where I showcase my works and information about myself. I designed and developed this all in one month.',
		tools: ['React', 'Gatsby', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
		github: '#',
	},
	{
		type: 'website',
		image: 'static/litturl.jpg',
		name: 'litturl.',
		description:
			'A cute URL shortening web application I co-developed as a side-project. I designed the website and participated in developing the front-end.',
		tools: ['React', 'TypeScript', 'TailwindCSS'],
		externalLink: 'https://litturl.vercel.app',
		github: '#',
	},
	{
		type: 'website, custom cms, rest api',
		image: 'static/accumed.jpg',
		name: 'Accurate Medical Diagnostic Center (AccuMed)',
		description:
			'Current website of AccuMed with online appointment system, online test results system, and patient & doctors account system. I designed the whole website and participated in developing the front-end and back-end.',
		tools: [
			'Javascript',
			'React',
			'TailwindCSS',
			'Ant Design',
			'PHP',
			'SQL',
			'Firebase',
		],
		externalLink: 'https://accumeddiagnostic.com',
	},
	{
		type: 'web application',
		image: 'static/employeesystem.jpg',
		name: 'Employee Management System',
		description:
			'A customized employee system for a start-up company. I designed the web application and participated in developing the front-end.',
		tools: ['Javascript', 'React', 'Material UI'],
		externalLink: 'https://be-employee-system.netlify.app',
	},
	{
		type: 'website, custom cms',
		image: 'static/comlogik.jpg',
		name: 'Comlogik Business Systems',
		description:
			'Current company website of Comlogik with all the basic corporate features. I designed the entire website and participated in developing front-end and back-end.',
		tools: [
			'Javascript',
			'React',
			'TailwindCSS',
			'Ant Design',
			'UIKit',
			'PHP',
			'SQL',
			'Netlify',
		],
		externalLink: 'https://comlogikph.com',
	},
	{
		type: 'website, custom cms',
		image: 'static/casaalmarenzo.jpg',
		name: 'Casa Almarenzo Bed & Breakfast',
		description:
			'Website for a bed & breakfast hotel with interactive map, featuring the activities within the area, and online reservation system. I designed the entire website and participated in developing front-end and back-end.',
		tools: ['Javascript', 'JQuery', 'UIKit', 'PHP', 'SQL'],
		externalLink: 'https://new.casaalmarenzo.com',
	},
];

export interface DesignData {
	key?: number;
	image: string;
	name: string;
	description: string;
	externalLink?: string;
}

export const Designs: DesignData[] = [
	{
		image: 'static/nhclc.jpg',
		name: 'North Hill Crest Lung Center',
		description:
			'A website homepage design for a lung center hospital. Homepage and mobile view prototype is available for viewing.',
		externalLink:
			'https://www.figma.com/file/5hQgYbbh9wf0tQV5AbWt8U/NorthHillCrestLungCenter_Design1?node-id=0%3A1',
	},
	{
		image: 'static/sms.jpg',
		name: 'Summit Media Center',
		description:
			'A website homepage design for a general clinic. Homepage and mobile view prototype is available for viewing.',
		externalLink:
			'https://www.figma.com/file/8tHAa3nc9kcKctP6rN9AnE/SummitMedicalServices_Design2?node-id=1%3A40',
	},
];
