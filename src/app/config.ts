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
	greetingParagraph: "Howdy, I'm",
	name: 'Andrija Botica',
	occupation: 'Software Engineer',
} as const;
export const aboutMeContent = {
	title: 'About Me',
	keywords: [
  { value: 'React', backgroundColor: '#61DAFB', contentColor: '#000000' },
  { value: 'TypeScript', backgroundColor: '#3178C6', contentColor: '#FFFFFF' },
  { value: 'Node.js', backgroundColor: '#339933', contentColor: '#FFFFFF' },
  { value: 'Frontend Development', backgroundColor: '#4A90E2', contentColor: '#FFFFFF' },
  { value: 'Web Developer', backgroundColor: '#2C3E50', contentColor: '#FFFFFF' },
  { value: 'JavaScript', backgroundColor: '#F7DF1E', contentColor: '#000000' },
  { value: 'Tailwind CSS', backgroundColor: '#06B6D4', contentColor: '#FFFFFF' },
  { value: 'SCSS', backgroundColor: '#CD6799', contentColor: '#FFFFFF' },
  { value: 'Docker', backgroundColor: '#2496ED', contentColor: '#FFFFFF' },
  { value: 'Programming Mentor', backgroundColor: '#F39C12', contentColor: '#FFFFFF' },
  { value: 'HTML', backgroundColor: '#E34F26', contentColor: '#FFFFFF' },
  { value: 'CSS', backgroundColor: '#1572B6', contentColor: '#FFFFFF' },
  { value: 'Dotien', backgroundColor: '#34495E', contentColor: '#FFFFFF' },
  { value: 'Continuous Learning', backgroundColor: '#8E44AD', contentColor: '#FFFFFF' }
]
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