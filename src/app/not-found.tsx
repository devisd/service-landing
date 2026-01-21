import React from 'react';
import Link from 'next/link';
import Layout from '@/components/common/layout/Layout';
import { ArrowLeftIcon } from '@/components/icons';
import styles from './not-found.module.scss';

export default function NotFound() {
    return (
        <Layout>
            <div className={styles.notFound}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <span className={styles.errorCode}>404</span>
                        <h1 className={styles.title}>Страница не найдена</h1>
                        <p className={styles.description}>
                            К сожалению, запрашиваемая страница не существует или была перемещена.
                        </p>
                        <Link href="/" className={styles.button}>
                            <ArrowLeftIcon size={20} />
                            Вернуться на главную
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
