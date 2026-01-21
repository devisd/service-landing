import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon } from '@/components/icons';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            {/* Background Image */}
            <div className={styles.background}>
                <Image
                    src="/assets/hero_img.webp"
                    alt="Hero background"
                    fill
                    priority
                    className={styles.backgroundImage}
                />
                <div className={styles.backgroundOverlay} />
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Технологии. Точность.
                        <br />
                        Качество.
                    </h1>
                    <p className={styles.subtitle}>
                        Сервис по ремонту цифровой техники.
                        <br />
                        Мы возвращаем устройствам первозданное состояние.
                    </p>

                    <div className={styles.actions}>
                        <Link href="#contact" className={styles.primaryButton}>
                            Получить консультацию
                        </Link>
                        <Link href="#services" className={styles.secondaryButton}>
                            Смотреть услуги
                            <ChevronRightIcon size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.bottomFade} />
        </section>
    );
};

export default Hero;
