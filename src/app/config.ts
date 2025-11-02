export const socialsStyle =
	'text-primary bg-primary-content size-6 border-radius-theme' as const;
export const themes = [
	'light',
	'dark',
	'bumblebee',
	'business',
	'forest',
	'dracula',
] as const;
export const heroSectionContent = {
	greetingParagraph: "Howdy 👋, I'm",
	name: 'Andrija Botica',
	occupation: 'Software Engineer',
} as const;
export const aboutMeContent = {
	title: 'My Skills',
	keywords: [
		{ value: 'React', backgroundColor: 'secondary', contentColor: 'secondary-content' },
		{ value: 'TypeScript', backgroundColor: 'secondary', contentColor: 'secondary-content' },
		{ value: 'Node.js', backgroundColor: 'secondary', contentColor: 'secondary-content' },
		{ value: 'Vercel', backgroundColor: 'secondary', contentColor: 'secondary-content' },
		{ value: 'Tailwind CSS', backgroundColor: 'secondary', contentColor: 'secondary-content' },
		{ value: 'SCSS', backgroundColor: 'secondary', contentColor: 'secondary-content' },
		{ value: 'Docker', backgroundColor: 'secondary', contentColor: 'secondary-content' },
		{ value: 'Mentor', backgroundColor: 'secondary', contentColor: 'secondary-content' },
		{ value: 'SEO', backgroundColor: 'secondary', contentColor: 'secondary-content' },
		{ value: 'Figma', backgroundColor: 'secondary', contentColor: 'secondary-content' },
	],
} as const;
export const roadmapContent = {
	title: 'Roadmap',
	items: [
		{
			year: 2021,
			goals: [
				'Launch personal portfolio website',
				'Contribute to open source projects',
				'Learn TypeScript and apply it in projects',
			],
		},
		{
			year: 2024,
			goals: [
				'Build a full-stack application with Next.js',
				'Explore new technologies like GraphQL and Docker',
				'Improve design skills and learn Figma',
			],
		},
	],
} as const;
export const downloadablesLinkContent = {
	cv: {
		label: 'GET MY CV',
		fileName: 'CV-Andrija Botica.pdf',
	},
} as const;

export type Theme = (typeof themes)[number];
export type ColorScheme = 'dark' | 'light' | 'no-preference';
export type Keywords = typeof aboutMeContent.keywords;
export type Keyword = Keywords[number];