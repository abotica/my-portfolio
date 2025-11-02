'use client';
import Link from 'next/link';
import ThemeDropdownButton from '@/components/ui/theme-dropdown-button/ThemeDropdownButton';
import { useScrollShadow } from '@/lib/hooks/useScrollShadow';
import LanguageDropdownButton from '../ui/language-dropdown-button/LanguageDropdownButton';

function Header() {
    const isScrolled = useScrollShadow();

	return (
		<header className={`bg-base-100/90 flex items-center text-base-content sticky top-0 z-30 backdrop-blur-sm transition-shadow duration-100 ${isScrolled ? 'shadow-xs' : ''}`}
            >
            <Link href="" aria-label='Portfolio icon'><h1 className='font-extrabold text-3xl px-2'>Portfolio</h1></Link>
			<nav className='navbar justify-end'>
				<ThemeDropdownButton />
				<LanguageDropdownButton />
			</nav>
		</header>
	);
}

export default Header;
