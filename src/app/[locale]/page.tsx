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
			<section className='flex flex-col items-center overflow-clip min-h-[calc(100vh_-_64px)] relative'>
				<div className='flex flex-col items-center'>
					<p className='text-base-content/70'>{t('HeroSection.greeting')}</p>
					<h1 className='text-base-content'>{t('HeroSection.name')}</h1>
					<h2 className='text-base-content'>{t('HeroSection.job')}</h2>
				</div>
				<Hero className='h-full w-auto absolute -z-30' />
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
				<h1 className='text-base-content'>{t('AboutMeSection.title')}</h1>
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
