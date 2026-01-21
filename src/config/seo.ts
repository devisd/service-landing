import type { Metadata, Viewport } from 'next';
import { siteConfig } from './site';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name} — Ремонт компьютеров и техники Apple в Славгороде`,
        template: `%s | ${siteConfig.name}`,
    },
    description: `Профессиональный ремонт MacBook, iMac, iPhone, iPad в Славгороде. Гарантия до 24 месяцев, бесплатная диагностика, качественные запчасти. ${siteConfig.legal.name}.`,
    keywords: [
        'ремонт MacBook Славгород',
        'ремонт iMac',
        'ремонт iPhone Славгород',
        'ремонт iPad',
        'сервис Apple Алтайский край',
        'ремонт компьютеров Славгород',
        'ремонт ноутбуков',
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
        title: `${siteConfig.name} — Ремонт компьютеров и техники Apple`,
        description: 'Профессиональный ремонт MacBook, iMac, iPhone, iPad в Славгороде. Гарантия до 24 месяцев.',
        images: [
            {
                url: `${siteConfig.url}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} — Ремонт техники Apple`,
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.name} — Ремонт техники Apple`,
        description: 'Профессиональный ремонт MacBook, iMac, iPhone, iPad в Славгороде.',
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
    description: `Профессиональный ремонт компьютеров и техники Apple в Славгороде. MacBook, iMac, iPhone, iPad. Гарантия до 24 месяцев.`,
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Услуги по ремонту',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ремонт MacBook' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ремонт iPhone' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ремонт iPad' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ремонт iMac' } },
        ],
    },
};
