import { Inter } from 'next/font/google';
import { metadata as seoMetadata, viewport as seoViewport, jsonLd } from '@/config';
import './globals.scss';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const viewport = seoViewport;
export const metadata = seoMetadata;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
