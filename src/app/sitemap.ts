import { MetadataRoute } from 'next';
import { siteConfig, getAllServiceIds } from '@/config';

export default function sitemap(): MetadataRoute.Sitemap {
    const servicePages = getAllServiceIds().map((id) => ({
        url: `${siteConfig.url}/services/${id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...servicePages,
        {
            url: `${siteConfig.url}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${siteConfig.url}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];
}
