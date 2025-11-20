'use client';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import switchLocale from '@/lib/utils/switchLocale';
import { routing } from '@/i18n/routing';

function LanguageDropdownList() {
	const router = useRouter();
	const locale = useLocale();
	const pathname = usePathname();

	return (
        <ul
            tabIndex={-1}
            className='dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-2xl shadow-base-content/10 mt-6'
        >
            {routing.locales.map((loc) => (
                <li key={loc} className={loc === locale ? 'active' : ''}>
                    <button
                        type='button'
                        className={`w-full text-left ${loc === locale ? "bg-base-content/10" : ""}`}
                        onClick={() => switchLocale(locale, loc, router, pathname)}
                    >
                        {loc.toUpperCase()}
                    </button>
                </li>
            ))}
        </ul>
	);
}

export default LanguageDropdownList;
