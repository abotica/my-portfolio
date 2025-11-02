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
export const aboutMeContent = {
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

export type Theme = (typeof themes)[number];
export type ColorScheme = 'dark' | 'light' | 'no-preference';
export type Keywords = typeof aboutMeContent.keywords;
export type Keyword = Keywords[number];