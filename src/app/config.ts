// export type Social = {
// 	id: string;
// 	alt: string;
//     href: string;
// };

// export const socials: Social[] = [
// 	{
// 		id: 'github-icon',
// 		alt: 'GitHub icon',
//         href: ''
// 	},
// 	{
// 		id: 'instagram-icon',
// 		alt: 'Instagram icon',
//         href: ''
// 	},
// 	{
// 		id: 'linkedin-icon',
// 		alt: 'LinkedIn icon',
//         href: ''
// 	},
// ] as const;
export const socialsStyle = 'text-primary bg-primary-content size-6 border-radius-theme' as const;
export const themes = ['light', 'dark', 'bumblebee', 'business', 'forest'] as const;

export type Theme = (typeof themes)[number];
export type ColorScheme = 'dark' | 'light' | 'no-preference';
