import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const outfit = Outfit({
	subsets: ['latin'],
	fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
	title: 'Andrija Botica - Portfolio',
	description: 'Portfolio page of Andrija Botica',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// Add header and footer and HTML for SEO
		<html lang='en'>
			<body
				className={`${outfit.className} antialiased transition-all duration-300 ease-in-out`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
