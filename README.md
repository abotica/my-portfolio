# Introduction
## Why another portfolio platform?
For most programmers/coders GitHub is the go-to platform for showcasing their projects. But GitHub is not a portfolio platform. It just doesn't give the coder enough freedom to showcase their work the way they want.

Don't get me wrong, GitHub is an industry standard and my go-to platform for hosting code. But I wanted a portfolio platform that is more flexible and customizable, something that can be tailored to my needs. So, I decidede to build my own portfolio platform by utilizing GitHub's API.

The idea is to fetch repositories from GitHub and display them in a more visually appealing way, maybe even try to run some projects live on the platform itself. This way, I can have a portfolio that is not only a collection of links to GitHub repositories but also a showcase of my work in a more interactive and engaging way.

## How it works
The platform fetches repositories from GitHub using GitHub's API. It then displays the repositories in a visually appealing way, with options to filter and sort the projects based on various criteria such as language, stars, forks, etc.

The website is hosted on Hostinger, where other projects of mine are also hosted. When someone wants to view some of my projects, they can click on "run" button to run the project live on the platform itself. This is achieved by using iframes to embed the project within the portfolio platform.

# Features
- Fetches repositories from GitHub using GitHub's API
- Displays repositories in a visually appealing way
- Options to filter and sort projects based on various criteria (language, stars, forks, etc.)
- Ability to run projects live on the platform using iframes

# Technologies Used
- Next.js
- TypeScript
- Tailwind CSS
- GitHub API
- Hostinger (for hosting the website)

# Project Flow
1. Figma Design (Low-fidelity wireframes + High-fidelity mockups + Responsive design)
2. Next.js Setup (with TypeScript and Tailwind CSS)
3. Setting up Typescript and ESLint configuration
4. GitHub API Integration
5. UI Development
6. Hosting on Hostinger

# To-Do
- [x] Dynamic theme switching using TailwindCSS
- [ ] Dynamic language switching (maybe use the i18n package or text files for translations)
- [x] Add an SVG package webpack loader to optimize SVGs
- [ ] Add more animations using Framer Motion
- [ ] Fix non-prefixed locale redirect bug
- [ ] Fix active language dropdown item bug
- [ ] Add language names in locale language (e.g., English for en, Deutsch for de)