import { ThemeProvider } from '@/components/common/ThemeProvider';
import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
    title: 'Сервисный центр - ремонт компьютеров, смартфонов, телевизоров и принтеров',
    description: 'Профессиональный ремонт техники с гарантией: компьютеры, смартфоны, телевизоры и принтеры. Быстрый и качественный ремонт по доступным ценам.',
    keywords: 'ремонт компьютеров, ремонт ноутбуков, ремонт телефонов, ремонт телевизоров, ремонт принтеров, сервисный центр',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body className={`${inter.className} bg-white text-gray-900 dark:bg-dark-bg dark:text-dark-text transition-colors duration-200`}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
} 