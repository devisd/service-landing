'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../buttons/Button';
import { ThemeToggle } from '../ThemeToggle';
import { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md dark:bg-dark-surface dark:text-dark-text transition-colors duration-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="font-bold text-xl text-primary-600 dark:text-primary-400">
                    Сервисный центр
                </Link>

                <div className="flex items-center space-x-4">
                    <ThemeToggle />

                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                <nav className="hidden md:flex space-x-8">
                    <Link href="#services" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                        Услуги
                    </Link>
                    <Link href="#about" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                        О нас
                    </Link>
                    <Link href="#reviews" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                        Отзывы
                    </Link>
                    <Link href="#contacts" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                        Контакты
                    </Link>
                </nav>

                <div className="hidden md:block">
                    <a href="tel:+7XXXXXXXXXX" className="text-gray-800 font-medium">
                        +7 (XXX) XXX-XX-XX
                    </a>
                </div>
                <Button variant="primary">Заказать звонок</Button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden py-4 px-4 bg-gray-50 dark:bg-dark-surface border-t dark:border-dark-border">
                    <nav className="flex flex-col space-y-3">
                        <Link href="#services" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                            Услуги
                        </Link>
                        <Link href="#about" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                            О нас
                        </Link>
                        <Link href="#reviews" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                            Отзывы
                        </Link>
                        <Link href="#contacts" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                            Контакты
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header; 