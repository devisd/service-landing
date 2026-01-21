import React from 'react';
import { CpuIcon, SearchPlusIcon, ShieldCheckIcon, ClipboardCheckIcon } from '@/components/icons';
import styles from './QualityStandards.module.scss';

const standards = [
    {
        icon: <CpuIcon size={24} />,
        title: 'Оригинальные запчасти',
        description: 'Используем только сертифицированные комплектующие от официальных поставщиков.',
    },
    {
        icon: <SearchPlusIcon size={24} />,
        title: 'Диагностика с микроскопом',
        description: 'Выполняем микроскопную диагностику для выявления повреждений на уровне микросхем.',
    },
    {
        icon: <ShieldCheckIcon size={24} />,
        title: 'Гарантия 24 месяца',
        description: 'Мы уверены в своей работе и даём длительную гарантию на все услуги.',
    },
    {
        icon: <ClipboardCheckIcon size={24} />,
        title: 'Прозрачный статус',
        description: 'Отслеживайте каждый этап ремонта в личном кабинете.',
    },
];

const QualityStandards: React.FC = () => {
    return (
        <section id="quality" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Наш стандарт качества
                </h2>

                <div className={styles.grid}>
                    {standards.map((standard, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {standard.icon}
                            </div>
                            <h3 className={styles.cardTitle}>
                                {standard.title}
                            </h3>
                            <p className={styles.cardDescription}>
                                {standard.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QualityStandards;
