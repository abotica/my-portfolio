export const socialsStyle = 'text-primary bg-primary-content size-6 border-radius-theme' as const;
export const themes = ['light', 'dark', 'bumblebee', 'business', 'forest', 'dracula'] as const;
export const heroSectionContent = {
    greetingParagraph: "Howdy, I'm",
    name: 'Andrija Botica',
    occupation: 'Software Engineer',
} as const;
export const aboutMeContent = {
    title: 'About Me',
    description: `I'm a software engineer with a passion for building web applications. I have experience with a variety of technologies, including JavaScript, TypeScript, React, Next.js, Node.js, and more. I'm always eager to learn new things and take on new challenges.`,
} as const;
export const roadmapContent = {
    title: 'Roadmap',
    items: [
        {
            year: 2021,
            goals: [
                'Launch personal portfolio website',
                'Contribute to open source projects',
                'Learn TypeScript and apply it in projects',
            ],
        },
        {
            year: 2024,
            goals: [
                'Build a full-stack application with Next.js',
                'Explore new technologies like GraphQL and Docker',
                'Improve design skills and learn Figma',
            ],
        },
    ],
} as const;

export type Theme = (typeof themes)[number];
export type ColorScheme = 'dark' | 'light' | 'no-preference';
