'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CookieIcon } from '@/components/icons';
import styles from './CookieConsent.module.scss';

const COOKIE_CONSENT_KEY = 'cookie-consent';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            // Delay showing the banner for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.cookieConsent}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <CookieIcon size={24} />
                    </div>
                    <div className={styles.text}>
                        <p>
                            Мы используем файлы cookie для улучшения работы сайта и анализа трафика. 
                            Продолжая пользоваться сайтом, вы соглашаетесь с{' '}
                            <Link href="/privacy" className={styles.link}>
                                политикой конфиденциальности
                            </Link>
                            .
                        </p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <button 
                        onClick={handleDecline} 
                        className={styles.declineButton}
                        aria-label="Отклонить cookie"
                    >
                        Отклонить
                    </button>
                    <button 
                        onClick={handleAccept} 
                        className={styles.acceptButton}
                        aria-label="Принять cookie"
                    >
                        Принять
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
