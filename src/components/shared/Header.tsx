'use client';
import Link from 'next/link';
import ThemeDropdownButton from '@/components/ui/theme-dropdown-button/ThemeDropdownButton';
import { useScrollShadow } from '@/lib/hooks/useScrollShadow';
import LanguageDropdownButton from '../ui/language-dropdown-button/LanguageDropdownButton';
import Image from 'next/image';

function Header() {
    const isScrolled = useScrollShadow();

	return (
		<header className={`bg-base-100/90 flex items-center text-base-content shadow-base-content/10 sticky top-0 z-30 backdrop-blur-sm transition-shadow duration-100 px-4 ${isScrolled ? 'shadow-xs' : ''}`}
            >
            <Link href="#home" aria-label='Portfolio icon'><Image src="/avatars/andrija.jpg" alt="Andrija Botica" width={40} height={40} className="rounded-full" /></Link>
			<nav className='navbar justify-end p-0'>
				<ThemeDropdownButton />
				<LanguageDropdownButton />
			</nav>
		</header>
	);
}

export default Header;
