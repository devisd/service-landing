'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { WhatsAppIcon, TelegramIcon, PhoneIcon, LocationIcon, ClockIcon } from '@/components/icons';
import styles from './Contact.module.scss';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        problem: '',
        consent: false,
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.consent) return;

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    problem: formData.problem,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Ошибка отправки');
            }

            setStatus('success');
            setFormData({ name: '', phone: '', problem: '', consent: false });
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Произошла ошибка');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        });

        // Reset status when user starts typing again
        if (status === 'error' || status === 'success') {
            setStatus('idle');
        }
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left Column - Contact Info */}
                    <div className={styles.info}>
                        <h2 className={styles.title}>
                            Всегда на связи
                        </h2>
                        <p className={styles.subtitle}>
                            Выберите удобный способ связи. Мы отвечаем в течение 5 минут в рабочее время.
                        </p>

                        {/* Contact Buttons */}
                        <div className={styles.contactButtons}>
                            <a
                                href="https://wa.me/+79236532513"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactButton}
                            >
                                <WhatsAppIcon className={styles.whatsappIcon} size={24} />
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href="https://t.me/Rstudioplus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactButton}
                            >
                                <TelegramIcon className={styles.telegramIcon} size={24} />
                                <span>Telegram</span>
                            </a>
                            <a href="tel:+79236532513" className={styles.contactButton}>
                                <PhoneIcon className={styles.phoneIcon} size={24} />
                                <span>+7 (923) 653-25-13</span>
                            </a>
                        </div>

                        {/* Address */}
                        <div className={styles.addressSection}>
                            <div className={styles.addressLabel}>
                                Наш адрес
                            </div>
                            <div className={styles.addressList}>
                                <div className={styles.addressItem}>
                                    <LocationIcon size={20} />
                                    <div className={styles.addressText}>
                                        <p>г.Славгород, Микрорайон 3, дом 7</p>
                                    </div>
                                </div>
                                <div className={styles.addressItem}>
                                    <ClockIcon size={20} />
                                    <div className={styles.addressText}>
                                        <p>По будням с 09:00 до 18:00</p>
                                        <p>Суббота с 10:00 до 15:00, Воскресенье - выходной</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className={styles.formCard}>
                        <h3 className={styles.formTitle}>
                            Оставить заявку ( в разработке )
                        </h3>
                        <p className={styles.formSubtitle}>
                            Ремонт техники или сборка ПК на заказ
                        </p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>
                                    Ваше имя
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Олег Иванов"
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>
                                    Телефон
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+7 (___) ___-__-__"
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="problem" className={styles.label}>
                                    Опишите задачу
                                </label>
                                <textarea
                                    id="problem"
                                    name="problem"
                                    value={formData.problem}
                                    onChange={handleChange}
                                    placeholder="например: 'Разбил экран iPhone 13 Pro' или 'Нужна сборка игрового ПК' ..."
                                    rows={4}
                                    className={styles.textarea}
                                />
                            </div>

                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    className={styles.checkbox}
                                    required
                                />
                                <span className={styles.checkboxText}>
                                    Я даю согласие на{' '}
                                    <Link href="/privacy">обработку персональных данных</Link>
                                    {' '}и принимаю условия{' '}
                                    <Link href="/terms">договора оферты</Link>
                                </span>
                            </label>

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={!formData.consent || status === 'loading'}
                            >
                                {status === 'loading' ? 'Отправка...' : 'Отправить'}
                            </button>

                            {status === 'success' && (
                                <p className={styles.successMessage}>
                                    Заявка отправлена! Мы свяжемся с вами в ближайшее время.
                                </p>
                            )}

                            {status === 'error' && (
                                <p className={styles.errorMessage}>
                                    {errorMessage}
                                </p>
                            )}

                            {status === 'idle' && (
                                <p className={styles.formNote}>
                                    С вами свяжутся в течение 15 минут
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
