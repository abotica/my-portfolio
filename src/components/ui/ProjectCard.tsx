import { GitHub, ExternalLink } from './svgs';
import { sentenceCase } from 'text-case';
import Image from 'next/image';
import { svgComponents } from './svgs';
import React from 'react';

import { Translator } from '@/app/[locale]/config';

type ProjectCardProps = {
	title: string;
	description: string | null;
	technologies: string[];
	liveUrl: string | null;
	githubUrl: string;
	t: Translator;
	language: string | null;
};

async function ProjectCard({ ...props }: ProjectCardProps) {

	// @ts-ignore
	const IconComponent = svgComponents[props.language];

	return (
		<div className='group bg-base-200 border border-base-content/10 rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg'>
			{/* Project Image */}
			<div className='relative overflow-hidden h-40 tablet:h-48 bg-base-300'>
				{IconComponent ? (
					<div className='w-full h-full flex items-center justify-center'>
						{React.createElement(IconComponent, {
							className: 'h-full py-6 tablet:w-32 tablet:h-32 object-contain group-hover:scale-110 transition-transform duration-300 desktop:py-6',
						})}
					</div>
				) : (
					<Image
						alt={sentenceCase(props.title + ' project thumbnail')}
						className='object-contain group-hover:scale-110 transition-transform duration-300'
						src={'/images/thumbnail-fallback.png'}
						fill
						sizes='(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) 45vw, (max-width: 1280px) 30vw'
					/>
				)}
			</div>

			{/* Project Content */}
			<div className='p-4 tablet:p-6 space-y-3 tablet:space-y-4 flex flex-col h-full'>
				<h3 className='text-lg tablet:text-xl font-semibold text-base-content'>
					{props.title}
				</h3>
				<p className='text-sm text-base-content/70 leading-relaxed text-ellipsis line-clamp-3 desktop:line-clamp-2 h-12'>
					{props.description ||
						props.t('FeaturedProjectsSection.card.descriptionNotFound')}
				</p>

				{/* Technology Tags */}
				<div className='flex h-13 flex-wrap gap-1.5 tablet:gap-2 tablet:h-14'>
					{props.technologies && props.technologies.length > 0 ? (
						props.technologies.map((tech, index) => (
							<span
								key={index}
								className='h-6 text-xs px-2 tablet:px-3 py-1 bg-primary/10 text-primary rounded-full font-medium'>
								{tech}
							</span>
						))
					) : (
						<p className='text-sm text-base-content/70 leading-relaxed text-ellipsis line-clamp-3 desktop:line-clamp-2'>
							{props.t('FeaturedProjectsSection.card.techologiesNotFound')}
						</p>
					)}
				</div>

				{/* Action Buttons */}
				<div className='flex flex-col tablet:flex-row gap-2 tablet:gap-3 pt-1 tablet:pt-2'>
					{props.liveUrl && (
						<a
							href={props.liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center gap-2 flex-1 px-3 py-2 bg-primary text-primary-content rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium'>
							<ExternalLink className='w-4 h-4' />
							{props.t('FeaturedProjectsSection.liveCta')}
						</a>
					)}
					{props.githubUrl && (
						<a
							href={props.githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center gap-2 flex-1 px-3 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium'>
							<GitHub className='w-4 h-4' />
							{props.t('FeaturedProjectsSection.githubCta')}
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
