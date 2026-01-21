import React from 'react';
import Link from 'next/link';
import { DevicesIcon } from '@/components/icons';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <DevicesIcon size={20} />
                        </div>
                        <span className={styles.logoText}>Супер Сервис</span>
                    </Link>

                    {/* Links & Info */}
                    <div className={styles.info}>
                        <div className={styles.links}>
                            <Link href="/privacy" className={styles.link}>
                                Политика конфиденциальности
                            </Link>
                            <span className={styles.separator}>•</span>
                            <Link href="/terms" className={styles.link}>
                                Договор оферты
                            </Link>
                        </div>
                        <div className={styles.details}>
                            <span>ИП Думлер Янис Рудольфович</span>
                            <span className={styles.separator}>•</span>
                            <span>ИНН: 225901203116</span>
                            <span className={styles.separator}>•</span>
                            <span>ОГРНИП: 322220200035901</span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className={styles.copyright}>
                        © {currentYear} DevisD.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
