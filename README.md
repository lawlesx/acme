## basic overview

A SaaS platform to take notes. Capture and organize ideas effortlessly with AI-powered assistance and secure protection. Fast, ergonomic, and reliable. It is not only a place to take notes but plan your next idea and collaborate with others.

To Run:

```bash
yarn
yarn dev
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Framework and packages

- [Next.js](https://nextjs.org/) - The [React](https://react.dev/) Framework for the Web

- [Tailwind](https://tailwindcss.com/) - For CSS Styling
- [Framer-Motion](https://www.framer.com/motion/) - For Animations
- [Lucide](https://lucide.dev/) - Provided Icons
- [Prettier](https://prettier.io/) - Code Formatting
- [Magic-UI](https://magicui.design/) - Animated Components
  - [clsx](https://github.com/lukeed/clsx) - For constructing className strings conditionally
  - [Tailwind-merge](https://github.com/dcastil/tailwind-merge) - Efficiently merge Tailwind CSS classes in JS without style conflicts
  - [Tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) - Tailwind CSS plugin for creating beautiful animations
  - [Radix-UI](https://www.radix-ui.com/) - Used Internally by Magic UI (Dependency)

## Page Performance

The Performance is tested on [PageSpeed-insights](https://pagespeed.web.dev/) to achieve the following result.

## Page Optimization

The page performs well on desktops, but for mobile devices, some images should be replaced with smaller versions. Currently, desktop images are being resized for mobile use.
