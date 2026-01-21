import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Layout from '@/components/common/layout/Layout';
import { ArrowLeftIcon, CheckIcon } from '@/components/icons';
import { services, getServiceById, getAllServiceIds } from '@/config/services';
import { siteConfig } from '@/config/site';
import styles from './ServicePage.module.scss';
import type { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllServiceIds().map((id) => ({
        slug: id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceById(slug);
    
    if (!service) {
        return {
            title: 'Услуга не найдена',
        };
    }

    return {
        title: service.title,
        description: service.fullDescription,
        openGraph: {
            title: `${service.title} | ${siteConfig.name}`,
            description: service.shortDescription,
            images: [service.image],
        },
    };
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = getServiceById(slug);

    if (!service) {
        notFound();
    }

    // Get other services for "See also" section
    const otherServices = services.filter(s => s.id !== service.id).slice(0, 3);

    return (
        <Layout>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div 
                    className={styles.heroImage}
                    style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <div className={styles.container}>
                        <Link href="/#services" className={styles.backButton}>
                            <ArrowLeftIcon size={20} />
                            Все услуги
                        </Link>
                        <h1 className={styles.heroTitle}>{service.title}</h1>
                        <p className={styles.heroDescription}>{service.shortDescription}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Left Column - Description & Features */}
                        <div className={styles.mainContent}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>Описание услуги</h2>
                                <p className={styles.description}>{service.fullDescription}</p>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>Что мы делаем</h2>
                                <ul className={styles.featuresList}>
                                    {service.features.map((feature, index) => (
                                        <li key={index} className={styles.featureItem}>
                                            <CheckIcon className={styles.checkIcon} size={20} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Right Column - Price List */}
                        <div className={styles.sidebar}>
                            <div className={styles.priceCard}>
                                <h3 className={styles.priceTitle}>Прайс-лист</h3>
                                <div className={styles.priceList}>
                                    {service.priceList.map((item, index) => (
                                        <div key={index} className={styles.priceItem}>
                                            <div className={styles.priceInfo}>
                                                <span className={styles.priceName}>{item.name}</span>
                                                <span className={styles.priceDuration}>{item.duration}</span>
                                            </div>
                                            <span className={styles.priceValue}>{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className={styles.priceNote}>
                                    * Точная стоимость определяется после диагностики
                                </p>
                                <Link href="/#contact" className={styles.ctaButton}>
                                    Оставить заявку
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Other Services */}
                    <section className={styles.otherServices}>
                        <h2 className={styles.sectionTitle}>Другие услуги</h2>
                        <div className={styles.otherGrid}>
                            {otherServices.map((otherService) => (
                                <Link 
                                    key={otherService.id}
                                    href={`/services/${otherService.id}`}
                                    className={styles.otherCard}
                                >
                                    <div 
                                        className={styles.otherCardImage}
                                        style={{ backgroundImage: `url('${otherService.image}')` }}
                                    />
                                    <div className={styles.otherCardOverlay} />
                                    <div className={styles.otherCardContent}>
                                        <h3 className={styles.otherCardTitle}>{otherService.title}</h3>
                                        <p className={styles.otherCardDescription}>{otherService.shortDescription}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
