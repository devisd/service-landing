'use client'

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        deviceType: '',
        problem: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Here you would typically send the form data to your API
        // For demonstration, we'll just simulate a delay
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: '',
                phone: '',
                deviceType: '',
                problem: ''
            });
        }, 1500);
    };

    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-10">
                    Свяжитесь с нами
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold mb-2">Контактная информация</h4>
                            <p className="text-gray-700 mb-4">
                                Наш сервисный центр находится по адресу: [Адрес вашего сервисного центра].<br />
                                Мы работаем ежедневно с 9:00 до 21:00 без выходных.
                            </p>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>Телефон: [+7 (ХХХ) ХХХ-ХХ-ХХ]</span>
                            </div>
                            <div className="flex items-center mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Email: [info@вашсервис.рф]</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                                <span>WhatsApp/Telegram: [+7 (ХХХ) ХХХ-ХХ-ХХ]</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xl font-semibold mb-2">Социальные сети</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-primary hover:text-primary-dark">VK</a>
                                <a href="#" className="text-primary hover:text-primary-dark">Instagram</a>
                                <a href="#" className="text-primary hover:text-primary-dark">Facebook</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h4 className="text-xl font-semibold mb-4">Оставьте заявку</h4>
                        <p className="text-gray-700 mb-4">
                            Оставьте заявку на ремонт прямо сейчас, и наши специалисты свяжутся с вами в течение 15 минут!
                        </p>

                        {isSubmitted ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                                Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Имя</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Телефон</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="deviceType" className="block text-gray-700 font-medium mb-1">Тип устройства</label>
                                    <select
                                        id="deviceType"
                                        name="deviceType"
                                        value={formData.deviceType}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    >
                                        <option value="">Выберите тип устройства</option>
                                        <option value="computer">Компьютер/Ноутбук</option>
                                        <option value="mobile">Смартфон/Планшет</option>
                                        <option value="tv">Телевизор</option>
                                        <option value="printer">Принтер/МФУ</option>
                                        <option value="other">Другое</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="problem" className="block text-gray-700 font-medium mb-1">Описание проблемы</label>
                                    <textarea
                                        id="problem"
                                        name="problem"
                                        value={formData.problem}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                                >
                                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="mt-12">
                    <h4 className="text-xl font-semibold mb-4">Как нас найти</h4>
                    <div className="h-[400px] bg-gray-200 rounded-lg">
                        {/* Here you would typically embed a map like Google Maps */}
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            Карта с местоположением сервисного центра
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm; 