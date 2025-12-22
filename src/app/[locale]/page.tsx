import SkillsCarousel from '@/components/ui/SkillsCarousel';

import { getMessages, getTranslations } from 'next-intl/server';
import Section from '@/components/ui/Section';
import Link from '@/components/ui/Link';
import DownloadCardsGrid from '@/components/ui/download-cards/DownloadCardsGrid';
import { getGithubRepos } from '@/lib/utils/github';
import CardContainer from '@/components/ui/CardContainer';

export default async function Home() {
	const t = await getTranslations("HomePage");
	const messages = await getMessages();
	const { myReposFlattened: myGitHubRepos, collaboratedReposFlattened: collaboratedGitHubRepos } = await getGithubRepos();
	const downloadItems = messages.HomePage.DownloadsSection.items;

	return (
		<main className='min-h-screen'>
			{/* Hero Section */}
			<Section variant="hero" id="home">
				<div className='flex flex-col items-center'>
					<p className='text-xl text-secondary font-medium mb-2 tablet:text-3xl desktop:text-4xl'>{t('HeroSection.greeting')}</p>
					<h1 className='text-5xl font-bold mb-6 bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight tablet:text-7xl desktop:text-8xl'>{t('HeroSection.name')}</h1>
					<h2 className='text-xl text-secondary font-semibold mb-6'>{t('HeroSection.job')}</h2>
					<p className='text-lg text-base-content/70 text-center max-w-2xl mx-auto mb-8 leading-relaxed'>{t('HeroSection.description')}</p>
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

				<div className="flex flex-col gap-12">
					<CardContainer repos={myGitHubRepos} title={t('FeaturedProjectsSection.cardContainer.title')} t={t} />
					<CardContainer repos={collaboratedGitHubRepos} title={t('FeaturedProjectsSection.cardContainer.collaboratedTitle')} t={t} />
				</div>
			</Section>
			<Section variant="content" id="downloads" title={t('DownloadsSection.title')}>
				<DownloadCardsGrid items={downloadItems} />
			</Section>
		</main>
	);
}
