import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Providers from '@/providers/Providers';

import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata(params: Promise<{locale: string}>): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}

const outfit = Outfit({
	subsets: ['latin'],
	fallback: ['system-ui', 'arial'],
});


type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
	const { locale } = await params;
	
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		// Add header and footer and HTML for SEO
		<html
			lang={locale}
			data-scroll-behavior="smooth"
			className='scroll-smooth'
			>
			<body className={`${outfit.className} antialiased`}>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
