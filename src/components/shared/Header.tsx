'use client';
import Link from 'next/link';
import ThemeDropdownButton from '@/components/ui/theme-dropdown-button/ThemeDropdownButton';
import { useScrollShadow } from '@/lib/hooks/useScrollShadow';
import LanguageDropdownButton from '../ui/language-dropdown-button/LanguageDropdownButton';

function Header() {
    const isScrolled = useScrollShadow();

	return (
		<header className={`bg-base-100/90 flex items-center text-base-content shadow-base-content/10 sticky top-0 z-30 backdrop-blur-sm transition-shadow duration-100 px-4 ${isScrolled ? 'shadow-xs' : ''}`}
            >
            <Link href="" aria-label='Portfolio icon'><h1 className={`text-2xl font-bold text-base-content/70`}>Dev</h1></Link>
			<nav className='navbar justify-end p-0'>
				<ThemeDropdownButton />
				<LanguageDropdownButton />
			</nav>
		</header>
	);
}

export default Header;
