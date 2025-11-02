import ThemeProvider from './ThemeProvider';
import { NextIntlClientProvider } from 'next-intl';

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NextIntlClientProvider>
				<ThemeProvider>{children}</ThemeProvider>;
			</NextIntlClientProvider>
		</>
	);
}

export default Providers;
