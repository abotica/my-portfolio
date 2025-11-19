import {
  React,
  TypeScript,
  TailwindCSS,
  NodeJS,
  Docker,
  Figma,
  SEO,
  SCSS,
  Dokploy
} from '../../components/ui/svgs';

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

// Available skill SVGs from the svgs folder
export const skillIcons = [
  { name: 'React', Icon: React },
  { name: 'TypeScript', Icon: TypeScript },
  { name: 'Tailwind CSS', Icon: TailwindCSS },
  { name: 'Node.js', Icon: NodeJS },
  { name: 'Docker', Icon: Docker },
  { name: 'Figma', Icon: Figma },
  { name: 'SEO', Icon: SEO },
  { name: 'SCSS', Icon: SCSS },
  { name: 'Dokploy', Icon: Dokploy}
];

// Categorized skills for different carousel rows
export const frontendSkills = [
  { name: 'React', Icon: React },
  { name: 'TypeScript', Icon: TypeScript },
  { name: 'Tailwind CSS', Icon: TailwindCSS },
  { name: 'SCSS', Icon: SCSS },
];

export const backendDevOpsSkills = [
  { name: 'Node.js', Icon: NodeJS },
  { name: 'Docker', Icon: Docker },
  { name: 'Dokploy', Icon: Dokploy},
  { name: 'SEO', Icon: SEO },
  { name: 'Figma', Icon: Figma },
];

// Type definitions
export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type Download = {
  title: string;
  description: string;
  fileUrl: string;
  fileSize: string;
  fileType: string;
};

export type Theme = (typeof themes)[number];
export type ColorScheme = 'dark' | 'light' | 'no-preference';