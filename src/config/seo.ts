import type { Metadata, Viewport } from 'next';
import { siteConfig } from './site';
import { services } from './services';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name} — Ремонт компьютеров и техники в Славгороде`,
        template: `%s | ${siteConfig.name}`,
    },
    description: `Профессиональный ремонт компьютеров, ноутбуков, телефонов, планшетов, мониторов, телевизоров и оргтехники в Славгороде. Гарантия до 24 месяцев, бесплатная диагностика. ${siteConfig.legal.name}.`,
    keywords: [
        'ремонт компьютеров Славгород',
        'ремонт ноутбуков Славгород',
        'ремонт телефонов Славгород',
        'ремонт планшетов',
        'ремонт мониторов',
        'ремонт телевизоров',
        'заправка картриджей Славгород',
        'ремонт оргтехники',
        'ремонт геймпадов',
        'сервисный центр Алтайский край',
        siteConfig.name,
    ],
    authors: [{ name: siteConfig.legal.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    openGraph: {
        type: 'website',
        locale: 'ru_RU',
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: `${siteConfig.name} — Ремонт компьютеров и техники`,
        description: 'Профессиональный ремонт компьютеров, ноутбуков, телефонов, планшетов, мониторов, ТВ и оргтехники в Славгороде. Гарантия до 24 месяцев.',
        images: [
            {
                url: `${siteConfig.url}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} — Ремонт техники`,
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.name} — Ремонт компьютеров и техники`,
        description: 'Профессиональный ремонт компьютеров, ноутбуков, телефонов, планшетов и оргтехники в Славгороде.',
        images: [`${siteConfig.url}/og-image.jpg`],
    },

    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },

    manifest: '/site.webmanifest',

    alternates: {
        canonical: siteConfig.url,
    },

    category: 'technology',
};

export const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.jpg`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: siteConfig.workingHours.weekdays.open,
            closes: siteConfig.workingHours.weekdays.close,
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: siteConfig.workingHours.saturday.open,
            closes: siteConfig.workingHours.saturday.close,
        },
    ],
    sameAs: Object.values(siteConfig.socials),
    description: `Профессиональный ремонт компьютеров, ноутбуков, телефонов, планшетов, мониторов, телевизоров и оргтехники в Славгороде. Гарантия до 24 месяцев.`,
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Услуги по ремонту',
        itemListElement: services.map(service => ({
            '@type': 'Offer',
            itemOffered: {
                '@type': 'Service',
                name: service.title,
                description: service.shortDescription,
            },
        })),
    },
};
