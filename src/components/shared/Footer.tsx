import Link from 'next/link';

import { GitHub, Instagram, LinkedIn } from '../ui/svgs';
import { socialsStyle } from '@/app/[locale]/config';

function Footer() {
	return (
		<footer className='py-9 px-6'>
            <Link href="" aria-label='Portfolio icon'><h1 className='font-extrabold text-primary text-xl'>Dev</h1></Link>
			<ul className='flex justify-end gap-2'>
				<li>
					<Link href={'https://github.com/abotica'}>
						<GitHub className={socialsStyle} />
					</Link>
				</li>
				<li>
					<Link href={'https://www.linkedin.com/in/andrija-botica-0b2a40226'}>
						<LinkedIn className={socialsStyle} />
					</Link>
				</li>
				<li>
					<Link href={'https://www.instagram.com/bote1112'}>
						<Instagram className={socialsStyle} />
					</Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
