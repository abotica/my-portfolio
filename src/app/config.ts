export const socialsStyle = 'text-primary bg-primary-content size-6 border-radius-theme' as const;
export const themes = ['light', 'dark', 'bumblebee', 'business', 'forest', 'dracula'] as const;

export type Theme = (typeof themes)[number];
export type ColorScheme = 'dark' | 'light' | 'no-preference';
