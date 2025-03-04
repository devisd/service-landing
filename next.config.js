/** @type {import('next').NextConfig} */

// Theme switching is typically implemented within the application code using:
// 1. Tailwind CSS with the 'dark' class strategy
// 2. Context API for theme state management
// 3. localStorage or cookies for persisting theme preferences
// See https://tailwindcss.com/docs/dark-mode for Tailwind dark mode documentation

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            // Add more specific patterns as needed for your domains
            // For example:
            // {
            //   protocol: 'https',
            //   hostname: 'example.com',
            // },
            // {
            //   protocol: 'https',
            //   hostname: 'another-domain.com',
            // },
        ],
    },
    i18n: {
        locales: ['ru'],
        defaultLocale: 'ru',
    },
};

module.exports = nextConfig; 