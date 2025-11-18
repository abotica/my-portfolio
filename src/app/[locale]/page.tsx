'use client';
import { Circle, Hero, RoadmapPath } from '@/components/ui/svgs';
import Image from 'next/image';
import {light} from '@/../public/avatars'
import { aboutMeContent } from './config';
import { useTheme } from '@/lib/hooks/useTheme';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { use, useEffect, useState } from 'react';
import DownloadLink from '@/components/ui/DownloadLink';
import KeywordsGrid from '@/components/ui/keywords-grid/KeywordsGrid';

import {useTranslations} from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Button from '@/components/ui/Button';


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
			{/* Calculated height dynamically with calc */}
			<section className='flex flex-col items-center overflow-clip min-h-[calc(100vh_-_64px)] px-4 pt-16'>
				<div className='flex flex-col items-center'>
					<p className='text-lg sm:text-xl text-secondary font-medium mb-2'>{t('HeroSection.greeting')}</p>
					<h1 className='text-5xl tablet:text-6xl desktop:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight'>{t('HeroSection.name')}</h1>
					<h2 className='text-xl sm:text-2xl text-secondary font-semibold mb-6'>{t('HeroSection.job')}</h2>
					<p className='text-lg sm:text-xl text-base-content/70 text-center max-w-2xl mx-auto mb-8 leading-relaxed'>{t('HeroSection.description')}</p>
				</div>
				<div className='flex flex-col gap-4 w-full'>
					<Button variant='primary' className='w-full'>{t('HeroSection.primaryButton')}</Button>
					<Button variant='secondary' className='w-full'>{t('HeroSection.secondaryButton')}</Button>
				</div>
				{/* <Hero className='h-full w-auto absolute -z-30' /> */}
				{/* <Image
					src={avatar}
					alt='avatar'
					className='w-full h-auto absolute bottom-0'
					sizes=''
					// Can I use already defined tailwind breakpoints??
					priority
				/> */}
			</section>
			<section className='min-h-screen px-2'>
				<h1 id='about-me' className='text-base-content'>{t('AboutMeSection.title')}</h1>
				<KeywordsGrid keywords={aboutMeContent.keywords}/>
			</section>
			<section className='min-h-screen px-2'>
				<h1 className='text-base-content text-center relative'>
					{t('RoadmapSection.title')}
					{/* <Circle className='roadmap-root text-secondary w-full absolute -z-30 top-1/2 left-1/2 -translate-1/2' /> */}
				</h1>
				<RoadmapPath className='roadmap'/>
			</section>
			<section className='min-h-screen px-2'>
				<h1 className='text-base-content'>{t('DownloadablesSection.title')}</h1>
				<DownloadLink label={t('DownloadablesSection.links.cv.label')} fileName={t('DownloadablesSection.links.cv.fileName')}/>
			</section>
		</main>
	);
}
