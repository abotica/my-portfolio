import { ColorScheme } from "@/app/[locale]/config";

export const getPreferredColorScheme = ():ColorScheme => {

    // Check if the window and matchMedia objects are available (for server-side rendering safety)
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
        return 'light'; // If not in browser environment default to light
    }

    // Check for dark mode preference
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(isDark) {
        return 'dark';
    }

    const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if(isLight) {
        return 'light';
    }

    return 'no-preference';
}