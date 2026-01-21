import React from 'react';
import { DocumentIcon, SearchIcon, ChatIcon, CogIcon, CheckCircleIcon } from '@/components/icons';
import styles from './WorkProcess.module.scss';

const steps = [
    {
        number: 1,
        title: 'Заявка',
        icon: <DocumentIcon size={24} />,
    },
    {
        number: 2,
        title: 'Диагностика',
        icon: <SearchIcon size={24} />,
    },
    {
        number: 3,
        title: 'Согласование',
        icon: <ChatIcon size={24} />,
    },
    {
        number: 4,
        title: 'Ремонт',
        icon: <CogIcon size={24} />,
    },
    {
        number: 5,
        title: 'Выдача',
        icon: <CheckCircleIcon size={24} />,
    },
];

const WorkProcess: React.FC = () => {
    return (
        <section id="process" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Процесс ремонта
                </h2>

                <div className={styles.wrapper}>
                    <div className={styles.connectionLine} />

                    <div className={styles.grid}>
                        {steps.map((step, index) => (
                            <div key={step.number} className={styles.step}>
                                <div className={styles.stepNumber}>
                                    <span>{step.number}</span>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className={styles.mobileConnector} />
                                )}

                                <div className={styles.stepIcon}>
                                    {step.icon}
                                </div>

                                <h3 className={styles.stepTitle}>
                                    {step.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
