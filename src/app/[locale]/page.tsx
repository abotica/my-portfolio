'use client';
import {light} from '@/../public/avatars'
import { useTheme } from '@/lib/hooks/useTheme';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useEffect, useState } from 'react';
import DownloadCards from '@/components/ui/DownloadCards';
import SkillsCarousel from '@/components/ui/SkillsCarousel';
import ProjectCard from '@/components/ui/ProjectCard';

import {useTranslations} from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Link from '@/components/ui/Link';


export default function Home() {
	const t = useTranslations("HomePage");

	const { theme } = useTheme();
	const [avatar, setAvatar] = useState<StaticImport>(light);


	const avatarMap: Record<string, StaticImport> = {
		light: light,
		// dark: dark,
		// bumblebee: bumblebee,
		// dracula: dracula
	}
	
	useEffect(() => {
        // Look up the current theme in the map
        // If it's not found, default to 'light'
        const newAvatar = avatarMap[theme] || light;
        setAvatar(newAvatar);
    }, [theme]);

	return (
		<main className='min-h-screen'>
			{/* Hero Section */}
			<Section variant="hero" id="home">
				<div className='flex flex-col items-center'>
					<p className='text-lg sm:text-xl text-secondary font-medium mb-2'>{t('HeroSection.greeting')}</p>
					<h1 className='text-5xl tablet:text-6xl desktop:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight'>{t('HeroSection.name')}</h1>
					<h2 className='text-xl sm:text-2xl text-secondary font-semibold mb-6'>{t('HeroSection.job')}</h2>
					<p className='text-lg sm:text-xl text-base-content/70 text-center max-w-2xl mx-auto mb-8 leading-relaxed'>{t('HeroSection.description')}</p>
				</div>
				<div className='flex flex-col gap-4 w-full tablet:flex-row tablet:justify-center'>
					<Link variant='primary' href='#projects' className='w-full tablet:w-max'>{t('HeroSection.primaryButton')}</Link>
					<Link variant='secondary' href='#contact-me' className='w-full tablet:w-max'>{t('HeroSection.secondaryButton')}</Link>
				</div>
			</Section>
			<Section variant="content" id="about-me" title={t('AboutMeSection.title')}>
				<p className='text-lg text-base-content/70 leading-relaxed'>{t('AboutMeSection.description')}</p>
			</Section>
			<Section variant="content" id="skills" title={t('SkillsSection.title')}>
				<SkillsCarousel />
			</Section>
			<Section variant="content" id="projects" title={t('FeaturedProjectsSection.title')}>
				<p className='text-lg text-base-content/70 leading-relaxed mb-6 tablet:mb-8'>{t('FeaturedProjectsSection.description')}</p>
				<div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 tablet:gap-6">
					{t.raw('FeaturedProjectsSection.projects').map((project: any, index: number) => (
						<ProjectCard
							key={index}
							title={project.title}
							description={project.description}
							image={project.image}
							technologies={project.technologies}
							liveUrl={project.liveUrl}
							githubUrl={project.githubUrl}
						/>
					))}
				</div>
			</Section>
			<Section variant="content" id="downloads" title={t('DownloadsSection.title')}>
				<DownloadCards items={t.raw('DownloadsSection.items')} />
			</Section>
		</main>
	);
}
