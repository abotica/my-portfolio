import Link from '../ui/Link';
// import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { GitHub, Instagram, LinkedIn, Mail } from '../ui/svgs';

async function Footer() {
	const t = await getTranslations('Footer');
	return (
		<footer className='border-t border-base-content/10 py-12 tablet:py-16 px-4 tablet:px-6 desktop:px-8'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid tablet:grid-cols-3 gap-8 tablet:gap-12 mb-8 tablet:mb-12'>
					{/* Brand Section */}
					<div>
						<h3 className='text-xl font-bold mb-4 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>
							{t('brand.name')}
						</h3>
						<p className='text-base-content/70 text-sm leading-relaxed'>
							{t('brand.description')}
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='font-semibold mb-4 text-base-content'>
							{t('links.title')}
						</h4>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='#about-me'
									variant='ternary'>
									{t('links.about')}
								</Link>
							</li>
							<li>
								<Link
									href='#skills'
									variant='ternary'>
									{t('links.skills')}
								</Link>
							</li>
							<li>
								<Link
									href='#projects'
									variant='ternary'>
									{t('links.projects')}
								</Link>
							</li>
							<li>
								<Link
									href='#downloads'
									variant='ternary'>
									{t('links.downloads')}
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Links */}
					<div id='contact-me'>
						<h4 className='font-semibold mb-4 text-base-content'>
							{t('contact.title')}
						</h4>
						<div className='flex gap-3'>
							<Link
								href='https://github.com/abotica'
								target='_blank'
								variant='quaternary'
								aria-label='Visit my GitHub profile'
								title='Visit my GitHub profile'>
								<GitHub className='w-5 h-5' />
							</Link>
							<Link
								href='https://www.linkedin.com/in/andrija-botica-0b2a40226'
								target='_blank'
								variant='quaternary'
								aria-label='Connect on LinkedIn'
								title='Connect on LinkedIn'>
								<LinkedIn className='w-5 h-5' />
							</Link>
							<Link
								href='https://www.instagram.com/bote1112'
								target='_blank'
								variant='quaternary'
								aria-label='Follow on Instagram'
								title='Follow on Instagram'>
								<Instagram className='w-5 h-5' />
							</Link>
							<Link
								href='mailto:andrija.botica1613@icloud.com'
								aria-label='Send me an email'
								variant='quaternary'
								title='Send me an email'>
								<Mail className='w-5 h-5' />
							</Link>
						</div>
						{/* <Link href='https://www.ko-fi.com/abotica' target='_blank' className='mt-6 inline-flex items-center gap-2'>
							<Image
								className='w-10 h-auto'
								src='/images/kofi.png'
								alt='Buy me a coffee'
								width={40}
								height={32}
							/>
							<p className='font-medium'>Buy me a coffee</p>
						</Link> */}
					</div>
				</div>

				{/* Bottom Section */}
				<div className='border-t border-base-content/10 pt-6 tablet:pt-8 flex flex-col tablet:flex-row justify-between items-center gap-4 text-base-content/70'>
					<p className='text-sm'>
						{t('copyright', { year: new Date().getFullYear() })}
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
