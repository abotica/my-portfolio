import GitHub from './GitHub.svg';
import LinkedIn from './LinkedIn.svg';
import Instagram from './Instagram.svg';
import ChevronDown from './ChevronDown.svg';
import ThemeIcon from './ThemeIcon.svg';
import Hero from './Hero.svg';
import Circle from './Circle.svg';
import RoadmapPath from './RoadmapPath.svg';
import Download from './Download.svg';
import React from './React.svg';
import TypeScript from './TypeScript.svg';
import TailwindCSS from './TailwindCSS.svg';
import NodeJS from './NodeJS.svg';
import Docker from './Docker.svg';
import Figma from './Figma.svg';
import SEO from './SEO.svg';
import SCSS from './SCSS.svg';
import LanguageIcon from './LanguageIcon.svg';
import Mail from './Mail.svg';
import Dokploy from './Dokploy.svg';
import ExternalLink from './ExternalLink.svg';
import JavaScript from './JavaScript.svg';
import Swift from './Swift.svg';
import JupyterNotebook from './JupyterNotebook.svg';
import CPlusPlus from './C++.svg';


// Dictionary mapping SVG names to components
export const svgComponents = {
	GitHub,
	LinkedIn,
	Instagram,
	ChevronDown,
	ThemeIcon,
	Hero,
	Circle,
	RoadmapPath,
	Download,
	React,
	TypeScript,
	TailwindCSS,
	NodeJS,
	Docker,
	Figma,
	SEO,
	SCSS,
	LanguageIcon,
	Mail,
	Dokploy,
	JavaScript,
	Swift,
	JupyterNotebook,
	'C++': CPlusPlus
} as const;

// Export individual components for backward compatibility
export { GitHub, LinkedIn, Instagram, ChevronDown, ThemeIcon, Hero, Circle, RoadmapPath, Download, React, TypeScript, TailwindCSS, NodeJS, Docker, Figma, SEO, SCSS, LanguageIcon, Mail, Dokploy, ExternalLink, JavaScript, Swift, JupyterNotebook, CPlusPlus };