'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DevicesIcon, PhoneIcon, MenuIcon, CloseIcon } from '@/components/icons';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#quality', label: 'Технологии' },
        { href: '#services', label: 'Услуги' },
        { href: '#process', label: 'Процесс' },
        { href: '#contact', label: 'Контакты' },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <DevicesIcon size={20} />
                        </div>
                        <span className={styles.logoText}>Супер Сервис</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={styles.nav}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.navLink}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions: Phone + Mobile Menu */}
                    <div className={styles.actions}>
                        <a href="tel:+79236532513" className={styles.phoneButton} aria-label="Позвонить">
                            <PhoneIcon size={20} />
                        </a>

                        <button
                            className={styles.mobileMenuButton}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Открыть меню"
                        >
                            {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <nav className={styles.mobileNav}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a href="tel:+79236532513" className={styles.mobilePhone}>
                            <PhoneIcon size={20} />
                            +7 (923) 653-25-13
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
