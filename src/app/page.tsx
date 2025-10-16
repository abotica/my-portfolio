import { Circle, Hero } from '@/components/ui/svgs';
import Image from 'next/image';
import avatar from '@/../public/avatar.png';
import { aboutMeContent, heroSectionContent, roadmapContent } from './config';

export default function Home() {
const {greetingParagraph, name, occupation} = heroSectionContent;

	return (
		<main className='min-h-screen'>
			{/* Calculated height dynamically with calc */}
			<section className='flex flex-col items-center overflow-clip min-h-[calc(100vh_-_64px)] relative'>
				<div className='flex flex-col items-center'>
					<p className='text-base-content/70'>{greetingParagraph}</p>
					<h1 className='text-primary'>{name}</h1>
					<h2 className='text-primary'>{occupation}</h2>
				</div>
				<Hero className='h-full w-auto absolute -z-30' />
				<Image
					src={avatar}
					alt='avatar'
					className='w-full h-auto absolute bottom-0'
					sizes=''
					// Can I use already defined tailwind breakpoints??
					priority
				/>
			</section>
			<section className='min-h-screen px-2'>
				<h2 className='text-primary'>{aboutMeContent.title}</h2>
				<p className='text-base-content/70 font-light text-justify text-base'>{aboutMeContent.description}</p>

			</section>
			<section className='min-h-screen px-2'>
				<h1 className='text-primary-content text-center relative'>{roadmapContent.title}<Circle className="text-primary w-full absolute -z-30 top-1/2 left-1/2 -translate-1/2"/></h1>
			</section>
		</main>
	);
}
