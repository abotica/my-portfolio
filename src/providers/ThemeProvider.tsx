// Corrected file: src/providers/ThemeProvider.tsx or similar

'use client';

import ThemeContext from '@/contexts/ThemeContext';
import { useState, useEffect, ReactNode } from 'react';
import { getPreferredColorScheme } from '@/lib/utils/getPreferredColorScheme';
import { Theme } from '@/app/[locale]/config';

function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const preferredColorScheme = getPreferredColorScheme();
            if (preferredColorScheme !== 'no-preference') {
                setTheme(preferredColorScheme);
            }
        }
    }, []);

    useEffect(() => {
        if (theme) { // Added a check to ensure theme is not null/undefined
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;