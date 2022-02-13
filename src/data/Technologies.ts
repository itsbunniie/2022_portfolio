export interface TechnologiesData {
	category: string;
	stack: string[];
}

export const TechnologyStack: TechnologiesData[] = [
	{
		category: 'Development tools',
		stack: ['Visual Studio Code', 'Postman', 'MS SQL', 'Github', 'Git'],
	},
	{
		category: 'React frameworks/tools',
		stack: [
			'Next.js',
			'Gatsby',
			'Webpack',
			'Ant Design',
			'Headless UI',
			'Framer Motion',
			'Mantine',
			'Material UI',
		],
	},
	{
		category: 'CSS utilities',
		stack: ['Bootstrap 4', 'UIKit'],
	},
	{
		category: 'Prototyping software',
		stack: ['Figma', 'Adobe XD', 'Framer'],
	},
	{
		category: 'Back-end languages',
		stack: ['PHP', 'SQL'],
	},
	{
		category: 'Graphics software',
		stack: ['Photoshop', 'Illustrator', 'Animate'],
	},
];

export interface FeaturedData {
	icon: string;
	color: string;
	name: string;
}

export const FeaturedTechnologies: FeaturedData[] = [
	{
		icon: 'akar-icons:html-fill',
		color: 'orange',
		name: 'HTML5',
	},
	{
		icon: 'akar-icons:css-fill',
		color: 'blue',
		name: 'CSS3',
	},
	{
		icon: 'cib:sass-alt',
		color: 'pink',
		name: 'Sass',
	},
	{
		icon: 'file-icons:tailwind',
		color: 'cyan',
		name: 'TailwindCSS',
	},
	{
		icon: 'cib:react',
		color: 'sky',
		name: 'ReactJS',
	},
	{
		icon: 'cib:javascript',
		color: 'yellow',
		name: 'Javascript ES6',
	},
	{
		icon: 'cib:typescript',
		color: 'blue',
		name: 'Typescript',
	},
	{
		icon: 'simple-icons:figma',
		color: 'red',
		name: 'Figma',
	},
];
