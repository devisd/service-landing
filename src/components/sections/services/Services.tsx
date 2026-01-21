import React from 'react';
import Link from 'next/link';
import { services } from '@/config';
import { ChevronRightIcon } from '@/components/icons';
import styles from './Services.module.scss';

const Services: React.FC = () => {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Услуги ремонта
                </h2>

                <div className={styles.grid}>
                    {/* Компьютеры и ноутбуки - Large Card */}
                    <Link href={`/services/${services[0].id}`} className={`${styles.card} ${styles.cardLarge}`}>
                        <div
                            className={styles.cardImage}
                            style={{ backgroundImage: `url('${services[0].image}')` }}
                        />
                        <div className={styles.cardOverlay} />
                        <div className={`${styles.cardContent} ${styles.cardContentLarge}`}>
                            <h3 className={`${styles.cardTitle} ${styles.cardTitleLarge}`}>
                                {services[0].shortTitle}
                            </h3>
                            <p className={styles.cardDescription}>
                                {services[0].shortDescription}
                            </p>
                            <span className={styles.cardLink}>
                                Подробнее
                                <ChevronRightIcon size={16} />
                            </span>
                        </div>
                    </Link>

                    {/* Телефоны и планшеты */}
                    <Link href={`/services/${services[1].id}`} className={styles.card}>
                        <div
                            className={styles.cardImage}
                            style={{ backgroundImage: `url('${services[1].image}')` }}
                        />
                        <div className={styles.cardOverlay} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{services[1].shortTitle}</h3>
                            <p className={styles.cardDescription}>{services[1].shortDescription}</p>
                            <span className={styles.cardLink}>
                                Подробнее
                                <ChevronRightIcon size={16} />
                            </span>
                        </div>
                    </Link>

                    {/* Мониторы и телевизоры */}
                    <Link href={`/services/${services[2].id}`} className={styles.card}>
                        <div
                            className={styles.cardImage}
                            style={{ backgroundImage: `url('${services[2].image}')` }}
                        />
                        <div className={styles.cardOverlay} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{services[2].shortTitle}</h3>
                            <p className={styles.cardDescription}>{services[2].shortDescription}</p>
                            <span className={styles.cardLink}>
                                Подробнее
                                <ChevronRightIcon size={16} />
                            </span>
                        </div>
                    </Link>

                    {/* Оргтехника */}
                    <Link href={`/services/${services[3].id}`} className={styles.card}>
                        <div
                            className={styles.cardImage}
                            style={{ backgroundImage: `url('${services[3].image}')` }}
                        />
                        <div className={styles.cardOverlay} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{services[3].shortTitle}</h3>
                            <p className={styles.cardDescription}>{services[3].shortDescription}</p>
                            <span className={styles.cardLink}>
                                Подробнее
                                <ChevronRightIcon size={16} />
                            </span>
                        </div>
                    </Link>

                    {/* Аксессуары и периферия */}
                    <Link href={`/services/${services[4].id}`} className={styles.card}>
                        <div
                            className={styles.cardImage}
                            style={{ backgroundImage: `url('${services[4].image}')` }}
                        />
                        <div className={styles.cardOverlay} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{services[4].shortTitle}</h3>
                            <p className={styles.cardDescription}>{services[4].shortDescription}</p>
                            <span className={styles.cardLink}>
                                Подробнее
                                <ChevronRightIcon size={16} />
                            </span>
                        </div>
                    </Link>
                </div>

                {/* CTA Button */}
                <div className={styles.ctaWrapper}>
                    <Link href="#contact" className={styles.ctaButton}>
                        <svg className={styles.ctaIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        Сборка ПК на заказ
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
